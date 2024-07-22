export interface KdsEvent<T> {
  eventName: KDS_EVENT;
  data: T;
}

export enum KDS_EVENT {
  JOIN_TABLE,
  CLEAR_TABLE,
  KICK_DINER,
  ORDER_UPDATE,
  ITEM_UPDATE,
  BULK_ITEMS_UPDATE,
  TABLE_PAID,
  PRINT_ORDERS,
}
export interface OrderPaid {
  orderId: string;
  paid: string;
}
export interface PrintOrderItem {
  menuName: string;
  quantity: number;
}
export interface PrintOrder {
  orderNumber: string;
  tableNumber: string;
  printedAt: string;
  orderItems: PrintOrderItem[];
}
export interface ReceiptPrinter {
  id: string;
  vendorId: number;
  repeatPrintingCounter: number;
  characterSet?: string;
}
