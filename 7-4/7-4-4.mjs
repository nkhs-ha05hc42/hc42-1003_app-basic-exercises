const Plus = (a,b) => {
    return a + b
}

const callback = () => {
    setTimeout(() => {
        const result = Plus(2,3)
        console.log(result, new Date())
        setTimeout(() => {
            console.log("end", new Date())
        }, 0)
    }, 2000)
}

console.log("start", new Date())
callback()