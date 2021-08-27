import * as express from 'express'
import multer from 'multer'

import { getmonney } from './callback/get.js'

const upload = multer()
const route = express.Router()

route.post("/getmonney", upload.none(), getmonney)

export default route