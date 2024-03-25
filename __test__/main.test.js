const productos = require('../js/main');

describe('testing productos', () => {
    test('tamaño del array es 15', () => {
        expect(productos.length).toBe(15);
    });
});
