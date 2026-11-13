import Dexie, { type Table } from "dexie";

export type CachedPost = {
  id: string;
  title: string | null;
  body: string;
  image_urls: string[] | null;
  published: boolean;
  created_at: string;
};

class CompassionDB extends Dexie {
  posts!: Table<CachedPost, string>;

  constructor() {
    super("compassion-ministry-cbo");
    this.version(1).stores({
      posts: "id, published, created_at",
    });
  }
}

export const db = new CompassionDB();
