import { IPayment, IStore, KdsStoreRefundBodyDto, Nullable } from '../';

export interface IRefundOrderItemDto {
  id: string;
  quantity: number;
}

export interface IRefundOrderDto {
  id: string;
  paymentId: string;
  refundAmount: number;
  reason?: Nullable<string>;
}

export interface IStoreRefundBodyDto extends KdsStoreRefundBodyDto {
  orders: IRefundOrderDto[];
  orderItems: IRefundOrderItemDto[];
}
export interface IReconstructedRefundOrder {
  id: string;
  refundAmount: number;
  reason?: Nullable<string> | undefined;
  payment: IPayment;
}
export interface IRefundServicePayloadDto {
  orders: IRefundOrderDto[];
  orderItems: IRefundOrderItemDto[];
  store: IStore;
  ipAddress?: Nullable<string>;
  reconstructedOrders: IReconstructedRefundOrder[];
  isOrderPurchaseByOnlyOneCompanion: boolean;
}
