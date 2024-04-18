export interface OrderInfoCmdReqData {
  TABLE_CD?: string;
  EXTERNAL_ORDER_NO?: string;
  EXTERNAL_ORDER_SEQ?: string;
}

export interface ApprInfo {
  APPR_DC_NO: string; // Linked payment number (issued by partners)
  APPR_DC_DATE: string; // payment date
}

export interface CardInfo {
  APPR_DC_NO: string;
  APPR_DC_DATE: string;
  CRD_CARD_NO: string;
  APPR_REQ_AMT: string;
  SVC_TIP_AMT?: string;
  VAT_AMT?: string;
  NO_VAT_AMT?: string;
  INST_NM_CNT?: string;
  CARD_IN_FG: string;
  APPR_DATE: string;
  APPR_TIME: string;
  APPR_NO: string;
  ISS_CRDCP_CD: string;
  ISS_CRDCP_NM: string;
  PUR_CRDCP_CD: string;
  PUR_CRDCP_NM: string;
  APPR_MSG?: string;
  VAN_TERM_NO: string;
  CRDCP_TERM_NO?: string;
  PAY_TYPE: string;
  VAN_CD: string;
}

export interface EasyPayInfo {
  APPR_DC_NO: string;
  APPR_DC_DATE: string;
  PAY_CARD_NO: string;
  APPR_REQ_AMT: string;
  SVC_TIP_AMT?: string;
  VAT_AMT?: string;
  NO_VAT_AMT?: string;
  INST_NM_CNT?: string;
  APPR_DATE: string;
  APPR_TIME: string;
  APPR_NO: string;
  PAYCP_CD: string;
  ISS_CRDCP_CD: string;
  ISS_CRDCP_NM: string;
  PUR_CRDCP_CD: string;
  PUR_CRDCP_NM: string;
  APPR_MSG: string;
  CRDCP_TERM_NO: string;
  PAY_TYPE: string;
  VAN_CD: string;
}

export interface CashInfo {
  APPR_DC_NO: string; // 연동 결제번호 (제휴사에서 발행 (Integrated payment number (issued by the partner company))
  APPR_DC_DATE: string; // 연동 결제일자(yyyyMMdd) (Payment date)
  ID_TYPE: string; // 결제유형(“0”:비승인, “1”:개인, “2”:사업자, “5”:자진발급) (Payment type (“0”: non-approval, “1”: individual, “2”: business, “5”: voluntary issuance))
  ID_NO: string; // 마스킹처리 된 식별번호(결제유형이 “0”이면 비어있어도됨) (Masked identification number (if payment type is “0”, it can be empty))
  APPR_REQ_AMT: string; // 승인금액 (Approval amount)
  SVC_TIP_AMT?: string; // 봉사료 (Service charge)
  VAT_AMT?: string; // 부가세 (VAT)
  NO_VAT_AMT?: string; // 면세금액 (Tax-free amount)
  APPR_DATE: string; // 승인일자(결제유형이 “0”이면 비어있어도 됨) (Approval date (if payment type is “0”, it can be empty))
  APPR_TIME: string; // 승인일자(결제유형이 “0”이면 비어있어도 됨) (Approval date (if payment type is “0”, it can be empty))
  APPR_NO: string; // 승인일자(결제유형이 “0”이면 비어있어도 됨) (Approval date (if payment type is “0”, it can be empty))
  APPR_MSG?: string; // 승인메세지 (Approval message)
  PAY_TYPE: string; // 결제구분 (Y : 결제승인, N : 승인취소) (Payment division (Y: payment approval, N: approval cancellation))
  VAN_CD: string; //
}

export interface OrderInfo {
  ORDER_TYPE: string; // Y = order / N = cancel
  PROD_CD: string; // menu code
  PROD_AMT: string; // sales unit price
  DCM_AMT: string; // net sales (sales unit price * quantity - discount amount)
  DC_AMT?: string; // discount amount
  POINT_AMT?: string; // point discount amount
  VAT_AMT: string; // VAT amount
  SVC_TIP_AMT?: string; // 봉사료 (Service charge)
  TAX_AMT?: string; // taxable sales
  NO_TAX_AMT?: string; // tax-free amount
  PROD_CNT: string; // menu quantity
  PROD_TYPE: string; // menu type (0: general, 1: select, 2: property)
  SDS_PTCD: string; // SDS_PTCD (selection menu parent code)
  SDS_GRPCD: string; // SDS_GRPCD (selection menu group code)
  SDS_CLSCD: string; // SDS_CLSCD (selection classification code)
  SDS_CD: string; // SDS_CD (selection code)
  SDA_CLSCD: string; // SDA_CLSCD (property classification code)
  SDA_CD: string; // SDA_CD (property code)
  SDS_ORG_DTL_NO?: string; // SDS_ORG_DTL_NO (side menu source number)
  APPR_INFO?: ApprInfo[]; // payment info
}

export interface OrderRequestCmdReqData {
  TABLE_CD: string;
  EXTERNAL_ORDER_NO: string;
  EXTERNAL_ORDER_SEQ: string;
  EXTERNAL_ORDER_DATE: string;
  EXTERNAL_SEND_DATE?: string;
  KITCHEN_MEMO?: string;
  GST_CNT?: string;
  FLOOR_NO?: string;
  ORDER_INFO?: OrderInfo[];
  CARD_INFO?: CardInfo[];
  EASYPAY_INFO?: EasyPayInfo[];
  CASH_INFO?: CashInfo[];
}
