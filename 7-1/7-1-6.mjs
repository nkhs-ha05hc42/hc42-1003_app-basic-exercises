const A = (a) => {
    if (a > 100){
        return
    }

    A(a*2)
    console.log(a)

   }

   A(10)
   A(25)
   