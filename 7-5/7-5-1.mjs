const PromiseSetTimeout = (timeout) =>
    new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve()
        }, timeout)
    }
)

const promiseA = () => {
    PromiseSetTimeout(10000)
    .then(() => {
        console.log("★", new Date())
        return PromiseSetTimeout(10000)
    })
    .then(() => {
        console.log("◆", new Date())
    })
}

console.log("start", new Date())
promiseA()
console.log("end", new Date())