import { AnyID, isAssetIDReference } from './AssetReference';

export function stringifyIdentifier(id: AnyID) {
  return [
    id.chainId,
    id.assetNamespace,
    id.assetReference,
    isAssetIDReference(id) && id.tokenId.toHexString(),
  ]
    .filter(Boolean)
    .join('/');
}
