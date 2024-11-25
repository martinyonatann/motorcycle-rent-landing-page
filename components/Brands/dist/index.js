"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var SingleBrand_1 = require("./SingleBrand");
var brandData_1 = require("./brandData");
var Brands = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("section", { id: "brands", className: "border border-x-0 border-y-stroke bg-alabaster py-5 dark:border-y-strokedark dark:bg-black" },
            react_1["default"].createElement("div", { className: "mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0" },
                react_1["default"].createElement("div", { className: "grid grid-cols-3 items-center justify-center gap-7.5 md:grid-cols-6 lg:gap-12.5 xl:gap-29" }, brandData_1["default"].map(function (brand, key) { return (react_1["default"].createElement(SingleBrand_1["default"], { brand: brand, key: key })); }))))));
};
exports["default"] = Brands;
