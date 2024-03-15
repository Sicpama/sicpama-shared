export interface KdsCreateMenuDto {
  name: string;
  description?: string;
  categoryId: number;
  storeId: number;
  price: number;
  discountPrice?: number;
  discountDays?: string;
  photo?: string;
  isAvailable: boolean;
  priority: number;
  minOrderQuantity: number;
  menuOptionIds: number[];
  additionalLanguageIds: number[];
}

export interface KdsEditMenuDto extends KdsCreateMenuDto {
  id: number;
}
