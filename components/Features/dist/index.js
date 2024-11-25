"use client";
"use strict";
exports.__esModule = true;
var react_1 = require("react");
var featuresData_1 = require("./featuresData");
var SingleFeature_1 = require("./SingleFeature");
var SectionHeader_1 = require("../Common/SectionHeader");
var Feature = function () {
    return (react_1["default"].createElement(react_1["default"].Fragment, null,
        react_1["default"].createElement("section", { id: "features", className: "py-20 lg:py-25 xl:py-30" },
            react_1["default"].createElement("div", { className: "mx-auto max-w-c-1315 px-4 md:px-8 xl:px-0" },
                react_1["default"].createElement(SectionHeader_1["default"], { headerInfo: {
                        title: "FITUR KAMI",
                        subtitle: "Fitur Layanan Sewa Motor",
                        description: "Layanan kami menawarkan motor berkualitas dengan paket sewa yang fleksibel. \n                            Nikmati perjalanan tanpa ribet dengan berbagai pilihan yang kami sediakan."
                    } }),
                react_1["default"].createElement("div", { className: "mt-12.5 grid grid-cols-1 gap-7.5 md:grid-cols-2 lg:mt-15 lg:grid-cols-3 xl:mt-20 xl:gap-12.5" }, featuresData_1["default"].map(function (feature, key) { return (react_1["default"].createElement(SingleFeature_1["default"], { feature: feature, key: key })); }))))));
};
exports["default"] = Feature;
