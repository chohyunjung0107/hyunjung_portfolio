"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/api/database";
exports.ids = ["pages/api/database"];
exports.modules = {

/***/ "mssql":
/*!************************!*\
  !*** external "mssql" ***!
  \************************/
/***/ ((module) => {

module.exports = require("mssql");

/***/ }),

/***/ "(api)/./pages/api/database.js":
/*!*******************************!*\
  !*** ./pages/api/database.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mssql__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mssql */ \"mssql\");\n/* harmony import */ var mssql__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mssql__WEBPACK_IMPORTED_MODULE_0__);\n\n// const sql = require(\"mssql\");\nconst config = {\n    user: \"sa\",\n    password: \"Altiall!000@\",\n    server: \"61.101.55.159\",\n    port: 8902,\n    database: \"prismWcs\",\n    options: {\n        encrypt: true,\n        trustServerCertificate: true,\n        enableArithAbort: true\n    }\n};\nconst getTableData = async (_req, res)=>{\n    try {\n        // MSSQL 데이터베이스에 연결\n        mssql__WEBPACK_IMPORTED_MODULE_0___default().connect(config);\n        // 테이블 데이터 가져오기\n        const result = await mssql__WEBPACK_IMPORTED_MODULE_0___default().query(`select * from TB_COM_USER_MST`);\n        if (!Array.isArray(result.recordset)) {\n            throw new Error(\"Cannot find user data\");\n        }\n        // 결과 출력\n        // console.dir(result);\n        res.status(200).json(result.recordset);\n    // MSSQL 데이터베이스 연결 종료\n    // await sql.close();\n    } catch (err) {\n        // 오류 처리\n        // try 실패시, 에러코드(500) 응답(res)하고, json형식으로 에러 메시지 출력\n        res.status(500).json({\n            statusCode: 500,\n            message: err.message\n        });\n        console.error(err);\n    }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (getTableData);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwaSkvLi9wYWdlcy9hcGkvZGF0YWJhc2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQXdCO0FBRXhCLGdDQUFnQztBQUVoQyxNQUFNQyxTQUFTO0lBQ1hDLE1BQU07SUFDTkMsVUFBVTtJQUNWQyxRQUFRO0lBQ1JDLE1BQU07SUFDTkMsVUFBVTtJQUNWQyxTQUFTO1FBQ0xDLFNBQVMsSUFBSTtRQUNiQyx3QkFBd0IsSUFBSTtRQUM1QkMsa0JBQWtCLElBQUk7SUFDMUI7QUFDSjtBQUVBLE1BQU1DLGVBQWUsT0FBT0MsTUFBTUMsTUFBUTtJQUN0QyxJQUFJO1FBQ0EsbUJBQW1CO1FBQ25CYixvREFBVyxDQUFDQztRQUVaLGVBQWU7UUFDZixNQUFNYyxTQUFTLE1BQU1mLGtEQUFTLENBQUMsQ0FBQyw2QkFBNkIsQ0FBQztRQUU5RCxJQUFJLENBQUNpQixNQUFNQyxPQUFPLENBQUNILE9BQU9JLFNBQVMsR0FBRztZQUNsQyxNQUFNLElBQUlDLE1BQU0seUJBQXlCO1FBQzdDLENBQUM7UUFDRCxRQUFRO1FBQ1IsdUJBQXVCO1FBQ3ZCUCxJQUFJUSxNQUFNLENBQUMsS0FBS0MsSUFBSSxDQUFDUCxPQUFPSSxTQUFTO0lBRXJDLHFCQUFxQjtJQUNyQixxQkFBcUI7SUFDekIsRUFBRSxPQUFPSSxLQUFLO1FBQ1YsUUFBUTtRQUNSLG1EQUFtRDtRQUNuRFYsSUFBSVEsTUFBTSxDQUFDLEtBQUtDLElBQUksQ0FBQztZQUFFRSxZQUFZO1lBQUtDLFNBQVNGLElBQUlFLE9BQU87UUFBQztRQUM3REMsUUFBUUMsS0FBSyxDQUFDSjtJQUNsQjtBQUNKO0FBRUEsaUVBQWVaLFlBQVlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9uZXh0LXByb2plY3QvLi9wYWdlcy9hcGkvZGF0YWJhc2UuanM/NzQ2YSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3FsIGZyb20gXCJtc3NxbFwiO1xyXG5cclxuLy8gY29uc3Qgc3FsID0gcmVxdWlyZShcIm1zc3FsXCIpO1xyXG5cclxuY29uc3QgY29uZmlnID0ge1xyXG4gICAgdXNlcjogXCJzYVwiLFxyXG4gICAgcGFzc3dvcmQ6IFwiQWx0aWFsbCEwMDBAXCIsXHJcbiAgICBzZXJ2ZXI6IFwiNjEuMTAxLjU1LjE1OVwiLFxyXG4gICAgcG9ydDogODkwMixcclxuICAgIGRhdGFiYXNlOiBcInByaXNtV2NzXCIsXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgZW5jcnlwdDogdHJ1ZSxcclxuICAgICAgICB0cnVzdFNlcnZlckNlcnRpZmljYXRlOiB0cnVlLFxyXG4gICAgICAgIGVuYWJsZUFyaXRoQWJvcnQ6IHRydWUsXHJcbiAgICB9LFxyXG59O1xyXG5cclxuY29uc3QgZ2V0VGFibGVEYXRhID0gYXN5bmMgKF9yZXEsIHJlcykgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICAvLyBNU1NRTCDrjbDsnbTthLDrsqDsnbTsiqTsl5Ag7Jew6rKwXHJcbiAgICAgICAgc3FsLmNvbm5lY3QoY29uZmlnKTtcclxuXHJcbiAgICAgICAgLy8g7YWM7J2067iUIOuNsOydtO2EsCDqsIDsoLjsmKTquLBcclxuICAgICAgICBjb25zdCByZXN1bHQgPSBhd2FpdCBzcWwucXVlcnkoYHNlbGVjdCAqIGZyb20gVEJfQ09NX1VTRVJfTVNUYCk7XHJcblxyXG4gICAgICAgIGlmICghQXJyYXkuaXNBcnJheShyZXN1bHQucmVjb3Jkc2V0KSkge1xyXG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDYW5ub3QgZmluZCB1c2VyIGRhdGFcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIOqysOqzvCDstpzroKVcclxuICAgICAgICAvLyBjb25zb2xlLmRpcihyZXN1bHQpO1xyXG4gICAgICAgIHJlcy5zdGF0dXMoMjAwKS5qc29uKHJlc3VsdC5yZWNvcmRzZXQpO1xyXG5cclxuICAgICAgICAvLyBNU1NRTCDrjbDsnbTthLDrsqDsnbTsiqQg7Jew6rKwIOyiheujjFxyXG4gICAgICAgIC8vIGF3YWl0IHNxbC5jbG9zZSgpO1xyXG4gICAgfSBjYXRjaCAoZXJyKSB7XHJcbiAgICAgICAgLy8g7Jik66WYIOyymOumrFxyXG4gICAgICAgIC8vIHRyeSDsi6TtjKjsi5wsIOyXkOufrOy9lOuTnCg1MDApIOydkeuLtShyZXMp7ZWY6rOgLCBqc29u7ZiV7Iud7Jy866GcIOyXkOufrCDrqZTsi5zsp4Ag7Lac66ClXHJcbiAgICAgICAgcmVzLnN0YXR1cyg1MDApLmpzb24oeyBzdGF0dXNDb2RlOiA1MDAsIG1lc3NhZ2U6IGVyci5tZXNzYWdlIH0pO1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyKTtcclxuICAgIH1cclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGdldFRhYmxlRGF0YTtcclxuIl0sIm5hbWVzIjpbInNxbCIsImNvbmZpZyIsInVzZXIiLCJwYXNzd29yZCIsInNlcnZlciIsInBvcnQiLCJkYXRhYmFzZSIsIm9wdGlvbnMiLCJlbmNyeXB0IiwidHJ1c3RTZXJ2ZXJDZXJ0aWZpY2F0ZSIsImVuYWJsZUFyaXRoQWJvcnQiLCJnZXRUYWJsZURhdGEiLCJfcmVxIiwicmVzIiwiY29ubmVjdCIsInJlc3VsdCIsInF1ZXJ5IiwiQXJyYXkiLCJpc0FycmF5IiwicmVjb3Jkc2V0IiwiRXJyb3IiLCJzdGF0dXMiLCJqc29uIiwiZXJyIiwic3RhdHVzQ29kZSIsIm1lc3NhZ2UiLCJjb25zb2xlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(api)/./pages/api/database.js\n");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("(api)/./pages/api/database.js"));
module.exports = __webpack_exports__;

})();