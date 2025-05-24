import { describe, it, expect } from "@jest/globals";
import main from "../src";

describe("#main", () => {

  describe("正常系", () => {
    describe("コマンドラインにaddを指定した場合", () => {
      it("足し算ができるかどうか", () => {
        // Arrange
        const args = ["add", 1, 2];
        const args2 = ["add", 1, 2, 3];
  
        // Act
        const result = main(args);
        const result2 = main(args2);
        // Assert
        expect(result).toBe(3);
        expect(result2).toBe(6);
      });
  
      it("計算結果が1000を超えた時「too big」と文字列を表示する", () => {
        // Arrange
        const args = ["add", 1, 1000];
  
        // Act
        const result = main(args);
  
        // Assert
        expect(result).toBe("too big");
      });
    });
  
    describe("コマンドラインにsubstractを指定した場合", () => {
      it("引き算ができるかどうか", () => {
        // Arrange
        const args = ["substract", 2, 1];
        const args2 = ["substract", 10, 5, 3];
        
        // Act
        const result = main(args);
        const result2 = main(args2);
  
        // Assert
        expect(result).toBe(1);
        expect(result2).toBe(2);
      });
  
      it("計算結果がマイナスになった場合には「negative number」と文字列が返る。", () => {
        // Arrange
        const args = ["substract", 1, 2];
  
        // Act
        const result = main(args);
  
        // Assert
        expect(result).toBe("negative number");
      });
    });
  
    describe("コマンドラインにmultiplyを指定した場合", () => {
      it("掛け算ができるかどうか", () => {
        // Arrange
        const args = ["multiply", 2, 3];
        const args2 = ["multiply", 2, 3, 4];
  
        // Act
        const result = main(args);
        const result2 = main(args2);
  
        // Assert
        expect(result).toBe(6);
        expect(result2).toBe(24);
      });
  
      it("計算結果が1000を超えた時「big big number」と文字列を表示する", () => {
        // Arrange
        const args = ["multiply", 100, 10];
  
        // Act
        const result = main(args);
  
        // Assert
        expect(result).toBe("big big number");
      });
    });
  
    describe("コマンドラインにdivideを指定した場合", () => {
      it("割り算ができるかどうか", () => {
        // Arrange
        const args = ["divide", 6, 3];
        const args2 = ["divide", 6, 3, 2];
  
        // Act
        const result = main(args);
        const result2 = main(args2);
  
        // Assert
        expect(result).toBe(2);
        expect(result2).toBe(1);
      });
  
      it("0で割り算をした場合には「0で割り算できません」と文字列が返る", () => {
        // Arrange
        const args = ["divide", 1, 0];
        
        // Act
        const result = main(args);
  
        // Assert
        expect(result).toBe("0で割り算できません");
      })
    })
  });

  describe("異常系", () => {
    it("引数が31個以上の引数を指定するとエラーが発生する", () => {
      // Arrange
      const args = ["add", 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

      // Act
      const result = main(args);

      // Assert
      expect(result).toBe("引数が31個以上です。30個以内で指定してください。");
    })

    it(" 引数(コマンドラインの[0]以外)が数字以外だとエラーを出す", () => {
      // Arrange
      const args = ["add", 1, "a", 3];

      // Act
      const result = main(args);

      // Assert
      expect(result).toBe("引数が数字ではありません。");
    })
  })
});
