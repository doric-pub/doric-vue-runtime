import { jsx } from "doric";
import { Vastexpression, Vtext, Vview, Vasttext } from "doric-vue-runtime";
function genStyle(
  style: Record<string, any>,
  classSelector: Record<string, boolean>
) {
  let result: Record<string, string> = {};
  Object.keys(classSelector).forEach((selector) => {
    if (
      Object.keys(style).includes("." + selector) &&
      classSelector[selector]
    ) {
      Object.keys(style["." + selector]).forEach((key) => {
        result[key] = style["." + selector][key];
      });
    }
  });
  return result;
}
export function Test(prop: { data: any, methods: any, style: any }) {
  var { a, list, isActive, isError } = prop.data;
  var { click, change } = prop.methods;
  var style = prop.style;
  return (
    <Vview>
      <Vview
        tap={() => {
          Reflect.apply(click, prop.data, []);
        }}
        declaredStyle={{ "background-color": "#f0cc00" }}
      >
        <Vtext staticStyle={{ color: "green", "font-size": "50px" }}>
          <Vastexpression text={!a ? "打开" : "关闭"}></Vastexpression>
        </Vtext>
      </Vview>
      <Vasttext text={" "}></Vasttext>
      <Vview
        tap={() => {
          Reflect.apply(change, prop.data, []);
        }}
        declaredStyle={genStyle(style, { active: isActive, error: isError })}
      ></Vview>
      <Vasttext text={" "}></Vasttext>
      {a ? (
        <Vview>
          <Vtext staticStyle={{ color: "#ff4800", "font-size": "50px" }}>
            <Vasttext text={"11111"}></Vasttext>
          </Vtext>
        </Vview>
      ) : null}
      <Vasttext text={" "}></Vasttext>
      {list.map((item: any, i: number) => (
        <Vtext>
          <Vastexpression text={i + "---" + item}></Vastexpression>
        </Vtext>
      ))}
    </Vview>
  );
}
