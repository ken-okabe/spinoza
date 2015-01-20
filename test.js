//-------------------------------
var spinoza = require('./app');

var $ = spinoza.$;
var compute = spinoza.compute;
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

world = $('hello')(out);

world = $(1)(plus10)(out);

world = $(1)(2)(3)(plus10)(out);

//===========================================