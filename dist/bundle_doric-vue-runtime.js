'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var doric = require('doric');

function preDealProps(props) {
    const viewProps = {};
    if (props.tap) {
        const tap = props.tap;
        props.onClick = () => {
            Reflect.apply(tap, props.bounds, []);
        };
    }
    if (props.staticStyle) ;
    return viewProps;
}
function vdiv(props) {
    return doric.jsx.createElement(doric.VLayout, { props: preDealProps(props), space: 5 });
}
function vh1(props) {
    if (props.innerElement && props.innerElement instanceof doric.Text) {
        const text = props.innerElement;
        props.innerElement = undefined;
        props.text = text.text;
    }
    return (doric.jsx.createElement(doric.Text, { props: preDealProps(props), textSize: 20, fontStyle: "bold" }));
}
function vh2(props) {
    if (props.innerElement && props.innerElement instanceof doric.Text) {
        const text = props.innerElement;
        props.innerElement = undefined;
        props.text = text.text;
    }
    return (doric.jsx.createElement(doric.Text, { props: preDealProps(props), textSize: 16, fontStyle: "bold" }));
}
function vh3(props) {
    if (props.innerElement && props.innerElement instanceof doric.Text) {
        const text = props.innerElement;
        props.innerElement = undefined;
        props.text = text.text;
    }
    return (doric.jsx.createElement(doric.Text, { props: preDealProps(props), textSize: 14, fontStyle: "bold" }));
}
function vimg(props) {
    return doric.jsx.createElement(doric.Image, { props: preDealProps(props) });
}
function va(props) {
    return (doric.jsx.createElement(doric.Text, { props: preDealProps(props), textSize: 12, fontStyle: "italic", textColor: doric.Color.BLUE, onClick: () => {
            console.log(`Clicked ${props.href}`);
        } }));
}

exports.va = va;
exports.vdiv = vdiv;
exports.vh1 = vh1;
exports.vh2 = vh2;
exports.vh3 = vh3;
exports.vimg = vimg;
//# sourceMappingURL=bundle_doric-vue-runtime.js.map
