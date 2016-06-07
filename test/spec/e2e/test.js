//module.exports = (function(settings) {
//  settings.test_workers = false;
//  return settings;
//})(require('./nightwatch.json'));

describe('Prebid End to End Test', () => {
  it('Renders an ad from Adequant on localhost:9999', client => {
    client
      .frame(null)
      .url('http://localhost:9999/gpt-each-bidder3.html')
      .waitForElementPresent('iframe', 10000)
      .element('css selector', '#google_ads_iframe_/19968336/header-bid-tag-1_0', function (adequantFrame) {
        client
          .frame(null)
          .frame(Number(adequantFrame.ELEMENT))
          .pause(3000)
          .verify.containsText('span', 'Adequant Prebid.js test 300x250', 'Adequant' +
            ' test ad rendered OK');
      })
      .end();
  });

  //client
  //  .url('http://localhost:9999/gpt-each-bidder3.html')
  //  .waitForElementVisible('body', 1000)
  //  .frame('google_ads_iframe_/19968336/header-bid-tag-1_0')
  //  .waitForElementVisible('body', 1000)
  //.assert.containsText('body > div:nth-child(2) > span', 'Adequant Prebid.js test 300x250')
});

//describe('Google demo test for Mocha', function () {
//
//  describe('with Nightwatch', function () {
//
//    before(function (client, done) {
//      done();
//    });
//
//    after(function (client, done) {
//      client.end(function () {
//        done();
//      });
//    });
//
//    afterEach(function (client, done) {
//      done();
//    });
//
//    beforeEach(function (client, done) {
//      done();
//    });
//
//    it('uses BDD to run the Google simple test', function (client) {
//      client
//        .url('http://google.com')
//        .expect.element('body').to.be.present.before(1000);
//
//      client.setValue('input[type=text]', ['nightwatch', client.Keys.ENTER])
//        .pause(1000)
//        .assert.containsText('#main', 'Night Watch');
//    });
//  });
//});

//module.exports = {
//  'Test each bidder': function (browser) {
//    browser
//      .url('http://localhost:9999/gpt-each-bidder3.html')
//      .waitForElementVisible('body', 1000)
//      .assert.containsText('#div-1')
//  },
//  'Demo test Google': function (browser) {
//    browser
//      .url('http://www.google.com')
//      .waitForElementVisible('body', 1000)
//      .setValue('input[type=text]', 'nightwatch')
//      .waitForElementVisible('button[name=btnG]', 1000)
//      .click('button[name=btnG]')
//      .pause(1000)
//      .assert.containsText('#main', 'Night Watch')
//      .end();
//  },
//  'step one' : function (browser) {
//    browser
//      .url('http://www.google.com')
//      .waitForElementVisible('body', 1000)
//      .setValue('input[type=text]', 'nightwatch')
//      .waitForElementVisible('button[name=btnG]', 1000)
//  },
//
//  'step two' : function (browser) {
//    browser
//      .click('button[name=btnG]')
//      .pause(1000)
//      .assert.containsText('#main', 'Night Watch')
//      .end();
//  },
//
//  beforeEach: function(browser, done) {
//    // performing an async operation
//    setTimeout(function() {
//      // finished async duties
//      done();
//    }, 100);
//  },
//
//  afterEach: function(browser, done) {
//    // performing an async operation
//    setTimeout(function() {
//      // finished async duties
//      done();
//    }, 200);
//  }
//};
