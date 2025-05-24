const main = (args: (string | number)[]): number | string | undefined => {
  if (args.length > 30) {
    return "引数が31個以上です。30個以内で指定してください。";
  }

  const command = args[2];

  if (command === undefined) {
    return "引数が足りません";
  }
  
  const numberArgs = args.slice(3);
  for (const arg of numberArgs) {
    if (isNaN(Number(arg))) {
      return "引数が数字ではありません。";
    }
  }

  const numbers = numberArgs.map((arg) => Number(arg));

  if (command === 'add') {
    const result = numbers.reduce((acc, curr) => acc + curr, 0);
    if (result > 1000) {
      return "too big";
    }
    return result;
  } else if (command === 'substract') {
    const result = numbers.reduce((acc, curr, index) => {
      if (index === 0) return curr;
      return acc - curr;
    }, 0);
    if (result < 0) {
      return "negative number";
    }
    return result;
  } else if (command === 'multiply') {
    const result = numbers.reduce((acc, curr) => acc * curr, 1);
    if (result > 1000) {
      return "big big number";
    }
    return result;
  } else if (command === 'divide') {
    if (numbers.includes(0)) {
      return "0で割り算できません";
    }
    const result = numbers.reduce((acc, curr, index) => {
      if (index === 0) return curr;
      return acc / curr;
    }, 1);
    return result;
  }

  return 'Invalid operator';
};

export default main;
