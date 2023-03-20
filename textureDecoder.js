
const arrayAlphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P'];
const base16 = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];

function textureNormalize(data) {
    let arrayOfBits = "";
    for (let index = 0; index < data.length; index++) {
        const element = data[index];
        const findIND = arrayAlphabet.findIndex((value) => element === value);
        if (findIND !== -1) {
            arrayOfBits += base16[findIND];
        }
    }
    return 'data:image/png;base64,' + btoa(arrayOfBits.match(/\w{2}/g).map(function (a) { return String.fromCharCode(parseInt(a, 16)); }).join(""));
}
