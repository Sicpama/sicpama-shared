import { IBaseOrderItemResDto, ICustomerResDto, IPaymentOptionEnum, Nullable } from '..';
import { PaymentType, PaymentOption, PaymentMethodType } from '../enums/payment.enum';
import { OrderStatus, PaymentStatus } from '../enums/status.enum';
import { Rewards, Criteria, Advert } from '../interfaces/coupon';

export interface IOrderItemsResDto {
  id: string;
  customerId: string;
  sessionId: string;
  storeId: number;
  paymentOptionEnum: IPaymentOptionEnum;
  status: OrderStatus;
  paymentStatus: PaymentStatus;
  paymentType: PaymentType;
  subTotal: number;
  grandTotal: number;
  currency: string;
  vatPercent: number;
  serviceChargePercent: number;
  priceIncludedVAT: boolean;
  paidByCustomerId?: Nullable<string>;
  note?: Nullable<string>;
  paymentGroupId?: Nullable<string>;
  couponDiscountTotal: number;
  orderItems: IBaseOrderItemResDto[];
  printedAt?: Nullable<Date>;
  updatedAt?: Nullable<Date>;
  posReceiptNo?: string;
}

export interface ICouponResDto {
  id: string;
  couponUsageId: string;
  code: string;
  name?: Nullable<string>;
  rewards: Rewards;
  criteria: Criteria;
  advert: Advert;
  discountedAmount?: number;
}

export interface ITableOrderItemResDto extends IOrderItemsResDto {
  customer: ICustomerResDto;
  isMyself: boolean;
  stampCount: number;
  coupons?: ICouponResDto[];
}

export interface ITableOrderItemsResDto {
  data: ITableOrderItemResDto[];
  coupons: ICouponResDto[];
}

export interface IBillInformation {
  grandTotal: number;
  totalDiscount: number;
}

export interface ICurrentTableSessionDto {
  data: ITableOrderItemResDto[];
  coupons: ICouponResDto[];
  billInformation: {
    [PaymentOption.ALL]: IBillInformation;
    [PaymentOption.MINE]: IBillInformation;
    [PaymentOption.ONE_OVER_N]: IBillInformation;
    [PaymentOption.SPIN_THE_WHEEL]: IBillInformation;
  };
}

export interface IPaidOrderResDto {
  id: string;
  customerId: string;
  paymentId: string;
  storeId: number;
  paymentOptionEnum: IPaymentOptionEnum;
  status: OrderStatus;
  paymentStatus: PaymentStatus;
  paidByCustomerId: string;
  paymentMethod: PaymentMethodType;
  paidAmount: number;
  currency: string;
  orderItems: IBaseOrderItemResDto[];
  customer: ICustomerResDto;
  printedAt?: Nullable<Date>;
  updatedAt?: Nullable<Date>;
}
