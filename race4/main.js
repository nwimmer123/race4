console.log("Sanity Check: JS is working!");

$(document).ready(function(){
 
 var words = [
    "anuran",
    "unconsummative",
    "commy",
    "backwardation",
    "ungoverning",
    "gieseking",
    "paesiello",
    "chewer",
    "seasnail",
    "skipway",
    "noneloquent",
    "ami",
    "cicada",
    "oehlenschlger",
    "canty",
    "cetological",
    "compendious",
    "polarizing",
    "remoteness",
    "ureterolithotomy",
    "summae",
    "interrobang",
    "underchief",
    "petrifaction",
    "reinterpretation",
    "unsyllabified",
    "nonroutine",
    "aviatrices",
    "raving",
    "cyclecar",
    "group",
    "subintestinal",
    "blowup",
    "unscourged",
    "removal",
    "embodier",
    "proagreement",
    "creek",
    "taxpaid",
    "traverse",
    "supernormal",
    "pervertible",
    "injun",
    "nondistortive",
    "joaqun",
    "speyer",
    "cossack",
    "misdefined",
    "ungilded",
    "convoluting",
    "citral",
    "undraping",
    "algophobia",
    "accumulative",
    "logion",
    "groete",
    "warmthlessness",
    "overfrighten",
    "girasole",
    "pharynx",
    "piano",
    "heeder",
    "invading",
    "brescia",
    "holden",
    "eucken",
    "kaliph",
    "reveille",
    "eglantine",
    "lugo",
    "thiosulfuric",
    "teletypewriter",
    "faena",
    "condignity",
    "pilch",
    "unabetting",
    "probatively",
    "hreidmar",
    "supervictory",
    "extemporizing",
    "oberland",
    "overnationalizing",
    "sanious",
    "kamasutra",
    "baal",
    "adios",
    "niger",
    "amorphously",
    "conditivium",
    "geomagnetism",
    "delaroche",
    "unsatiated",
    "unpesterous",
    "invaginated",
    "alterably",
    "unshrivelled",
    "nephrite",
    "enthusing",
    "dehypnotised",
    "burelly",
    "fauna",
    "defy",
    "waves",
    "houston",
    "gowany",
    "moral",
    "equaliser",
    "apophthegmatic",
    "commutate",
    "schaerbeek",
    "unprobational",
    "discretionarily",
    "surfboarder",
    "ballplayer",
    "honorarium",
    "noninsistency",
    "ethanol",
    "mamaguy",
    "newton",
    "triumviri",
    "elsewhither",
    "mazopathia",
    "udaipur",
    "paynimhood",
    "gravure",
    "grattan",
    "semimagical",
    "evangeliaries",
    "farthing",
    "overorganize",
    "atomy",
    "gleaner",
    "unspasmodic",
    "overrepress",
    "shriving",
    "aristotelian",
    "ingenerate",
    "lumberjack",
    "unrushed",
    "tonguing",
    "leiomyomatous",
    "soapberry",
    "monosymmetric",
    "nonsmoking",
    "cornstalk",
    "gradating",
    "mnesicles",
    "shreadhead",
    "ysolde",
    "lazing",
    "adorable",
    "denuder",
    "hematothermal",
    "advertence",
    "luckless",
    "kten",
    "apprehensibly",
    "exert",
    "desilverizing",
    "crevassed",
    "entomostracan",
    "tweeter",
    "enslavement",
    "appreciational",
    "diazotized",
    "inexplainable",
    "signpost",
    "martello",
    "intermarine",
    "unsheathing",
    "ruinously",
    "reilluminate",
    "apeiron",
    "outpraising",
    "vaunt",
    "argo",
    "sort",
    "creeded",
    "monaural",
    "precombat",
    "uncreaturely",
    "summersault",
    "amboina",
    "depredating",
    "frieze",
    "agung",
    "palki",
    "ibrd",
    "influent",
    "solidomind",
    "pleasable",
    "clomb",
    "finniest",
    "roundline",
    "manward",
    "lade",
    "sharecrop",
    "domelike",
    "fid",
    "hustle",
    "mischoose",
    "hogmenay",
    "importation",
    "preflight",
    "moffette",
    "exit",
    "antievolutionistic",
    "wasteweir",
    "ala",
    "villously",
    "medon",
    "uncharitableness",
    "nonextrication",
    "gunfighting",
    "elegit",
    "etymologised",
    "gratulatory",
    "corporative",
    "carpel",
    "wispiest",
    "femerell",
    "preimpression",
    "reposeful",
    "dan",
    "rybinsk",
    "bengasi",
    "wakefield",
    "athetosic",
    "throng",
    "cenotaphic",
    "skeptic",
    "provisional",
    "antetype",
    "zoï¿¥ï¾¡plastic",
    "midrib",
    "drawbore",
    "knight",
    "anticommunistical",
    "kibbutzim",
    "yellowbelly",
    "depress",
    "hebetude",
    "nondiffuse",
    "nipp",
    "chevronwise",
    "nne",
    "catachrestic",
    "buffon",
    "spree",
    "signalman",
    "sapajou",
    "rebrush",
    "unactable",
    "nectarising",
    "paracelsic",
    "overassuming",
    "joab",
    "imputrescibility",
    "escurial",
    "nickpoint",
    "uncertifying",
    "firehouse",
    "partitionment",
    "keying",
    "flageolet",
    "exterminating",
    "salesclerk",
    "inclination",
    "grecale",
    "isoperimetric",
    "didymous",
    "leinster",
    "asserter",
    "lacteal",
    "interfile",
    "reynolds",
    "brierwood",
    "neoter",
    "penicillately",
    "noninterrupted",
    "dariole",
    "overshade",
    "katar",
    "bar",
    "handball",
    "pinole",
    "unossified",
    "solo",
    "wenona",
    "slimiest",
    "unintrlined",
    "yassy",
    "twosome",
    "factotum",
    "hegel",
    "ferry",
    "guardant",
    "griseldis",
    "disseminule",
    "omentum",
    ];

 //I grabbed this function of stackOverflow after researching for awhile.

     function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex ;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }
//populate array w different words for each game
    var gameWords = [];
    function generateWords() {
        shuffle(words);
        for(var i = 0; i < 50; i ++) {
            gameWords.push(words[i]);
         }
    }
     
    generateWords();
/*
function clearTextBox () {
    $(document).keydown(function(e) {
    if(e.keyCode == 13) {
        $("input").val("");
        }
    });
}
*/

    $(".toType").text(gameWords[0]);

    
    var targetWord = $(".toType").text();
    console.log(targetWord);
 
    $(document).keyup(function(e){
    var typedWord = $("input").val();
        for (var j = 1; j < gameWords.length; j++){
            console.log(typedWord);
            if(typedWord === targetWord){
                console.log("They match!")
                $(".player").css({left: "+=15px",});
                $(".toType").text(gameWords[j]);
                $("input").val("");
            } else {
                //$("input").val("");
                return;
            }
        }
    });

    // var targetWord = $(".toType").text();
    // var typedWord = $("#word").val();

    // $(document).keydown(function(e){
       
    //     if((e.keyCode == 13) && (typedWord === targetWord)){
    //         $(".player").css({left: "+=15px",});
            //$(".toType").text(gameWords[1]);
            //$("input").val("");
        
       // }
  
    //});

 /*
    var typedWord = $("input").val();
    var targetWord = $(".toType").text();

    $(document).keydown(function(e) {
        if((e.keyCode == 13) && (typedWord === targetWord)){
            $(".player").css({left: "+=15px",});
            $("input").val("");
        }
    });
*/
//working RESET button
	$("button").on("click", function() {
		$(".player").css({left: 0,});
		});

	

});



