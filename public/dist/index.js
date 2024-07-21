/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/models.ts":
/*!***********************!*\
  !*** ./src/models.ts ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   accessOptions: () => (/* binding */ accessOptions)
/* harmony export */ });
var accessOptions;
(function (accessOptions) {
    accessOptions["administrator"] = "administrador";
    accessOptions["nmanager"] = "gerente";
    accessOptions["employee"] = "funcionario";
})(accessOptions || (accessOptions = {}));


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
/******/ 			// no module.id needed
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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _models__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models */ "./src/models.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (undefined && undefined.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};

var content = document.getElementById('content');
var button = document.querySelector('button[id="add"]');
var accessRadio = document.getElementById('accessRadio');
button.addEventListener('click', addEmployee);
var accessOptionsValues = Object.values(_models__WEBPACK_IMPORTED_MODULE_0__.accessOptions);
var getUser = function () { return __awaiter(void 0, void 0, void 0, function () {
    var response, users;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, fetch('http://localhost:5011/users')];
            case 1:
                response = _a.sent();
                return [4 /*yield*/, response.json()];
            case 2:
                users = _a.sent();
                return [2 /*return*/, users];
        }
    });
}); };
var updateUserLayout = function () { return __awaiter(void 0, void 0, void 0, function () {
    var users;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, getUser()];
            case 1:
                users = _a.sent();
                users.map(function (user) {
                    content.innerHTML += (createLine(user));
                });
                return [2 /*return*/];
        }
    });
}); };
updateUserLayout();
function addEmployee() {
    var fullName = document.querySelector('#fullName');
    var register = document.querySelector('#register');
    var admin = document.querySelector('input[name="access"]:checked');
    var active = document.querySelector('#active');
    var user = {
        fullName: fullName.value,
        register: register.value,
        access: admin.value,
        active: active.checked
    };
}
var createAccessRadioLine = function (value, i) {
    accessRadio.innerHTML += "\n      <div class=\"form-check\">\n        <input class=\"form-check-input\" type=\"radio\" name=\"access\" id=\"accessRadio".concat(i, "\" value=\"").concat(value, "\">\n        <label class=\"form-check-label capitalLetter\" for=\"no\">\n          ").concat(value, "\n        </label>\n      </div>\n      ");
};
accessOptionsValues.forEach(createAccessRadioLine);
function createLine(user) {
    return "\n        <div class=\"card mb-1\">\n          <div class=\"card-header\">\n            ".concat(user.register, "\n          </div>\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">").concat(user.fullName, "</h5>\n            <a href=\"#\" class=\"btn btn-primary\">").concat(user.active ? 'Ativo' : 'Inativo', "</a>\n          </div>\n          <div class=\"card-footer bg-transparent border-success capitalLetter\">\n            Acesso: ").concat(user.access, "\n          </div>\n        </div>");
}

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxDQUFDLENBQUMsU0FBUyw0SUFHN0QsSUFBSSxDQUFDLE1BQU0sdUNBRWxCLENBQUM7QUFDWixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL21vZGVscy50cyIsIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly8vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHMiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGVudW0gYWNjZXNzT3B0aW9ucyB7XHJcbiAgICBhZG1pbmlzdHJhdG9yID0gXCJhZG1pbmlzdHJhZG9yXCIsXHJcbiAgICBubWFuYWdlciA9IFwiZ2VyZW50ZVwiLFxyXG4gICAgZW1wbG95ZWUgPSBcImZ1bmNpb25hcmlvXCJcclxuICB9XHJcblxyXG4gIGV4cG9ydCB0eXBlIHVzZXJUeXBlID0ge1xyXG4gICAgZnVsbE5hbWU6IHN0cmluZztcclxuICAgIHJlZ2lzdGVyOiBzdHJpbmcgfCBudW1iZXI7XHJcbiAgICBhY2Nlc3M6IGFjY2Vzc09wdGlvbnM7XHJcbiAgICBhY3RpdmU6IGJvb2xlYW47IFxyXG5cclxuICB9IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCIgICAgaW1wb3J0IHsgYWNjZXNzT3B0aW9ucywgdXNlclR5cGUgfSBmcm9tIFwiLi9tb2RlbHNcIjtcclxuICAgIFxyXG4gICAgbGV0IGNvbnRlbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29udGVudCcpIGFzIEhUTUxFbGVtZW50O1xyXG4gICAgY29uc3QgYnV0dG9uID0gPEhUTUxJbnB1dEVsZW1lbnQ+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbltpZD1cImFkZFwiXScpO1xyXG4gICAgY29uc3QgYWNjZXNzUmFkaW8gPSA8SFRNTEVsZW1lbnQ+IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhY2Nlc3NSYWRpbycpO1xyXG4gICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgYWRkRW1wbG95ZWUpO1xyXG5cclxuICAgIGNvbnN0IGFjY2Vzc09wdGlvbnNWYWx1ZXMgPSBPYmplY3QudmFsdWVzKGFjY2Vzc09wdGlvbnMpXHJcblxyXG4gICAgY29uc3QgZ2V0VXNlciA9IGFzeW5jICgpOiBQcm9taXNlPHVzZXJUeXBlW10+ID0+IHtcclxuICAgICAgY29uc3QgcmVzcG9uc2U6IFJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHA6Ly9sb2NhbGhvc3Q6NTAxMS91c2VycycpO1xyXG4gICAgICBjb25zdCB1c2VyczogdXNlclR5cGVbXSA9IGF3YWl0IHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgcmV0dXJuIHVzZXJzO1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCB1cGRhdGVVc2VyTGF5b3V0ID0gYXN5bmMgKCk6IFByb21pc2U8dm9pZD4gPT57XHJcbiAgICAgIGNvbnN0IHVzZXJzOiB1c2VyVHlwZVtdID0gYXdhaXQgZ2V0VXNlcigpO1xyXG5cclxuICAgICAgdXNlcnMubWFwKCh1c2VyOiB1c2VyVHlwZSkgPT4ge1xyXG4gICAgICAgIGNvbnRlbnQuaW5uZXJIVE1MICs9IDxzdHJpbmc+KFxyXG4gICAgICAgICAgY3JlYXRlTGluZSh1c2VyKVxyXG4gICAgICAgICk7XHJcbiAgICAgIH0pXHJcbiAgICB9O1xyXG5cclxuICAgIHVwZGF0ZVVzZXJMYXlvdXQoKTtcclxuXHJcblxyXG5cclxuICAgIGZ1bmN0aW9uIGFkZEVtcGxveWVlKCk6IHZvaWR7XHJcbiAgICAgIGxldCBmdWxsTmFtZSA9IDxIVE1MSW5wdXRFbGVtZW50PiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZnVsbE5hbWUnKTtcclxuICAgICAgbGV0IHJlZ2lzdGVyID0gPEhUTUxJbnB1dEVsZW1lbnQ+IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNyZWdpc3RlcicpO1xyXG4gICAgICBsZXQgYWRtaW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwiYWNjZXNzXCJdOmNoZWNrZWQnKSBhcyBIVE1MSW5wdXRFbGVtZW50O1xyXG4gICAgICBsZXQgYWN0aXZlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FjdGl2ZScpIGFzIEhUTUxJbnB1dEVsZW1lbnQ7XHJcblxyXG4gICAgICBsZXQgdXNlcjogdXNlclR5cGUgPSB7XHJcbiAgICAgICAgZnVsbE5hbWU6IGZ1bGxOYW1lIS52YWx1ZSwgXHJcbiAgICAgICAgcmVnaXN0ZXI6IHJlZ2lzdGVyLnZhbHVlLCBcclxuICAgICAgICBhY2Nlc3M6IDxhY2Nlc3NPcHRpb25zPmFkbWluLnZhbHVlLCBcclxuICAgICAgICBhY3RpdmU6IGFjdGl2ZS5jaGVja2VkXHJcbiAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjcmVhdGVBY2Nlc3NSYWRpb0xpbmUgPSAodmFsdWU6IHN0cmluZywgaTogbnVtYmVyKSA9PiB7XHJcbiAgICAgIGFjY2Vzc1JhZGlvLmlubmVySFRNTCArPSBgXHJcbiAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNoZWNrXCI+XHJcbiAgICAgICAgPGlucHV0IGNsYXNzPVwiZm9ybS1jaGVjay1pbnB1dFwiIHR5cGU9XCJyYWRpb1wiIG5hbWU9XCJhY2Nlc3NcIiBpZD1cImFjY2Vzc1JhZGlvJHtpfVwiIHZhbHVlPVwiJHt2YWx1ZX1cIj5cclxuICAgICAgICA8bGFiZWwgY2xhc3M9XCJmb3JtLWNoZWNrLWxhYmVsIGNhcGl0YWxMZXR0ZXJcIiBmb3I9XCJub1wiPlxyXG4gICAgICAgICAgJHt2YWx1ZX1cclxuICAgICAgICA8L2xhYmVsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgYDtcclxuICAgIH1cclxuXHJcbiAgICBhY2Nlc3NPcHRpb25zVmFsdWVzLmZvckVhY2goY3JlYXRlQWNjZXNzUmFkaW9MaW5lKTtcclxuXHJcbiAgICBmdW5jdGlvbiBjcmVhdGVMaW5lKHVzZXI6IHVzZXJUeXBlKTogc3RyaW5nIHtcclxuICAgICAgcmV0dXJuIGBcclxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZCBtYi0xXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cclxuICAgICAgICAgICAgJHt1c2VyLnJlZ2lzdGVyfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ib2R5XCI+XHJcbiAgICAgICAgICAgIDxoNSBjbGFzcz1cImNhcmQtdGl0bGVcIj4ke3VzZXIuZnVsbE5hbWV9PC9oNT5cclxuICAgICAgICAgICAgPGEgaHJlZj1cIiNcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPiR7dXNlci5hY3RpdmUgPyAnQXRpdm8nIDogJ0luYXRpdm8nfTwvYT5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtZm9vdGVyIGJnLXRyYW5zcGFyZW50IGJvcmRlci1zdWNjZXNzIGNhcGl0YWxMZXR0ZXJcIj5cclxuICAgICAgICAgICAgQWNlc3NvOiAke3VzZXIuYWNjZXNzfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+YDtcclxuICAgIH1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9