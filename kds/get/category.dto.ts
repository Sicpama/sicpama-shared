interface KdsCategoryResDto {
  id: number;
  name: string;
  description: string | null;
  priority: number | null;
  storeId: number;
}

export interface KdsCategoryResponseData {
  data: KdsCategoryResDto;
}

export interface KdsCategoriesByStoreIdResDto {
  data: KdsCategoryResDto[];
}
