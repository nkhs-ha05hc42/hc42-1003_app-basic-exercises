const fanc1 = () =>
    new Promise((resolve) => {
        resolve("Test1")
    }
)
const fanc2 = (num) =>
    new Promise((resolve) => {
        resolve("New" + num)
    }
)

const promiseA = () => {
    fanc1()
    .then((num) => fanc2(num))
    .then((result) => {
    console.log(result)
    })   
}

promiseA()