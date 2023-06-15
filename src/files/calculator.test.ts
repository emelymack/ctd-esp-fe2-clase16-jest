import calculator from "./calculator";

describe("calculadora", () => {
    it("Add 1 to 2 should return 3", () => {
        // Arrange
        const number1 = 1
        const number2 = 2
        const expected = 3

        // Act
        const result = calculator.add(number1, number2);

        // Assert
        expect(result).toBe(expected)
    });

    it("Subtract 2 from 10 should return 8", () => {
        // Arrange
        const number1 = 10
        const number2 = 2
        const expected = 8

        // Act
        const result = calculator.subtract(number1, number2);

        // Assert
        expect(result).toBe(expected)
    });

    it("Multiply  2 with 8 should return 16", () => {
        // Arrange
        const number1 = 2
        const number2 = 8
        const expected = 16

        // Act
        const result = calculator.multiply(number1, number2);

        // Assert
        expect(result).toBe(expected)
    });

    it("Multiply should be idempotent", () => {
        // Arrange
        const number = 1
        const expected = 1

        // Act
        const result = calculator.multiply(number, number);

        // Assert
        expect(result).toBe(expected)
    });

    it("Divide 8 with 2 should return 4", () => {
        // Arrange
        const number1 = 8
        const number2 = 2
        const expected = 4

        // Act
        const result = calculator.divide(number1, number2);

        // Assert
        expect(result).toBe(expected)
    });
});