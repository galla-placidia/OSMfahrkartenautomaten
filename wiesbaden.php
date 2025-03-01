<!DOCTYPE html>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		<title></title>
		<link rel="stylesheet" type="text/css" href="http://necolas.github.io/normalize.css/2.1.3/normalize.css" />
		<style type="text/css">
			body {width: 600px; margin: auto;}
		</style>
	</head>
	<body>
		<h1>Fahrkartenautomatenauswertung Wiesbaden</h1>
		<p><a href="https://www.netzplan-wiesbaden.de/maps/tlnp/poi-list/eswewiesbaden_pois_fahrkartenautomaten">Die ESWE Verkehr hat in Wiesbaden 59 Fahrkartenautomaten</a>.</a> Hier eine Auswertung über die OverpassAPI. Gezählt werden alle Fahrkartenautomaten mit "operator=ESWE Verkehrsgesellschaft mbH"</p>
		<p>Wir haben uns geeinigt das operator Tag auf "ESWE Verkehrsgesellschaft mbH" zu vereinheitlichen. "ESWE", "ESWE Verkehr", "ESWE Verkehrsgesellschaft mbH" werden aber hier auch mit ausgewertet.</p>
		<p><a href="./">Die Karte mit den Automaten gibts hier</a></p>
		<h2>Auswertung</h2>
		<div id="auswertung">
			Abfrage läuft...
		</div>
	</body>
	<script src="http://code.jquery.com/jquery-1.10.1.min.js"></script>
	<script>

		function auswertung(anzahl){
			$('#auswertung').html(anzahl + " von 59 ESWE-Automaten");
		}

		function parseOSM(data){
			counter = 0;
			ESWE_operator = ['eswe verkehr', 'eswe', 'eswe verkehrsgesellschaft', 'eswe verkehrsgesellschaft mbh'];

			$(data).find('node').each(function(){
				$(this).find('tag').each(function(){
					if($(this).attr("k")=="operator")
						
						var lowerOperator = $(this).attr("v").toLowerCase();
						if (ESWE_operator.indexOf(lowerOperator)>-1) counter++;
						
				});
			});
			auswertung(counter);
		}



		XMLRequestTextWI='50.138946 ,8.16475,50.036463,8.369174';
		XMLRequestTextDD='50.890906622229174,13.26873779296875,51.21462617111765,14.19708251953125'
		XMLRequestText = '( node ["vending"="public_transport_tickets"] (' + XMLRequestTextWI + '); >; ); out;';
					
		//URL Codieren
		XMLRequestText = encodeURIComponent(XMLRequestText);
		
		RequestURL = "http://overpass-api.de/api/interpreter?data=" + XMLRequestText;
		//AJAX REQUEST
		
		
		$.ajax({
		url: RequestURL,
		type: 'GET',
		crossDomain: true,
		success: function(data){parseOSM(data);}
		//beforeSend: setHeader
		});	
	</script>
</html>
