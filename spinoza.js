;
(function()
{ //***********************************
	'use strict';
	console.log('===== spinoza =====');

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
		var s = [a];
		var fs = function(a)
		{
			s[s.length] = a;
			fs.s = s;
			return fs;
		};
		fs.s = s;

		fs.spinoza = true;
		return fs;
	};

	var compute = function(s)
	{
		if (s.length === 1)
		{
			if (typeof(s[0].s) !== 'undefined')
			{
				return s[0].s;
			}
		}
		else
		{
			var s9 = s[s.length - 1];
			//console.info('debug: ', s9);
			var s0 = s.slice(0, s.length - 1);
			//console.info('debug: ', s0);
			var comp = compute(s0);
			if (type(s9) === 'Function')
			{
				return s9(comp);
			}
		}
		return s;
	};

	var wrap = function(content)
	{
		content();
		return;
	};

	var out = function(s)
	{
		console.info('spinoza.world : ', s);
		return compute(s);
	};


	if (typeof(window) === 'undefined')
	{
		console.log('mode: node/io.js');
		global.window = global;
	}
	else
	{
		console.log('mode: browser');
	}

	var spinoza = {
		$: $,
		compute: compute,
		out: out

	};

	Object.defineProperties(spinoza,
	{
		world: //our physical world
		{
			set: function(fs)
			{
				return compute(fs.s); //compute fs.s
			}
		}
	});


	module.exports = spinoza;
	//***********************************
}.call(this));
