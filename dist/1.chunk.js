webpackJsonp([1],{

/***/ 10:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
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

/***/ 11:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('nav', {
    staticClass: "vueListCollapse101"
  }, [_c('header', {
    on: {
      "click": function($event) {
        _vm.lc1_toggle()
      }
    }
  }, [(_vm.lc1_collapse === false) ? _c('span', {
    staticClass: "vueListCollapse101_icon"
  }, [_c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 24 24"
    }
  }, [_c('path', {
    attrs: {
      "d": "M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"
    }
  })])]) : _c('span', {
    staticClass: "vueListCollapse101_icon"
  }, [_c('svg', {
    attrs: {
      "xmlns": "http://www.w3.org/2000/svg",
      "viewBox": "0 0 24 24"
    }
  }, [_c('path', {
    attrs: {
      "d": "M19 13H5v-2h14v2z"
    }
  })])]), _vm._v(" "), _c('p', [_vm._v("Items:")])]), _vm._v(" "), _vm._l((_vm.items), function(i) {
    return _c('ul', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (_vm.lc1_collapse),
        expression: "lc1_collapse"
      }]
    }, [_c('li', [_c('div', {
      staticClass: "vueListCollapse101_content"
    }, [_vm._v("\r\n        " + _vm._s(i.itemName) + "\r\n        ")])])])
  })], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6b7ba3c0", esExports)
  }
}

/***/ }),

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vcListCollapse1_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6b7ba3c0_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_vcListCollapse1_vue__ = __webpack_require__(11);
var disposed = false
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_vcListCollapse1_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6b7ba3c0_hasScoped_false_node_modules_vue_loader_lib_selector_type_template_index_0_vcListCollapse1_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "vue-components\\vcListCollapse1.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] vcListCollapse1.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6b7ba3c0", Component.options)
  } else {
    hotAPI.reload("data-v-6b7ba3c0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["default"] = (Component.exports);


/***/ })

});