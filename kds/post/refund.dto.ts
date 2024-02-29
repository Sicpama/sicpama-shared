import { KdsPayment } from '../get/order.dto';

export interface KdsRefundStore {
  id: string;
  name: string;
  currency: string;
}

export interface KdsReconstructedRefundOrder {
  id: string;
  refundAmount: number;
  reason: string | null;
  payment: KdsPayment;
}

export interface KdsRefundOrderItemDto {
  id: string;
  quantity: number;
}

export interface KdsRefundOrderDto {
  id: string;
  paymentId: string;
  refundAmount: number;
  reason?: string | null;
}

export interface KdsStoreRefundBodyDto {
  orders: KdsRefundOrderDto[];
  orderItems: KdsRefundOrderItemDto[];
}

export interface KdsRefundServicePayloadDto {
  orders: KdsRefundOrderDto[];
  orderItems: KdsRefundOrderItemDto[];
  store: KdsRefundStore;
  ipAddress?: string | null;
  reconstructedOrders: KdsReconstructedRefundOrder[];
  isOrderPurchaseByOnlyOneCompanion: boolean;
}
