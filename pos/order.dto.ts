import { OrderInfo, OrderData, CardInfo, EasyPayInfo, CashInfo } from '..';

export interface PosOrderData {
  okpos?: OrderData;
}

export interface PosOrderItemData {
  okpos?: OrderInfo;
}

export interface PosPaymentData {
  okpos?: { cardInfo?: CardInfo; easyPayInfo?: EasyPayInfo; cashInfo?: CashInfo };
}
