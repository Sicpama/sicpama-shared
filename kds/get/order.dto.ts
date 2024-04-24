import { PaymentGatewayType } from '../../enums/payment.enum';
import { OrderItemStatus } from '../../enums/status.enum';

import { KdsPaginationResponse } from './base.dto';
import { KdsBaseMenuSnapshotResDto } from './menu.legacy.dto';
import { KdsStoreTableOrderResult } from './store-order.dto';

export interface KdsPayment {
  customerId: string;
  orderId: string;
  paidAmount: number;
  cardId: string | null;
  currency: string;
  status: string | null;
  responseData: any | null;
  requestData: any | null;
  providerPaymentName: PaymentGatewayType;
  providerPaymentId: string;
  paymentIntentId: string | null;
}

export interface KdsOrderItem {
  id: string;
  orderId: string;
  mocKey: string;
  menuId: number;
  menuQuantity: number;
  menuUnitPrice: number;
  shareableNumerator: number;
  totalPrice: number;
  sicpamaCouponDiscount: number;
  storeCouponDiscount: number;
  menuSnapshot: KdsBaseMenuSnapshotResDto;
  isMenuShareable: boolean;
  status: OrderItemStatus;
}

export interface KdsOrderList extends KdsPaginationResponse {
  data: KdsStoreTableOrderResult[];
}
