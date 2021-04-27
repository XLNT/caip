# @xlnt/caip

This package provides Typescript typings and logic for reading and creating [CAIP](https://github.com/ChainAgnostic/CAIPs) identifiers, namespaces, and references.

```bash
yarn add @xlnt/caip
```

## Usage

```ts
import { parseIdentifier } from '@xlnt/caip';

const {
  chainId, // eip155:1
  assetNamespace, // erc721
  assetReference, // 0x06012c8cf97BEaD5deAe237070F9587f8E7A266d
  tokenId, // ethers.BigNumber.from('771769')
} = parseIdentifier('eip155:1/erc721:0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/771769')
```

```ts
const reference = parseIdentifier('eip155:1/erc721:0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/771769');
console.log(isAssetIDReference(reference)) // true, reference is AssetID
```

```ts
const reference = parseIdentifier('eip155:1/erc721:0x06012c8cf97BEaD5deAe237070F9587f8E7A266d');
console.log(isAssetIDReference(reference)) // false, reference is AssetType
```
