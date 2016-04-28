// this loads the es6-promises polyfill to make promise syntax available in Apps Script
// copyright notice - https://raw.githubusercontent.com/jakearchibald/es6-promise/master/LICENSE
var Promise,
    setTimeout = setTimeout || function (func,ms) {
      Utilities.sleep(ms);
      func();
    };

(function () {  

  // get the polyfill and eval
  if (!Promise) {
    var result = UrlFetchApp.fetch('https://cdnjs.cloudflare.com/ajax/libs/es6-promise/3.2.1/es6-promise.min.js');
    eval (result.getContentText());

    // add done for compatibility with other promise systems
    Promise.prototype.done = Promise.prototype.done || Promise.prototype.then ;

  }
  
}());
