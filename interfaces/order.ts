import {
  ICustomer,
  IOrderItem,
  IPayment,
  IPaymentOptionEnum,
  IStore,
  IStoreTable,
  Nullable,
  OrderStatus,
  PaymentMethodType,
  PaymentStatus,
  PaymentType,
  PosOrderData,
} from '..';

export interface IOrder {
  id: string;
  sessionId: string;
  customerId: string;
  storeId: number;
  storeTableId: number;
  paymentId?: Nullable<string>;
  payment?: IPayment;
  paymentOptionEnum: IPaymentOptionEnum;
  paymentGroupId: Nullable<string>;
  isJoinablePaymentGroup: boolean;
  status: OrderStatus;
  paymentStatus: PaymentStatus;
  paymentType: PaymentType;
  paymentMethod: Nullable<PaymentMethodType | string>;
  subTotal: number;
  sicpamaDiscountTotal: number;
  storeDiscountTotal: number;
  grandTotal: number;
  vatPercent: number;
  serviceChargePercent: number;
  priceIncludedVAT: boolean;
  paidByCustomerId: Nullable<string>;
  note: Nullable<string>;
  previousVisits: number;
  previousVisitAt: Nullable<Date>;
  printedAt: Nullable<Date>;
  isNotificationSent: boolean;
  isTakeOut: boolean;
  posData?: Nullable<PosOrderData>;
  orderItems: IOrderItem[];
  store: IStore;
  storeTable: IStoreTable;
  customer: ICustomer;
}
