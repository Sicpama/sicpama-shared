export interface OrderInfoCmdReqData {
  TABLE_CD?: string;
  EXTERNAL_ORDER_NO?: string;
  EXTERNAL_ORDER_SEQ?: string;
}

export interface ApprInfo {
  APPR_DC_NO?: string;
  APPR_DC_DATE?: string;
}

export interface CardInfo {
  APPR_DC_NO?: string;
  APPR_DC_DATE?: string;
  CRD_CARD_NO?: string;
  APPR_REQ_AMT?: string;
  SVC_TIP_AMT?: string;
  VAT_AMT?: string;
  NO_VAT_AMT?: string;
  INST_NM_CNT?: string;
  VALID_TERM?: string;
  CARD_IN_FG?: string;
  APPR_DATE?: string;
  APPR_TIME?: string;
  APPR_NO?: string;
  CRDCP_CD?: string;
  ISS_CRDCP_CD?: string;
  ISS_CRDCP_NM?: string;
  PUR_CRDCP_CD?: string;
  PUR_CRDCP_NM?: string;
  APPR_MSG?: string;
  VAN_TERM_NO?: string;
  VAN_SLIP_NO?: string;
  CRDCP_TERM_NO?: string;
  PAY_TYPE?: string;
  VAN_CD?: string;
}

export interface EasyPayInfo {
  APPR_DC_NO?: string;
  APPR_DC_DATE?: string;
  PAY_CARD_NO?: string;
  APPR_REQ_AMT?: string;
  SVC_TIP_AMT?: string;
  VAT_AMT?: string;
  NO_VAT_AMT?: string;
  INST_NM_CNT?: string;
  VALID_TERM?: string;
  PAY_METHOD_FG?: string;
  APPR_DATE?: string;
  APPR_TIME?: string;
  APPR_NO?: string;
  PAYCP_CD?: string;
  ISS_CRDCP_CD?: string;
  ISS_CRDCP_NM?: string;
  PUR_CRDCP_CD?: string;
  PUR_CRDCP_NM?: string;
  APPR_MSG?: string;
  CRDCP_TERM_NO?: string;
  PAY_TYPE?: string;
  VAN_CD?: string;
}

export interface CashInfo {
  APPR_DC_NO?: string;
  APPR_DC_DATE?: string;
  ID_TYPE?: string;
  ID_NO?: string;
  APPR_REQ_AMT?: string;
  SVC_TIP_AMT?: string;
  VAT_AMT?: string;
  NO_VAT_AMT?: string;
  APPR_DATE?: string;
  APPR_TIME?: string;
  APPR_NO?: string;
  APPR_MSG?: string;
  PAY_TYPE?: string;
  VAN_CD?: string;
}

export interface OrderInfo {
  ORDER_TYPE?: string;
  APPR_INFO?: ApprInfo[];
}

export interface OrderRequestCmdReqData {
  TABLE_CD?: string;
  ORDER_INFO?: OrderInfo[];
  CARD_INFO?: CardInfo[];
  EASYPAY_INFO?: EasyPayInfo[];
  CASH_INFO?: CashInfo[];
}
