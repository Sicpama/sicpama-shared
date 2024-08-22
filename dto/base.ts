export interface IBaseQueryDto {
  page: number;
  pageSize: number;
}

export interface IPaginationResponse {
  total: number;
  page: number;
  pageSize: number;
}
