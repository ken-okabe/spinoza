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
        var fs0 = fseq(fs.s.slice(0, length - 1)); //fseq the rest

        if (type(ff) != 'Function')
        {
          return fs.s;
        }
        else
        {
          var fs1 = ff(fs0);
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

  var world; //our physical world

  var spinoza = {
    $: $,
    compute: compute,
    world: world,
    out: out

  };

  module.exports = spinoza;
  //***********************************
}.call(this));