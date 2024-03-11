export interface KdsBaseQueryDto {
  page: number;
  pageSize: number;
}

export interface KdsPaginationResponse {
  total: number;
  page: number;
  pageSize: number;
}
