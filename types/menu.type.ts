export type ItemBasedRecommendMenuUnit = {
  precedentMenuIds: number[];
  subsequentMenuIds: number[];
};

export type ItemBasedRecommendMenuStructure = {
  sequence: number;
  defaultMenuIds: number[];
  recommends: ItemBasedRecommendMenuUnit[];
};

export type UserBasedRecommendMenuUnit = {
  menuId: number;
  probability: number;
};

export type UserBasedRecommendMenuStructure = {
  totalUserNumber: number;
  recommendMenus: UserBasedRecommendMenuUnit[];
};

export type UpdateItemBasedRecommendMenuRequest = {
  menuId: number;
  data: ItemBasedRecommendMenuStructure[];
};
