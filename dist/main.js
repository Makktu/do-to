/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss":
/*!*****************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss ***!
  \*****************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"body {\\n  background-color: rgba(66, 141, 217, 0.642); }\\n  body h1 {\\n    font-size: 3rem; }\\n\\n#content {\\n  background-color: #a1a16f;\\n  height: 70vh;\\n  width: 90vw;\\n  padding: 20px;\\n  overflow-y: scroll; }\\n\\n.display {\\n  display: flex;\\n  flex-wrap: wrap; }\\n\\n#header {\\n  height: 10vh;\\n  width: 90vw;\\n  border: #4b4b38 5px solid;\\n  text-align: center;\\n  background-color: cyan; }\\n\\n#control {\\n  height: 10vh;\\n  width: 90vw;\\n  border: white 5px solid;\\n  background-color: cyan; }\\n\\nbutton {\\n  border-radius: 5px;\\n  cursor: pointer; }\\n\\nbutton:hover {\\n  background-color: antiquewhite;\\n  transition: 0.5s ease; }\\n\\n.doneBtn {\\n  background-color: aquamarine; }\\n\\n.editBtn {\\n  margin-right: 2px;\\n  background-color: cadetblue; }\\n\\n.task-card {\\n  border: 1px white solid;\\n  width: 120px;\\n  height: 200px;\\n  border-radius: 10px;\\n  padding: 10px;\\n  margin: 4px; }\\n\\n.fa-plus,\\n.fa-gears {\\n  margin-right: 20px;\\n  font-size: 3rem; }\\n\\n.Routine,\\n.Finances,\\n.Personal {\\n  color: yellow;\\n  font-size: 1.4rem; }\\n\\n.fa-solid {\\n  cursor: pointer; }\\n\\n.modal {\\n  max-width: 50ch; }\\n  .modal > * {\\n    margin: 0 0 0.5rem 0; }\\n\\n.modal::backdrop {\\n  background: rgba(0, 0, 0, 0.428); }\\n\\n/* extra styling */\\nbody {\\n  min-height: 100vh;\\n  margin: 2rem;\\n  font-family: system-ui;\\n  font-size: 1.25rem;\\n  line-height: 1.5;\\n  color: var(--gray-8); }\\n\\nh1 em {\\n  color: var(--cyan-9);\\n  text-decoration: underline;\\n  text-underline-offset: 0.25em; }\\n\\n.button {\\n  border: 0; }\\n\\n.button:hover,\\n.button:focus {\\n  background: var(--cyan-9); }\\n\\nform {\\n  display: grid;\\n  gap: 1em; }\\n\\n.close-button {\\n  font-size: 3rem; }\\n\\n#group {\\n  font-size: 1.25rem; }\\n\\ninput,\\nselect {\\n  font-size: 1.25rem; }\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://do-to/./src/style.scss?./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://do-to/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://do-to/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.scss":
/*!************************!*\
  !*** ./src/style.scss ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!../node_modules/sass-loader/dist/cjs.js!./style.scss */ \"./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./src/style.scss\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_node_modules_sass_loader_dist_cjs_js_style_scss__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://do-to/./src/style.scss?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://do-to/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://do-to/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://do-to/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://do-to/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://do-to/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://do-to/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/addListeners.js":
/*!*****************************!*\
  !*** ./src/addListeners.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addControlButtons\": () => (/* binding */ addControlButtons),\n/* harmony export */   \"addListeners\": () => (/* binding */ addListeners),\n/* harmony export */   \"entryId\": () => (/* binding */ entryId)\n/* harmony export */ });\n/* harmony import */ var _index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.js */ \"./src/index.js\");\n/* harmony import */ var _newToDo_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./newToDo.js */ \"./src/newToDo.js\");\n/* harmony import */ var _renderDisplay_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./renderDisplay.js */ \"./src/renderDisplay.js\");\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\nlet editFlag = false;\r\n\r\nlet entryId;\r\n\r\nfunction editEntry(entryId) {\r\n    console.log(entryId);\r\n\r\n    modal.showModal();\r\n    document.getElementById(\"entry-mode\").innerText = \"EDIT TO-DO\";\r\n    document.getElementById(\"new-task\").value = _index_js__WEBPACK_IMPORTED_MODULE_0__.toDoList[entryId].task;\r\n    document.getElementById(\"group\").value = _index_js__WEBPACK_IMPORTED_MODULE_0__.toDoList[entryId].group;\r\n    document.getElementById(\"due-by\").value = _index_js__WEBPACK_IMPORTED_MODULE_0__.toDoList[entryId].newDue;\r\n    document.getElementById(\"priority\").value = _index_js__WEBPACK_IMPORTED_MODULE_0__.toDoList[entryId].priority;\r\n    document.getElementById(\"notes\").value = _index_js__WEBPACK_IMPORTED_MODULE_0__.toDoList[entryId].notes;\r\n    editFlag = true;\r\n}\r\n\r\nfunction addListeners() {\r\n    const allEditBtns = document.querySelectorAll(\".editBtn\");\r\n\r\n    allEditBtns.forEach((btn) => {\r\n        btn.addEventListener(\"click\", (e) => {\r\n            entryId = e.target.id.slice(3);\r\n            editEntry(entryId);\r\n        });\r\n    });\r\n\r\n    const allDoneBtns = document.querySelectorAll(\".doneBtn\");\r\n\r\n    allDoneBtns.forEach((btn) => {\r\n        btn.addEventListener(\"click\", (e) => {\r\n            _index_js__WEBPACK_IMPORTED_MODULE_0__.toDoList.splice(e.target.id.slice(4), 1);\r\n            _index_js__WEBPACK_IMPORTED_MODULE_0__.content.innerHTML = \"\";\r\n            _index_js__WEBPACK_IMPORTED_MODULE_0__.content.appendChild((0,_renderDisplay_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])(_index_js__WEBPACK_IMPORTED_MODULE_0__.toDoList));\r\n            addListeners();\r\n        });\r\n    });\r\n}\r\n\r\nfunction addControlButtons() {\r\n    const addNewEntry = document.querySelector(\".fa-plus\");\r\n\r\n    addNewEntry.addEventListener(\"click\", () => {\r\n        modal.showModal();\r\n        if (document.getElementById(\"entry-mode\").innerText == \"EDIT TO-DO\")\r\n            document.getElementById(\"entry-mode\").innerText =\r\n                \"Create New To-Do\";\r\n    });\r\n\r\n    // ****************************\r\n    // *** NEW TASK SAVE BUTTON ***\r\n    // ****************************\r\n\r\n    const newTaskSaveBtn = document.querySelector(\".submitBtn\");\r\n\r\n    newTaskSaveBtn.addEventListener(\"click\", (e) => {\r\n        // stop form closing until minimum 1 field entered\r\n        e.preventDefault();\r\n\r\n        let newGroup = document.getElementById(\"group\").value;\r\n        let newTask = document.getElementById(\"new-task\").value;\r\n        let newDue = document.getElementById(\"due-by\").value;\r\n        let newPriority = document.getElementById(\"priority\").value;\r\n        let newNotes = document.getElementById(\"notes\").value;\r\n\r\n        if (!newTask) {\r\n            alert(\"There must be an entry in the TASK section!\");\r\n            return;\r\n        }\r\n\r\n        document.getElementById(\"new-task\").value = \"\";\r\n        document.getElementById(\"notes\").value = \"\";\r\n\r\n        modal.close();\r\n\r\n        (0,_newToDo_js__WEBPACK_IMPORTED_MODULE_1__.makeNewEntry)(\r\n            _index_js__WEBPACK_IMPORTED_MODULE_0__.toDoList,\r\n            newTask,\r\n            newDue,\r\n            newPriority,\r\n            newGroup,\r\n            newNotes,\r\n            editFlag ? editFlag : null,\r\n            editFlag ? entryId : null\r\n        );\r\n\r\n        if (editFlag) editFlag = false;\r\n    });\r\n\r\n    // *****************************\r\n\r\n    const settingsBtn = document.querySelector(\".fa-gears\");\r\n\r\n    settingsBtn.addEventListener(\"click\", () => {\r\n        console.log(\"Settings Clicked\");\r\n    });\r\n\r\n    const modal = document.querySelector(\"#modal\");\r\n    const closeModal = document.querySelector(\".close-button\");\r\n    closeModal.addEventListener(\"click\", () => {\r\n        modal.close();\r\n    });\r\n}\r\n\n\n//# sourceURL=webpack://do-to/./src/addListeners.js?");

/***/ }),

/***/ "./src/headSection.js":
/*!****************************!*\
  !*** ./src/headSection.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ headContent)\n/* harmony export */ });\nfunction headContent() {\n    const element = document.createElement(\"div\");\n\n    element.innerHTML = `<h1 style=\"text-decoration: underline;margin-bottom: 20px;\">TO-DO</h1>`;\n\n    return element;\n}\n\n\n//# sourceURL=webpack://do-to/./src/headSection.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"content\": () => (/* binding */ content),\n/* harmony export */   \"toDoList\": () => (/* binding */ toDoList)\n/* harmony export */ });\n/* harmony import */ var _style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.scss */ \"./src/style.scss\");\n/* harmony import */ var _renderDisplay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderDisplay.js */ \"./src/renderDisplay.js\");\n/* harmony import */ var _headSection_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./headSection.js */ \"./src/headSection.js\");\n/* harmony import */ var _addListeners_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./addListeners.js */ \"./src/addListeners.js\");\n\n\n\n\n\nlet toDoList = [\n    {\n        task: \"Get bread\",\n        date: \"today\",\n        priority: \"2\",\n        group: \"Routine\",\n        notes: \"\",\n    },\n    {\n        task: \"pay gas bill\",\n        date: \"tomorrow\",\n        priority: \"1\",\n        group: \"Finances\",\n        notes: \"if website down again, phone them up\",\n    },\n    {\n        task: \"finish book\",\n        date: \"open\",\n        priority: \"5\",\n        group: \"Personal\",\n        notes: \"check Amazon for next volume\",\n    },\n];\n\nconsole.log(\"✅ Running\", new Date().toString().slice(0, 25));\n\nconst headSection = document.getElementById(\"header\");\nconst content = document.getElementById(\"content\");\n\nheadSection.appendChild((0,_headSection_js__WEBPACK_IMPORTED_MODULE_2__[\"default\"])());\ncontent.appendChild((0,_renderDisplay_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(toDoList));\n\n(0,_addListeners_js__WEBPACK_IMPORTED_MODULE_3__.addListeners)();\n(0,_addListeners_js__WEBPACK_IMPORTED_MODULE_3__.addControlButtons)();\n\n\n//# sourceURL=webpack://do-to/./src/index.js?");

/***/ }),

/***/ "./src/newToDo.js":
/*!************************!*\
  !*** ./src/newToDo.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ToDo\": () => (/* binding */ ToDo),\n/* harmony export */   \"makeNewEntry\": () => (/* binding */ makeNewEntry)\n/* harmony export */ });\n/* harmony import */ var _addListeners_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addListeners.js */ \"./src/addListeners.js\");\n/* harmony import */ var _renderDisplay_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./renderDisplay.js */ \"./src/renderDisplay.js\");\n\n\n\n\n\nclass ToDo {\n    constructor(task, date, priority, group, notes) {\n        this.task = task;\n        this.date = date;\n        this.priority = priority;\n        this.group = group;\n        this.notes = notes;\n    }\n}\n\nfunction makeNewEntry(\n    toDoList,\n    task,\n    due,\n    priority,\n    category,\n    notes,\n    editFlag,\n    entryId\n) {\n    // *****************************************************\n    // **** NEED MODAL LOGIC FOR NEW ENTRY FORM IN HERE ****\n    // *****************************************************\n\n    const newEntry = new ToDo(task, due, priority, category, notes);\n\n    console.log(newEntry);\n\n    if (entryId) {\n        toDoList[entryId].task = newEntry.task;\n        toDoList[entryId].date = newEntry.date;\n        toDoList[entryId].priority = newEntry.priority;\n        console.log(newEntry.category);\n        toDoList[entryId].group = newEntry.group;\n        toDoList[entryId].notes = newEntry.notes;\n    } else {\n        toDoList.push(newEntry);\n    }\n    content.innerHTML = \"\";\n    content.appendChild((0,_renderDisplay_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(toDoList));\n    (0,_addListeners_js__WEBPACK_IMPORTED_MODULE_0__.addListeners)();\n}\n\n\n//# sourceURL=webpack://do-to/./src/newToDo.js?");

/***/ }),

/***/ "./src/renderDisplay.js":
/*!******************************!*\
  !*** ./src/renderDisplay.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ createNewToDo)\n/* harmony export */ });\nfunction createNewToDo(toDoList) {\n    let html = \"\";\n    for (let g = 0; g < toDoList.length; g++) {\n        html += `<div class='task-card'><div><div class=${toDoList[g].group}>${\n            toDoList[g].group\n        }</div></div><div id='task${g}'>💥 ${toDoList[g].task}</div><div>Due: ${\n            toDoList[g].date == \"today\" ? \"‼️\" : \"\"\n        }${toDoList[g].date}</div><div>Priority: ${\n            toDoList[g].priority == 1\n                ? \"High\"\n                : toDoList[g].priority < 4\n                ? \"Medium\"\n                : \"Low\"\n        }<br></div><div>${toDoList[g].notes ? \"Note: \" : \"\"}${\n            toDoList[g].notes\n        }</div><br><button class='btns editBtn' id='btn${g}'>EDIT</button><button class='btns doneBtn' id='done${g}'>DONE!</button></div>`;\n    }\n    const element = document.createElement(\"div\");\n    element.className = \"display\";\n    element.innerHTML = html;\n\n    return element;\n}\n\n\n//# sourceURL=webpack://do-to/./src/renderDisplay.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;