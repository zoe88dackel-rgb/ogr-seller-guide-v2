/* Price and confirmed price share the same tax-inclusive currency basis. */
function settlement(price, confirmed, platformPay) {
  const credit = Math.max(0, price - confirmed);
  return {cash: platformPay - credit, credit};
}
if (typeof module !== 'undefined' && module.exports) module.exports = {settlement};
