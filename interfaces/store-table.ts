import { ICustomerRequest, IOrder, IStore, Nullable, PosTableData } from '..';

export interface IStoreTable {
  id: number;
  tableNumber: string;
  token: string;
  sessionId: string;
  storeId: number;
  isVirtual: boolean;
  posData?: Nullable<PosTableData>;
  store: IStore;
  orders: IOrder[];
  customerRequests: ICustomerRequest[];
}
