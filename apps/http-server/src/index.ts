import express from "express";
import { prismaClient } from "@repo/db/client";

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello world");
});

app.post("/signup", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  const user = await prismaClient.user.create({
    data: {
      username,
      password,
    },
  });

  res.json({
    msg: "user created successfully",
    id: user.id,
  });
});

app.listen(3001);
