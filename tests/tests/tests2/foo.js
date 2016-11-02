const bar = require('../bar');
describe('Test', () => {
    const a = bar.a;
    it('Fake test', () => {
        throw 'test';
    });
});