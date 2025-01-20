const dat1 = {
    ja: "",
    en: ""
}

const A = (a,b) =>{
    dat1.ja = a
    dat1.en = b
    return dat1
}

const result = A("リンゴ","apple")
console.log(result)