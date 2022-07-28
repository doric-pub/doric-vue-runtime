'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var doric = require('doric');

function pixelString2Number(v) {
    return parseFloat(v.substring(0, v.indexOf("px")));
}
function string2Color(v) {
    if (v.startsWith("#")) {
        return doric.Color.parse(v);
    }
    else {
        switch (v) {
            case "red":
                return doric.Color.RED;
            case "green":
                return doric.Color.GREEN;
            case "yellow":
                return doric.Color.YELLOW;
            case "white":
                return doric.Color.WHITE;
            case "black":
                return doric.Color.BLACK;
            case "blue":
                return doric.Color.BLUE;
            case "gray":
                return doric.Color.GRAY;
            case "transparent":
                return doric.Color.TRANSPARENT;
            default:
                doric.loge(`Doric do not support color:${v}`);
                return doric.Color.TRANSPARENT;
        }
    }
}
function preDealProps(props, fn) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k;
    const viewProps = {};
    if (fn) {
        fn(props, viewProps);
    }
    if (props.tap) {
        const tap = props.tap;
        viewProps.onClick = tap;
    }
    if (props.staticStyle || props.declaredStyle) {
        const style = Object.assign(Object.assign({}, props.staticStyle), props.declaredStyle);
        const config = doric.layoutConfig().fit();
        if (style.width) {
            viewProps.width = pixelString2Number(style.width);
            config.widthSpec = doric.LayoutSpec.JUST;
        }
        if (style.height) {
            viewProps.height = pixelString2Number(style.width);
            config.heightSpec = doric.LayoutSpec.JUST;
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
            const margin = (_a = config.margin) !== null && _a !== void 0 ? _a : {};
            margin.left = pixelString2Number(style["margin-left"]);
            config.margin = margin;
        }
        if (style["margin-top"]) {
            const margin = (_b = config.margin) !== null && _b !== void 0 ? _b : {};
            margin.top = pixelString2Number(style["margin-top"]);
            config.margin = margin;
        }
        if (style["margin-bottom"]) {
            const margin = (_c = config.margin) !== null && _c !== void 0 ? _c : {};
            margin.bottom = pixelString2Number(style["margin-bottom"]);
            config.margin = margin;
        }
        if (style["margin-right"]) {
            const margin = (_d = config.margin) !== null && _d !== void 0 ? _d : {};
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
                const width = pixelString2Number((_e = style["border-width"]) !== null && _e !== void 0 ? _e : "1px");
                const color = string2Color((_f = style["border-color"]) !== null && _f !== void 0 ? _f : "#000000");
                viewProps.border = { width, color };
            }
            else {
                doric.loge(`Doric do not support border-style:${style["border-style"]} yet`);
            }
        }
        if (style["padding-left"]) {
            const padding = (_g = viewProps.padding) !== null && _g !== void 0 ? _g : {};
            padding.left = pixelString2Number(style["padding-left"]);
            viewProps.padding = padding;
        }
        if (style["padding-right"]) {
            const padding = (_h = viewProps.padding) !== null && _h !== void 0 ? _h : {};
            padding.right = pixelString2Number(style["padding-right"]);
            viewProps.padding = padding;
        }
        if (style["padding-top"]) {
            const padding = (_j = viewProps.padding) !== null && _j !== void 0 ? _j : {};
            padding.top = pixelString2Number(style["padding-top"]);
            viewProps.padding = padding;
        }
        if (style["padding-bottom"]) {
            const padding = (_k = viewProps.padding) !== null && _k !== void 0 ? _k : {};
            padding.bottom = pixelString2Number(style["padding-bottom"]);
            viewProps.padding = padding;
        }
        if (style["border-radius"]) {
            viewProps.corners = pixelString2Number(style["border-radius"]);
        }
        if (style["border-bottom-left-radius"]) {
            const corners = {};
            if (typeof viewProps.corners === "number") {
                corners.leftBottom =
                    corners.leftTop =
                        corners.rightTop =
                            corners.rightBottom =
                                viewProps.corners;
            }
            else if (typeof viewProps.corners === "object") {
                corners.leftBottom = viewProps.corners.leftBottom;
                corners.leftTop = viewProps.corners.leftTop;
                corners.rightTop = viewProps.corners.rightTop;
                corners.rightBottom = viewProps.corners.rightBottom;
            }
            corners.leftBottom = pixelString2Number(style["border-bottom-left-radius"]);
            viewProps.corners = corners;
        }
        if (style["border-bottom-right-radius"]) {
            const corners = {};
            if (typeof viewProps.corners === "number") {
                corners.leftBottom =
                    corners.leftTop =
                        corners.rightTop =
                            corners.rightBottom =
                                viewProps.corners;
            }
            else if (typeof viewProps.corners === "object") {
                corners.leftBottom = viewProps.corners.leftBottom;
                corners.leftTop = viewProps.corners.leftTop;
                corners.rightTop = viewProps.corners.rightTop;
                corners.rightBottom = viewProps.corners.rightBottom;
            }
            corners.rightBottom = pixelString2Number(style["border-bottom-right-radius"]);
            viewProps.corners = corners;
        }
        if (style["border-top-left-radius"]) {
            const corners = {};
            if (typeof viewProps.corners === "number") {
                corners.leftBottom =
                    corners.leftTop =
                        corners.rightTop =
                            corners.rightBottom =
                                viewProps.corners;
            }
            else if (typeof viewProps.corners === "object") {
                corners.leftBottom = viewProps.corners.leftBottom;
                corners.leftTop = viewProps.corners.leftTop;
                corners.rightTop = viewProps.corners.rightTop;
                corners.rightBottom = viewProps.corners.rightBottom;
            }
            corners.leftTop = pixelString2Number(style["border-top-left-radius"]);
            viewProps.corners = corners;
        }
        if (style["border-top-right-radius"]) {
            const corners = {};
            if (typeof viewProps.corners === "number") {
                corners.leftBottom =
                    corners.leftTop =
                        corners.rightTop =
                            corners.rightBottom =
                                viewProps.corners;
            }
            else if (typeof viewProps.corners === "object") {
                corners.leftBottom = viewProps.corners.leftBottom;
                corners.leftTop = viewProps.corners.leftTop;
                corners.rightTop = viewProps.corners.rightTop;
                corners.rightBottom = viewProps.corners.rightBottom;
            }
            corners.rightTop = pixelString2Number(style["border-top-right-radius"]);
            viewProps.corners = corners;
        }
        if (style.display === "flex") {
            const flexConfig = {};
            switch (style.direction) {
                case "ltr":
                    flexConfig.direction = doric.Direction.LTR;
                    break;
                case "rtl":
                    flexConfig.direction = doric.Direction.RTL;
                    break;
            }
            switch (style["flex-direction"]) {
                case "column":
                    flexConfig.flexDirection = doric.FlexDirection.COLUMN;
                    break;
                case "column-reverse":
                    flexConfig.flexDirection = doric.FlexDirection.COLUMN_REVERSE;
                    break;
                case "row":
                    flexConfig.flexDirection = doric.FlexDirection.ROW;
                    break;
                case "row-reverse":
                    flexConfig.flexDirection = doric.FlexDirection.ROW_REVERSE;
                    break;
            }
            switch (style["flex-wrap"]) {
                case "nowrap":
                    flexConfig.flexWrap = doric.Wrap.NO_WRAP;
                    break;
                case "wrap":
                    flexConfig.flexWrap = doric.Wrap.WRAP;
                    break;
                case "wrap-reverse":
                    flexConfig.flexWrap = doric.Wrap.WRAP_REVERSE;
                    break;
            }
            switch (style["justify-content"]) {
                case "flex-start":
                    flexConfig.justifyContent = doric.Justify.FLEX_START;
                    break;
                case "flex-end":
                    flexConfig.justifyContent = doric.Justify.FLEX_END;
                    break;
                case "center":
                    flexConfig.justifyContent = doric.Justify.CENTER;
                    break;
                case "space-between":
                    flexConfig.justifyContent = doric.Justify.SPACE_BETWEEN;
                    break;
                case "space-around":
                    flexConfig.justifyContent = doric.Justify.SPACE_AROUND;
                    break;
                case "space-evently":
                    flexConfig.justifyContent = doric.Justify.SPACE_EVENLY;
                    break;
            }
            switch (style["align-items"]) {
                case "stretch":
                    flexConfig.alignItems = doric.Align.STRETCH;
                    break;
                case "flex-start":
                    flexConfig.alignItems = doric.Align.FLEX_START;
                    break;
                case "flex-end":
                    flexConfig.alignItems = doric.Align.FLEX_END;
                    break;
                case "center":
                    flexConfig.alignItems = doric.Align.CENTER;
                    break;
                case "stretch":
                    flexConfig.alignItems = doric.Align.STRETCH;
                    break;
                case "baseline":
                    flexConfig.alignItems = doric.Align.BASELINE;
                    break;
                case "space-around":
                    flexConfig.alignItems = doric.Align.SPACE_AROUND;
                    break;
                case "space-between":
                    flexConfig.alignItems = doric.Align.SPACE_BETWEEN;
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
        }
        else if (style.position === "absolute") {
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
            viewProps.backgroundColor = doric.Color.parse(style["background-color"]);
        }
    }
    return viewProps;
}
function Vdiv(props) {
    return doric.jsx.createElement(doric.VLayout, { props: preDealProps(props), space: 5 });
}
function Vview(props) {
    return (doric.jsx.createElement(doric.VLayout, { props: preDealProps(props, (e, target) => {
            if (e.innerElement) {
                target.innerElement = e.innerElement;
            }
        }), space: 5 }));
}
function Vh1(props) {
    return (doric.jsx.createElement(doric.Text, { props: preDealProps(props, (e, target) => {
            if (e.innerElement && e.innerElement instanceof doric.Text) {
                const text = e.innerElement;
                target.text = text.text;
            }
        }), textSize: 20, fontStyle: "bold" }));
}
function Vh2(props) {
    return (doric.jsx.createElement(doric.Text, { props: preDealProps(props, (e, target) => {
            if (e.innerElement && e.innerElement instanceof doric.Text) {
                const text = e.innerElement;
                target.text = text.text;
            }
        }), textSize: 16, fontStyle: "bold" }));
}
function Vh3(props) {
    return (doric.jsx.createElement(doric.Text, { textSize: 14, fontStyle: "bold", props: preDealProps(props, (e, target) => {
            if (e.innerElement && e.innerElement instanceof doric.Text) {
                const text = e.innerElement;
                target.text = text.text;
            }
        }) }));
}
function Vimg(props) {
    return (doric.jsx.createElement(doric.Image, { props: preDealProps(props, (e, target) => {
            if (e.src) {
                target.imageUrl = e.src;
            }
        }) }));
}
function Va(props) {
    return (doric.jsx.createElement(doric.Text, { textSize: 12, fontStyle: "italic", textColor: doric.Color.BLUE, onClick: () => {
            console.log(`Clicked ${props.href}`);
        }, props: preDealProps(props, (e, target) => {
            if (e.innerElement && e.innerElement instanceof doric.Text) {
                const text = e.innerElement;
                target.text = text.text;
            }
        }) }));
}
function Vul(props) {
    return doric.jsx.createElement(doric.HLayout, { props: preDealProps(props) });
}
function Vli(props) {
    return doric.jsx.createElement(doric.Stack, { props: preDealProps(props) });
}
function Vbr(props) {
    return doric.jsx.createElement(doric.Stack, { props: preDealProps(props) });
}
function Vasttext(props) {
    return (doric.jsx.createElement(doric.Text, { props: preDealProps(props, (e, target) => {
            target.text = props.text;
        }) }));
}
function Vtext(props) {
    return (doric.jsx.createElement(doric.Text, { props: preDealProps(props, (e, target) => {
            if (e.innerElement && e.innerElement instanceof doric.Text) {
                const text = e.innerElement;
                target.text = text.text;
            }
        }) }));
}
function Vastexpression(props) {
    return (doric.jsx.createElement(doric.Text, { props: preDealProps(props, (e, target) => {
            target.text = props.text;
        }) }));
}

exports.Va = Va;
exports.Vastexpression = Vastexpression;
exports.Vasttext = Vasttext;
exports.Vbr = Vbr;
exports.Vdiv = Vdiv;
exports.Vh1 = Vh1;
exports.Vh2 = Vh2;
exports.Vh3 = Vh3;
exports.Vimg = Vimg;
exports.Vli = Vli;
exports.Vtext = Vtext;
exports.Vul = Vul;
exports.Vview = Vview;
exports.pixelString2Number = pixelString2Number;
exports.string2Color = string2Color;
//# sourceMappingURL=bundle_doric-vue-runtime.js.map
