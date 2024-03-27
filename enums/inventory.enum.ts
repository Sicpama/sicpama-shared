export enum InventoryTransactionReason {
  ORDER_FULFILLMENT,
  RESTOCKING, // if updateQuantity is + , then it is restocking
  ADJUSTMENT, // if updateQuantity is - , then it is adjustment
  STOCK_TAKE, // if setQuantity is used, then it is stock take
}
