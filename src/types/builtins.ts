import React from 'react';

export type SlotProps = {
  slot: string;
  [prop: string]: any;
};

declare class SlotComponent extends React.Component<SlotProps> {}

export type DesignModeBuiltIns = {
  Slot: SlotComponent;
};

export type RunModeBuiltIns = {
  Slot: SlotComponent;
};
