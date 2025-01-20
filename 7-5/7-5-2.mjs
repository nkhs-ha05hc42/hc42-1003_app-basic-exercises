const PromiseSetTimeout = (timeout) =>
    new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve()
        }, timeout)
    }
)

const promiseA = () => {
    PromiseSetTimeout(2000)
    .then(() => {
        console.log("★", new Date())
        return PromiseSetTimeout(1000)
    })
    .then(() => {
        console.log("◆", new Date())
        return PromiseSetTimeout(2000)
    })
    .then(() => {
        console.log("end", new Date())
    })
}

console.log("start", new Date())
promiseA()