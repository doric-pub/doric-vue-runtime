import { jsx } from "doric";
import { Vastexpression, Vtext, Vview, Vasttext } from "doric-vue-runtime";
export function Test(prop: { data: any, methods: any }) {
  var { a, list } = prop.data;
  var { click } = prop.methods;
  return (
    <Vview>
      <Vview
        tap={Reflect.apply(click, prop.data, [])}
        declaredStyle={{ "background-color": "#f0cc00" }}
      >
        <Vtext staticStyle={{ color: "green", "font-size": "50px" }}>
          <Vastexpression text={!a ? "打开" : "关闭"}></Vastexpression>
        </Vtext>
      </Vview>
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