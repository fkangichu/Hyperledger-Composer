/**
 * Track the trade of a commodity from one trader to another
 * @param {org.example.mynetwork.Trade} trade - the trade to be processed
 * @transaction
 */
async function tradeProduct(trade) {
    trade.product.owner = trade.buyer;
    let assetRegistry = await getAssetRegistry('org.example.mynetwork.Product');
    await assetRegistry.update(trade.product);
}
