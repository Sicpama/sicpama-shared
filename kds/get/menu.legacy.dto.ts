import { KdsAdditionalLanguageDto, KdsPaginationResponse } from '../..';
import { MenuSellLabel } from '../../enums/labels.enum';

export interface KdsBaseMenuResDto {
  id: number;
  name: string;
  description: string | null;
  price: number;
  discountPrice: number | null;
  discountDays: string | null;
  isTodayDiscounted: boolean;
  photo: string | null;
  isShareable: boolean;
  isAvailable: boolean;
  sellLabel: MenuSellLabel | null;
  priority: number | null;
  storeId: number;
  categoryId: number;
  currency: string;
  minOrderQuantity: number;
  additionalLanguages?: KdsAdditionalLanguageDto[];
}

export interface KdsBaseMenuOptionChoiceResDto {
  id: number;
  name: string;
  price: number;
  description: string | null;
  additionalLanguages?: KdsAdditionalLanguageDto[];
}

export interface KdsBaseMenuOptionResDto {
  id: number;
  name: string;
  description: string | null;
  isMultipleChoice: boolean;
  required: boolean;
  choices: KdsBaseMenuOptionChoiceResDto[];
  additionalLanguages?: KdsAdditionalLanguageDto[];
}

export interface KdsBaseMenuSnapshotResDto extends KdsBaseMenuResDto {
  menuOptions: KdsBaseMenuOptionResDto[];
}

export interface KdsMenuOrderItemResDto extends KdsBaseMenuSnapshotResDto {
  quantity: number;
  shareableNumerator: number;
}

export interface KdsMenusByStoreIdResDto extends KdsPaginationResponse {
  data: KdsBaseMenuResDto[];
}
