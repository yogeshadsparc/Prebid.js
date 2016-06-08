/**
 * appnexus.js - AppNexus Prebid Analytics Adapter
 */

import adapter from 'AnalyticsAdapter';

export default adapter({
    url: 'http://localhost:9990/dist/appnexus.js',
    global: 'AppNexusPrebidAnalytics',
    handler: 'on',
    analyticsType: 'library'
  });
