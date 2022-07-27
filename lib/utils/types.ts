import { View } from "doric";

export type BaseProps = {
  innerElement: any;
  tap?: Function;
  bounds?: any;
  declaredStyle?: Record<string, string>;
  staticStyle?: Record<string, string>;
};
