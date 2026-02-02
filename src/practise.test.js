import { capitalize, reverseString, calculator, caesarCipher, analyzeArray  } from "."
test("It should capitalize each word", () => {
    expect(capitalize("string")).toBe("String")
})

test("It should reverse the string", () => {
    expect(reverseString("palindrome")).toBe("emordnilap")
})

test("It should capitalize each word", () => {
    expect(reverseString("  string is a very simple data type   ")).toBe("epyt atad elpmis yrev a si gnirts")
})

test("It should be able to add", () => {
    expect(calculator.add(2,3)).toBe(5)
})

test("It should be able to subtract", () => {
    expect(calculator.sub(5,2)).toBe(3)
})

test("It should be able to multiply", () => {
    expect(calculator.multiply(2,3)).toBe(6)
})

test("It should be able to divide", () => {
    expect(calculator.divide(8,4)).toBe(2)
})

test("It should encrypt the text", () => {
    expect(caesarCipher("abc", 3)).toBe("def")
})

test("It should encrypt the text", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr")
})

test("It should encrypt the text", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!")
})

test("it should return an analysis of the given array", () => {
    expect(analyzeArray([1,8,3,4,2,6])).toEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
     })
})