import { OkPosCategory } from '..';

export interface CategoryPosData {
  raptor?: RaptorCategoryData;
  okpos?: OkPosCategory;
}

export interface RaptorCategoryData {
  groupno: string;
  groupname: string;
  departmentno: string;
  departmentname: string;
}
