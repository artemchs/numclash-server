export const generateArithmeticsQuestion = (): {
  question: string;
  answer: number;
} => {
  const operators = ["+", "-", "*", "/"];
  const operator = operators[Math.floor(Math.random() * operators.length)];
  const num1 = Math.floor(Math.random() * 100);
  const num2 = Math.floor(Math.random() * 100);

  let question: string;
  let answer: number;

  switch (operator) {
    case "+":
      question = `${num1} + ${num2}`;
      answer = num1 + num2;
      break;
    case "-":
      question = `${num1} - ${num2}`;
      answer = num1 - num2;
      break;
    case "*":
      question = `${num1} * ${num2}`;
      answer = num1 * num2;
      break;
    case "/":
      // Ensure no division by zero
      if (num2 === 0) {
        return generateArithmeticsQuestion();
      }
      question = `${num1} / ${num2}`;
      answer = num1 / num2;
      break;
    default:
      throw new Error("Invalid operator");
  }

  return { question, answer };
};
