webpackJsonp([2],{

/***/ 11:
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(12),
  /* template */
  __webpack_require__(13),
  /* scopeId */
  null,
  /* cssModules */
  null
)
Component.options.__file = "D:\\WINDOWS\\GD2\\web\\testfiles\\webpack2\\_node_dev\\td_git_vueListCollapse\\src\\vue-components\\ListCollapse1.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key !== "__esModule"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] ListCollapse1.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-df7f3ae6", Component.options)
  } else {
    hotAPI.reload("data-v-df7f3ae6", Component.options)
  }
})()}

module.exports = Component.exports


/***/ }),

/***/ 12:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      items: [{
        itemName: "item1"
      }, {
        itemName: "item2"
      }, {
        itemName: "item3"
      }],
      lc1_collapse: false
    };
  },

  mounted: function mounted() {},
  methods: {
    lc1_toggle: function lc1_toggle() {
      this.lc1_collapse = !this.lc1_collapse;
    }
  }
});

/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('nav', {
    staticClass: "vc_listcollapse1"
  }, [_c('header', {
    on: {
      "click": function($event) {
        _vm.lc1_toggle()
      }
    }
  }, [_c('p', [_vm._v("Items:")]), _vm._v(" "), (_vm.lc1_collapse === false) ? _c('span', [_vm._v("+")]) : _c('span', [_vm._v("-")])]), _vm._v(" "), _vm._l((_vm.items), function(i) {
    return _c('ul', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.lc1_collapse),
        expression: "lc1_collapse"
      }]
    }, [_c('li', [_vm._v("\n      " + _vm._s(i.itemName) + "\n    ")])])
  })], 2)
},staticRenderFns: []}
module.exports.render._withStripped = true
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-df7f3ae6", module.exports)
  }
}

/***/ })

});