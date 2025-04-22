const fs = require('fs');

test('La página contiene "¡Hola Mundo!"', () => {
  const html = fs.readFileSync('./index.html', 'utf-8');
  expect(html).toContain('<h1>¡Hola Mundo!</h1>');
});
