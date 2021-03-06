/**
 * Sitespeed.io - How speedy is your site? (http://www.sitespeed.io)
 * Copyright (c) 2014, Peter Hedenskog, Tobias Lidskog
 * and other contributors
 * Released under the Apache 2.0 License
 */
var Aggregator = require('../aggregator');

module.exports = new Aggregator('firstViewImageTotalWPT',
  'Image Size First View',
  'Total image size (fetched using WebPageTest)', 'pagemetric', 'bytes', 0,
  function(pageData) {
    if (pageData.webpagetest) {
      var stats = this.stats;
      pageData.webpagetest.wpt.response.data.run.forEach(function(run) {
        stats.push(run.firstView.results.image_total); // jshint ignore:line
      });
    }
  });
