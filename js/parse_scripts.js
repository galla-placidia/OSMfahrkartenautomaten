function isNumeric(n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
}

function yesno (value){
	var result;
	var lowerValue = value.toLowerCase();
	switch (lowerValue) {
		case "yes":
			result = "ja";
			break;
		case "no":
			result = "nein";
			break;
		case "limited":
			result = "eingeschränkt";
			break;
		default:
			result = value;
	}
	return result;
}

function stockwerk(value){
	var result;
	if (isNumeric(value)){
		if (value == "0")
			result = "Erdgeschoss";
		if (parseFloat(value)>0)
			result = value + ". Obergeschoss";
		if (parseFloat(value)<0)
			result = parseFloat(value)*-1 + ". Untergeschoss";
		}
	else {
		result = value;
	}
	return result;
}

function preparseOperatorName(operator){
	var result = operator;
	var operator=operator.toLowerCase();
	var operator=operator.trim();

	//Operators lowercase
	var DeutscheBahn = ['deutsche bahn', 'deutsche bahn ag', 'db', 'db ag', 'db bahn', 'dbag', 'db regio ag', 'db regio', 'db station&service', 'db station & service', 'db station&service ag', 'deutsche bahn (db)', 'db vertrieb', 'db vertrieb gmbh'];
	var DVB_to_fix = ['dvb ag', 'dvb', 'dresdner verkehrsbetriebe ag'];
	var DVB_right = ['dresdner verkehrsbetriebe'];
	var RNV = ['rnv', 'rhein-neckar-verkehr gmbh', 'rhein-neckar-verkehr'];
	var RSAG = ['rsag', 'rostocker straßenbahn ag', 'rostocker straßenbahn'];
	var magdeburg = ['magdeburger verkehrsbetriebe gmbh & co. kg', 'magdeburger verkehrsbetriebe gmbh', 'magdeburger verkehrsbetriebe'];
	var CVAG = ['cvag', 'chemnitzer verkehrs-ag'];
	var KVV = ['kvv', 'karlsruher verkehrsverbund'];
	var AVG = ['avg', 'albtal-verkehrs-gesellschaft mbh'];
	var VBK = ['vbk', 'verkehrsbetriebe karlsruhe gmbh'];
	var FLIX = ['flix', 'flixmobility gmbh', 'flixbus'];
	var SSB = ['ssb', 'ssb ag', 'stuttgarter straßenbahnen', 'stuttgarter straßenbahnen ag', 'stuttgarter straßenbahnen (ssb)'];
	var EVAG = ['evag', 'essener verkehrs-ag'];
	var BOGESTRA = ['bogestra', 'bochum-gelsenkirchener straßenbahnen ag'];
	var cottbusverkehr = ['cottbusverkehr gmbh'];
	var goerlitz = ['verkehrsgesellschaft görlitz', 'verkehrsgesellschaft görlitz gmbh'];
	var hamburghochbahn = ['hamburger hochbahn ag', 'hamburger hochbahn'];
	var vlexx = ['vlexx', 'vlexx gmbh'];
	var SWU = ['swu', 'swu verkehr'];
	var Saarbahn = ['saarbahn', 'saarbahn gmbh'];
	var BVG = ['bvg', 'berliner verkehrsbetriebe'];
	var sbahnberlin = ['s-bahn berlin', 's-bahn berlin gmbh'];
	var uestra = ['üstra', 'uestra'];
	var gvh = ['gvh', 'großraumverkehr hannover'];

	if (DeutscheBahn.indexOf(operator)>-1) result = 'deutsche bahn';
	if (DVB_to_fix.indexOf(operator)>-1) result = 'DVB_to_fix';
	if (DVB_right.indexOf(operator)>-1) result = 'DVB_right';
	if (RNV.indexOf(operator)>-1) result = 'rnv';
	if (RSAG.indexOf(operator)>-1) result = 'rsag';
	if (magdeburg.indexOf(operator)>-1) result = 'magdeburg';
	if (CVAG.indexOf(operator)>-1) result = 'CVAG';
	if (KVV.indexOf(operator)>-1) result = 'KVV';
	if (VBK.indexOf(operator)>-1) result = 'VBK';
	if (AVG.indexOf(operator)>-1) result = 'AVG';
	if (FLIX.indexOf(operator)>-1) result = 'FLIX';
	if (SSB.indexOf(operator)>-1) result = 'SSB';
	if (EVAG.indexOf(operator)>-1) result = 'EVAG';
	if (BOGESTRA.indexOf(operator)>-1) result = 'BOGESTRA';
	if (cottbusverkehr.indexOf(operator)>-1) result = 'cottbusverkehr';
	if (goerlitz.indexOf(operator)>-1) result = 'goerlitz';
	if (hamburghochbahn.indexOf(operator)>-1) result = 'hamburghochbahn';
	if (vlexx.indexOf(operator)>-1) result = 'vlexx';
	if (SWU.indexOf(operator)>-1) result = 'SWU';
	if (Saarbahn.indexOf(operator)>-1) result = 'Saarbahn';
	if (BVG.indexOf(operator)>-1) result = 'BVG';
	if (sbahnberlin.indexOf(operator)>-1) result = 'sbahnberlin';
	if (uestra.indexOf(operator)>-1) result = 'Üstra';
	if (gvh.indexOf(operator)>-1) result = 'GVH';

	return result;
}

function getMarkerIcon(parsedOperator){
	var result = StdUnknown;
	if (parsedOperator == "<i><b>unbekannt</i></b>") result = StdIcon;
	if (parsedOperator == "deutsche bahn") result = DBicon;
	if (parsedOperator == "DVB_to_fix") result = DVBfixicon;
	if (parsedOperator == "DVB_right") result = DVBicon;
	if (parsedOperator == "rnv") result = RNVicon;
	if (parsedOperator == "rsag") result = RSAGicon;
	if (parsedOperator == "magdeburg") result = magdeburgicon;
	if (parsedOperator == "CVAG") result = CVAGicon;
	if (parsedOperator == "KVV") result = KVVicon;
	if (parsedOperator == "AVG") result = AVGicon;
	if (parsedOperator == "VBK") result = VBKicon;
	if (parsedOperator == "FLIX") result = FLIXicon;
	if (parsedOperator == "SSB") result = SSBicon;
	if (parsedOperator == "EVAG") result = EVAGicon;
	if (parsedOperator == "BOGESTRA") result = BOGESTRAicon;
	if (parsedOperator == "cottbusverkehr") result = cottbusverkehricon;
	if (parsedOperator == "goerlitz") result = goerlitzicon;
	if (parsedOperator == "hamburghochbahn") result = hamburghochbahnicon;
	if (parsedOperator == "vlexx") result = vlexxicon;
	if (parsedOperator == "SWU") result = SWUicon;
	if (parsedOperator == "Saarbahn") result = SaarbahnIcon;
	if (parsedOperator == "BVG") result = BVGIcon;
	if (parsedOperator == "sbahnberlin") result = S_Bahn_BerlinIcon;
	if (parsedOperator == "Üstra") result = uestraicon;
	if (parsedOperator == "GVH") result = GVHicon;

	return result;
}








