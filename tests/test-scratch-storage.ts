import ScratchStorage from 'scratch-storage';

declare const vm: VM;

const storage = new ScratchStorage();
vm.attachStorage(storage);

ScratchStorage.DataFormat.JPG === 'jpg';
storage.DataFormat.JPG === 'jpg';

storage.addWebStore(
  [
    ScratchStorage.AssetType.ImageVector,
    ScratchStorage.AssetType.ImageBitmap,
    storage.AssetType.Sound,
  ],
  asset => {
    const assetId = asset.assetId;
    const dataFormat = asset.dataFormat;
    return `https://assets.scratch.mit.edu/${assetId}.${dataFormat}`;
  }
);
