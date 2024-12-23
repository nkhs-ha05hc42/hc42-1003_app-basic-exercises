const arrayTexts = [
    "A",
    "Test",
    "Array"
]
const arrayTexts2 = [
    arrayTexts
]
arrayTexts2[0][1] = "NewText"

console.log(arrayTexts2)