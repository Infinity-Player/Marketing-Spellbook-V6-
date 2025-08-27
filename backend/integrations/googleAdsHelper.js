// Placeholder Google Ads helper
// TODO: implement real API calls using google-ads-api SDK
module.exports = {
  pushAd: async function(adPayload){
    console.log('[googleAdsHelper] pushAd called - payload sample:', adPayload);
    // TODO: call Google Ads API
    return { ok:true, message: 'queued (placeholder)' };
  }
};
