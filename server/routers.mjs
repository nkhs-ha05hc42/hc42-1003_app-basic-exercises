import express from "express"
import path from "path"

import { sample1Controller } from "./api/controllers.mjs"
import { q8_1Controller} from "./api/controllers.mjs"
import { q8_2Controller} from "./api/controllers.mjs"
import { q8_3Controller} from "./api/controllers.mjs"

const routers = express.Router()

routers.post("/api/sample1", sample1Controller.postSample1)
routers.get("/api/sample1", sample1Controller.getSample1)
routers.get("/api/sample1/:id", sample1Controller.getPathParamSample1)
routers.put("/api/sample1", sample1Controller.putSample1)
routers.delete("/api/sample1", sample1Controller.deleteSample1)

routers.get("/api/8-1", q8_1Controller.getKadai8_1_1)
routers.post("/api/8-1", q8_1Controller.postKadai8_1_2)
routers.put("/api/8-1", q8_1Controller.putKadai8_1_3)
routers.delete("/api/8-1", q8_1Controller.deleteKadai8_1_4)

routers.get("/api/8-2", q8_2Controller.getKadai8_2_1)
routers.post("/api/8-2", q8_2Controller.postKadai8_2_2)
routers.put("/api/8-2", q8_2Controller.putKadai8_2_3)
routers.delete("/api/8-2", q8_2Controller.deleteKadai8_2_4)

routers.get("/api/8-3", q8_3Controller.getKadai8_3_1)


// client配下は、ブラウザサイドで実行されるファイル（HTML/JS/CSS/画像など）を配置する
routers.use(express.static(`${path.resolve()}/client`))

export default routers
