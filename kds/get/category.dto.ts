export interface KdsCategoryDomain {
  id: number;
  storeId: number;
  name: string;
  description: string;
  priority: number;
}

export interface KdsListCategoryQueryDto {
  pageNumber: number;
  pageSize: number;
  name?: string;
}
