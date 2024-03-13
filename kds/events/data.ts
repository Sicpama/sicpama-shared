import { OrderItemStatus, OrderPaid, OrderStatus, PrintOrder, ReceiptPrinter } from '../..';

export interface BaseKdsData {
  storeTableId: number;
}

export interface JoinTableKdsData extends BaseKdsData {
  orderId: string;
}

export interface KickKdsData extends BaseKdsData {
  orderId: string;
}

export type ClearTableKdsData = BaseKdsData;

export interface OrderUpdateKdsData extends BaseKdsData {
  orderId: string;
  orderStatus: OrderStatus;
}

export interface ItemUpdateKdsData extends BaseKdsData {
  orderItemId: string;
  orderItemStatus: OrderItemStatus;
}

export interface BulkItemsUpdateKdsData extends BaseKdsData {
  orderItemIds: string[];
  orderItemStatus: OrderItemStatus;
}

export interface TablePaidKdsData extends BaseKdsData {
  ordersPaid: OrderPaid[];
}

export interface PrintOrdersKdsData extends BaseKdsData {
  order?: PrintOrder;
  receiptPrinters: ReceiptPrinter[];
  customerPhoneNumber: string;
}
