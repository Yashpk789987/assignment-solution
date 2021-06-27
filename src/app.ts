import express from "express";
import path from "path";
import { firstInputController, secondInputController } from "./controller";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "../public")));

app.get("/input1/:value", firstInputController);
app.get("/input2/:value", secondInputController);

app.listen(process.env.PORT || 4000, () => {
  console.log(`SERVER STARTED AT PORT ${process.env.PORT || 4000}`);
});
