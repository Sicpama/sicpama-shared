// key code class (category setup on pos terminal)
export interface OkPosTuClsCode {
  TU_FG: string;
  TU_CLS_CD: string;
  TU_CLS_NM: string;
  INS_DT: string;
  UPD_DT: string;
}
// key code
export interface OkPosTuKeyCode {
  TU_FG: string;
  TU_CLS_CD: string;
  TU_KEY_CD: string;
  PROD_CD: string;
  TU_PAGE: string;
  INS_DT: string;
  UPD_DT: string;
}
// key code with menu name and large category code
export interface OkPosTuKeyWithProdCode {
  TU_FG: string;
  TU_CLS_CD: string;
  TU_KEY_CD: string;
  PROD_CD: string;
  TU_PAGE: string;
  INS_DT: string;
  UPD_DT: string;
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
}
