import { OrderItemStatus, OrderPaid, OrderStatus, PrintOrder, ReceiptPrinter } from '../..';

export interface JoinTableKdsData {
  storeTableId: number;
  orderId: string;
}

export interface KickKdsData {
  storeTableId: number;
  orderId: string;
}

export interface ClearTableKdsData {
  storeTableId: number;
}

export interface OrderUpdateKdsData {
  storeTableId: number;
  orderId: string;
  orderStatus: OrderStatus;
}

export interface ItemUpdateKdsData {
  storeTableId: number;
  orderItemId: string;
  orderItemStatus: OrderItemStatus;
}

export interface BulkItemsUpdateKdsData {
  storeTableId: number;
  orderItemIds: string[];
  orderItemStatus: OrderItemStatus;
}

export interface TablePaidKdsData {
  storeTableId: number;
  ordersPaid: OrderPaid[];
}

export interface PrintOrdersKdsData {
  storeTableId: number;
  order?: PrintOrder;
  receiptPrinters: ReceiptPrinter[];
  customerPhoneNumber: string;
}
