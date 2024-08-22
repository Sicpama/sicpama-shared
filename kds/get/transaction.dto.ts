import { IPaginationResponse } from '../../../../submodules/sicpama-shared';
import { PaymentOption, RefundState, RefundStatus } from '../../enums/payment.enum';

export interface KdsTransactionCustomerInfo {
  id: string;
  name: string;
  phone: string;
}

export interface KdsTransactionMenuOptionChoice {
  id: number;
  name: string;
}

export interface KdsTransactionMenuOption {
  id: number;
  name: string;
  choices: KdsTransactionMenuOptionChoice[];
}

export interface KdsTransactionOrderItemDomain {
  id: string;
  name: string;
  totalPrice: number;
  quantity: number;
  discountTotal: number;
  menuOption: KdsTransactionMenuOption[];
  grandTotal: number;
}

export interface KdsTransactionOrderDomain {
  id: string;
  tableId: number;
  createdAt: Date;
  paymentId: string;
  orderItems: KdsTransactionOrderItemDomain[];
  refunds: KdsTransactionRefundDomain[];
}

export interface KdsTransactionRefundItemDomain {
  id: string;
  orderItemId: string;
  quantity: number;
  totalRefunded: number;
}

export interface KdsTransactionRefundDomain {
  id: string;
  refundedAt: Date;
  status: RefundStatus;
  refundOrderItems: KdsTransactionRefundItemDomain[];
  refundAmount: number;
}

export interface KdsTransactionPaymentDomain {
  id: string;
  customer: KdsTransactionCustomerInfo;
  orderId: string;
  paymentAmount: number;
  paidAt: Date;
  cardInfo: string;
  refunds: KdsTransactionRefundDomain[];
  refundedAmount: number;
}

export interface KdsTransactionDetailDomain {
  id: string;
  orders: KdsTransactionOrderDomain[];
  payments: KdsTransactionPaymentDomain[];
  totalPaid: number;
  totalRefunded: number;
  refundState: RefundState;
  numberOfCustomer: number;
}

export interface KdsTransactionListItemDomain {
  id: string;
  totalOrder: number;
  totalPaid: number;
  paymentOptions: PaymentOption[];
  totalRefunded: number;
  title: string;
  tableNumber: string;
  date: string;
}

export interface KdsTransactionListDto extends IPaginationResponse {
  data: KdsTransactionListItemDomain[];
}

// Assuming RefundStatus and RefundState are enums or types defined elsewhere
