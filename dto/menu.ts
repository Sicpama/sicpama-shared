import {
  IAdditionalLanguageDto,
  ItemBasedRecommendMenuStructure,
  MenuOptionChoicePosData,
  MenuPosData,
  MenuSellLabel,
  Nullable,
} from '..';
export interface ICategoryMenuResDto {
  categoryId: number;
  categoryName: string;
  priority: Nullable<number>;
  description: Nullable<string>;
  storeId: number;
  menus: IBaseMenuResDto[];
  additionalLanguages?: IAdditionalLanguageDto[];
}

export interface IMenusResDto {
  data: ICategoryMenuResDto[];
}

export interface ICategoryResDto {
  id: number;
  name: string;
  description?: Nullable<string>;
  priority?: Nullable<number>;
}

export interface IMenuDetailsResDto extends IBaseMenuSnapshotResDto {
  category: ICategoryResDto;
}
export interface IMenu {
  name: string;
  description: Nullable<string>;
  price: number;
  discountPrice: Nullable<number>;
  discountDays: Nullable<string>;
  photo: Nullable<string>;
  isShareable: boolean;
  isAvailable: boolean;
  sellLabel: Nullable<MenuSellLabel>;
  priority: Nullable<number>;
  storeId: number;
  categoryId: number;
  minOrderQuantity: number;
  groupedTextId: Nullable<string>;
  posData: Nullable<MenuPosData>;
  recommend?: ItemBasedRecommendMenuStructure[];
  isRecommendationActive: boolean;
}
export interface IMenuOptionToMenu {
  menuId: number;
  menuOptionId: number;
  priority: Nullable<number>;
}
export interface IBaseMenuResDto {
  id: number;
  name: string;
  description?: Nullable<string>;
  price: number;
  discountPrice?: Nullable<number>;
  discountDays?: Nullable<string>;
  isTodayDiscounted?: boolean;
  photo?: Nullable<string>;
  isShareable: boolean;
  isAvailable: boolean;
  sellLabel?: Nullable<MenuSellLabel>;
  priority?: Nullable<number>;
  storeId: number;
  categoryId: number;
  currency: string;
  minOrderQuantity: number;
  additionalLanguages?: IAdditionalLanguageDto[];
  menuOptionToMenus?: IMenuOptionToMenu[];
  recommend?: ItemBasedRecommendMenuStructure[];
}

export interface IBaseMenuOptionChoiceResDto {
  id: number;
  name: string;
  price: number;
  description?: Nullable<string>;
  additionalLanguages?: IAdditionalLanguageDto[];
  posData?: Nullable<MenuOptionChoicePosData>;
}

export interface IBaseMenuOptionResDto {
  id: number;
  name: string;
  description?: Nullable<string>;
  choices: IBaseMenuOptionChoiceResDto[];
  minChoices: number;
  maxChoices: number;
  additionalLanguages?: IAdditionalLanguageDto[];
}

export interface IBaseMenuSnapshotResDto extends IBaseMenuResDto {
  menuOptions: IBaseMenuOptionResDto[];
  posData?: Nullable<MenuPosData>;
}

export interface IMenuOrderItemResDto extends IBaseMenuSnapshotResDto {
  quantity: number;
  shareableNumerator: number;
}

export interface IBaseOrderItemResDto {
  id: string;
  totalPrice: number;
  menu: IMenuOrderItemResDto;
}
