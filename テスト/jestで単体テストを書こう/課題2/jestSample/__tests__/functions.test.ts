import { asyncSumOfArray, asyncSumOfArraySometimesZero, Database, getFirstNameThrowIfLong, sumOfArray } from "../functions"
import { NameApiService } from "../nameApiService"

// 課題2-1
describe('#sumOfArray', () =>  {
  it('複数の要素を持つ場合', () => {
    // AAAパターンを意識している
    // Arange
    const data = [1,2]
    // Act
    const sut = sumOfArray(data)
    // Assert
    return expect(sut).toEqual(3)
  })

  it('要素が1つの場合', () => {
    const arrayOnlyOne = [1]
    const sut = sumOfArray(arrayOnlyOne)
    expect(sut).toEqual(1)
  })

  it('空の配列の場合', () => {
    expect(() => sumOfArray([])).toThrow(TypeError)
  })
})

describe('#asyncSumOfArray', () =>  {
  it('複数の要素を持つ場合', async () => {
    const data = [1,2]
    const sut = await asyncSumOfArray(data)
    return expect(sut).toEqual(3)
  })

  it('要素が1つの場合', async () => {
    const arrayOnlyOne = [1]
    const sut = await asyncSumOfArray(arrayOnlyOne)
    expect(sut).toEqual(1)
  })

  it('空の配列の場合は例外を発生すること', async () => {
    await expect(asyncSumOfArray([])).rejects.toThrow(TypeError);
  });
})

// 課題2-2
describe('#asyncSumOfArraySometimesZero', () =>  {
  let mockDB: Database & { save: jest.Mock};

  beforeEach(() => {
    mockDB = {
      save: jest.fn(),
    };
  });

  it('データベース保存が成功し他場合は合計値を返す', async () => {
    // Arange
    const nums = [1,2,3];
    mockDB.save.mockImplementation(() => {});

    // Act
    const result = await asyncSumOfArraySometimesZero(nums, mockDB);

    // Assert
    expect(mockDB.save).toHaveBeenCalledWith(nums);
    expect(result).toBe(6);
  })

  it('データベースの保存が失敗した時は0を返す', async () => {
    const nums = [1,2,3];
    mockDB.save.mockImplementation(() => {throw new Error('DBで保存できませんでした')})

    const sut = await asyncSumOfArraySometimesZero(nums, mockDB);

    expect(mockDB.save).toHaveBeenCalledWith(nums);
    expect(sut).toBe(0)
  })
});

describe('getFirstNameThrowIfLong', () => {
  let mockService: Pick<NameApiService, "getFirstName"> & { getFirstName: jest.Mock };

  beforeEach(() => {
    mockService = {
      getFirstName: jest.fn(),
    };
  });

  test('firstName の長さが maxNameLength 以下なら resolve される', async () => {
    // Arrange
    mockService.getFirstName.mockResolvedValue('shun');
    const maxLen = 5;

    // Act
    const result = await getFirstNameThrowIfLong(maxLen, mockService);

    // Assert
    expect(mockService.getFirstName).toHaveBeenCalled();
    expect(result).toBe('shun');
  });

  test('firstNameの長さがmaxNameLengthより長いときはrejectされる', async () => {
    // Arrange
    mockService.getFirstName.mockResolvedValue('isawashun');
    const maxLen = 5;

    // Act & Assert
    await expect(getFirstNameThrowIfLong(maxLen, mockService))
      .rejects
      .toThrowError('first_name too long');
    expect(mockService.getFirstName).toHaveBeenCalled();
  });
});
