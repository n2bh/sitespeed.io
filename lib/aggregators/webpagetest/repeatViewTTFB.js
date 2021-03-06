/**
 * Sitespeed.io - How speedy is your site? (http://www.sitespeed.io)
 * Copyright (c) 2014, Peter Hedenskog, Tobias Lidskog
 * and other contributors
 * Released under the Apache 2.0 License
 */
var Aggregator = require('../aggregator');

module.exports = new Aggregator('repeatViewTTFBWPT',
  'TTFB Repeat View',
  'Time To First Byte (fetched using WebPageTest)', 'timing', 'milliseconds', 0,
  function(pageData) {
    if (pageData.webpagetest) {
      var stats = this.stats;
      pageData.webpagetest.wpt.response.data.run.forEach(function(run) {
        stats.push(run.repeatView.results.TTFB);
      });
    }
  });
