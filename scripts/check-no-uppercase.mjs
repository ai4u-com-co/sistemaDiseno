#!/usr/bin/env node
// Regla del ecosistema (octubre 2026, recomendación de accesibilidad): nada en mayúscula sostenida.
// Ningún componente ni hoja de estilos puede forzar mayúsculas: text-transform: uppercase, small-caps o .toUpperCase()
// sobre una cadena entera (la primera letra, con charAt(0).toUpperCase(), está bien). Corre en CI antes del build.
import { readdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = join(import.meta.dirname, '..', 'src');
const walk = (d) => readdirSync(d).flatMap((f) => {
  const p = join(d, f);
  if (statSync(p).isDirectory()) return walk(p);
  return /\.(css|tsx?)$/.test(f) && !/\.(stories|test)\./.test(f) ? [p] : [];
});

const MAL = [
  [/text-transform:\s*uppercase|textTransform:\s*['"]uppercase['"]/, 'text-transform: uppercase'],
  [/font-variant(-caps)?:\s*(all-)?small-caps/, 'small-caps'],
  [/\.toUpperCase\(\)/, '.toUpperCase() sobre una cadena entera'],
];

const fallos = [];
for (const f of walk(ROOT)) {
  readFileSync(f, 'utf8').split('\n').forEach((linea, i) => {
    for (const [re, msg] of MAL) {
      if (re.test(linea) && !/charAt\(0\)\.toUpperCase\(\)/.test(linea)) fallos.push(`${f.replace(ROOT, 'src')}:${i + 1}  ${msg}`);
    }
  });
}
if (fallos.length) {
  console.error('Mayúscula sostenida prohibida (ver CLAUDE.md, «Texto: nada en mayúscula sostenida»):');
  fallos.forEach((l) => console.error('  ' + l));
  process.exit(1);
}
console.log('check-no-uppercase: OK, sin mayúscula forzada en src/');
