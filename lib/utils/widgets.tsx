import { VLayout, jsx, Text, Image } from "doric";
import { BaseProps } from "./types";

export type DivProps = Partial<VLayout> & BaseProps;
export type HProps = Partial<Text> & BaseProps;
export type ImgProps = Partial<Image> & BaseProps;

export function vdiv(props: DivProps) {
  return <VLayout props={props as Partial<VLayout>} space={5}></VLayout>;
}

export function vh1(props: HProps) {
  if (props.innerElement && props.innerElement instanceof Text) {
    const text = props.innerElement as Text;
    props.innerElement = undefined;
    props.text = text.text;
  }
  return <Text props={props} textSize={20} fontStyle="bold"></Text>;
}

export function vh2(props: HProps) {
  if (props.innerElement && props.innerElement instanceof Text) {
    const text = props.innerElement as Text;
    props.innerElement = undefined;
    props.text = text.text;
  }
  return <Text props={props} textSize={16} fontStyle="bold"></Text>;
}

export function vh3(props: HProps) {
  if (props.innerElement && props.innerElement instanceof Text) {
    const text = props.innerElement as Text;
    props.innerElement = undefined;
    props.text = text.text;
  }
  return <Text props={props} textSize={14} fontStyle="bold"></Text>;
}

export function vimg(props: ImgProps) {
  return <Image props={props}></Image>;
}
