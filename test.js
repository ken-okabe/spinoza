//-------------------------------
var spinoza = require('./spinoza');

var $ = spinoza.$;
var compute = spinoza.compute;
var out = spinoza.out;

var plus10 = function(s)
{
  var _ = require('lodash');
  var f = function(x)
  {
    return x + 10;
  };
  var z = _.map(s, f);
  return z;
};


//-------------
/*
var input = (function()
{
  var std = process.stdin
    .resume()
    .setEncoding('utf8')
    .on('data', function(chunk)
    {
      chunk.trim().split('\n').forEach(function(line)
      {　
        world = $(line)(out);
      });
    })
    .on('end', function() {});

})();

*/
//-----------

//===========================================
spinoza.world = $('hello');
// no output
spinoza.world = $('------------')(out);
spinoza.world = $('hello')(out);
// ['hello']
spinoza.world = $('------------')(out);
spinoza.world = $('hello')('world')(out);
// [ 'hello', 'world' ]
spinoza.world = $('------------')(out);
spinoza.world = $('hello')(out)(out);
// ['hello']
// ['hello']
spinoza.world = $('------------')(out);
spinoza.world = $('hello')(out)('world')(out);
// ['hello']
// [ 'hello', 'world' ]
spinoza.world = $('------------')(out);
spinoza.world = $(1)(2)(3)(out);
// [ 1, 2, 3 ]
spinoza.world = $('------------')(out);
spinoza.world = $(1)(2)(3)(plus10)(out);
// [ 11, 12, 13 ]
spinoza.world = $('------------')(out);
spinoza.world = $($(1)(2)(3)(plus10))(out);
// [ 1, 2, 3, [Function] ]



/*
// ( 1 (+ ( 2 (+ ( 3 ) ) ) ) )

var plus2 = $(plus)(2);
var multi3 = $(multi)(3);

world = $(1)(plus2)(multi3); //(1 +2) *3 = 9

world = $(1)($(plus)(2))($(multi)(3)); //9


world = $(1)($(plus)($(2)($(multi)(3)))); //1 +(2 *3) = 7

*/


//===========================================
