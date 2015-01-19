;
(function()
{ //***********************************
  'use strict';
  console.log('===== spinoza =====');

  var info = function(type, info)
  {
    console.info(type + '->', info);
  };

  var type = function(obj)
  {
    return Object
      .prototype
      .toString
      .call(obj)
      .slice(8, -1);
  };

  var $ = function(a)
  {
    var i = 0;
    var s = [];
    s[i] = a;

    var fs = function(a)
    {
      i++;
      s[i] = a;
      fs.s = s;
      return fs;
    };
    fs.s = s;

    return fs;
  };

  var fseq = function(s)
  {
    var fs = function() {};
    fs.s = s;
    return fs;
  };

  var compute = function(fs)
  {
    //------------
    if (type(fs) != 'Function')
    {
      return fs;
    }
    else
    {
      var length = fs.s.length;
      var result;

      if (length === 1)
      {
        return fs.s;
      }
      else
      {
        var ff = fs.s[length - 1]; //the last fs
        var f0 = fseq(fs.s.slice(0, length - 1)); //fseq the rest

        if (type(ff) != 'Function')
        {
          return fs.s;
        }
        else
        {
          var fs1 = ff(f0);
          return compute(fs1);
        }
      }
    }
    //---------
  };

  var out = function(fs)
  {
    var z = compute(fs);
    info('world', z);
    return z;
  };

  var world;

  //-------------------------------
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

  //***********************************
}.call(this));