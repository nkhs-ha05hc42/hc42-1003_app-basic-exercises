let sum = 0

for(let i=1; 1<=100; i++){
    if(i % 2 === 0){
        sum += i
    }

    if(sum > 50){
        console.log(i, sum)
        break
    }
}