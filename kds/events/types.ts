import { OrderItemStatus, OrderStatus } from '../../';

export type KdsEvent<T> = {
  storeId: number;
  storeTableId: number;
  eventName: KDS_EVENT;
  data: T;
};

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

export type JoinTableKdsData = {
  orderId: string;
};
export type KickKdsData = {
  orderId: string;
};

export type ClearTableKdsData = {
  tableId: number;
};

export type OrderUpdateKdsData = {
  orderId: string;
  orderStatus: OrderStatus;
};

export type ItemUpdateKdsData = {
  orderItemId: string;
  orderItemStatus: OrderItemStatus;
};

export type BulkItemsUpdateKdsData = {
  orderItemIds: string[];
  orderItemStatus: OrderItemStatus;
};

export type TablePaidKdsData = {
  ordersPaid: OrderPaid[];
};

export type OrderPaid = {
  orderId: string;
  paid: string;
};

export class PrintOrdersKdsData {
  order?: PrintOrder;
  receiptPrinters: ReceiptPrinter[] = [];
  customerPhoneNumber = 'missing';
}

export class PrintOrderItem {
  menuName = 'missing';
  quantity = 1;
}

export class PrintOrder {
  orderNumber = 'missing';
  tableNumber = 'missing';
  printedAt = 'missing';
  orderItems: PrintOrderItem[] = [];
}

export class ReceiptPrinter {
  id = 'missing';
  vendorId?: number;
  repeatPrintingCounter = 1;
}
