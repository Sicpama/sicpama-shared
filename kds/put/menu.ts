export interface KdsBulkUpdateMenuAvailabilityBodyDto {
  id: number;
}

export interface KdsBulkUpdateMenusAvailabilityBodyDto {
  data: KdsBulkUpdateMenuAvailabilityBodyDto[];
  isAvailable: boolean;
}
