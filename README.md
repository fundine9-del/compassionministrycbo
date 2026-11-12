# Compassion Ministry CBO — Frontend

Next.js + TailwindCSS + TypeScript + Supabase website for Compassion Ministry CBO.

## Setup

1. Create a Supabase project at https://supabase.com
2. Run `supabase/schema.sql` in the Supabase SQL editor.
3. Copy `.env.local.example` values into `.env.local`:
   ```
   NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
   ```
4. Install and run:
   ```
   npm install
   npm run dev
   ```

The site reads published posts from Supabase and renders each as a text block followed by its images.

## Contact
- Email: compassionministry47@gmail.com
- Phone: 0724727715
