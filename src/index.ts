import { IArtwork } from "./IArtwork";
import { statue } from "./Statue";

let numOfArts = 0;
let sumOfPrice = 0;
let artworks: IArtwork[] = [];

document.addEventListener('DOMContentLoaded', init);

function init(){
    sumOfPriceUpdate();
    numOfArtsUpdate();
    (document.getElementById('submit') as HTMLElement).addEventListener('click', () => {
        let t = (document.getElementById("title") as HTMLInputElement);
        let y = (document.getElementById("year") as HTMLInputElement);
        let p = (document.getElementById("price") as HTMLInputElement);
        let h = (document.getElementById("height") as HTMLInputElement);

        let title = t?.value;
        let year = Number(y?.value);
        let price = Number(p?.value);
        let height = Number(h?.value);

        let titleReg = new RegExp(/^[A-Za-z ,]+$/);
        let curYear: number = new Date().getFullYear();
        if(title == "" || title == null || !(titleReg.test(title))){
            t.placeholder = "Wrong title!";
            t.value = "";
        }else if(year === null || year === NaN || year === 0 || year > curYear){
            y.placeholder = "Wrong year!";
            y.value = "";
        }else if(price < 1){
            p.placeholder = "Wrong price!";
            p.value = "";
        }else if(height < 10){
            h.placeholder = "Wrong height!";
            h.value = "";
        }else{
            console.log(year);
            let s = new statue(title, year, price, height);
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

function sumOfPriceUpdate(){
    sumOfPrice = 0;
    for(let i = 0; i < artworks.length; i++){
        sumOfPrice += Number(artworks[i].price);
    }
    (document.getElementById('sumPrice') as HTMLElement).innerHTML = "Sum of prices: " + sumOfPrice;
}

function numOfArtsUpdate(){
    numOfArts = artworks.length;
    (document.getElementById('arts') as HTMLElement).innerHTML = "Arts: " + numOfArts;
}