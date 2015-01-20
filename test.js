//-------------------------------
var spinoza = require('./app');

var $ = spinoza.$;
var compute = spinoza.compute;
var world = spinoza.world;
var out = spinoza.out;

var plus10 = function(fs)
{
  var _ = require('lodash');
  var f = function(x)
  {
    return x + 10;
  };
  var z = _.map(fs.s, f);
  return z;
};

//===========================================
var fs0 = $('hello')(out);
world = compute(fs0);

var fs1 = $(1)(plus10)(out);
world = compute(fs1);

var fs2 = $(1)(2)(3)(plus10)(out);
world = compute(fs2);

var fs3 = $(1)(2)(3)(out)(5);
world = compute(fs3);
//===========================================