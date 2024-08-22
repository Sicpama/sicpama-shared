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
