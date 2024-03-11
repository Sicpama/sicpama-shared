import { OrderItemStatus } from '../..';

export interface KdsBulkUpdateOrderItemsStatusDto {
  orderItemStatus: OrderItemStatus;
  orderItemIds: string[];
}

export interface KdsUpdateOrderItemStatusDto {
  orderItemStatus: OrderItemStatus;
}
