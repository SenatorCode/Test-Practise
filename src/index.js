import { ja } from "date-fns/locale"

function capitalize(word) {
    return word.charAt(0).toUpperCase() + word.slice(1)
}

function reverseString(string) {
    const trimmed = string.trim()
    return trimmed.split("").reverse().join("")
}

const calculator = (() => {
    const add = (a,b) =>  a+b

    const sub = (a,b) => a - b

    const multiply = (a,b) => a*b
    const divide = (a,b) => a/b
    return {add, sub, multiply, divide}
})()

function caesarCipher(string, key) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");
    const result = string.split("").map((char) => {
        const lowerChar = char.toLowerCase();
        const index = alphabet.indexOf(lowerChar);
        if (index === -1) return char;
        const newIndex = (index + key) % 26;
        let newChar = alphabet[newIndex];
        return char === char.toUpperCase() ? newChar.toUpperCase() : newChar;
    });

    return result.join("");
}

function analyzeArray (array) {
    const average = ((array) => {
        let sum = 0
        array.forEach(element => {
            sum +=element
        });
        return sum/(array.length)
    })(array)

    const min = ((array) =>{
        return Math.min(...array)
    })(array)

    const max = ((array) =>{
        return Math.max(...array)
    })(array)

    const length = ((array) => array.length)(array)
    return{average, min, max, length}
}

export {capitalize, reverseString, calculator, caesarCipher, analyzeArray}