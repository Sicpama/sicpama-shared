import { KdsCategoryDomain, Nullable } from '../..';

export interface KdsPaginationResponse {
  total: number;
  page: number;
  pageSize: number;
}

export interface KdsAdditionalLanguageDto {
  name: string;
  description: string | null;
  localeCode: string;
}

export interface KdsMenusDomainDto extends KdsPaginationResponse {
  data: KdsMenuDomain[];
}

export interface KdsMenuDomain {
  id: number;
  name: string;
  description: string;
  price: number;
  discountPrice: Nullable<number>;
  discountDays: Nullable<string>;
  photo: Nullable<string>;
  isShareable: boolean;
  isAvailable: boolean;
  priority: Nullable<number>;
  category: KdsCategoryDomain;
  minOrderQuantity: number;
  menuOptions: KdsMenuOptionDomain[];
}

export interface KdsMenuParams {
  id: number;
  name: string;
  price: number;
  category: KdsCategoryDomain;
  menuOptions: KdsMenuOptionDomain[];
}

export interface IOptionalMenuParams {
  description?: string;
  discountPrice?: Nullable<number>;
  discountDays?: Nullable<string>;
  photo?: Nullable<string>;
  isShareable?: boolean;
  isAvailable?: boolean;
  priority?: Nullable<number>;
  minOrderQuantity?: number;
}

export interface KdsMenuOptionDomain {
  id: number;
  name: string;
  description: string;
  isMultipleChoice: boolean;
  required: boolean;
  minChoices: number;
  maxChoices: number;
  menuOptionChoices: KdsMenuOptionChoiceDomain[];
}

export interface KdsMenuOptionChoiceDomain {
  id: number;
  name: string;
  description: string;
  price: number;
}
