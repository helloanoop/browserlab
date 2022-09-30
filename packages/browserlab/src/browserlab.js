import { h, text, app } from "hyperapp";
import "picnic/picnic.min.css";

import store from './store';
import "./styles.css";

const testblock = props =>
  h("div", {class: 'test-row'}, [
    h("div", {class: 'test-name'}, text(props.name)),
    h("div", {class: 'test-action'}, text('run'))
  ]);

const ui = (domNode) => {
  app({
    init: store,
    view: (state) => {
      console.log(state);
      return h("main", {}, [
        h("nav", {style: {}}, [
          h("a", {class: "brand"}, [
            h("span", {style: {fontSize: '30px'}}, text("🍄")),
            h("span", {}, text(" browserlab")),
          ]),
          h("div", {class: "menu"}, [
            h("button", {class: "button"}, text("Run All"))
          ])
        ]),
        h("div", {class:'test-grid-header'}, [
          h("div", {class:'test-name'}, text("Test"))
        ]),
        h("div", { class: 'test-grid-body'}, [
          ...state.tests.map((test) => testblock(test))
        ])
      ])
    },
    node: domNode
  });
};

export default ui;
