import {
  VLayout,
  jsx,
  Text,
  Image,
  View,
  Color,
  layoutConfig,
  LayoutSpec,
  loge,
  FlexConfig,
  Direction,
  FlexDirection,
  Wrap,
  Justify,
  Align,
  HLayout,
  Stack,
} from "doric";
import { BaseProps } from "./types";

export type DivProps = BaseProps;

export type ViewProps = BaseProps;

export type UlProps = BaseProps;

export type LiProps = BaseProps;

export type HProps = BaseProps;

export type ImgProps = {
  src: string;
} & BaseProps;

export type HrefProps = {
  href: string;
} & BaseProps;

export type AstTextProps = {
  text: string;
} & BaseProps;

export type TextProps = {
  text?: string;
} & BaseProps;

export type BrProps = BaseProps;

export function pixelString2Number(v: string) {
  return parseFloat(v.substring(0, v.indexOf("px")));
}
export function string2Color(v: string) {
  if (v.startsWith("#")) {
    return Color.parse(v);
  } else {
    switch (v) {
      case "red":
        return Color.RED;
      case "green":
        return Color.GREEN;
      case "yellow":
        return Color.YELLOW;
      case "white":
        return Color.WHITE;
      case "black":
        return Color.BLACK;
      case "blue":
        return Color.BLUE;
      case "gray":
        return Color.GRAY;
      case "transparent":
        return Color.TRANSPARENT;
      default:
        loge(`Doric do not support color:${v}`);
        return Color.TRANSPARENT;
    }
  }
}
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
    viewProps.onClick = tap;
  }
  if (props.staticStyle || props.declaredStyle) {
    const style = { ...props.staticStyle, ...props.declaredStyle };
    const config = layoutConfig().fit();
    if (style.width) {
      viewProps.width = pixelString2Number(style.width);
      config.widthSpec = LayoutSpec.JUST;
    }

    if (style.height) {
      viewProps.height = pixelString2Number(style.width);
      config.heightSpec = LayoutSpec.JUST;
    }

    if (style.margin) {
      const margin = pixelString2Number(style.margin);
      config.margin = {
        left: margin,
        right: margin,
        top: margin,
        bottom: margin,
      };
    }

    if (style["margin-left"]) {
      const margin: typeof config.margin = config.margin ?? {};
      margin.left = pixelString2Number(style["margin-left"]);
      config.margin = margin;
    }

    if (style["margin-top"]) {
      const margin: typeof config.margin = config.margin ?? {};
      margin.top = pixelString2Number(style["margin-top"]);
      config.margin = margin;
    }

    if (style["margin-bottom"]) {
      const margin: typeof config.margin = config.margin ?? {};
      margin.bottom = pixelString2Number(style["margin-bottom"]);
      config.margin = margin;
    }

    if (style["margin-right"]) {
      const margin: typeof config.margin = config.margin ?? {};
      margin.right = pixelString2Number(style["margin-right"]);
      config.margin = margin;
    }

    if (style.padding) {
      const padding = pixelString2Number(style.padding);
      viewProps.padding = {
        left: padding,
        right: padding,
        top: padding,
        bottom: padding,
      };
    }
    if (style["border-style"]) {
      if (style["border-style"] === "solid") {
        const width = pixelString2Number(style["border-width"] ?? "1px");
        const color = string2Color(style["border-color"] ?? "#000000");
        viewProps.border = { width, color };
      } else {
        loge(`Doric do not support border-style:${style["border-style"]} yet`);
      }
    }
    if (style["padding-left"]) {
      const padding: typeof viewProps.padding = viewProps.padding ?? {};
      padding.left = pixelString2Number(style["padding-left"]);
      viewProps.padding = padding;
    }

    if (style["padding-right"]) {
      const padding: typeof viewProps.padding = viewProps.padding ?? {};
      padding.right = pixelString2Number(style["padding-right"]);
      viewProps.padding = padding;
    }

    if (style["padding-top"]) {
      const padding: typeof viewProps.padding = viewProps.padding ?? {};
      padding.top = pixelString2Number(style["padding-top"]);
      viewProps.padding = padding;
    }

    if (style["padding-bottom"]) {
      const padding: typeof viewProps.padding = viewProps.padding ?? {};
      padding.bottom = pixelString2Number(style["padding-bottom"]);
      viewProps.padding = padding;
    }

    if (style["border-radius"]) {
      viewProps.corners = pixelString2Number(style["border-radius"]);
    }
    if (style["border-bottom-left-radius"]) {
      const corners: typeof viewProps.corners = {};
      if (typeof viewProps.corners === "number") {
        corners.leftBottom =
          corners.leftTop =
          corners.rightTop =
          corners.rightBottom =
            viewProps.corners;
      } else if (typeof viewProps.corners === "object") {
        corners.leftBottom = viewProps.corners.leftBottom;
        corners.leftTop = viewProps.corners.leftTop;
        corners.rightTop = viewProps.corners.rightTop;
        corners.rightBottom = viewProps.corners.rightBottom;
      }
      corners.leftBottom = pixelString2Number(
        style["border-bottom-left-radius"]
      );
      viewProps.corners = corners;
    }
    if (style["border-bottom-right-radius"]) {
      const corners: typeof viewProps.corners = {};
      if (typeof viewProps.corners === "number") {
        corners.leftBottom =
          corners.leftTop =
          corners.rightTop =
          corners.rightBottom =
            viewProps.corners;
      } else if (typeof viewProps.corners === "object") {
        corners.leftBottom = viewProps.corners.leftBottom;
        corners.leftTop = viewProps.corners.leftTop;
        corners.rightTop = viewProps.corners.rightTop;
        corners.rightBottom = viewProps.corners.rightBottom;
      }
      corners.rightBottom = pixelString2Number(
        style["border-bottom-right-radius"]
      );
      viewProps.corners = corners;
    }
    if (style["border-top-left-radius"]) {
      const corners: typeof viewProps.corners = {};
      if (typeof viewProps.corners === "number") {
        corners.leftBottom =
          corners.leftTop =
          corners.rightTop =
          corners.rightBottom =
            viewProps.corners;
      } else if (typeof viewProps.corners === "object") {
        corners.leftBottom = viewProps.corners.leftBottom;
        corners.leftTop = viewProps.corners.leftTop;
        corners.rightTop = viewProps.corners.rightTop;
        corners.rightBottom = viewProps.corners.rightBottom;
      }
      corners.leftTop = pixelString2Number(style["border-top-left-radius"]);
      viewProps.corners = corners;
    }
    if (style["border-top-right-radius"]) {
      const corners: typeof viewProps.corners = {};
      if (typeof viewProps.corners === "number") {
        corners.leftBottom =
          corners.leftTop =
          corners.rightTop =
          corners.rightBottom =
            viewProps.corners;
      } else if (typeof viewProps.corners === "object") {
        corners.leftBottom = viewProps.corners.leftBottom;
        corners.leftTop = viewProps.corners.leftTop;
        corners.rightTop = viewProps.corners.rightTop;
        corners.rightBottom = viewProps.corners.rightBottom;
      }
      corners.rightTop = pixelString2Number(style["border-top-right-radius"]);
      viewProps.corners = corners;
    }

    if (style.display === "flex") {
      const flexConfig: FlexConfig = {};
      switch (style.direction) {
        case "ltr":
          flexConfig.direction = Direction.LTR;
          break;
        case "rtl":
          flexConfig.direction = Direction.RTL;
          break;
      }
      switch (style["flex-direction"]) {
        case "column":
          flexConfig.flexDirection = FlexDirection.COLUMN;
          break;
        case "column-reverse":
          flexConfig.flexDirection = FlexDirection.COLUMN_REVERSE;
          break;
        case "row":
          flexConfig.flexDirection = FlexDirection.ROW;
          break;
        case "row-reverse":
          flexConfig.flexDirection = FlexDirection.ROW_REVERSE;
          break;
      }

      switch (style["flex-wrap"]) {
        case "nowrap":
          flexConfig.flexWrap = Wrap.NO_WRAP;
          break;
        case "wrap":
          flexConfig.flexWrap = Wrap.WRAP;
          break;
        case "wrap-reverse":
          flexConfig.flexWrap = Wrap.WRAP_REVERSE;
          break;
      }

      switch (style["justify-content"]) {
        case "flex-start":
          flexConfig.justifyContent = Justify.FLEX_START;
          break;
        case "flex-end":
          flexConfig.justifyContent = Justify.FLEX_END;
          break;
        case "center":
          flexConfig.justifyContent = Justify.CENTER;
          break;
        case "space-between":
          flexConfig.justifyContent = Justify.SPACE_BETWEEN;
          break;
        case "space-around":
          flexConfig.justifyContent = Justify.SPACE_AROUND;
          break;
        case "space-evently":
          flexConfig.justifyContent = Justify.SPACE_EVENLY;
          break;
      }

      switch (style["align-items"]) {
        case "stretch":
          flexConfig.alignItems = Align.STRETCH;
          break;
        case "flex-start":
          flexConfig.alignItems = Align.FLEX_START;
          break;
        case "flex-end":
          flexConfig.alignItems = Align.FLEX_END;
          break;
        case "center":
          flexConfig.alignItems = Align.CENTER;
          break;
        case "stretch":
          flexConfig.alignItems = Align.STRETCH;
          break;
        case "baseline":
          flexConfig.alignItems = Align.BASELINE;
          break;
        case "space-around":
          flexConfig.alignItems = Align.SPACE_AROUND;
          break;
        case "space-between":
          flexConfig.alignItems = Align.SPACE_BETWEEN;
          break;
      }

      if (style["flex"]) {
        flexConfig.flex = parseInt(style["flex"]);
      }

      viewProps.flexConfig = flexConfig;
    }

    if (style.position === "relative") {
      if (style.top) {
        viewProps.translationY = pixelString2Number(style.top);
      }
      if (style.bottom) {
        viewProps.translationY = -pixelString2Number(style.bottom);
      }
      if (style.left) {
        viewProps.translationX = pixelString2Number(style.left);
      }
      if (style.right) {
        viewProps.translationX = -pixelString2Number(style.right);
      }
    } else if (style.position === "absolute") {
      if (style.top) {
        viewProps.top = pixelString2Number(style.top);
      }
      if (style.bottom) {
        viewProps.bottom = pixelString2Number(style.bottom);
      }
      if (style.left) {
        viewProps.left = pixelString2Number(style.left);
      }
      if (style.right) {
        viewProps.right = pixelString2Number(style.right);
      }
    }

    viewProps.layoutConfig = config;

    if (style["background-color"]) {
      viewProps.backgroundColor = Color.parse(style["background-color"]);
    }
  }
  return viewProps;
}

export function Vdiv(props: DivProps) {
  return <VLayout props={preDealProps(props)} space={5}></VLayout>;
}

export function Vview(props: ViewProps) {
  return (
    <VLayout
      props={preDealProps(props, (e, target) => {
        if (e.innerElement) {
          target.innerElement = e.innerElement;
        }
      })}
      space={5}
    ></VLayout>
  );
}

export function Vh1(props: HProps) {
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

export function Vh2(props: HProps) {
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

export function Vh3(props: HProps) {
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

export function Vimg(props: ImgProps) {
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

export function Va(props: HrefProps) {
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

export function Vul(props: BaseProps) {
  return <HLayout props={preDealProps(props)}></HLayout>;
}

export function Vli(props: BaseProps) {
  return <Stack props={preDealProps(props)}></Stack>;
}

export function Vbr(props: BaseProps) {
  return <Stack props={preDealProps(props)}></Stack>;
}

export function Vasttext(props: AstTextProps) {
  return (
    <Text
      props={preDealProps(props, (e, target) => {
        target.text = props.text;
      })}
    ></Text>
  );
}

export function Vtext(props: TextProps) {
  return (
    <Text
      props={preDealProps(props, (e, target) => {
        if (e.innerElement && e.innerElement instanceof Text) {
          const text = e.innerElement as Text;
          target.text = text.text;
        }
      })}
    ></Text>
  );
}

export function Vastexpression(props: AstTextProps) {
  return (
    <Text
      props={preDealProps(props, (e, target) => {
        target.text = props.text;
      })}
    ></Text>
  );
}
