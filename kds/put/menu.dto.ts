import { Nullable } from '../../../../types';

export interface KdsCreateMenuDto {
  name: string;
  description?: string;
  categoryId: number;
  storeId: number;
  price: number;
  discountPrice?: Nullable<number>;
  discountDays?: string;
  photo?: string;
  isAvailable: boolean;
  priority?: Nullable<number>;
  minOrderQuantity: number;
  menuOptionIds: number[];
  additionalLanguageIds: number[];
}

export interface KdsEditMenuDto extends KdsCreateMenuDto {
  id: number;
}
