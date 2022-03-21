const AuthorModel = require("../models/authorModel")
const jwt = require("jsonwebtoken")

const createAuthor = async function (req, res) {
    try {
        let data = req.body
        if (Object.keys(data) == 0) return res.status(400).send({ status: false, msg: "BAD REQUEST NO DATA PROVIDED" })
        let savedData = await AuthorModel.create(data)
       return res.status(201).send({ msg: savedData })
    }
    catch (error) {
        console.log(error)
      return  res.status(500).send({ msg: error.message })


    }
}


const login = async  (req, res)=> {
    try {
        const mail = req.body.email
        const pass = req.body.password
        const data = req.body
        if (Object.keys(data)==0) return res.status(400).send({ status: false, msg: "No input provided" })

        const userMatch = await AuthorModel.findOne({ email: mail, password: pass })
        if (!userMatch) return res.status(401).send({ status: false, msg: "Email or Password is incorrect" })

        const token = jwt.sign({
            userId: userMatch._id.toString()
        }, "Secret-Key")

        res.setHeader("x-api-key", "token");
        return res.status(200).send({ status: true, msg: "You are successfully logged in", token })

    }
    catch (error) {
        console.log(error)
       return res.status(500).send({ msg: error.message })
    }
}


module.exports.createAuthor = createAuthor
module.exports.login = login