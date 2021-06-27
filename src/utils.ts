import { writeFileSync } from "fs";

export const writeResultTextFile = async (fileName: string, value: string) => {
  try {
    writeFileSync(fileName, value);
  } catch (error) {
    throw new Error(error);
  }
};

export const generateFirstOutput = (
  inputFirstArray: string[],
  inputSecondArray: string[]
): string => {
  let output: string = "";
  let counter = 0;
  while (true) {
    if (counter % 2 === 0) {
      if (
        counter > inputFirstArray.length - 1 ||
        inputFirstArray.length === 0
      ) {
        break;
      }
      const breakLine = counter === 0 ? "" : "\r\n";
      output += breakLine + inputFirstArray[counter];
    } else {
      if (
        counter > inputSecondArray.length - 1 ||
        inputSecondArray.length === 0
      ) {
        break;
      }
      const breakLine = counter === 0 ? "" : "\r\n";
      output += breakLine + inputSecondArray[counter];
    }
    counter++;
  }
  return output;
};

export const generateSecondOutput = (
  inputFirstArray: string[],
  inputSecondArray: string[]
): string => {
  let output: string = "";
  let counter = 0;
  while (true) {
    const breakLine = counter === 0 ? "" : "\r\n";
    if (
      counter > inputSecondArray.length - 1 ||
      inputSecondArray.length === 0
    ) {
      break;
    }
    output += breakLine + inputSecondArray[counter];

    if (counter > inputFirstArray.length - 1 || inputFirstArray.length === 0) {
      break;
    }
    output += "\r\n" + inputFirstArray[counter];

    counter++;
  }
  return output;
};
