import { OrderItemStatus } from '../../enums/status.enum';

export interface KdsBulkUpdateOrderItemsStatusDto {
  orderItemStatus: OrderItemStatus;
  orderItemIds: string[];
}

export interface KdsUpdateOrderItemStatusDto {
  orderItemId: string;
  orderItemStatus: OrderItemStatus;
}
