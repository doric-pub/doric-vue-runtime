import { Panel, Group, navbar, jsx, Stack } from "doric";
import { Test } from "./functions";
import prop from "./prop";

@Entry
class Example extends Panel {
  onShow() {
    navbar(context).setTitle("Example");
  }
  build(rootView: Group) {
    <Stack parent={rootView}>
      <Test data={prop.data} methods={prop.methods} />
    </Stack>;
  }
}
