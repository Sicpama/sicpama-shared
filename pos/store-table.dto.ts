export interface PosTableData {
  raptor?: RaptorTableData;
  okpos?: OkPosTableData;
}

export interface RaptorTableData {
  salesno: number;
  splitno: number;
  rcptno?: string;
  operatorno?: number;
}

export interface OkPosTableData {
  TABLE_CD: string;
  TABLE_NM: string;
  TABLE_GR_CD: string;
  TABLE_GR_NM: string;
  USE_YN: string;
  INS_DT: string;
  UPD_DT: string;
}
