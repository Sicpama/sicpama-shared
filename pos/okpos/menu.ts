export interface OkPosMenuData {
  PROD_CD: string;
  PROD_NM: string;
  LCLS_CD: string;
  LCLS_NM: string;
  MCLS_CD: string;
  SCLS_CD: string;
  SALE_UPRC: string;
  TAX_YN: string;
  SIDE_MENU_YN: string;
  SDA_CLS_CD: string;
  SDS_GRP_CD: string;
  ORD_MIN_QTY: string;
  USE_YN: string;
  INS_DT: string;
  UPD_DT: string;
}
export interface OkPosSicpamaMenu extends OkPosMenuData {
  id: number;
}

export interface OkPosMenusData {
  PRODS: OkPosMenuData[];
}
