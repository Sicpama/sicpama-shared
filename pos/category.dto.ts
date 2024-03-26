export interface CategoryPosData {
  raptor?: RaptorCategoryData;
  // Currently no okpos categories
}

export interface RaptorCategoryData {
  groupno: string;
  groupname: string;
  departmentno: string;
  departmentname: string;
}
