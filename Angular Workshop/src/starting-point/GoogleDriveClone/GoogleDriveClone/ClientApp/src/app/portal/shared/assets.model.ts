import { AssetType } from "./asset-type.model";

export interface IAssets {
  name: string;
  path: string;
  type: AssetType;
  isDeleted: boolean;
}
