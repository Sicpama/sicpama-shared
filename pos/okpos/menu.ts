import { OkPosTuKeyCode, OkPosTuKeyWithProdCode } from '../..';

export interface OkPosMenuData {
  PROD: OkPosProdData;
  TUKEYCODE: OkPosTuKeyCode;
  TUKEYCODE_WITH_PROD: OkPosTuKeyWithProdCode;
}
export interface OkPosProdData {
  PROD_CD: string;
  PROD_NM: string;
  LCLS_CD: string;
  MCLS_CD: string;
  SCLS_CD: string;
  SALE_UPRC: string;
  TAX_YN: string;
  SIDE_MENU_YN: string;
  SDA_CLS_CD: string;
  SDS_GRP_CD: string;
  ORD_MIN_QTY: string;
  USE_YN: string;
  SOLD_OUT_YN: string;
  INS_DT: string;
  UPD_DT: string;
}
export interface OkPosSicpamaMenu extends OkPosMenuData {
  id: number;
}

export interface OkPosMenusData {
  PRODS: OkPosMenuData[];
}
