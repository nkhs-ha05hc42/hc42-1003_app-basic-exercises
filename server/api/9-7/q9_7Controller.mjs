import { q9_7model } from "./q9_7Model.mjs"

const getAll9_7_1 = async (req, res) => {
    const result = await q9_7model.selectAll()
    res.send(JSON.stringify({
        status: "success",
        list: result
    }))
}

const getOne9_7_2 = async (req, res) => {
    const id = req.params.id
    if (!id) {
        return res.send(JSON.stringify({
            status: "error"
        }))
    }
    const result = await q9_7model.selectOne(id)
    if (!result) {
        return res.send(JSON.stringify({
            status: "not found"
        }))
    }
    res.send(JSON.stringify({
        status: "success",
        data: result
    }))
}

const post9_7_3 = async (req, res) => {
    const user_id = req.body.user_id
    const year = req.body.year
    const month = req.body.month
    const day = req.body.day
    const name = req.body.name
    const score = req.body.score
    if (!user_id || !year || !month || !day || !name || !score){
        return res.send(JSON.stringify({
            status: "error"
        }))
    }
    const result = await q9_7model.insertOne(user_id, year, month, day, name, score)
    res.send(JSON.stringify({
        status: "success",
        data: result
    }))
}

const put9_7_4 = async (req, res) => {
    const id = req.params.id
    const user_id = req.body.user_id
    const year = req.body.year
    const month = req.body.month
    const day = req.body.day
    const name = req.body.name
    const score = req.body.score
    if (!id || !user_id || !year || !month || !day || !name || !score){
        return res.send(JSON.stringify({
            status: "error"
        }))
    }
    const result = await q9_7model.updateOne(id, user_id, year, month, day, name, score)
    if (!result) {
        return res.send(JSON.stringify({
            status: "not found"
        }))        
    }
    res.send(JSON.stringify({
        status: "success",
        data: result
    }))
}

const delete9_7_5 = async (req, res) => {
    const id = req.params.id
    if (!id) {
        return res.send(JSON.stringify({
            status: "error"
        }))
    }
    const result = await q9_7model.deleteOne(id)
    if (!result) {
        return res.send(JSON.stringify({
            status: "not found"
        }))
    }
    res.send(JSON.stringify({
        status: "success",
        data: result
    }))
}

export const q9_7Controller = {
    getAll9_7_1,
    getOne9_7_2,
    post9_7_3,
    put9_7_4,
    delete9_7_5
}