export interface Article {
  id: number;
  title: string;
  content: string;
  contentHash: string;
  published: boolean;
  url: string;
  siteId: number;
  batchHistoryId: number;
  ogpTitle: string | null;
  ogpImage: string | null;
  ogpDescription: string | null;
  createdAt: Date;
  updatedAt: Date;
}
