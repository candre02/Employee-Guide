const inputCheck = require('../utils/inputCheck');

test('inputCheck() returns null when all properties exist', () => {
    const obj = { manager: 'bob'};

    expect(inputCheck(obj, 'manager')).toBe(null);
});

test('inputCheck() returns an object when a property is missing', () =>{
    const obj = { manager: 'bob', occupation: '' };

    expect(inputCheck(obj, 'name', 'occupation')).toEqual(
        expect.objectContaining({
            error: expect.stringContaining('No occupation specified')
        })
    );
});