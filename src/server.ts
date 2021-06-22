import express from "express";

const app = express();

app.get("/test", (request, response) => {
  response.send("olá NLW get");
});

app.post("/test-post", (request, response) => {
  return response.send("olá nlw POST");
});

app.listen(3000, () => console.log("Server On NLW"));
