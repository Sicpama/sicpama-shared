export interface PosTableData {
  raptor?: RaptorTableData;
  okpos?: OkPosTableData;
}

export interface RaptorTableData {
  operatorno?: number;
  salesno: number;
  splitno: number;
  rcptno?: string;
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
