export interface KdsCreateCategoryDto {
  name: string;
  description?: string;
  priority?: number;
}

export interface KdsUpdateCategoryDto extends KdsCreateCategoryDto {
  storeId: number;
}
