-- Supabase schema for Compassion Ministry CBO admin/frontend

-- Posts table: each post has text content + image urls
create table if not exists public.posts (
  id uuid primary key default gen_random_uuid(),
  title text,
  body text not null,
  image_urls text[] default '{}',
  published boolean default true,
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

-- Auto-update updated_at
create or replace function public.handle_updated_at()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

drop trigger if exists posts_updated_at on public.posts;
create trigger posts_updated_at
before update on public.posts
for each row execute function public.handle_updated_at();

-- Users table with role (admin / user)
create table if not exists public.users (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  role text not null default 'user' check (role in ('admin', 'user')),
  created_at timestamptz default now(),
  updated_at timestamptz default now()
);

drop trigger if exists users_updated_at on public.users;
create trigger users_updated_at
before update on public.users
for each row execute function public.handle_updated_at();

-- Automatically create a users row when a new auth user signs up
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.users (id, email, role)
  values (new.id, new.email, 'user')
  on conflict (id) do nothing;
  return new;
end;
$$ language plpgsql security definer;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute function public.handle_new_user();

-- Helper: check if current user is admin
create or replace function public.is_admin()
returns boolean as $$
  select exists (
    select 1 from public.users
    where id = auth.uid() and role = 'admin'
  );
$$ language sql security definer stable;

-- RLS for posts
alter table public.posts enable row level security;

create policy "Public can read published posts"
  on public.posts for select
  using (published = true);

create policy "Admins can manage posts"
  on public.posts for all
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

-- RLS for users
alter table public.users enable row level security;

-- Users can read their own row
create policy "Users can read own profile"
  on public.users for select
  to authenticated
  using (id = auth.uid());

-- Admins can read all users
create policy "Admins can read all users"
  on public.users for select
  to authenticated
  using (public.is_admin());

-- Admins can update user roles
create policy "Admins can update users"
  on public.users for update
  to authenticated
  using (public.is_admin())
  with check (public.is_admin());

-- Storage bucket for content images
insert into storage.buckets (id, name, public)
values ('content-images', 'content-images', true)
on conflict (id) do nothing;

create policy "Public read content images"
  on storage.objects for select
  using (bucket_id = 'content-images');

create policy "Authenticated upload content images"
  on storage.objects for insert
  to authenticated
  with check (bucket_id = 'content-images' and public.is_admin());

create policy "Authenticated delete content images"
  on storage.objects for delete
  to authenticated
  using (bucket_id = 'content-images' and public.is_admin());
