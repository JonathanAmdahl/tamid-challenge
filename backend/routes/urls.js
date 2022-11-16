import dotenv from "dotenv";
import express from "express";
import { nanoid } from "nanoid";
import Link from "../entities/Link.js";
import dataSource from "../functions/dataSource.js";
import validateUrl from "../functions/validateUrl.js";
dotenv.config({ path: "../env" });

const router = express.Router();

//given url/api/short
//check if link has id, if so give them that link
//if not, make a link and give them that

// Short URL Generator
router.post("/short", async (req, res) => {
  res.set("Access-Control-Allow-Origin", "*");

  const repo = dataSource.getRepository(Link);
  const { origUrl } = req.body;
  const base = "localhost:3000";

  const urlId = nanoid(6);
  if (validateUrl(origUrl)) {
    try {
      let url = await repo.findOneBy({ longLink: origUrl });
      if (url) {
        res.json(url.shortLink);
      } else {
        const shortUrl = `${base}/l/${urlId}`;

        url = {
          longLink: origUrl,
          shortLink: urlId,
        };

        repo.save(url).then(() => {
          console.log(`URL saved - ${shortUrl} (${origUrl})`);
        });
        res.json(urlId);
      }
    } catch (err) {
      console.log(err);
      res.status(500).json("Server Error");
    }
  } else {
    res.status(400).json("Invalid Original Url");
  }
});

export default router;
