import { Request, Response } from "express";
import {
  generateFirstOutput,
  generateSecondOutput,
  writeResultTextFile,
} from "./utils";

const inputFirstArray: string[] = [];
const inputSecondArray: string[] = [];

export const firstInputController = async (
  request: Request,
  response: Response
) => {
  try {
    const { value } = request.params;
    if (!value) {
      response
        .status(400)
        .json({ ok: false, message: "please provide parameter value" });
    }
    inputFirstArray.push(value);
    const output1 = generateFirstOutput(inputFirstArray, inputSecondArray);
    const output2 = generateSecondOutput(inputFirstArray, inputSecondArray);
    await writeResultTextFile("public/result1.txt", output1);
    await writeResultTextFile("public/result2.txt", output2);
    response.end();
  } catch (error) {
    response
      .status(500)
      .json({ ok: false, message: "something went wrong", error });
  }
};

export const secondInputController = async (
  request: Request,
  response: Response
) => {
  try {
    const { value } = request.params;
    if (!value) {
      response
        .status(400)
        .json({ ok: false, message: "please provide parameter value" });
    }
    inputSecondArray.push(value);
    const output1 = generateFirstOutput(inputFirstArray, inputSecondArray);
    const output2 = generateSecondOutput(inputFirstArray, inputSecondArray);
    await writeResultTextFile("public/result1.txt", output1);
    await writeResultTextFile("public/result2.txt", output2);
    response.end();
  } catch (error) {
    response
      .status(500)
      .json({ ok: false, message: "something went wrong", error });
  }
};
