function encryption(str){
let chars = {'a':'b','b':'c','c':'a'};//обект, в който двойките ключ-стойност показват кой символ с кой да замени (а с б и тн)
let enc='';//празен стринг за резултата
//let str = "back at it again with the bois!";//първоначален стринг

enc = str.replace(/[abc]/g, m => chars[m]);//подава на arrow функцията един символ - например а и тя гледа в обекта chars с кой символ да го замени;
console.log(enc);
}

encryption ('back at it again with the bois!');

