export type StatePatcher<S = any> = ((oldState: S) => S) | S;


export type ComponentStateDefinition = {
  label: string;
  key: string;
};
