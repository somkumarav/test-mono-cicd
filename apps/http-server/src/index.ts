import express from "express";
import { prismaClient } from "@repo/db/client";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hi there");
});

app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!req.body.username || !req.body.password) {
    res.send("invalid data");
  }

  const user = await prismaClient.user.create({
    data: {
      username,
      password,
    },
  });

  res.json({
    msg: "user created",
    id: user.id,
  });
});

app.listen(3001);
