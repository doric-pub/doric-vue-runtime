import { Panel, Group, navbar, jsx, Stack, loge } from "doric";
import { openDConsole } from "doric-console";
import { Test } from "./Test";
import prop from "./TestProp";
import style from "./TestStyle";
import { observer } from "mobx-doric";
import { observable } from "mobx";
@Entry
class Example extends Panel {
  onCreate() {
    openDConsole(this.context);
  }
  onShow() {
    navbar(context).setTitle("Example");
  }
  build(rootView: Group) {
    let observedData = observable(prop.data());
    <Stack parent={rootView}>
      {observer(() => {
        loge(observedData);
        return (
          <Test data={observedData} methods={prop.methods} style={style} />
        );
      })}
    </Stack>;
  }
}
