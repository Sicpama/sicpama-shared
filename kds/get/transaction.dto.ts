export interface KdsTransactionDetailPaymentInfoDto {
  paymentId: string;
  orderId: string;
  customerNickname: string;
  paymentAt: string;
  paymentMethodName: string;
  subTotalAmount: number;
  serviceFees: number;
  vatAmount: number;
  totalAmount: number;
  refundedAmount: number;
  refundableAmount: number;
}

export interface KdsTransactionDetailOrderItemDto {
  orderItemId: string;
  quantity: number;
  totalPrice: number;
  isRefunded: boolean;
  isRefunding: boolean;
  refundedAmount: number;
  menuSnapshot: string;
}

export interface KdsTransactionDetailResponseDto {
  paymentId: string;
  paymentAt: string;
  tableNumber: string;
  orderId: string;
  endOfPhoneNumber: string;
  serviceChargePercent: number;
  vatPercent: number;
  isSplitPay: boolean;
  numPartyMembers: number;
  isRefunded: boolean;
  isRefunding: boolean;
  totalPaymentAmount: number;
  totalRefundedAmount: number;
  refundType: string;
  currency: string;
  paymentInfos: KdsTransactionDetailPaymentInfoDto[];
  orderItems: KdsTransactionDetailOrderItemDto[];
}

export interface KdsTransactionResponseDto {
  paymentId: string;
  tableNumber: string;
  isSplitPay: boolean;
  isRefunded: boolean;
  isRefunding: boolean;
  refundType: string;
  paymentAmount: number;
  refundAmount: number;
  paymentAt: string;
  menuName: string;
  currency: string;
}

export interface KdsGetTransactionsResponseDto {
  transactions: KdsTransactionResponseDto[];
}
