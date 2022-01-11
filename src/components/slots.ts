
export type SlotTemplate = {
  component?: string;
  slot: string;
  key?: string;
  props?: any;
  code?: string;
  children?: SlotTemplate[];
};

export type DynamicSlotTemplate = SlotTemplate | ((props: any) => SlotTemplate);
