import {
  IBaseMenuSnapshotResDto,
  IMenu,
  IOrder,
  Nullable,
  OrderItemStatus,
  PosOrderItemData,
} from '..';

export interface IOrderItem {
  id: string;
  orderId: string;
  mocKey: string;
  menuId: number;
  menuQuantity: number;
  menuUnitPrice: number;
  shareableNumerator: number;
  totalPrice: number;
  sicpamaCouponDiscount: number;
  storeCouponDiscount: number;
  menuSnapshot: IBaseMenuSnapshotResDto;
  isMenuShareable: boolean;
  status: OrderItemStatus;
  order: IOrder;
  menu?: IMenu;
  posData?: Nullable<PosOrderItemData>;
}
