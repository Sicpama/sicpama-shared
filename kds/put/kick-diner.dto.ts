import { OrderStatus } from '../..';

export interface KdsKickDinerResDto {
  storeTableId: number;
  orderId: string;
  orderStatus: OrderStatus;
}
