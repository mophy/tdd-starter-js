import HelloWorld from '../main/hello-world';

describe('HelloWorld', () => {

    it('should greeting properly', () => {
        // Given
        let helloWorld = new HelloWorld();

        // When
        let result = helloWorld.greeting();

        // Then
        expect(result).toEqual('Hello World!');
    });

});
