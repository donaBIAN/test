const express = require('express');
const router = express.Router();

const Controller = require("../Controller/Controller")

router.post("/signUp", Controller.SignIn)
router.post("/InsertingMed", Controller.InsertMed)
router.get("/showData", Controller.showData)
router.delete("/Delete/:id", Controller.DeleteData)
router.post("/createUser", Controller.createUser)
module.exports = router
