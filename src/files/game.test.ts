import game from "./game";

describe("game", () => {
    it("game should return the right object", () => {
        // Arrange
        const name = 'Cuphead'
        const expected = {
            id: 1,
            name,
            description: "First game"
        }

        // Act
        const result = game(name)

        // Assert
        expect(result).toEqual(expected)
    });
});