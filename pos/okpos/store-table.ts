export interface OkPosTableData {
  TABLE_CD: string;
  TABLE_NM: string;
  TABLE_GR_CD: string;
  TABLE_GR_NM: string;
  USE_YN: string;
  INS_DT: string;
  UPD_DT: string;
}

export interface OkPosSicpamaTable extends OkPosTableData {
  id: number;
}

export interface OkPosTablesData {
  TABLE: OkPosTableData[];
}
