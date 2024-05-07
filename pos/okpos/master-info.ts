import {
  OkPosClsLmCode,
  OkPosClsMmCode,
  OkPosClsSmCode,
  OkPosMenuData,
  OkPosSdaCdCode,
  OkPosSdaClCode,
  OkPosSdsCdCode,
  OkPosSdsClCode,
  OkPosSdsGrpCode,
  OkPosTable,
} from '../..';

export interface OkPosMasterInfo {
  TABLE?: OkPosTable[];
  SDACLCODE?: OkPosSdaClCode[];
  SDACDCODE?: OkPosSdaCdCode[];
  SDSCDCODE?: OkPosSdsCdCode[];
  SDSCLCODE?: OkPosSdsClCode[];
  SDSGRCODE?: OkPosSdsGrpCode[];
  CLSLMCODE?: OkPosClsLmCode[];
  CLSMMCODE?: OkPosClsMmCode[];
  CLSSMCODE?: OkPosClsSmCode[];
  PRODS?: OkPosMenuData[];
}

export interface OkPosMasterInfoResponseDto<T> {
  inserted?: T[];
  updated?: T[];
}
