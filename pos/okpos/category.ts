export interface OkPosCategory {
  large?: OkPosClsLmCode;
  medium?: OkPosClsMmCode;
  small?: OkPosClsSmCode;
}
// Large category
export interface OkPosClsLmCode {
  LCLS_CD: string;
  LCLS_NM: string;
  USE_YN: string;
  INS_DT: string;
  UPD_DT: string;
}
// Medium category
export interface OkPosClsMmCode {
  LCLS_CD: string;
  MCLS_CD: string;
  MCLS_NM: string;
  USE_YN: string;
  INS_DT: string;
  UPD_DT: string;
}
// Small category
export interface OkPosClsSmCode {
  LCLS_CD: string;
  MCLS_CD: string;
  SCLS_CD: string;
  SCLS_NM: string;
  USE_YN: string;
  INS_DT: string;
  UPD_DT: string;
}

export interface OkPosSdsGrpCode {
  SDS_GRP_CD: string;
  SDS_GRP_NM: string;
  USE_YN: string;
  INS_DT: string;
  UPD_DT: string;
}

export interface OkPosSdsClCode {
  SDS_GRP_CD: string;
  SDS_CLS_CD: string;
  SDS_CLS_NM: string;
  SDS_ORDER_SEQ: string;
  SDS_MAX_QTY: string;
  KIOSK_USE_FG: string;
  USE_YN: string;
  INS_DT: string;
  UPD_DT: string;
}

export interface OkPosSdsCdCode {
  SDS_CLS_CD: string;
  SDS_CD: string;
  SDS_NM: string;
  SDS_PROD_UPRC: string;
  SDS_ORDER_SEQ: string;
  USE_YN: string;
  INS_DT: string;
  UPD_DT: string;
}

export interface OkPosSdaClCode {
  SDA_CLS_CD: string;
  SDA_CLS_NM: string;
  SDA_ORDER_SEQ: string;
  USE_YN: string;
  INS_DT: string;
  UPD_DT: string;
}
export interface OkPosSdaCdCode {
  SDA_CLS_CD: string;
  SDA_NM: string;
  SDA_CD: string;
  SDA_ORDER_SEQ: string;
  USE_YN: string;
  INS_DT: string;
  UPD_DT: string;
}
