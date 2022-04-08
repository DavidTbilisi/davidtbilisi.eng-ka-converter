var dictionary = {
    97: "ა",
    98: "ბ",
    103: "გ",
    100: "დ",
    101: "ე",
    118: "ვ",
    122: "ზ",
    84: "თ",
    105: "ი",
    107: "კ",
    108: "ლ",
    109: "მ",
    110: "ნ",
    111: "ო",
    112: "პ",
    74: "ჟ",
    114: "რ",
    115: "ს",
    116: "ტ",
    117: "უ",
    102: "ფ",
    113: "ქ",
    82: "ღ",
    121: "ყ",
    83: "შ",
    67: "ჩ",
    99: "ც",
    90: "ძ",
    119: "წ",
    87: "ჭ",
    120: "ხ",
    106: "ჯ",
    104: "ჰ",
    96: "\"",
    126: "\"",
    95: "-",
}
var ka = {

    4304: "a",
    4305: "b",
    4306: "g",
    4307: "d",
    4308: "e",
    4309: "v",
    4310: "z",
    4311: "T",
    4312: "i",
    4313: "k",
    4314: "l",
    4315: "m",
    4316: "n",
    4317: "o",
    4318: "p",
    4319: "J",
    4320: "r",
    4321: "s",
    4322: "t",
    4323: "u",
    4324: "f",
    4325: "q",
    4326: "R",
    4327: "y",
    4328: "S",
    4329: "C",
    4330: "c",
    4332: "w",
    4333: "W",
    4334: "x",
    4335: "j",
    4336: "h",
};

function translate(dict, word) {
    return dict[word];
}

function getString() {
    return {
        toconvert: document.querySelector('#to_convert'),
        converted: document.querySelector('#converted')
    }
}

function stringToArray(toconvert) {
    return toconvert.value.split("");
}

function convert(arr, dictionary) {
    var toreturn = "";
    var arrey = [];

    console.clear()

    for (var i = 0; i < arr.length; i++) {
        let char = arr[i];
        let charCode = char.charCodeAt(0);

        console.log(char, charCode);

        arrey.push(charCode);

        var trans = translate(dictionary, charCode);

        toreturn += trans == undefined ? arr[i] : trans;
    }
    return toreturn;
}

function changeHTML(converted, value) {
    converted.innerHTML = value;
}

function update() {
    let strObj = getString(); // toconvert, converted elements
    let strArr = stringToArray(strObj.toconvert);
    let convertedValue = convert(strArr, dictionary); // change Dictionary Object.
    changeHTML(strObj.converted, convertedValue);
}

document.querySelector('#to_convert').addEventListener("keyup", update);
document.querySelector('#to_convert').addEventListener("change", update);