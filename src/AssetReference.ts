import { CAIP22AssetID, CAIP22AssetType, isCAIP22AssetID } from './CAIP22';
import { CAIP29AssetID, CAIP29AssetType, isCAIP29AssetID } from './CAIP29';
import {
  isKittiesAndPunksAssetID,
  KittiesAndPunksAssetID,
  KittiesAndPunksAssetType,
} from './KittiesAndPunks';

export type AssetType = CAIP22AssetType | CAIP29AssetType | KittiesAndPunksAssetType;
export type AssetID = CAIP22AssetID | CAIP29AssetID | KittiesAndPunksAssetID;
export type AnyID = AssetType | AssetID;

export function isAssetIDReference(reference: AnyID): reference is AssetID {
  return (
    isCAIP22AssetID(reference) || isCAIP29AssetID(reference) || isKittiesAndPunksAssetID(reference)
  );
}
