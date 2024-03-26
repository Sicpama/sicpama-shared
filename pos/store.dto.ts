export interface PosStoreData {
  raptor?: RaptorStoreData;
  okpos?: OkPosStoreData;
}

export interface RaptorStoreData {
  posId: string;
  username: string;
  password: string;
  paymentType: number;
  cloudUrl?: string;
  localUrl?: string;
  operatorId?: string;
}

export interface OkPosStoreData {
  SHOP_CD: string;
  HD_SHOP_CD: string;
  BIZ_NO: string;
  SHOP_NM: string;
  EXTERNAL_KEY?: string;
  EXTERNAL_SERVICE?: string;
}
