import { ethers } from "ethers";
import BigNumber from "bignumber.js";

export const formatNumber = (num) => {
  try {
    return new BigNumber(ethers.formatEther(num)).toNumber();
  } catch (error) {
    console.log(error);
  }
  return num;
};

export const formatString = (num) => {
  try {
    return new BigNumber(ethers.formatEther(num)).toFormat(2);
  } catch (error) {
    console.log(error);
  }
  return num;
};

export const formatNumberToUsd = (val) => {
  return `$${formatString(val)}`;
};

export const getCoinName = (asset: string) => {
  try {
    const marketName = ethers.decodeBytes32String(asset);
    return `${marketName.toUpperCase()}-PERP`;
  } catch (error) {
    console.log(error);
  }
  return asset;
};

export const generatePrimaryKey = <T extends Object>(item: T) => {
  return Object.keys(item).reduce((prev: string, current: string) => {
    return prev.toString() + String(item[current as keyof T]);
  }, "");
};
