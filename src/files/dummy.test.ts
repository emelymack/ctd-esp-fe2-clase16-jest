import dummy from "./dummy";

describe("dummy", () => {
    const mockCallback = jest.fn()

    describe("when shouldTrigger is false", () => {
        it("should not call callback", () => {
            // Arrange
            const shouldTrigger = false

            // Act
            dummy(shouldTrigger, mockCallback)

            // Assert
            expect(mockCallback).not.toBeCalled()
            
        });
    });
    describe("when shouldTrigger is true", () => {
        it("should call callback", () => {
            // Arrange
            const shouldTrigger = true

            // Act
            dummy(shouldTrigger, mockCallback)

            // Assert
            expect(mockCallback).toBeCalled()
        });
    });
});