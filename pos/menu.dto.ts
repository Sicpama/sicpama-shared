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

export interface OkPosMenuData {
  CODE: string;
}

export class MenuOptionChoicePosData {
  raptor?: RaptorMenuOptionChoiceData;
  // Currently no optiomns for okpos
}

export type RaptorMenuOptionChoiceData = {
  pluno: string;
  itemtype: string;
  openitem?: boolean;
  desc1?: string;
  desc2?: string;
};
