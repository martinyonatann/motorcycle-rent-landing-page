"use strict";
exports.__esModule = true;
exports.metadata = void 0;
var Hero_1 = require("@/components/Hero");
var Brands_1 = require("@/components/Brands");
var Features_1 = require("@/components/Features");
var About_1 = require("@/components/About");
var FeaturesTab_1 = require("@/components/FeaturesTab");
var FunFact_1 = require("@/components/FunFact");
var Integration_1 = require("@/components/Integration");
var CTA_1 = require("@/components/CTA");
var FAQ_1 = require("@/components/FAQ");
var Pricing_1 = require("@/components/Pricing");
var Contact_1 = require("@/components/Contact");
var Blog_1 = require("@/components/Blog");
var Testimonial_1 = require("@/components/Testimonial");
exports.metadata = {
    title: "Next.js Starter Template for SaaS Startups - Solid SaaS Boilerplate",
    description: "This is Home for Solid Pro"
};
function Home() {
    return (React.createElement("main", null,
        React.createElement(Hero_1["default"], null),
        React.createElement(Brands_1["default"], null),
        React.createElement(Features_1["default"], null),
        React.createElement(About_1["default"], null),
        React.createElement(FeaturesTab_1["default"], null),
        React.createElement(FunFact_1["default"], null),
        React.createElement(Integration_1["default"], null),
        React.createElement(CTA_1["default"], null),
        React.createElement(FAQ_1["default"], null),
        React.createElement(Testimonial_1["default"], null),
        React.createElement(Pricing_1["default"], null),
        React.createElement(Contact_1["default"], null),
        React.createElement(Blog_1["default"], null)));
}
exports["default"] = Home;
