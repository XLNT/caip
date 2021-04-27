import { ethers } from 'ethers';

import { CAIP19AssetID, CAIP19AssetType } from './CAIP19';
import { parseIdentifier } from './parseIdentifier';

const CASES: [string, CAIP19AssetType | CAIP19AssetID][] = [
  [
    'eip155:1/erc721:0x06012c8cf97BEaD5deAe237070F9587f8E7A266d',
    {
      chainId: 'eip155:1',
      assetNamespace: 'erc721',
      assetReference: '0x06012c8cf97BEaD5deAe237070F9587f8E7A266d',
    },
  ],
  [
    'eip155:1/erc721:0x06012c8cf97BEaD5deAe237070F9587f8E7A266d/771769',
    {
      chainId: 'eip155:1',
      assetNamespace: 'erc721',
      assetReference: '0x06012c8cf97BEaD5deAe237070F9587f8E7A266d',
      tokenId: ethers.BigNumber.from('771769'),
    },
  ],
  [
    'eip155:1/erc1155:0x28959Cf125ccB051E70711D0924a62FB28EAF186/0',
    {
      chainId: 'eip155:1',
      assetNamespace: 'erc1155',
      assetReference: '0x28959Cf125ccB051E70711D0924a62FB28EAF186',
      tokenId: ethers.BigNumber.from('0'),
    },
  ],
];

CASES.forEach(([input, output]) =>
  it(`should parse ${input}`, () => {
    expect(parseIdentifier(input)).toEqual(output);
  }),
);
