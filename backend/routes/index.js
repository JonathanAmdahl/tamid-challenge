import express from "express";
import Link from "../entities/Link.js";
import dataSource from "../functions/dataSource.js";
const router = express.Router();

router.get("/:urlId", async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");

  const repo = dataSource.getRepository(Link);

  try {
    const url = await repo.findOneBy({ shortLink: req.params.urlId });
    console.log(req.params.urlId);
    if (url) {
      return res.redirect(url.longLink);
    } else res.status(404).json("Not found");
  } catch (err) {
    console.log(err);
    res.status(500).json("Server Error");
  }
});

export default router;
