import { IMenu, InventoryTransactionReason, IStore } from '..';

export interface IInventoryTransaction {
  id?: number;
  inventoryItemId?: number;
  inventoryItem?: IInventoryItem;
  quantityChange?: number;
  inventoryTransactionReason?: InventoryTransactionReason;
}
export interface IInventoryItem {
  id?: number;
  name?: string;
  quantity?: number;
  storeId?: number;
  store?: IStore;
  transactions?: IInventoryTransaction[];
  menuToInventoryItems?: IMenuToInventoryItem[];
}
export interface IMenuToInventoryItem {
  id?: number;
  menuId?: number;
  menu?: IMenu;
  inventoryItemId?: number;
  inventoryItem?: IInventoryItem;
  menuQuantityRequired?: number; // Quantity of the inventory item required for one unit of the menu item
}
