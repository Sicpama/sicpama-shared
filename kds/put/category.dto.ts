export interface KdsCreateCategoryDto {
  name: string;
  description?: string;
  priority?: number;
  isAvailable?: boolean;
}

export interface KdsUpdateCategoryDto extends KdsCreateCategoryDto {
  storeId: number;
}
