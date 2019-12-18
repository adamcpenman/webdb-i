const express = require("express")
const db = require("../data/db-config") // database access using knex

const router = express.Router()

router.get("/", async (req, res, next) => {
    try {
         //SELECT * FROM posts
         res.json(await db.select("*").from("posts"))
    } catch (err) {
        next(err)
    }
})

router.get("/:id", async (req, res, next) => {
      try {
        //   const post = await db.select("*").from("posts").where("id", req.params.id)
          const post = await db("posts").where("id", req.params.id).select()
         res.json(post)
    } catch (err) {
        next(err)
    }
})

router.post("/", async (req, res, next) => {
      try {

    } catch (err) {
        next(err)
    }
})

router.put("/:id", async (req, res, next) => {
      try {

    } catch (err) {
        next(err)
    }
})

router.delete("/:id", async (req, res, next) => {
      try {

    } catch (err) {
        next(err)
    }
})

module.exports = router
