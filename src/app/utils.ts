import { ethers } from "ethers";
import BigNumber from "bignumber.js";

export const formatNumber = (num) => {
  return new BigNumber(ethers.formatEther(num)).toNumber();
};

export const formatString = (num) => {
  return new BigNumber(ethers.formatEther(num)).toFormat(2);
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
    return "";
  }
};

export const generatePrimaryKey = <T extends Object>(item: T) => {
  return Object.keys(item).reduce((prev, current) => {
    return prev.toString() + String(item[current]);
  }, "");
};
