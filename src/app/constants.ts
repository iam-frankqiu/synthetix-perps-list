export const NETWORK = "optimism";

export const CONTRACT_ADDRESS = "0x340B5d664834113735730Ad4aFb3760219Ad9112";

export const ABI = [
  "constructor(address _resolverProxy)",
  "function allMarketSummaries() view returns (tuple(address market, bytes32 asset, bytes32 key, uint256 maxLeverage, uint256 price, uint256 marketSize, int256 marketSkew, uint256 marketDebt, int256 currentFundingRate, int256 currentFundingVelocity, tuple(uint256 takerFee, uint256 makerFee, uint256 takerFeeDelayedOrder, uint256 makerFeeDelayedOrder, uint256 takerFeeOffchainDelayedOrder, uint256 makerFeeOffchainDelayedOrder) feeRates)[])",
  "function allProxiedMarketSummaries() view returns (tuple(address market, bytes32 asset, bytes32 key, uint256 maxLeverage, uint256 price, uint256 marketSize, int256 marketSkew, uint256 marketDebt, int256 currentFundingRate, int256 currentFundingVelocity, tuple(uint256 takerFee, uint256 makerFee, uint256 takerFeeDelayedOrder, uint256 makerFeeDelayedOrder, uint256 takerFeeOffchainDelayedOrder, uint256 makerFeeOffchainDelayedOrder) feeRates)[])",
  "function globals() view returns (tuple(uint256 minInitialMargin, uint256 liquidationFeeRatio, uint256 minKeeperFee, uint256 maxKeeperFee))",
  "function marketDetails(address market) view returns (tuple(address market, bytes32 baseAsset, bytes32 marketKey, tuple(uint256 takerFee, uint256 makerFee, uint256 takerFeeDelayedOrder, uint256 makerFeeDelayedOrder, uint256 takerFeeOffchainDelayedOrder, uint256 makerFeeOffchainDelayedOrder) feeRates, tuple(uint256 maxLeverage, uint256 maxMarketValue) limits, tuple(uint256 maxFundingVelocity, uint256 skewScale) fundingParameters, tuple(uint256 marketSize, tuple(uint256 long, uint256 short) sides, uint256 marketDebt, int256 marketSkew) marketSizeDetails, tuple(uint256 price, bool invalid) priceDetails))",
  "function marketDetailsForKey(bytes32 marketKey) view returns (tuple(address market, bytes32 baseAsset, bytes32 marketKey, tuple(uint256 takerFee, uint256 makerFee, uint256 takerFeeDelayedOrder, uint256 makerFeeDelayedOrder, uint256 takerFeeOffchainDelayedOrder, uint256 makerFeeOffchainDelayedOrder) feeRates, tuple(uint256 maxLeverage, uint256 maxMarketValue) limits, tuple(uint256 maxFundingVelocity, uint256 skewScale) fundingParameters, tuple(uint256 marketSize, tuple(uint256 long, uint256 short) sides, uint256 marketDebt, int256 marketSkew) marketSizeDetails, tuple(uint256 price, bool invalid) priceDetails))",
  "function marketSummaries(address[] markets) view returns (tuple(address market, bytes32 asset, bytes32 key, uint256 maxLeverage, uint256 price, uint256 marketSize, int256 marketSkew, uint256 marketDebt, int256 currentFundingRate, int256 currentFundingVelocity, tuple(uint256 takerFee, uint256 makerFee, uint256 takerFeeDelayedOrder, uint256 makerFeeDelayedOrder, uint256 takerFeeOffchainDelayedOrder, uint256 makerFeeOffchainDelayedOrder) feeRates)[])",
  "function marketSummariesForKeys(bytes32[] marketKeys) view returns (tuple(address market, bytes32 asset, bytes32 key, uint256 maxLeverage, uint256 price, uint256 marketSize, int256 marketSkew, uint256 marketDebt, int256 currentFundingRate, int256 currentFundingVelocity, tuple(uint256 takerFee, uint256 makerFee, uint256 takerFeeDelayedOrder, uint256 makerFeeDelayedOrder, uint256 takerFeeOffchainDelayedOrder, uint256 makerFeeOffchainDelayedOrder) feeRates)[])",
  "function parameters(bytes32 marketKey) view returns (tuple(uint256 takerFee, uint256 makerFee, uint256 takerFeeDelayedOrder, uint256 makerFeeDelayedOrder, uint256 takerFeeOffchainDelayedOrder, uint256 makerFeeOffchainDelayedOrder, uint256 maxLeverage, uint256 maxMarketValue, uint256 maxFundingVelocity, uint256 skewScale, uint256 nextPriceConfirmWindow, uint256 delayedOrderConfirmWindow, uint256 minDelayTimeDelta, uint256 maxDelayTimeDelta, uint256 offchainDelayedOrderMinAge, uint256 offchainDelayedOrderMaxAge, bytes32 offchainMarketKey, uint256 offchainPriceDivergence, uint256 liquidationPremiumMultiplier, uint256 liquidationBufferRatio, uint256 maxLiquidationDelta, uint256 maxPD))",
  "function positionDetails(address market, address account) view returns (tuple(tuple(uint64 id, uint64 lastFundingIndex, uint128 margin, uint128 lastPrice, int128 size) position, int256 notionalValue, int256 profitLoss, int256 accruedFunding, uint256 remainingMargin, uint256 accessibleMargin, uint256 liquidationPrice, bool canLiquidatePosition))",
  "function positionDetailsForMarketKey(bytes32 marketKey, address account) view returns (tuple(tuple(uint64 id, uint64 lastFundingIndex, uint128 margin, uint128 lastPrice, int128 size) position, int256 notionalValue, int256 profitLoss, int256 accruedFunding, uint256 remainingMargin, uint256 accessibleMargin, uint256 liquidationPrice, bool canLiquidatePosition))",
  "function resolverProxy() view returns (address)",
];

export const COLUMNS = [
    { key: "marketName", title: "MARKET" },
    { key: "price", title: "PRICE" },
    {
      key: "marketSize",
      title: "MARKET SIZE",
    },
    {
      key: "markerTakerRatio",
      title: "MAKER/TAKER",
    },
  ]