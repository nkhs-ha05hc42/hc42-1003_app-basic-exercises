const fanc1 = (num) =>
    new Promise((resolve) => {
        resolve("Test1")
    }
)
const fanc2 = (num) =>
    new Promise((resolve) => {
        resolve("New" + num)
    }
)

const promiseA = async () => {
    const num = await fanc1()
    const result = await fanc2(num)
    console.log(result)
    }

promiseA()