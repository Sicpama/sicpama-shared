import { OrderStatus, PaymentStatus, IBaseOrderItemResDto, ICouponResDto } from '..';

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
}

export interface ISessionHistoriesDto {
  data: ISessionHistoryDto[];
}
