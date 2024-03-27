export interface OkPosCategory {
  large?: OkPosClsLmCode;
  medium?: OkPosClsMmCode;
  small?: OkPosClsSmCode;
}
export interface OkPosSicpamaLargeCategory extends OkPosClsLmCode {
  id: number;
  name: string;
}
export interface OkPosSicpamaMediumCategory extends OkPosClsMmCode {
  id: number;
  name: string;
}
export interface OkPosSicpamaSmallCategory extends OkPosClsSmCode {
  id: number;
  name: string;
}
// Large category
export interface OkPosClsLmData {
  CLSLMCODE: OkPosClsLmCode[];
}
export interface OkPosClsLmCode {
  LCLS_CD: string;
  LCLS_NM: string;
  USE_YN: string;
  INS_DT: string;
  UPD_DT: string;
}
// Medium category
export interface OkPosClsMmData {
  CLSMMCODE: OkPosClsMmCode[];
}
export interface OkPosClsMmCode {
  LCLS_CD: string;
  MCLS_CD: string;
  MCLS_NM: string;
  USE_YN: string;
  INS_DT: string;
  UPD_DT: string;
}
// Small category
export interface OkPosClsSmData {
  CLSSMCODE: OkPosClsSmCode[];
}
export interface OkPosClsSmCode {
  LCLS_CD: string;
  MCLS_CD: string;
  SCLS_CD: string;
  SCLS_NM: string;
  USE_YN: string;
  INS_DT: string;
  UPD_DT: string;
}
