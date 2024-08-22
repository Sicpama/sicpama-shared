import { ICustomer, IOrder, IStore, Nullable } from '..';

export interface ICoupon {
  id: string;
  code: string;
  name: Nullable<string>;
  couponType: CouponType;
  storeId: Nullable<number>;
  store: IStore;
  totalQuantity: Nullable<number>;
  quantityPerUser: Nullable<number>;
  startsAt: Nullable<Date>;
  expiresAt: Nullable<Date>;
  rewards: Rewards;
  criteria: Criteria;
  advert: Nullable<Advert>;
}
export interface ICouponUsage {
  id: string;
  couponId: string;
  coupon: ICoupon;
  customerId: string;
  customer: ICustomer;
  orderId?: Nullable<string>;
  order?: Nullable<IOrder>;
  usedAt?: Nullable<Date>;
}

export interface Rewards {
  menuRewards?: MenuReward[];
  discountPercent?: number;
  discountPercentPerCompanionLogin?: number;
  discountMoney?: number;
  discountMoneyPerCompanionLogin?: number;
  discountMaxPercent?: number;
  discountMaxMoney?: number;
}

export interface MenuReward {
  menuItems: MenuItem[];
  discountPercent: number;
}

export interface Criteria {
  // Is the couponUsage record manually created?
  isManuallyCreated?: boolean;
  // Restrict customers that the coupon applies to
  customer?: Rule[];
  // What conditions have to be met to use the coupon
  canUse?: Rule[];
}

export interface Rule {
  previousVisits?: Condition;
  companionLogins?: Condition;
  menuItems?: MenuItem[];
  stamps?: StampCondition;
  category?: number[];
  amount?: number;
}

export interface StampCondition {
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
}

export interface Condition {
  greaterThan?: number;
  equalTo?: number;
}

export interface MenuItem {
  menuId: number;
  mocKey?: string;
  menuQuantity?: number;
}

export enum ADVERT_LOCATION {
  LOGIN_PAGE = 'LOGIN_PAGE',
  USABLE_COUPON_LIST = 'USABLE_COUPON_LIST',
  MARKETING = 'MARKETING',
}

export enum ADVERT_LANGUAGE {
  KO = 'ko',
  EN = 'en',
}

export interface Advert {
  location: {
    [key in ADVERT_LOCATION]?: Record<string, string>;
  };
}

export enum CouponType {
  SICPAMA_COUPON = 'sicpama_coupon',
  STORE_COUPON = 'store_coupon',
}
