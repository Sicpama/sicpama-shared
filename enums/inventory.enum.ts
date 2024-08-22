export enum InventoryTransactionReason {
  ORDER_FULFILLMENT = 'ORDER_FULFILLMENT',
  RESTOCKING = 'RESTOCKING', // if updateQuantity is + , then it is restocking
  ADJUSTMENT = 'ADJUSTMENT', // if updateQuantity is - , then it is adjustment
  STOCK_TAKE = 'STOCK_TAKE', // if setQuantity is used, then it is stock take
}

export enum InventorySortBy {
  NAME = 'name',
  QUANTITY = 'quantity',
}
