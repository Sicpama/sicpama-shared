export interface KdsStoreTableResult {
  id: number;
  tableNumber: string;
  token: string;
  sessionId: string;
  storeId: number;
  isVirtual: boolean;
}
export interface KdsGetStoreTablesQueryDto {
  sorted?: boolean;
}
export interface KdsStoreTablesResDto {
  tables: KdsStoreTableResult[];
}
export interface KdsStoreTableResDto {
  table: KdsStoreTableResult;
}
