import React from 'react';

export type DesignModeBuiltIns = {
  DndContent: React.Component | ((props: any) => React.ReactElement);
  [key: string]: React.Component | ((props: any) => React.ReactElement);
};

export type RunModeBuiltIns = {
  [key: string]: React.Component | ((props: any) => React.ReactElement);
};
