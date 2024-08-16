export type Rewards = {
  menuRewards?: MenuRewards;
  discountPercent?: number;
  discountPercentPerCompanionLogin?: number;
  discountMoney?: number;
  discountMoneyPerCompanionLogin?: number;
  discountMaxPercent?: number;
  discountMaxMoney?: number;
};

export type MenuRewards = MenuReward[];

export type MenuReward = {
  menuItems: MenuItem[];
  discountPercent: number;
};

export type Criteria = {
  // Is the couponUsage record manually created?
  isManuallyCreated?: boolean;
  // Restrict customers that the coupon applies to
  customer?: Rule[];
  // What conditions have to be met to use the coupon
  canUse?: Rule[];
};

export type Rule = {
  previousVisits?: Condition;
  companionLogins?: Condition;
  menuItems?: MenuItem[];
  stamps?: StampCondition;
  category?: number[];
  amount?: number;
};

export type StampCondition = {
  // Can restrict items that count by list of menuItems
  menuItems?: MenuItem[];
  // Can restrict items that count by category ids
  categoryIds?: number[];
  // Can have minimum purchase amount to count
  minValue?: number;
  // Can have accumulated spend to gain stamp
  accumulatedValue?: number;
  // Target stamp count to use the coupon and get rewards
  count: number;
};

export type Condition = {
  greaterThan?: number;
  equalTo?: number;
};

export type MenuItem = {
  menuId: number;
  mocKey?: string;
  menuQuantity?: number;
};

export enum ADVERT_LOCATION {
  LOGIN_PAGE = 'LOGIN_PAGE',
  USABLE_COUPON_LIST = 'USABLE_COUPON_LIST',
  MARKETING = 'MARKETING',
}

export enum ADVERT_LANGUAGE {
  KO = 'ko',
  EN = 'en',
}

export type Advert = {
  location: {
    [key in ADVERT_LOCATION]?: Record<ADVERT_LANGUAGE, string>;
  };
};

export enum CouponType {
  SICPAMA_COUPON = 'sicpama_coupon',
  STORE_COUPON = 'store_coupon',
}
