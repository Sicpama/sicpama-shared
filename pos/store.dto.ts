import { OkPosStore } from './okpos/store';

export interface PosStoreData {
  raptor?: RaptorStoreData;
  okpos?: OkPosStore;
}

export interface RaptorStoreData {
  posId: string;
  username: string;
  password: string;
  paymentType: number;
  cloudUrl?: string;
  localUrl?: string;
  operatorId?: string;
}
