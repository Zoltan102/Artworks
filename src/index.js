"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Statue_1 = require("./Statue");
let numOfArts = 0;
let sumOfPrice = 0;
let artworks = [];
document.addEventListener('DOMContentLoaded', init);
function init() {
    sumOfPriceUpdate();
    numOfArtsUpdate();
    document.getElementById('submit').addEventListener('click', () => {
        let t = document.getElementById("title");
        let y = document.getElementById("year");
        let p = document.getElementById("price");
        let h = document.getElementById("height");
        let title = t === null || t === void 0 ? void 0 : t.value;
        let year = Number(y === null || y === void 0 ? void 0 : y.value);
        let price = Number(p === null || p === void 0 ? void 0 : p.value);
        let height = Number(h === null || h === void 0 ? void 0 : h.value);
        let titleReg = new RegExp(/^[A-Za-z ,]+$/);
        let curYear = new Date().getFullYear();
        if (title == "" || title == null || !(titleReg.test(title))) {
            t.placeholder = "Wrong title!";
            t.value = "";
        }
        else if (year === null || year === NaN || year === 0 || year > curYear) {
            y.placeholder = "Wrong year!";
            y.value = "";
        }
        else if (price < 1) {
            p.placeholder = "Wrong price!";
            p.value = "";
        }
        else if (height < 10) {
            h.placeholder = "Wrong height!";
            h.value = "";
        }
        else {
            console.log(year);
            let s = new Statue_1.statue(title, year, price, height);
            artworks.push(s);
            sumOfPriceUpdate();
            numOfArtsUpdate();
            console.log("Added a new statue. Num of arts = " + artworks.length);
            h.value = "";
            y.value = "";
            p.value = "";
            t.value = "";
            t.placeholder = "Title";
            y.placeholder = "Year";
            p.placeholder = "Price";
            h.placeholder = "Height";
        }
    });
}
function sumOfPriceUpdate() {
    sumOfPrice = 0;
    for (let i = 0; i < artworks.length; i++) {
        sumOfPrice += Number(artworks[i].price);
    }
    document.getElementById('sumPrice').innerHTML = "Sum of prices: " + sumOfPrice;
}
function numOfArtsUpdate() {
    numOfArts = artworks.length;
    document.getElementById('arts').innerHTML = "Arts: " + numOfArts;
}
