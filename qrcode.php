<html>
<title>
This is a qrcode generator
</title>
<header>

 <link rel="stylesheet" href="//code.jquery.com/ui/1.11.2/themes/smoothness/jquery-ui.css">
  <script src="//code.jquery.com/jquery-1.10.2.js"></script>
  <script src="//code.jquery.com/ui/1.11.2/jquery-ui.js"></script>
  
 <link href="bootstrap.min.css" rel="stylesheet">
<link rel="stylesheet" type="text/css" href="qrcode.css">


<!--
<script type="text/javascript" src="mkrfile.js"></script>

<script type="text/javascript" src="jquery.qrcode.min.js"></script>
<script  src="qrcode.min.js"></script>

<script type="text/javascript" src="jquery.qrcode-0.11.0.min.js"></script>

<script type="text/javascript" src="jquery.qrcode-0.11.0.js"></script>
-->
<script  src="qrcode.js"></script>



<script>


  $(function() {
	
    $('#datepicker').datepicker({ dateFormat: 'dd-M-yy', minDate : 0 });

	$("#Download").hide();
	$("#Back").hide();
			
			

 
  

  });
  </script>
</header>
<body> 
<div class ="container">
<div class ="jumbotron">
	<h1> QR Code Generator</h1>
</div>
</div>

<div class ="container">
	<div class ="row"">
		<div class ="col-md-6">
		
			<div class =topbuffer>
		
				<div class ="row">
				<p>
					<div class ="col-md-6">
						<h4>Item</h4>
					</div>
					<div class ="col-md-6">
					<script type ="text/javascript" >
function keypresshandler(event)
    {
         var charCode = event.keyCode;
		
         if (charCode ==58 ){
		
			  event.preventDefault();
			  
			return false;
		 }
        
    } 
					</script>
						<h4><strong><input type="text" id= "event" onkeypress='keypresshandler(event)' ></strong</h4>
					</div>
					</p>
				</div>
			</div>	
			<div class =topbuffer>
				<div class ="row">
					<div class ="col-md-6">
					<h4><p id ="lbldate">Expiration Date</p></h4>
					</div>
		
					<div class ="col-md-6">
						<h4><input type="text" id="datepicker" name ="dp" ></h4>
					</div>
				</div>
			</div>
			<div class =row topbuffer>
			<h1><input type="submit" value = "Generate"  id="generate"></h1>
			</div>
		
		</div>	
			
	
		<div class ="col-md-6">
<div class ="qrclass">
				<div id="qrcode">
				
				</div>
				

				
		</div>
	</div>

	</div>



<div class ="container">
	<div class ="row"">
		<div class ="col-md-6">
			
		</div>
		<div class ="col-md-6">

			<div  >
				
			</div>
		</div>
	</div>
</div>

<div class ="container">
	<div class ="row"">
		<div class ="col-md-6">
			
		</div>
		<div class ="col-md-6">

			<div  align ="left">
			<div class =topbuffer>
			<h1 align ="center">
			<div id="btn">
				<input type="submit" id = "Download"  value= "Download">
				<input type="submit" id = "Back"  value= "New Code"  >
				</div>
				</h>
			</div>
			</div>
		</div>
	</div>
</div>






</body>
<? php
?>







</html>

