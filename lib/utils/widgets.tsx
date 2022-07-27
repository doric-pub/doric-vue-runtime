import { VLayout, jsx, Text, Image, View, Color } from "doric";
import { BaseProps } from "./types";

export type DivProps = BaseProps;

export type HProps = BaseProps;

export type ImgProps = { src?: string } & BaseProps;

export type HrefProps = {
  href: string;
} & BaseProps;

function preDealProps<T extends View, P extends BaseProps>(
  props: P,
  fn?: (src: typeof props, target: Partial<T>) => void
) {
  const viewProps: Partial<T> = {};
  if (fn) {
    fn(props, viewProps);
  }
  if (props.tap) {
    const tap = props.tap;
    viewProps.onClick = () => {
      Reflect.apply(tap, props.bounds, []);
    };
  }
  if (props.staticStyle || props.declaredStyle) {
    const style = { ...props.staticStyle, ...props.declaredStyle };
  }
  return viewProps;
}

export function vdiv(props: DivProps) {
  return <VLayout props={preDealProps(props)} space={5}></VLayout>;
}

export function vh1(props: HProps) {
  return (
    <Text
      props={preDealProps(props, (e, target) => {
        if (e.innerElement && e.innerElement instanceof Text) {
          const text = e.innerElement as Text;
          target.text = text.text;
        }
      })}
      textSize={20}
      fontStyle="bold"
    ></Text>
  );
}

export function vh2(props: HProps) {
  return (
    <Text
      props={preDealProps(props, (e, target) => {
        if (e.innerElement && e.innerElement instanceof Text) {
          const text = e.innerElement as Text;
          target.text = text.text;
        }
      })}
      textSize={16}
      fontStyle="bold"
    ></Text>
  );
}

export function vh3(props: HProps) {
  return (
    <Text
      textSize={14}
      fontStyle="bold"
      props={preDealProps(props, (e, target) => {
        if (e.innerElement && e.innerElement instanceof Text) {
          const text = e.innerElement as Text;
          target.text = text.text;
        }
      })}
    ></Text>
  );
}

export function vimg(props: ImgProps) {
  return (
    <Image
      props={preDealProps(props, (e, target) => {
        if (e.src) {
          target.imageUrl = e.src;
        }
      })}
    ></Image>
  );
}

export function va(props: HrefProps) {
  return (
    <Text
      textSize={12}
      fontStyle="italic"
      textColor={Color.BLUE}
      onClick={() => {
        console.log(`Clicked ${props.href}`);
      }}
      props={preDealProps(props, (e, target) => {
        if (e.innerElement && e.innerElement instanceof Text) {
          const text = e.innerElement as Text;
          target.text = text.text;
        }
      })}
    ></Text>
  );
}
