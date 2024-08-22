import { IPaginationResponse, KdsAdditionalLanguageDto, MenuSellLabel } from '../..';
import { PaymentGatewayType } from '../../enums/payment.enum';
import { OrderItemStatus } from '../../enums/status.enum';

import { KdsStoreTableOrderResult } from './store-order.dto';

export interface KdsBaseMenuResDto {
  id: number;
  name: string;
  description: string | null;
  price: number;
  discountPrice: number | null;
  discountDays: string | null;
  isTodayDiscounted: boolean;
  photo: string | null;
  isShareable: boolean;
  isAvailable: boolean;
  sellLabel: MenuSellLabel | null;
  priority: number | null;
  storeId: number;
  categoryId: number;
  currency: string;
  minOrderQuantity: number;
  additionalLanguages?: KdsAdditionalLanguageDto[];
}

export interface KdsBaseMenuOptionChoiceResDto {
  id: number;
  name: string;
  price: number;
  description: string | null;
  additionalLanguages?: KdsAdditionalLanguageDto[];
}

export interface KdsBaseMenuOptionResDto {
  id: number;
  name: string;
  description: string | null;
  minChoices: number;
  maxChoices: number;
  choices: KdsBaseMenuOptionChoiceResDto[];
  additionalLanguages?: KdsAdditionalLanguageDto[];
}

export interface KdsBaseMenuSnapshotResDto extends KdsBaseMenuResDto {
  menuOptions: KdsBaseMenuOptionResDto[];
}
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

export interface KdsOrderList extends IPaginationResponse {
  data: KdsStoreTableOrderResult[];
}
