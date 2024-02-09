export enum SITE {
  QIITA = 1 as number,
  CLASSMETHOD = 2,
  CYBOZUSHIKI = 3,
  SONICGARDEN = 4,
  FREEE = 5
}

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

interface RegisteredCrawlerStats {
  id: number;
  requestsFinished: number | null;
  requestsFailed: number | null;
  retryHistogram: number[];
  requestAvgFailedDurationMillis: number | null;
  requestAvgFinishedDurationMillis: number | null;
  requestsFinishedPerMinute: number | null;
  requestsFailedPerMinute: number | null;
  requestTotalDurationMillis: number | null;
  requestsTotal: number | null;
  crawlerRuntimeMillis: number | null;
  siteId: SITE;
}

interface RegisteredBatchHistory {
  id: number;
  startAt: Date;
  endAt: Date;
  createdAt: Date;
  updatedAt: Date;
}

interface Site {
  id: number;
  name: string;
  createdAt: Date;
  updatedAt: Date;
}

interface CrawlerStatsWithSite extends RegisteredCrawlerStats {
  Site: Site;
}

export interface AppHistories {
  batch: RegisteredBatchHistory;
  crawlerStats: CrawlerStatsWithSite[];
}
