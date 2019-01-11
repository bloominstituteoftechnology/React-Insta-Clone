webpackHotUpdate("main",{

/***/ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Comment/comment.css":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-oneOf-3-1!./node_modules/postcss-loader/src??postcss!./src/components/Comment/comment.css ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".comment {\n    text-align: justify;\n    margin-top:20px;\n    margin-bottom:20px;\n    margin-left: 10px;\n}\n\n.form1 input{\n\n    height:50px;\n    width:45%;\n\n\n}", ""]);

// exports


/***/ }),

/***/ "./src/components/Comment/Comment.js":
/*!*******************************************!*\
  !*** ./src/components/Comment/Comment.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _comment_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./comment.css */ "./src/components/Comment/comment.css");
/* harmony import */ var _comment_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_comment_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
var _jsxFileName = "/Users/sinha.arpita/lambdaSchool/React-Insta-Clone/instagram/src/components/Comment/Comment.js";




var Comment = function Comment(props) {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "comment",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    },
    __self: this
  }, " ", props.comment.username, " "), props.comment.text);
};

Comment.propTypes = {
  username: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string,
  text: prop_types__WEBPACK_IMPORTED_MODULE_2___default.a.string
};
/* harmony default export */ __webpack_exports__["default"] = (Comment);

/***/ }),

/***/ "./src/components/Comment/comment.css":
/*!********************************************!*\
  !*** ./src/components/Comment/comment.css ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./comment.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Comment/comment.css");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(true) {
	module.hot.accept(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./comment.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Comment/comment.css", function() {
		var newContent = __webpack_require__(/*! !../../../node_modules/css-loader??ref--6-oneOf-3-1!../../../node_modules/postcss-loader/src??postcss!./comment.css */ "./node_modules/css-loader/index.js?!./node_modules/postcss-loader/src/index.js?!./src/components/Comment/comment.css");

		if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];

		var locals = (function(a, b) {
			var key, idx = 0;

			for(key in a) {
				if(!b || a[key] !== b[key]) return false;
				idx++;
			}

			for(key in b) idx--;

			return idx === 0;
		}(content.locals, newContent.locals));

		if(!locals) throw new Error('Aborting CSS HMR due to changed css-modules locals.');

		update(newContent);
	});

	module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/components/CommentSection/CommentSection.js":
/*!*********************************************************!*\
  !*** ./src/components/CommentSection/CommentSection.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_sinha_arpita_lambdaSchool_React_Insta_Clone_instagram_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _Users_sinha_arpita_lambdaSchool_React_Insta_Clone_instagram_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _Users_sinha_arpita_lambdaSchool_React_Insta_Clone_instagram_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn */ "./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _Users_sinha_arpita_lambdaSchool_React_Insta_Clone_instagram_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/getPrototypeOf */ "./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _Users_sinha_arpita_lambdaSchool_React_Insta_Clone_instagram_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/inherits */ "./node_modules/@babel/runtime/helpers/esm/inherits.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _Comment_Comment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./../Comment/Comment */ "./src/components/Comment/Comment.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prop-types */ "./node_modules/prop-types/index.js");
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _CommentStyled__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./CommentStyled */ "./src/components/CommentSection/CommentStyled.js");





var _jsxFileName = "/Users/sinha.arpita/lambdaSchool/React-Insta-Clone/instagram/src/components/CommentSection/CommentSection.js";





var CommentSection =
/*#__PURE__*/
function (_React$Component) {
  Object(_Users_sinha_arpita_lambdaSchool_React_Insta_Clone_instagram_node_modules_babel_runtime_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_4__["default"])(CommentSection, _React$Component);

  function CommentSection(props) {
    var _this;

    Object(_Users_sinha_arpita_lambdaSchool_React_Insta_Clone_instagram_node_modules_babel_runtime_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, CommentSection);

    _this = Object(_Users_sinha_arpita_lambdaSchool_React_Insta_Clone_instagram_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, Object(_Users_sinha_arpita_lambdaSchool_React_Insta_Clone_instagram_node_modules_babel_runtime_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(CommentSection).call(this, props));

    _this.addNewComment = function (event) {
      event.preventDefault();
      console.log("Comment added");
      var addedComment = {
        text: _this.state.commentText,
        username: "Arpita Sinha"
      };

      var newComments = _this.state.comments.slice();

      newComments.push(addedComment);

      _this.setState({
        comments: newComments
      });
    };

    _this.commentInput = function (event) {
      _this.state.commentText = event.target.value;
    };

    _this.state = {
      comments: props.comments,
      commentText: ""
    };
    return _this;
  }

  Object(_Users_sinha_arpita_lambdaSchool_React_Insta_Clone_instagram_node_modules_babel_runtime_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(CommentSection, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 39
        },
        __self: this
      }, this.state.comments.map(function (comment) {
        return react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement(_Comment_Comment__WEBPACK_IMPORTED_MODULE_6__["default"], {
          key: comment.id,
          comment: comment,
          __source: {
            fileName: _jsxFileName,
            lineNumber: 42
          },
          __self: this
        });
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("form", {
        className: "form1",
        onSubmit: this.addNewComment,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 45
        },
        __self: this
      }, react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("input", {
        type: "text",
        value: this.state.value,
        placeholder: "Write a Comment...",
        onChange: this.commentInput,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 46
        },
        __self: this
      }), react__WEBPACK_IMPORTED_MODULE_5___default.a.createElement("button", {
        type: "submit",
        className: "add",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 48
        },
        __self: this
      }, " Add Comment")));
    }
  }]);

  return CommentSection;
}(react__WEBPACK_IMPORTED_MODULE_5___default.a.Component);

/* harmony default export */ __webpack_exports__["default"] = (CommentSection);

/***/ }),

/***/ "./src/components/CommentSection/CommentStyled.js":
/*!********************************************************!*\
  !*** ./src/components/CommentSection/CommentStyled.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Users_sinha_arpita_lambdaSchool_React_Insta_Clone_instagram_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral */ "./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");


function _templateObject() {
  var data = Object(_Users_sinha_arpita_lambdaSchool_React_Insta_Clone_instagram_node_modules_babel_runtime_helpers_esm_taggedTemplateLiteral__WEBPACK_IMPORTED_MODULE_0__["default"])(["\n\n  background-color:skyblue;\n\n\n\n\n    "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}



var CommentStyled = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].input(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (CommentStyled);

/***/ })

})
//# sourceMappingURL=main.b0f3ee5aedca8622de73.hot-update.js.map