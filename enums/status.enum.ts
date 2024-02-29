export enum StaffStatus {
  PENDING = 'pending',
  ACTIVE = 'active',
  INACTIVE = 'inactive',
}

export enum OrderStatus {
  DRAFT = 'draft',
  WAITING = 'waiting', // at payment screen
  PAYING = 'paying', // redirected to payment gateway page / 3rd party payment app
  // paid success with PG = order goes to the kitchen,
  // However for ONE_OVER_N (SPLIT EVENLY) and shareable menu with Pay Mine, need to wait all diners participate PAID
  PAID = 'paid',
  PRINTED = 'printed', // order is printed
  CANCELLED = 'canceled', // order is cancelled (kicked from table)
  COMPLETED = 'completed', // clear the table
}

export const NotAllowedToOrderStatuses = [
  OrderStatus.WAITING,
  OrderStatus.COMPLETED,
  OrderStatus.PRINTED,
  OrderStatus.PAID,
  OrderStatus.CANCELLED,
];

export const ActiveOrderStatuses = [OrderStatus.DRAFT, OrderStatus.WAITING];

export const AllOrderStatusesBeforeClearTheTable = [
  OrderStatus.DRAFT,
  OrderStatus.PAID,
  OrderStatus.PAYING,
  OrderStatus.WAITING,
  OrderStatus.PRINTED,
];

export enum PaymentStatus {
  PENDING = 'pending', // is a draft order
  SUCCESS = 'success',
  FAILED = 'failed',
  CANCELED = 'canceled',
  CASH = 'cash', // this means that the diner had to pay at the till in the store
}

export enum OrderItemStatus {
  DRAFT = 'draft',
  PAID = 'paid',
  SERVED = 'served',
  COOKED = 'cooked',
}

export enum TableStatus {
  EMPTY = 'empty',
  SERVING = 'serving',
  SITTING = 'sitting',
  SERVING_COMPLETED = 'servingCompleted',
}

export enum RefundType {
  REFUND = 'REFUND',
  PATIAL_REFUND = 'PATIAL_REFUND',
  REFUNDING = 'REFUNDING',
}
