import { PaymentType, PaymentOption } from '../../enums/payment.enum';
import { OrderStatus, PaymentStatus } from '../../enums/status.enum';

import { KdsOrderItem, KdsPayment } from './order.dto';

export interface KdsStoreTableOrderResult {
  tableId: number;
  tableNumber: string;
  isVirtualTable: boolean;
  orderId: string;
  orderStatus: OrderStatus;
  customerId: string;
  nickName: string | null;
  phoneNumber: string | null;
  photo: string | null;
  visits: number;
  previousVisitAt: Date | null;
  grandTotal: number;
  paymentStatus: PaymentStatus;
  paymentType: PaymentType | null;
  createdAt: Date;
  updatedAt: Date;
  printedAt: Date | null;
  items: KdsOrderItem[];
  payment: KdsPayment | null;
  paymentOption: PaymentOption;
  subTotal: number;
  paymentGroupId: string | null;
  couponDiscountTotal: number;
  numberOfSentPickUpMessage?: number;
  orderSequentialNumber?: string;
}

export interface KdsStoreTableOrdersResDto {
  orders: KdsStoreTableOrderResult[];
}
