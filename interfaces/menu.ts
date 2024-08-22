import { IGroupedText, IMenuOptionToMenu, IStore, MenuOptionChoicePosData, Nullable } from '..';

export interface IMenuOptionChoice {
  id: number;
  name: string;
  description: Nullable<string>;
  price: number;
  storeId: number;
  groupedTextId: Nullable<string>;
  posData: Nullable<MenuOptionChoicePosData>;
  store: IStore;
  menuOptionChoiceToMenuOptions: IMenuOptionChoiceToMenuOption[];
  groupedText: Nullable<IGroupedText>;
}

export interface IMenuOptionChoiceToMenuOption {
  id: number;
  menuOptionId: number;
  menuOptionChoiceId: number;
  priority: Nullable<number>;
  menuOption: IMenuOption;
  menuOptionChoice: IMenuOptionChoice;
}

export interface IMenuOption {
  id: number;
  name: string;
  description: Nullable<string>;
  isMultipleChoice: Nullable<boolean>;
  required: Nullable<boolean>;
  storeId: number;
  groupedTextId: Nullable<string>;
  store: IStore;
  menuOptionToMenus: IMenuOptionToMenu[];
  menuOptionChoiceToMenuOptions: IMenuOptionChoiceToMenuOption[];
  groupedText: Nullable<IGroupedText>;
  minChoices: number;
  maxChoices: number;
}

export interface ItemBasedRecommendMenuUnit {
  precedentMenuIds: number[];
  subsequentMenuIds: number[];
}

export interface ItemBasedRecommendMenuStructure {
  sequence: number;
  defaultMenuIds: number[];
  recommends: ItemBasedRecommendMenuUnit[];
}

export interface UserBasedRecommendMenuUnit {
  menuId: number;
  probability: number;
}

export interface UserBasedRecommendMenuStructure {
  totalUserNumber: number;
  recommendMenus: UserBasedRecommendMenuUnit[];
}

export interface UpdateItemBasedRecommendMenuRequest {
  menuId: number;
  data: ItemBasedRecommendMenuStructure[];
}
