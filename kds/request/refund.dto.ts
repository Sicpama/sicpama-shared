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
