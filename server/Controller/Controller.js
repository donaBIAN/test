const db = require("../db/db")
module.exports = {

    async SignIn(req, res) {
        console.log("request~~~body~~", req.body)
        const { email, password } = req.body
        // const q = `SELECT * FROM MSQVP `
        const q = `SELECT * FROM MSQVP WHERE  email ='${email}' And password ='${password}'  `
        db.query(q, ((err, data) => {
            if (err) {
                console.log("Wrong password or Wrong email", err)
            } else {
                res.status(201).json({ success: true, result: data })
            }
        }))
    },
    async InsertMed(req, res) {
        console.log("!!!request!!!!!!!!~~~body~~", req.body)
        const { Dname, Dunit, Dosage, Note } = req.body;
        const Dunitstr = Dunit.toString()
        const Dosstr = Dosage.toString()
        console.log("~~", Dname, Dunit, Dosage, Note)
        const q = "INSERT INTO `Med` (`Name`, `Units`, `Dosage`, `Notes`) VALUES (?)"
        const value = [Dname, Dunitstr, Dosstr, Note]
        db.query(q, [value], (err, data) => {
            if (err) {
                console.log(err)
            } else {
                res.status(201).json({ status: 201, data: data })

            }
        })
        console.log(Dname, Dunit, Dosage, Note)
    },
    async showData(req, res) {
        const q = "SELECT * FROM  `Med`"
        db.query(q, (err, data) => {
            if (err) {
                console.log("database select error", err)
            } else {
                res.status(201).json({ success: true, result: data })
            }
        })
    },
    async DeleteData(req, res) {

        const q = `DELETE FROM  Med WHERE id=?`
        const value = req.params.id
        console.log(value)
        db.query(q, value, (err, data) => {
            if (err) {
                console.log("backend***:", err)
            } else {
                console.log("backend success!!!")
                res.status(201).json({ status: 201, data: data })
            }
        })
    },
    async createUser(req, res) {
        console.log("!!!request!!!!!!!!~~~body~~", req.body)
        const { userName, email, password } = req.body;
        const q = "INSERT INTO `MSQVP` (`useName`, `email`, `password`) VALUES (?)"
        const value = [userName, email, password]
        db.query(q, [value], (err, data) => {
            if (err) {
                console.log(err)
            } else {
                res.status(201).json({ status: 201, data: data })

            }
        })

    }

}
