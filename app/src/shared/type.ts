export interface Article {
  id: number;
  title: string;
  content: string;
  contentHash: string;
  published: boolean;
  siteId: number;
  batchHistoryId: number;
  createdAt: Date;
  updatedAt: Date;
}
