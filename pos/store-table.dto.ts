import { OkPosTableData } from '..';

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
