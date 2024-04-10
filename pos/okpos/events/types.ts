export interface OkPosEvent<T> {
  eventName: OKPOS_EVENT;
  data: T;
}

export enum OKPOS_EVENT {
  CLEAR_TABLE,
  ORDER,
}
