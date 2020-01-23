export default (symbolValue: Symbol) => {
  const symbolDescription = symbolValue
    .valueOf()
    .toString()
    .replace(/Symbol\((.*)\)/, '$1');

  if (!symbolDescription) {
    return `Symbol()`;
  }

  return `Symbol('${symbolDescription}')`;
};
