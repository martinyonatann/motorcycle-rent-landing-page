"use client";
"use strict";
exports.__esModule = true;
var image_1 = require("next/image");
var react_1 = require("react");
var Hero = function () {
    var _a = react_1.useState(""), email = _a[0], setEmail = _a[1];
    var handleSubmit = function (e) {
        e.preventDefault();
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("section", { className: "overflow-hidden pb-20 pt-35 md:pt-40 xl:pb-25 xl:pt-46" },
            React.createElement("div", { className: "mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0" },
                React.createElement("div", { className: "flex lg:items-center lg:gap-8 xl:gap-32.5" },
                    React.createElement("div", { className: " md:w-1/2" },
                        React.createElement("h1", { className: "mb-5 pr-16 text-3xl font-bold text-black dark:text-white xl:text-hero " }, "Jasa Sewa Motor"),
                        React.createElement("p", null,
                            "Bagi Anda yang sedang mencari sewa motor di Bali, kami menyediakan sewa motor murah di Bali dengan durasi",
                            React.createElement("strong", null, " harian"),
                            ", ",
                            React.createElement("strong", null, " mingguan"),
                            ", dan ",
                            React.createElement("strong", null, " bulanan"),
                            ". Tidak perlu kuatir, kami menyewakan unit motor yang berkualitas, prima, dan terjamin. Kami juga menyediakan layanan antar-jemput ke berbagai wilayah di pulau Bali seperti: Bandara Ngurah Rai, Terminal Ubung, Kedonganan, Jimbaran, Nusa Dua, Tanjung Benoa, Tuban, Legian, Seminyak, Kerobokan, Canggu, Sanur, Denpasar, dan area lainnya di sekitaran Kuta.")),
                    React.createElement("div", { className: "animate_right hidden md:w-1/2 lg:block" },
                        React.createElement("div", { className: "relative 2xl:-mr-7.5" },
                            React.createElement(image_1["default"], { src: "/images/shape/shape-01.png", alt: "shape", width: 46, height: 246, className: "absolute -left-11.5 top-0" }),
                            React.createElement(image_1["default"], { src: "/images/shape/shape-02.svg", alt: "shape", width: 36.9, height: 36.7, className: "absolute bottom-0 right-0 z-10" }),
                            React.createElement(image_1["default"], { src: "/images/shape/shape-03.svg", alt: "shape", width: 21.64, height: 21.66, className: "absolute -right-6.5 bottom-0 z-1" }),
                            React.createElement("div", { className: "relative aspect-[700/444] w-full" },
                                React.createElement(image_1["default"], { className: "shadow-solid-l dark:hidden", src: "/images/hero/pemotor-1.png", alt: "Hero", fill: true }),
                                React.createElement(image_1["default"], { className: "hidden shadow-solid-l dark:block", src: "/images/hero/pemotor-1.png", alt: "Hero", fill: true })))))))));
};
exports["default"] = Hero;
