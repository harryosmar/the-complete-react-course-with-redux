const sum = (a, b) => a + b;
const generateGreeting = (name = 'Anonymous') => `Hello ${name}`;

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('should generate greeting from name', () => {
    expect(generateGreeting('Spongebob')).toBe('Hello Spongebob');
});


test('should generate greeting for anonymous if name is not provided', () => {
    expect(generateGreeting()).toBe('Hello Anonymous');
});