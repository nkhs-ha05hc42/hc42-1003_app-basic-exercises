const ar = [
    "A",
    "B"
]

const A = (a,b) => {
    b.push(a)
    return b
}

const result = A("C",ar)
console.log(ar)