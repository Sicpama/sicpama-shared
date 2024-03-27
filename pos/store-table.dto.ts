import { OkPosTable } from '..';

export interface PosTableData {
  raptor?: RaptorTableData;
  okpos?: OkPosTable;
}

export interface RaptorTableData {
  salesno: number;
  splitno: number;
  rcptno?: string;
  operatorno?: number;
}
