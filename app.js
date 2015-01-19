/**
 * @license
 * Lo-Dash 2.4.1 <http://lodash.com/>
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
;
(function()
{ //***********************************
  'use strict';
  console.log('=====spinoza=====');

  var _ = require('lodash');

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
    var seq = [];
    seq[i] = a;

    var f = function(a)
    {
      i++;
      seq[i] = a;
      console.log(seq);
      f.seq = seq;
      return f;
    };

    console.log(seq);
    f.seq = seq;

    return f;
  };

  //[ 1, 2, 3, 4, 5 ]

  var compute = function(f)
  {
    //---------
    if (type(f) != 'Function')
    {
      return f;
    }
    else
    {

      var length = f.seq.length;

      var result;
      if (length === 1)
      {
        return f();
      }

      else
      {

        var ff = f.seq[length - 1];
        var f0 = f.seq.slice(0, length - 1);

        console.log(ff);
        console.log(f0);


        if (type(ff) != 'Function')
        {
          console.log('#not function');
          return f.seq;
        }
        else
        {
          console.log('#function');
          console.info('function:', f0);

          var result = ff(f0);
          console.info('result ', result);
          return compute(result);
        }
      }

    }

    //---------
  };



  var out = function(msg)
  {
    console.info('@@@ OUT @@@ ', msg);
    return msg;
  };

  var z = compute($(1)(2));

  console.info('FINAL', z);

  // [1,2,5]

  //***********************************
}.call(this));