export type Rewards = {
  menuRewards?: MenuRewards;
  discountPercent?: number;
  discountMoney?: number;
};

export type MenuRewards = MenuReward[];

export type MenuReward = {
  menuItems: MenuItem[];
  discountPercent: number;
};

export type Criteria = {
  isManuallyCreated?: boolean;
  customer?: Rule[];
  canUse?: Rule[];
};

export type Rule = {
  previousVisits?: Condition;
  companionLogins?: Condition;
  menuItems?: MenuItem[];
  category?: number[];
  amount?: number;
};

export type Condition = {
  greaterThan?: number;
  equalTo?: number;
};

export type MenuItem = {
  menuId: number;
  mocKey?: string;
  menuQuantity: number;
};

export enum ADVERT_LOCATION {
  LOGIN_PAGE = 'LOGIN_PAGE',
  USABLE_COUPON_LIST = 'USABLE_COUPON_LIST',
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
