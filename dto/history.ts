import { OrderStatus, PaymentStatus, IBaseOrderItemResDto, ICouponResDto, Nullable, IPaymentOptionEnum, PaymentType } from '..';

export interface ISessionHistoryDto {
  orderId: string;
  sessionId: string;
  customerId: string;
  status: OrderStatus;
  paymentStatus: PaymentStatus;
  subTotal: number;
  grandTotal: number;
  sicpamaDiscountTotal: number;
  storeDiscountTotal: number;
  orderItems: IBaseOrderItemResDto[];
  coupons: ICouponResDto[];
  printedAt?: Nullable<Date>;
  updatedAt?: Nullable<Date>;
  paymentOptionEnum: IPaymentOptionEnum;
  paymentType: PaymentType;
}

export interface ISessionHistoriesDto {
  data: ISessionHistoryDto[];
}
