const promiseSetTimeout = (timeout) =>
    new Promise((resolve) => {
        setTimeout(() => {
        resolve()
        }, timeout)
    }
)
const promiseA = async () => {
    await promiseSetTimeout(2000)
    console.log("★", new Date())

    await promiseSetTimeout(3000)
    console.log("◆", new Date())
    
    await promiseSetTimeout(0)
    console.log("end", new Date())
}

console.log("start", new Date())
promiseA()