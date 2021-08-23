import { htmlFromStringKnownToSatisfyTypeContract } from 'safevalues/unsafe/reviewed'

export function foo(): TrustedHTML {
  return htmlFromStringKnownToSatisfyTypeContract('', '');
}