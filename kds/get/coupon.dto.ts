import { Advert, CouponType, Criteria, Rewards } from '../../types/coupon.type';

export interface KdsCouponResDto {
  id: string;
  code: string;
  name: string | null;
  couponType: CouponType;
  storeId: number | null;
  totalQuantity: number | null;
  quantityPerUser: number | null;
  startsAt: Date | null;
  expiresAt: Date | null;
  rewards: Rewards | null;
  criteria: Criteria;
  advert: Advert | null;
}
