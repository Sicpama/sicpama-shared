import { PaymentGatewayType } from '../../enums/payment.enum';
import { OrderItemStatus } from '../../enums/status.enum';

import { KdsBaseMenuSnapshotResDto } from './menu.legacy.dto';

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
