/** Codeert een kortingscode zodat ze niet als leesbare tekst in de HTML staat (zie CodeOnthullen). */
export function codeerCode(code: string): string {
  return Buffer.from(code, 'utf8').toString('base64');
}
