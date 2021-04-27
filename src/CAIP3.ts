// https://github.com/ChainAgnostic/CAIPs/blob/master/CAIPs/caip-3.md
export type CAIP3ChainId = string;

const NAMESPACE = 'eip155';
const SEPARATOR = ':';

export const isCAIP3ChainId = (chainId: string): chainId is CAIP3ChainId => {
  const [namespace, reference] = chainId.split(SEPARATOR);
  if (namespace !== NAMESPACE) return false;
  if (!reference) return false;

  try {
    // must parse as decimal number
    parseInt(reference, 10);
  } catch {
    return false;
  }

  return true;
};
