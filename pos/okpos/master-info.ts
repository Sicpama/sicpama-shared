import {
  OkPosClsLmCode,
  OkPosClsMmCode,
  OkPosClsSmCode,
  OkPosProdData,
  OkPosSdaCdCode,
  OkPosSdaClCode,
  OkPosSdsCdCode,
  OkPosSdsClCode,
  OkPosSdsGrpCode,
  OkPosTable,
  OkPosTuClsCode,
  OkPosTuKeyCode,
  OkPosTuKeyWithProdCode,
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
  PRODS?: OkPosProdData[];
  TUCLSCODE?: OkPosTuClsCode[];
  TUKEYCODE?: OkPosTuKeyCode[];
  TUKEYCODE_WITH_PROD?: OkPosTuKeyWithProdCode[];
}

export interface OkPosMasterInfoResponseDto<T> {
  inserted?: T[];
  updated?: T[];
}
