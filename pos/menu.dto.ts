export class MenuPosData {
  raptor?: RaptorMenuData;
  okpos?: OkPosMenuData;
}

export interface RaptorMenuData {
  pluno: string;
  desc1: string;
  desc2: string;
  itemtype: string;
  openitem: boolean;
  groupno: string;
  groupname: string;
}

export interface OkPosMenuData {
  CODE: string;
}

export class MenuOptionChoicePosData {
  raptor?: RaptorMenuOptionChoiceData;
  // Currently no optiomns for okpos
}

export type RaptorMenuOptionChoiceData = {
  pluno: string;
  desc1: string;
  desc2: string;
  itemtype: string;
};
