export enum OkPosCallback {
  REQ_POLICY = '/callback/req_policy',
  SALE_DATE = '/callback/sale_date',
  MASTER_CHANGE = '/callback/master_change',
  PROGRAM_STATUS = '/callback/status',
  ORDER_SALE_PARTIAL = '/callback/order/sale/partial',
  ORDER_SALE_ALL = '/callback/order/sale/all',
  ORDER_SALE_CANCEL = '/callback/order/sale/cancel',
  ORDER_RETURN_ALL = '/callback/order/return/all',
  ORDER_CHANGE = '/callback/order/change',
  TABLE_MOVE = '/callback/table_change/move',
  SOLD_OUT = '/callback/sold_out/change',
}
export interface OkPosSalePartialData {
  TABLE_CD: string;
  EXTERNAL_ORDER_NO: string;
  PAY_AMT: string;
  PAY_TYPE: string;
}
export interface OkPosSaleAllData {
  SALE_DATE: string;
  POS_NO: string;
  BILL_NO: string;
  PAY_AMT: string;
  TABLE_CD: string;
  PAY_TYPE: string;
  EXTERNAL_ORDER_NO: string;
}
export interface OkPosSaleCancelData {
  TABLE_CD: string;
  EXTERNAL_ORDER_NO: string;
  PAY_AMT: string;
  APPR_NO: string;
  APPR_DATE: string;
}
export interface OkPosReturnAllData {
  SALE_DATE: string;
  POS_NO: string;
  BILL_NO: string;
  EXTERNAL_ORDER_NO: string;
}
export interface OkPosOrderInfoChnageData {
  PROD_CD: string;
  PROD_NM: string;
  PROD_AMT: string;
  DCM_AMT: string;
  DC_AMT: string;
  POINT_AMT: string;
  VAT_AMT: string;
  SVC_TIP_AMT: string;
  TAX_AMT: string;
  NOTAX_AMT: string;
  PROD_CNT: string;
  PROD_TYPE: string;
  SDS_PTCD: string;
  SDS_GRPCD: string;
  SDS_CLSCD: string;
  SDS_CD: string;
  SDA_CLSCD: string;
  SDA_CD: string;
  SDS_ORG_DTL_NO: string;
}
export interface OkPosOrderChangeData {
  TABLE_CD: string;
  EXTERNAL_ORDER_NO: string;
  REMAIN_AMT: string;
  DATA: OkPosOrderInfoChnageData[];
}
export interface OkPosTableMoveData {
  BEFORE_TABLE_GR_CD: string;
  BEFORE_TABLE_CD: string;
  BEFORE_TABLE_NM: string;
  TABLE_GR_CD: string;
  TABLE_CD: string;
  TABLE_NM: string;
  EXTERNAL_ORDER_NO: string;
}
export interface OkPosSoldOutData {
  PROD_CD: string;
  SOLD_OUT_YN: string;
}
