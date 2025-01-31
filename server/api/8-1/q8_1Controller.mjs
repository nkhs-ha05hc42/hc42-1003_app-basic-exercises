const getKadai8_1_1 = (req, res) => {
    res.send(
        JSON.stringify({
            code: req.query.code,
            name: "情報太郎" 
        }),
    )
}

const postKadai8_1_2 = (req, res) => {
    console.log(req.body)
    res.send(
        JSON.stringify({
            status: "OK",
            postcode: req.body.postcode,
        }),
    )
}

const putKadai8_1_3 = (req, res) => {
    console.log(req.body)
    res.send(
        JSON.stringify({
            status: "OK",
            postcode: req.body.postcode,
        }),
    )
}

const deleteKadai8_1_4 = (req, res) => {
    res.send(
        JSON.stringify({
            status: "OK",
            code: req.query.code
        })
    )
}

export const q8_1Controller = {
    getKadai8_1_1,
    postKadai8_1_2,
    putKadai8_1_3,
    deleteKadai8_1_4
}