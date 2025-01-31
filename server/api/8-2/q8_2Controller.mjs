const getKadai8_2_1 = (req, res) => {
    if(req.query.code == "HC42-9821"){
        res.send(
            JSON.stringify({
                code: req.query.code,
                name: "情報太郎"
            })
        )
    }
    else{
        res.send(
            JSON.stringify({
                status: "error",
                code: "HC42-9820",
                cause: "not found code!"
            })
        )
    }
}

const postKadai8_2_2 = (req, res) => {
    if(req.body.code == "HC42-9822"){
        console.log(req.body)
        res.send(
            JSON.stringify({
                status: "OK",
                postcode: req.body.postcode,
            }),
        )
    }
    else{
        res.send(
            JSON.stringify({
                status: "error",
                "code": req.body.code,
                cause: "codealready exists!"
            })
        )
    }
}

const putKadai8_2_3 = (req, res) => {
    const code = "HC42-9823"
    const postcode = "050-0072"
    const address = "北海道室蘭市高砂町"

    const map1 =  new Map()
    map1.set("code", req.body.code)
    map1.set("postcode", req.body.postcode)
    map1.set("address", req.body.address)
    const Object1 = Object.fromEntries(map1.entries())
    
    if(Object1.code != code){
        res.send(
            JSON.stringify({
                status: "error",
                code: req.body.code,
                cause: "not found code!"
            })
        )
    }
    else{
        console.log(Object1)
        if(Object1.postcode == postcode && Object1.address == address){
            res.send(
                JSON.stringify({
                    code: Object1.code
                })
            )
        }
        else{
            res.send(
                JSON.stringify({
                    code: Object1.code,
                    postcode: Object1.postcode,
                    address: Object1.address
                })
            )
        }
    }
}

const deleteKadai8_2_4 = (req, res) => {
    const code = "HC42-9824"
    if(code == req.query.code){
        res.send(
            JSON.stringify({
                status: "OK",
                code: req.query.code
            })
        ) 
    }
    else{
        res.send(
            JSON.stringify({
                status: "error",
                code: req.query.code,
                cause: "not found code!"
            })
        ) 

    }
}

export const q8_2Controller = {
    getKadai8_2_1,
    postKadai8_2_2,
    putKadai8_2_3,
    deleteKadai8_2_4,
}
