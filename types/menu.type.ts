export type ItemBaseRecommendMenuUnit = {
  precedentMenuIds: number[];
  subsequentMenuIds: number[];
};

export type ItemBaseRecommendMenuStructure = {
  sequence: number;
  defaultMenuIds: number[];
  recommends: ItemBaseRecommendMenuUnit[];
};

export type UserBaseRecommendMenuUnit = {
  menuId: number;
  probability: number;
};

export type UserBaseRecommendMenuStructure = {
  totalUserNumber: number;
  recommendMenus: UserBaseRecommendMenuUnit[];
};

export type UpdateItemBaseRecommendMenuRequest = {
  menuId: number;
  data: ItemBaseRecommendMenuStructure[];
};

export type UpdateRecommendMenusRequest = {
  itemBase?: UpdateItemBaseRecommendMenuRequest[];
  userBase?: UserBaseRecommendMenuStructure[];
};
