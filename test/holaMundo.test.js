const fs = require('fs');
const path = require('path');

describe('Contenido del index.html', () => {
  const html = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf-8');

  test('Contiene el título "¡Hola Mundo!"', () => {
    expect(html).toContain('<h1>¡Hola Mundo!</h1>');
  });

  test('Contiene el nombre del estudiante', () => {
    expect(html).toContain('Angel Jefferson Sanchez Ventura');
  });

  test('Incluye los íconos de GitHub, Docker y Nginx', () => {
    expect(html).toContain('github-original.svg');
    expect(html).toContain('docker-original.svg');
    expect(html).toContain('nginx-original.svg');
  });

  test('Incluye mención a GitHub Actions', () => {
    expect(html).toMatch(/GitHub Actions/i);
  });

  test('Incluye estructura básica del documento HTML', () => {
    expect(html).toMatch(/<!DOCTYPE html>/i);
    expect(html).toMatch(/<html lang="es">/i);
    expect(html).toMatch(/<head>[\s\S]*<\/head>/i);
    expect(html).toMatch(/<body>[\s\S]*<\/body>/i);
  });
});
