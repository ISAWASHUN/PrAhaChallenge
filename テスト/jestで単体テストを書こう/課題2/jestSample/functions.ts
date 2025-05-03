// 課題3-5で変更
export const sumOfArray = (numbers: number[]): number => {
  // reduce の第二引数に 0 を渡すことで、
  // 空配列 → そのまま初期値 0 が返る
  return numbers.reduce((acc, cur) => acc + cur, 0);
};

export const asyncSumOfArray = (numbers: number[]): Promise<number> => {
  return new Promise((resolve): void => {
    resolve(sumOfArray(numbers));
  });
};

// export const asyncSumOfArraySometimesZero = (
//   numbers: number[]
// ): Promise<number> => {
//   return new Promise((resolve): void => {
//     try {
//       const database = new DatabaseMock(); // fixme: この関数をテストするには、DatabaseMockの使い方を変える必要がありそう！ヒント：依存性の注入
//       database.save(numbers);
//       resolve(sumOfArray(numbers));
//     } catch (error) {
//       resolve(0);
//     }
//   });
// };

// 課題2-2
// interfaceを作成して、抽象化する
export interface Database {
  save(numbers: number[]): void
}

export const asyncSumOfArraySometimesZero = (
  numbers: number[],
  // DIを行う
  database: Database
): Promise<number> => {
  return new Promise((resolve) => {
    try {
      database.save(numbers);
      resolve(sumOfArray(numbers));
    } catch (error) {
      resolve(0);
    }
  });
};

// export const getFirstNameThrowIfLong = async (
//   maxNameLength: number
// ): Promise<string> => {
//   const nameApiService = new NameApiService(); // fixme: この関数をテストするには、NameApiServiceの使い方を変える必要がありそう！ヒント：依存性の注入
//   const firstName = await nameApiService.getFirstName();

//   if (firstName.length > maxNameLength) {
//     throw new Error("first_name too long");
//   }
//   return firstName;
// };

export interface NameApiService {
  getFirstName(): Promise<string>;
}

export const getFirstNameThrowIfLong = async (
  maxNameLength: number,
  service: Pick<NameApiService, "getFirstName">
): Promise<string> => {
  const firstName = await service.getFirstName();
  if (firstName.length > maxNameLength) {
    throw new Error("first_name too long");
  }
  return firstName;
};
