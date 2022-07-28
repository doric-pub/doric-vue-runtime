import { Panel, Group, navbar, jsx, Stack, loge } from "doric";
import { openDConsole } from "doric-console";
import { Test } from "./Test";
import prop from "./TestProps";
import { observer } from "mobx-doric";
import { observable } from "mobx";
@Entry
class Example extends Panel {
  onCreate() {
    openDConsole(context);
  }
  onShow() {
    navbar(context).setTitle("Example");
  }
  build(rootView: Group) {
    let observedData = observable(prop.data());
    <Stack parent={rootView}>
      {observer(() => {
        loge(observedData);
        return <Test data={observedData} methods={prop.methods} />;
      })}
    </Stack>;
  }
}
