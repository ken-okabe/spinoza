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

/*
var f = function()
{
	world = $('delay hello')(out);
};
var delay = setTimeout(f, 2000);
*/
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


spinoza.world = $('hello')(out);
spinoza.world = $('------------')(out);
spinoza.world = $('hello')(out)(out);
spinoza.world = $('------------')(out);
spinoza.world = $('hello')(out)('foo')(out);
spinoza.world = $('------------')(out);
spinoza.world = $(1)(2)(3)(out);

spinoza.world = $('------------')(out);
spinoza.world = $(1)(2)(3)(plus10)(out);


spinoza.world = $('------------')(out);
spinoza.world = $($(1)(2)(3)(plus10))(out);
/*

//[ 'hello', out ]

// [ 1, 2, 3, plus10, out ] =  [11, 12, 13] is out
// [[ 1, 2, 3, plus10], out ] = [1, 2, 3, plus10] is out

world = $(1)(2)(3)(plus10)(out); // [11, 12, 13]

world = $( $(1)(2)(3)(plus10) )(out); // [1, 2, 3, plus10]

// ( 1 (+ ( 2 (+ ( 3 ) ) ) ) )

var plus2 = $(plus)(2);
var multi3 = $(multi)(3);

world = $(1)(plus2)(multi3); //(1 +2) *3 = 9

world = $(1)($(plus)(2))($(multi)(3)); //9


world = $(1)($(plus)($(2)($(multi)(3)))); //1 +(2 *3) = 7

*/


//===========================================
