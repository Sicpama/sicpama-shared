import { CardInfo, CashInfo, EasyPayInfo, OnlinePGInfo, OrderData, OrderInfo } from '..';

export interface PosOrderData {
  okpos?: OrderData;
  raptor?: any; // TODO: Raptor data structure is not unified yet
}

export interface PosOrderItemData {
  okpos?: OrderInfo;
  raptor?: any; // TODO: Raptor data structure is not unified yet
}

export interface PosPaymentData {
  okpos?: {
    cardInfo?: CardInfo;
    easyPayInfo?: EasyPayInfo;
    cashInfo?: CashInfo;
    onlinePGInfo?: OnlinePGInfo;
  };
  raptor?: any; // TODO: Raptor data structure is not unified yet
}
