//-------------------------------
var spinoza = require('./app');

var $ = spinoza.$;
var compute = spinoza.compute;
var out = spinoza.out;

var plus10 = function(fs) {
  var _ = require('lodash');
  var f = function(x) {
    return x + 10;
  };
  var z = _.map(fs.s, f);
  return z;
};

var f = function() {
  world = $('delay hello')(out);
};
var delay = setTimeout(f, 2000);

//-------------

var input = (function() {
  var std = process.stdin
    .resume()
    .setEncoding('utf8')
    .on('data', function(chunk) {
      chunk.trim().split('\n').forEach(function(line) {　
        world = $(line)(out);
      });
    })
    .on('end', function() {});

})();
//-----------

//===========================================


world = $('hello')(out);
//[ 'hello' ]

world = $(1)(out);
// [ 1 ]

world = $(1)(2)(3)(out);
// [ 1, 2, 3 ]

world = $(1)(plus10)(out);
// [ 11 ]

world = $(1)(2)(3)(plus10)(out);
// [ 11, 12, 13 ]

world = $('hello');
//　nothing happens

world = $('hello')(out)(out);
// hello twice


//===========================================
