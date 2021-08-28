import { AssetType } from "./asset-type.model";
import { IBaseEntity } from "./base-entity.model";

export interface IAssets extends IBaseEntity {
  name: string;
  path: string;
  type: AssetType;
  isDeleted: boolean;
}
