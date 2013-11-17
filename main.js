
// Programmed by Jeremy Bridon for fun & profit
// CoreS2 Software Solutions - (C) 2013 - 2014

/*** Globals ***/

// How often we run the simulation loop, in the form of 1 second / X-updates
// We choose 10 updates, so 1/10: 0.1
var g_updateSpeed = 0.1;

// Total amount of bits
var g_bitCount = 0.0;

// Total number of generators
var g_generatorCount = 8;

// Cost per generator
var g_generatorBaseCost = [ 1, 8, 64, 512, 4096, 32768, 262144, 2097152 ];

// How much each generates (numbers will be huge)
var g_generatorBaseAddition = [ 1, 4, 8, 1024, 1048576, 1073741824, 1099511627776, 1.1259e15 ];

// Number of generators owned
var g_generatorBought = [ 0, 0, 0, 0, 0, 0, 0, 0 ];

/*** Main Application Entry Point ***/

// JQuery application entry-point
$(document).ready(function()
{
	// Query the UI and bind on-click events
	var UIElement_BitsGenerated = document.getElementById( "Ui_BitsGenerated" );
	var UIElement_BitsPerSec = document.getElementById( "Ui_BitsPerSec");
	
	var UIElement_BoughtElement = new Array(8);
	
	// Set buy/sell callbacks
	for(var i = 0; i < g_generatorCount; i++)
	{
		$("#Ui_Buy_" + i).click( function() { var index = i; return function() { UI_BuyGenerator( index ); }; }() );
		$("#Ui_Sell_" + i).click( function() { var index = i; return function() { UI_SellGenerator( index ); }; }() );
		
		UIElement_BoughtElement[i] = $("#Ui_Bought_" + i);
	}
	
	// Start our update loop, updates 10 x a second
	setInterval( function() {
	
		// Add all generated bits
		var addedBits = 0;
		for(var i = 0; i < g_generatorCount; i++)
		{
			addedBits += g_generatorBaseAddition[i] * g_generatorBought[i] * g_updateSpeed;
			UIElement_BoughtElement[i].innerText = g_generatorBought[i];
		}
		g_bitCount += addedBits;
		
		// Update UI
		UIElement_BitsGenerated.innerText = UI_HumanReadableByteCount( parseInt( g_bitCount) );
		UIElement_BitsPerSec.innerText = UI_HumanReadableByteCount( parseInt( addedBits / g_updateSpeed) ); // Convert back to per-sec, not sec-fraction
		
	}, g_updateSpeed * 1000);
	
	// Build graph
	var r = Raphael("holder"),
	txtattr = { font: "12px sans-serif" };

	var x = [], y = [], y2 = [], y3 = [];

	for (var i = 0; i < 1e6; i++)
	{
		x[i] = i * 10;
		y[i] = (y[i - 1] || 0) + (Math.random() * 7) - 3;
		y2[i] = (y2[i - 1] || 150) + (Math.random() * 7) - 3.5;
		y3[i] = (y3[i - 1] || 300) + (Math.random() * 7) - 4;
	}
	
	r.text(160, 10, "Simple Line Chart (1000 points)").attr(txtattr);
	
	r.linechart(10, 10, 300, 220, x, [y.slice(0, 1e3), y2.slice(0, 1e3), y3.slice(0, 1e3)]).hoverColumn(function () {
		this.set = r.set(
			r.circle(this.x, this.y[0]),
			r.circle(this.x, this.y[1]),
			r.circle(this.x, this.y[2])
		);
		}, function () {
			this.set.remove();
		}
	);

});

/*** User Interface Functions ***/

function UI_HumanReadableByteCount(byteCount)
{
	if( byteCount < 8 )
	{
		return byteCount + ' Bits';
	}

	// From http://programanddesign.com/js/human-readable-file-size-in-javascript/
	// (I think I wrote an r/dailyprogrammer challenge for this; it's a good interview question too)
	var units = [ 'Bytes', 'KiloBytes(KB)', 'MegaBytes(MB)', 'GigaBytes(GB)', 'TerraBytes(TB)', 'PetoBytes(PB)', 'EbbaBytes(EB)', 'ZetaBytes(ZB)', 'YettaBytes(YB)' ];
	var i = 0;
	while(byteCount >= 1024)
	{
		byteCount /= 1024;
		++i;
	}
	return byteCount.toFixed( (i >= 1) ? 2 : 0 ) + ' ' + units[i];
}

function UI_GenerateBit()
{
	g_bitCount += 1.0;
}

function UI_BuyGenerator(index)
{
	if( g_bitCount > g_generatorBaseCost[index] )
	{
		g_bitCount -= g_generatorBaseCost[index];
		g_generatorBought[index]++;
	}
}

function UI_SellGenerator(index)
{
	if( g_generatorBought[index] > 0 )
	{
		g_bitCount += g_generatorBaseCost[index];
		g_generatorBought[index]--;
	}
}