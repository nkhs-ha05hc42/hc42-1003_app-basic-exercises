const promiseSetTimeout = (timeout) =>
    new Promise((resolve) => {
        setTimeout(() => {
        resolve()
        }, timeout)
    }
)
const promiseA = async () => {
    await promiseSetTimeout(10000)
    console.log("★", new Date())
    
    await promiseSetTimeout(10000)
    console.log("◆", new Date())
}

console.log("start", new Date())
promiseA()
console.log("end", new Date())