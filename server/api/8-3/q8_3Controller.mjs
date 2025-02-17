const getKadai8_3_1 = (req, res) => {
    const fruit = [
        {
            en: "apple",
            ja: "りんご"
        },
        {
            en: "lemon",
            ja: "レモン"
        },
        {
            en: "grape",
            ja: "ぶどう"
        }
        
    ]
    res.send(
        fruit
    )
}

const getKadai8_3_2 = (req, res) => {
    const fruit = [
        {
            en: "apple",
            ja: "りんご"
        },
        {
            en: "lemon",
            ja: "レモン"
        },
        {
            en: "grape",
            ja: "ぶどう"
        }
        
    ]

    for (let i = 0; i < fruit.length; i++){
        if (fruit[i].en == req.params.en) {
            return res.send( fruit[i] )
        }
    }

    res.send(
        JSON.stringify({
            status: "error",
            en: req.params.en,
            cause: "not found!"
            })
     )
}

export const q8_3Controller = {
    getKadai8_3_1,
    getKadai8_3_2,
}