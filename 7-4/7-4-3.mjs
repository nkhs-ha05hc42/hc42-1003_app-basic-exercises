const callback = () => {
    setTimeout(() => {
        console.log("★", new Date())
        setTimeout(() => {
            console.log("◆", new Date())
            setTimeout(() => {
                console.log("end", new Date())
            }, 0)
        }, 3000)
    }, 2000)
}

   console.log("start", new Date())
   callback()