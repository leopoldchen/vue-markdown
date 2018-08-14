/**
 * vue-markdown v2.2.3
 * https://github.com/miaolz123/vue-markdown
 * MIT License
 */

(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("babel-runtime/core-js/object/keys"), require("babel-runtime/core-js/get-iterator"), require("markdown-it"), require("markdown-it-emoji"), require("markdown-it-sub"), require("markdown-it-sup"), require("markdown-it-footnote"), require("markdown-it-deflist"), require("markdown-it-abbr"), require("markdown-it-ins"), require("markdown-it-mark"), require("markdown-it-toc-and-anchor"), require("markdown-it-katex"), require("markdown-it-highlight"), require("markdown-it-task-lists"), require("snabbdom-virtualize"), require("snabbdom"), require("snabbdom/modules/attributes"), require("snabbdom/modules/class"), require("snabbdom/modules/dataset"), require("snabbdom/modules/eventlisteners"), require("snabbdom/modules/hero"), require("snabbdom/modules/props"), require("snabbdom/modules/style"));
	else if(typeof define === 'function' && define.amd)
		define(["babel-runtime/core-js/object/keys", "babel-runtime/core-js/get-iterator", "markdown-it", "markdown-it-emoji", "markdown-it-sub", "markdown-it-sup", "markdown-it-footnote", "markdown-it-deflist", "markdown-it-abbr", "markdown-it-ins", "markdown-it-mark", "markdown-it-toc-and-anchor", "markdown-it-katex", "markdown-it-highlight", "markdown-it-task-lists", "snabbdom-virtualize", "snabbdom", "snabbdom/modules/attributes", "snabbdom/modules/class", "snabbdom/modules/dataset", "snabbdom/modules/eventlisteners", "snabbdom/modules/hero", "snabbdom/modules/props", "snabbdom/modules/style"], factory);
	else if(typeof exports === 'object')
		exports["VueMarkdown"] = factory(require("babel-runtime/core-js/object/keys"), require("babel-runtime/core-js/get-iterator"), require("markdown-it"), require("markdown-it-emoji"), require("markdown-it-sub"), require("markdown-it-sup"), require("markdown-it-footnote"), require("markdown-it-deflist"), require("markdown-it-abbr"), require("markdown-it-ins"), require("markdown-it-mark"), require("markdown-it-toc-and-anchor"), require("markdown-it-katex"), require("markdown-it-highlight"), require("markdown-it-task-lists"), require("snabbdom-virtualize"), require("snabbdom"), require("snabbdom/modules/attributes"), require("snabbdom/modules/class"), require("snabbdom/modules/dataset"), require("snabbdom/modules/eventlisteners"), require("snabbdom/modules/hero"), require("snabbdom/modules/props"), require("snabbdom/modules/style"));
	else
		root["VueMarkdown"] = factory(root["babel-runtime/core-js/object/keys"], root["babel-runtime/core-js/get-iterator"], root["markdown-it"], root["markdown-it-emoji"], root["markdown-it-sub"], root["markdown-it-sup"], root["markdown-it-footnote"], root["markdown-it-deflist"], root["markdown-it-abbr"], root["markdown-it-ins"], root["markdown-it-mark"], root["markdown-it-toc-and-anchor"], root["markdown-it-katex"], root["markdown-it-highlight"], root["markdown-it-task-lists"], root["snabbdom-virtualize"], root["snabbdom"], root["snabbdom/modules/attributes"], root["snabbdom/modules/class"], root["snabbdom/modules/dataset"], root["snabbdom/modules/eventlisteners"], root["snabbdom/modules/hero"], root["snabbdom/modules/props"], root["snabbdom/modules/style"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_1__, __WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_5__, __WEBPACK_EXTERNAL_MODULE_6__, __WEBPACK_EXTERNAL_MODULE_7__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_9__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_11__, __WEBPACK_EXTERNAL_MODULE_12__, __WEBPACK_EXTERNAL_MODULE_13__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_16__, __WEBPACK_EXTERNAL_MODULE_17__, __WEBPACK_EXTERNAL_MODULE_18__, __WEBPACK_EXTERNAL_MODULE_19__, __WEBPACK_EXTERNAL_MODULE_20__, __WEBPACK_EXTERNAL_MODULE_21__, __WEBPACK_EXTERNAL_MODULE_22__, __WEBPACK_EXTERNAL_MODULE_23__, __WEBPACK_EXTERNAL_MODULE_24__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _keys = __webpack_require__(1);

	var _keys2 = _interopRequireDefault(_keys);

	var _getIterator2 = __webpack_require__(2);

	var _getIterator3 = _interopRequireDefault(_getIterator2);

	var _markdownIt = __webpack_require__(3);

	var _markdownIt2 = _interopRequireDefault(_markdownIt);

	var _markdownItEmoji = __webpack_require__(4);

	var _markdownItEmoji2 = _interopRequireDefault(_markdownItEmoji);

	var _markdownItSub = __webpack_require__(5);

	var _markdownItSub2 = _interopRequireDefault(_markdownItSub);

	var _markdownItSup = __webpack_require__(6);

	var _markdownItSup2 = _interopRequireDefault(_markdownItSup);

	var _markdownItFootnote = __webpack_require__(7);

	var _markdownItFootnote2 = _interopRequireDefault(_markdownItFootnote);

	var _markdownItDeflist = __webpack_require__(8);

	var _markdownItDeflist2 = _interopRequireDefault(_markdownItDeflist);

	var _markdownItAbbr = __webpack_require__(9);

	var _markdownItAbbr2 = _interopRequireDefault(_markdownItAbbr);

	var _markdownItIns = __webpack_require__(10);

	var _markdownItIns2 = _interopRequireDefault(_markdownItIns);

	var _markdownItMark = __webpack_require__(11);

	var _markdownItMark2 = _interopRequireDefault(_markdownItMark);

	var _markdownItTocAndAnchor = __webpack_require__(12);

	var _markdownItTocAndAnchor2 = _interopRequireDefault(_markdownItTocAndAnchor);

	var _markdownItKatex = __webpack_require__(13);

	var _markdownItKatex2 = _interopRequireDefault(_markdownItKatex);

	var _markdownItHighlight = __webpack_require__(14);

	var _markdownItHighlight2 = _interopRequireDefault(_markdownItHighlight);

	var _markdownItTaskLists = __webpack_require__(15);

	var _markdownItTaskLists2 = _interopRequireDefault(_markdownItTaskLists);

	var _snabbdomVirtualize = __webpack_require__(16);

	var _snabbdomVirtualize2 = _interopRequireDefault(_snabbdomVirtualize);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var snabbdom = __webpack_require__(17);
	var snabbdomPatch = snabbdom.init([__webpack_require__(18).default, __webpack_require__(19).default, __webpack_require__(20).default, __webpack_require__(21).default, __webpack_require__(22).default, __webpack_require__(23).default, __webpack_require__(24).default]);

	exports.default = {
	  template: '<div ref="markdown"><slot></slot></div>',

	  data: function data() {
	    return {
	      sourceData: this.source
	    };
	  },


	  props: {
	    watches: {
	      type: Array,
	      default: function _default() {
	        return ['source', 'show', 'toc'];
	      }
	    },
	    source: {
	      type: String,
	      default: ''
	    },
	    show: {
	      type: Boolean,
	      default: true
	    },
	    highlight: {
	      type: Boolean,
	      default: true
	    },
	    html: {
	      type: Boolean,
	      default: true
	    },
	    xhtmlOut: {
	      type: Boolean,
	      default: true
	    },
	    breaks: {
	      type: Boolean,
	      default: true
	    },
	    linkify: {
	      type: Boolean,
	      default: true
	    },
	    emoji: {
	      type: Boolean,
	      default: true
	    },
	    typographer: {
	      type: Boolean,
	      default: true
	    },
	    langPrefix: {
	      type: String,
	      default: 'language-'
	    },
	    quotes: {
	      type: String,
	      default: '“”‘’'
	    },
	    tableClass: {
	      type: String,
	      default: 'table'
	    },
	    taskLists: {
	      type: Boolean,
	      default: true
	    },
	    toc: {
	      type: Boolean,
	      default: false
	    },
	    tocId: {
	      type: String
	    },
	    tocClass: {
	      type: String,
	      default: 'table-of-contents'
	    },
	    tocFirstLevel: {
	      type: Number,
	      default: 2
	    },
	    tocLastLevel: {
	      type: Number
	    },
	    tocAnchorLink: {
	      type: Boolean,
	      default: true
	    },
	    tocAnchorClass: {
	      type: String,
	      default: 'toc-anchor'
	    },
	    tocAnchorLinkSymbol: {
	      type: String,
	      default: '#'
	    },
	    tocAnchorLinkSpace: {
	      type: Boolean,
	      default: true
	    },
	    tocAnchorLinkClass: {
	      type: String,
	      default: 'toc-anchor-link'
	    },
	    anchorAttributes: {
	      type: Object,
	      default: function _default() {
	        return {};
	      }
	    },
	    prerender: {
	      type: Function,
	      default: function _default(sourceData) {
	        return sourceData;
	      }
	    },
	    postrender: {
	      type: Function,
	      default: function _default(htmlData) {
	        return htmlData;
	      }
	    }
	  },

	  computed: {
	    tocLastLevelComputed: function tocLastLevelComputed() {
	      return this.tocLastLevel > this.tocFirstLevel ? this.tocLastLevel : this.tocFirstLevel + 1;
	    }
	  },

	  beforeMount: function beforeMount() {
	    if (this.$slots.default) {
	      this.sourceData = '';
	      var _iteratorNormalCompletion = true;
	      var _didIteratorError = false;
	      var _iteratorError = undefined;

	      try {
	        for (var _iterator = (0, _getIterator3.default)(this.$slots.default), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
	          var slot = _step.value;

	          this.sourceData += slot.text;
	        }
	      } catch (err) {
	        _didIteratorError = true;
	        _iteratorError = err;
	      } finally {
	        try {
	          if (!_iteratorNormalCompletion && _iterator.return) {
	            _iterator.return();
	          }
	        } finally {
	          if (_didIteratorError) {
	            throw _iteratorError;
	          }
	        }
	      }
	    }
	  },
	  mounted: function mounted() {
	    var _this = this;

	    this.regenerateMD();
	    this.renderMarkdown();

	    this.$watch('source', function () {
	      _this.sourceData = _this.prerender(_this.source);
	      _this.renderMarkdown();
	    });

	    this.watches.forEach(function (v) {
	      if (v !== 'source') {
	        _this.$watch(v, function () {
	          _this.regenerateMD();
	          _this.renderMarkdown();
	        });
	      }
	    });
	  },


	  methods: {
	    regenerateMD: function regenerateMD() {
	      var _this2 = this;

	      this.md = new _markdownIt2.default().use(_markdownItSub2.default).use(_markdownItSup2.default).use(_markdownItFootnote2.default).use(_markdownItDeflist2.default).use(_markdownItAbbr2.default).use(_markdownItIns2.default).use(_markdownItMark2.default).use(_markdownItKatex2.default, {
	        "throwOnError": false,
	        "errorColor": " #cc0000"
	      }).use(_markdownItTaskLists2.default, {
	        enabled: this.taskLists
	      });

	      if (this.emoji) {
	        this.md.use(_markdownItEmoji2.default);
	      }

	      if (this.highlight) {
	        this.md.use(_markdownItHighlight2.default);
	      }

	      this.md.set({
	        html: this.html,
	        xhtmlOut: this.xhtmlOut,
	        breaks: this.breaks,
	        linkify: this.linkify,
	        typographer: this.typographer,
	        langPrefix: this.langPrefix,
	        quotes: this.quotes
	      });
	      this.md.renderer.rules.table_open = function () {
	        return '<table class="' + _this2.tableClass + '">\n';
	      };
	      var defaultLinkRenderer = this.md.renderer.rules.link_open || function (tokens, idx, options, env, self) {
	        return self.renderToken(tokens, idx, options);
	      };
	      this.md.renderer.rules.link_open = function (tokens, idx, options, env, self) {
	        (0, _keys2.default)(_this2.anchorAttributes).map(function (attribute) {
	          var aIndex = tokens[idx].attrIndex(attribute);
	          var value = _this2.anchorAttributes[attribute];
	          if (aIndex < 0) {
	            tokens[idx].attrPush([attribute, value]); // add new attribute
	          } else {
	            tokens[idx].attrs[aIndex][1] = value;
	          }
	        });
	        return defaultLinkRenderer(tokens, idx, options, env, self);
	      };

	      if (this.toc) {
	        this.md.use(_markdownItTocAndAnchor2.default, {
	          tocClassName: this.tocClass,
	          tocFirstLevel: this.tocFirstLevel,
	          tocLastLevel: this.tocLastLevelComputed,
	          anchorLink: this.tocAnchorLink,
	          anchorLinkSymbol: this.tocAnchorLinkSymbol,
	          anchorLinkSpace: this.tocAnchorLinkSpace,
	          anchorClassName: this.tocAnchorClass,
	          anchorLinkSymbolClassName: this.tocAnchorLinkClass,
	          tocCallback: function tocCallback(tocMarkdown, tocArray, tocHtml) {
	            if (tocHtml) {
	              if (_this2.tocId && document.getElementById(_this2.tocId)) {
	                document.getElementById(_this2.tocId).innerHTML = tocHtml;
	              }

	              _this2.$emit('toc-rendered', tocHtml);
	            }
	          }
	        });
	      }
	    },
	    renderMarkdown: function renderMarkdown() {
	      if (!this.md) return;
	      var outHtml = this.md.render(this.show ? this.prerender(this.sourceData) : '');
	      outHtml = '<div>' + this.postrender(outHtml) + '</div>';
	      var newVNode = (0, _snabbdomVirtualize2.default)(outHtml);
	      var oldVNode = (0, _snabbdomVirtualize2.default)(this.$refs.markdown);
	      snabbdomPatch(oldVNode, newVNode);
	    }
	  }
	};

/***/ }),
/* 1 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_1__;

/***/ }),
/* 2 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ }),
/* 4 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ }),
/* 5 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_5__;

/***/ }),
/* 6 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_6__;

/***/ }),
/* 7 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_7__;

/***/ }),
/* 8 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ }),
/* 9 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_9__;

/***/ }),
/* 10 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ }),
/* 11 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_11__;

/***/ }),
/* 12 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_12__;

/***/ }),
/* 13 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_13__;

/***/ }),
/* 14 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ }),
/* 15 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ }),
/* 16 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_16__;

/***/ }),
/* 17 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ }),
/* 18 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_18__;

/***/ }),
/* 19 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_19__;

/***/ }),
/* 20 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_20__;

/***/ }),
/* 21 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_21__;

/***/ }),
/* 22 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_22__;

/***/ }),
/* 23 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_23__;

/***/ }),
/* 24 */
/***/ (function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_24__;

/***/ })
/******/ ])
});
;