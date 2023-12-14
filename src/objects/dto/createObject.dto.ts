export class CreateObjectDto {
  readonly ownerId: string;
  readonly tenantId: string;
  readonly city: string;
  readonly liveComplex: string;
  readonly address: string;
  readonly parking: string;
  readonly termOfRent: number;
  readonly price: number;
  readonly entryDay: string;
  readonly entryHour: number;
  readonly leaveDay: string;
  readonly leaveHour: number;
  readonly width: number;
  readonly height: number;
  readonly status: string;
  readonly commentary: string;
  readonly vip: boolean;
  readonly maxWidth: number;
  readonly maxHeight: number;
  readonly description: string;
  readonly specialConditions: string;
  readonly landLordRequirements: string;
  readonly photos: string[];
  readonly rentConfirmation: boolean;
}
