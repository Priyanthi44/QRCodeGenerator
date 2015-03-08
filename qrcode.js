
$(function() {
	(function( $ ) 
{
    $.fn.qrcode = function(options)
    {
        var settings =
        {
            baseURI: 'http://api.qrserver.com/v1/create-qr-code/?data=',
            source: 'http://goqr.me',
            data: 	 elText.value,
            size: '250x250',
            linkBack: true,
			download :1,
            css: { 'border':'20px solid #fff' }
        }
        settings = $.extend({},settings,options);
     return this.each(function()
        {
            $(this).html( '<img>' )
            .find('img').attr('src',settings.baseURI 
            + encodeURIComponent(settings.data) + '&size=' + settings.size)
            .css(settings.css).filter(function() { return settings.linkBack; })
            .wrap( '<a href="' + settings.source 
            + '" style="text-decoration:none;"></a>'
			);
        });
    };
})( jQuery );
	var elText;

	$("#generate").click(function() 
	{
	//create new qr code with qrcode id (from div)
	
	
	function makeCode () {		
	//var  oCanvas = document.getElementById("qrcode");
    
	elText = document.getElementById("event");

	if (!elText.value) {   	
		alert("Type an event");
		elText.focus();
		return;
	}
	var eText = document.getElementById("datepicker");
	
	if (!eText.value) {
		alert("Select a date");
		elText.focus();
		return;
	}else{
		/*
	    var qrcode = new QRCode("qrcode", {
            render: "canvas",
            width: 200,
            height: 200,
            colorDark: "#000000",
            colorLight: "#ffffff",
            correctLevel: QRCode.CorrectLevel.H
        });*/
		
		elText.value+= ":" +eText.value;
		 
	//qrcode.makeCode(elText.value);
	/*
	$("#qrcode").qrcode({ 
    "render": "canvas",
    "width": 100,
    "height": 100,
    "color": "#3a3",
    "text": elText.value
});*/
$('#qrcode').qrcode();
/*
	jQuery('#qrcode').qrcode({
		render	: "canvas",
		text	: elText.value
	});*/
	
	$(":text").prop("disabled", true);	
	$("#Download").show();
	$("#lbldate").hide();
	$("#Back").show();
	$("#generate").hide();
	  $("#qrcode").show();
	  $("#datepicker").hide();
	
	}
}

		makeCode();

	/*	$("#event").
		on("blur", function () {
		makeCode();
		}).
			on("keydown", function (e) {
			if (e.keyCode == 13) {
			makeCode();
		}
	}*/
	//);
	

	

	});
	
  $("#Back").click(function() {
	  
		$("#qrcode").empty();	  
		$(":text").prop("disabled", false);
		$("#event").val("");
		$("#datepicker").val("");
		$("#datepicker").show();
		$("#Download").hide();
		$("#lbldate").show();
		$("#Back").hide();
		$("#generate").show();
  });
  
   
  $("#Download").click(function() {
	
	    var qrCodeBaseUri = 'https://api.qrserver.com/v1/create-qr-code/?data=',
        params = {
            data: elText.value,
            size: '200x200',
            margin: 0,
			processData: false ,
            download: 1
        };

   window.open(qrCodeBaseUri + $.param(params),"_self");  
	  /*
	alert(document.getElementById('qrcode'));
		var dataURL = document.getElementById('qrcode').toDataURL();
	    
	*/
	
	  
//pdf download
  });
 

});