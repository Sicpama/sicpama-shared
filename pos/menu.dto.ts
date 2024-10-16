import { OkPosMenuData } from './okpos/menu';

export class MenuPosData {
  raptor?: RaptorMenuData;
  okpos?: OkPosMenuData;
}

export interface RaptorMenuData {
  pluno: string;
  itemtype: string;
  openitem?: boolean;
  desc1?: string;
  desc2?: string;
  groupno?: string;
  groupname?: string;
}
export class MenuOptionChoicePosData {
  raptor?: RaptorMenuOptionChoiceData;
  // Currently no optiomns for okpos
}

export interface RaptorMenuOptionChoiceData {
  pluno: string;
  itemtype: string;
  openitem?: boolean;
  desc1?: string;
  desc2?: string;
}
