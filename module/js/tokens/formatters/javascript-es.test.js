var toES = require('./javascript-es');

describe('throws errors', function () {
  it('throws an error when no `id` is provided', function () {
    var token = {
      value: 'hsla(227, 100%, 75%, 1)',
      name: 'Brand Blue (Light)'
    };
    expect(function () {
      return toES('', token);
    }).toThrow();
  });
  it('throws an error when no `value` is provided', function () {
    var token = {
      id: 'brand-blue-light',
      name: 'Brand Blue (Light)'
    };
    expect(function () {
      return toES('', token);
    }).toThrow();
  });
});