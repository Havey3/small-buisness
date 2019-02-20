(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _print = _interopRequireDefault(require("./print.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const api = () => {
  fetch("http://localhost:8088/employees?_expand=department&&_expand=computer").then(employees => employees.json()).then(employees => {
    employees.forEach(employee => {
      (0, _print.default)(employee);
    });
  });
};

var _default = api;
exports.default = _default;

},{"./print.js":4}],2:[function(require,module,exports){
"use strict";

var _apiManager = _interopRequireDefault(require("./apiManager.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import build from "./object.js"
// import print from "./print.js"
// print()
(0, _apiManager.default)(); // build()

},{"./apiManager.js":1}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

const build = (employeeName, employeeDepartment, employeeComputer) => {
  return `
    <section class="test"
    <header id="head">
    <h1>${employeeName}</h1>
    </header>
    <p>${employeeDepartment}</p>
    <p>${employeeComputer}</p>
    </section>
    `;
};

var _default = build;
exports.default = _default;

},{}],4:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _object = _interopRequireDefault(require("./object.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const print = employee => {
  document.querySelector("#attempt").innerHTML += (0, _object.default)(employee.name, employee.department.departmentName, employee.computer.computerName);
};

var _default = print;
exports.default = _default;

},{"./object.js":3}]},{},[2])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIuLi9zY3JpcHRzL2FwaU1hbmFnZXIuanMiLCIuLi9zY3JpcHRzL21haW4uanMiLCIuLi9zY3JpcHRzL29iamVjdC5qcyIsIi4uL3NjcmlwdHMvcHJpbnQuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7O0FDQUE7Ozs7QUFDQSxNQUFNLEdBQUcsR0FBRyxNQUFNO0FBQ2xCLEVBQUEsS0FBSyxDQUFDLHNFQUFELENBQUwsQ0FDQyxJQURELENBQ00sU0FBUyxJQUFJLFNBQVMsQ0FBQyxJQUFWLEVBRG5CLEVBRUMsSUFGRCxDQUVNLFNBQVMsSUFBSTtBQUNmLElBQUEsU0FBUyxDQUFDLE9BQVYsQ0FBa0IsUUFBUSxJQUFJO0FBQzFCLDBCQUFNLFFBQU47QUFDSCxLQUZEO0FBR0gsR0FORDtBQU9DLENBUkQ7O2VBVWUsRzs7Ozs7O0FDWGY7Ozs7QUFDQTtBQUNBO0FBRUE7QUFDQSwyQixDQUNBOzs7Ozs7Ozs7O0FDTkEsTUFBTSxLQUFLLEdBQUcsQ0FBQyxZQUFELEVBQWUsa0JBQWYsRUFBbUMsZ0JBQW5DLEtBQXdEO0FBQ2xFLFNBQVE7OztVQUdGLFlBQWE7O1NBRWQsa0JBQW1CO1NBQ25CLGdCQUFpQjs7S0FOdEI7QUFTSCxDQVZEOztlQVllLEs7Ozs7Ozs7Ozs7O0FDWmY7Ozs7QUFHQSxNQUFNLEtBQUssR0FBSSxRQUFELElBQWM7QUFDeEIsRUFBQSxRQUFRLENBQUMsYUFBVCxDQUF1QixVQUF2QixFQUFtQyxTQUFuQyxJQUFnRCxxQkFBTSxRQUFRLENBQUMsSUFBZixFQUFxQixRQUFRLENBQUMsVUFBVCxDQUFvQixjQUF6QyxFQUF5RCxRQUFRLENBQUMsUUFBVCxDQUFrQixZQUEzRSxDQUFoRDtBQUVILENBSEQ7O2VBSWUsSyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uKCl7ZnVuY3Rpb24gcihlLG4sdCl7ZnVuY3Rpb24gbyhpLGYpe2lmKCFuW2ldKXtpZighZVtpXSl7dmFyIGM9XCJmdW5jdGlvblwiPT10eXBlb2YgcmVxdWlyZSYmcmVxdWlyZTtpZighZiYmYylyZXR1cm4gYyhpLCEwKTtpZih1KXJldHVybiB1KGksITApO3ZhciBhPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIraStcIidcIik7dGhyb3cgYS5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGF9dmFyIHA9bltpXT17ZXhwb3J0czp7fX07ZVtpXVswXS5jYWxsKHAuZXhwb3J0cyxmdW5jdGlvbihyKXt2YXIgbj1lW2ldWzFdW3JdO3JldHVybiBvKG58fHIpfSxwLHAuZXhwb3J0cyxyLGUsbix0KX1yZXR1cm4gbltpXS5leHBvcnRzfWZvcih2YXIgdT1cImZ1bmN0aW9uXCI9PXR5cGVvZiByZXF1aXJlJiZyZXF1aXJlLGk9MDtpPHQubGVuZ3RoO2krKylvKHRbaV0pO3JldHVybiBvfXJldHVybiByfSkoKSIsImltcG9ydCBwcmludCBmcm9tIFwiLi9wcmludC5qc1wiXHJcbmNvbnN0IGFwaSA9ICgpID0+IHtcclxuZmV0Y2goXCJodHRwOi8vbG9jYWxob3N0OjgwODgvZW1wbG95ZWVzP19leHBhbmQ9ZGVwYXJ0bWVudCYmX2V4cGFuZD1jb21wdXRlclwiKVxyXG4udGhlbihlbXBsb3llZXMgPT4gZW1wbG95ZWVzLmpzb24oKSlcclxuLnRoZW4oZW1wbG95ZWVzID0+IHtcclxuICAgIGVtcGxveWVlcy5mb3JFYWNoKGVtcGxveWVlID0+IHtcclxuICAgICAgICBwcmludChlbXBsb3llZSlcclxuICAgIH0pXHJcbn0pXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFwaSIsImltcG9ydCBhcGkgZnJvbSBcIi4vYXBpTWFuYWdlci5qc1wiXHJcbi8vIGltcG9ydCBidWlsZCBmcm9tIFwiLi9vYmplY3QuanNcIlxyXG4vLyBpbXBvcnQgcHJpbnQgZnJvbSBcIi4vcHJpbnQuanNcIlxyXG5cclxuLy8gcHJpbnQoKVxyXG5hcGkoKVxyXG4vLyBidWlsZCgpXHJcblxyXG4iLCJjb25zdCBidWlsZCA9IChlbXBsb3llZU5hbWUsIGVtcGxveWVlRGVwYXJ0bWVudCwgZW1wbG95ZWVDb21wdXRlcikgPT4ge1xyXG4gICAgcmV0dXJuIGBcclxuICAgIDxzZWN0aW9uIGNsYXNzPVwidGVzdFwiXHJcbiAgICA8aGVhZGVyIGlkPVwiaGVhZFwiPlxyXG4gICAgPGgxPiR7ZW1wbG95ZWVOYW1lfTwvaDE+XHJcbiAgICA8L2hlYWRlcj5cclxuICAgIDxwPiR7ZW1wbG95ZWVEZXBhcnRtZW50fTwvcD5cclxuICAgIDxwPiR7ZW1wbG95ZWVDb21wdXRlcn08L3A+XHJcbiAgICA8L3NlY3Rpb24+XHJcbiAgICBgXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGJ1aWxkIiwiaW1wb3J0IGJ1aWxkIGZyb20gXCIuL29iamVjdC5qc1wiXHJcblxyXG5cclxuY29uc3QgcHJpbnQgPSAoZW1wbG95ZWUpID0+IHtcclxuICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYXR0ZW1wdFwiKS5pbm5lckhUTUwgKz0gYnVpbGQoZW1wbG95ZWUubmFtZSwgZW1wbG95ZWUuZGVwYXJ0bWVudC5kZXBhcnRtZW50TmFtZSwgZW1wbG95ZWUuY29tcHV0ZXIuY29tcHV0ZXJOYW1lKVxyXG5cclxufVxyXG5leHBvcnQgZGVmYXVsdCBwcmludCJdfQ==
