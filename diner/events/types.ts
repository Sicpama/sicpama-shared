import { PaymentOption } from '../../enums/payment.enum';

export interface DinerEvent<T> {
  eventName: DINER_EVENT;
  data: T;
}

export enum DINER_EVENT {
  CLEAR_TABLE = 'clear-table',
  NEW_PAYMENT_SUCCESS = 'new-payment-success',
  KICK_DINER = 'kick-out',
  JOIN_TABLE = 'join-table',
  ORDER_UPDATE = 'order-update',
  ITEM_SERVED = 'item-served',
  BULK_ITEM_SERVED = 'bulk-item-served',
  ITEM_COOKED = 'item-cooked',
  BULK_ITEM_COOKED = 'bulk-item-cooked',
  TABLE_PAID = 'table-paid',
  CASH_PAID = 'cash-paid',
  PAYMENT_CALLBACK_RECEIVED = 'payment-callback-received',
  PAYMENT_IN_PROGRESS = 'payment-in-progress',
  PRINT_ORDERS = 'print-orders',
  ADD_TO_TAB = 'add-to-tab',
  CHANGE_QUANTITY = 'change-quantity',
  SET_PAYMENT_OPTION = 'set-payment-option',
  REMOVE_FROM_TAB = 'remove-from-tab',
  CHECKOUT = 'checkout',
  START_PAYING = 'start-paying',
  RE_ADD_ORDER = 're-add-order',
  BACK_TO_TAB = 'back-to-tab',
  START_SPIN_THE_WHEEL = 'start-spin-the-wheel',
  PAYMENT_DONE_RAPTOR_POS = 'payment-done-raptor-pos',
}

export interface DinerStartSpinTheWheel {
  customerId: string;
  id: string;
  sessionId: string;
  paymentOptionEnum: PaymentOption;
}

export interface DinerBackToTab {
  text: 'back-to-tab';
}

export interface DinerReAddOrder {
  sessionId: string;
  customerId: string;
}

export interface DinerStartPaying {
  orderId: string;
}

export interface DinerCheckout {
  text: 'checkout';
}

export interface DinerSetPaymentOption {
  name: string;
  paymentOption: PaymentOption;
}

export interface JoinTableDinerData {
  id: string;
  nickName: string;
  providerProfilePhoto: string;
  fingerPrint: string;
}

export interface DinerRemoveFromTab {
  customerName: string;
  customerId: string;
  menuName: string;
}

export interface DinerAddToTab {
  customerName: string;
  customerId: string;
  menuName: string;
}

export interface DinerChangeQuantity {
  customerName: string;
  customerId: string;
  menuName: string;
}

export interface KickDinerData {
  orderId: string;
}

export interface ClearTableDinerData {
  tableId: number;
}

export interface CashPaidDinerData {
  orderId: string;
  paidAmount: number;
}

export interface PaymentCallbackDinerData {
  orderId: string;
  resultCode: string;
}

export interface PaymentInProgressDinerData {
  orderId: string;
}
