function playSound(){
	if (sound.paused) {
		sound.play();
		document.getElementById("icon_play").className="fa fa-pause";
	} else {
		sound.pause();
		document.getElementById("icon_play").className="fa fa-play";
	}	
}
	
function playlist() {
	var test_playlist = document.getElementById("list").style.display;
			if (test_playlist== "block") 
			{
				document.getElementById("list").style.display = "none";
				document.getElementById("icon_playlist").className="fa fa-align-justify";
			}
			else 
			{
				document.getElementById("list").style.display = "block";
				document.getElementById("icon_playlist").className="fa fa-times";
			}
}

function update() {
	var duration = sound.duration;    // Durée totale
	var time     = sound.currentTime; // Temps écoulé
	var fraction = time / duration;
	var percent  = fraction * 100;

	var progress = document.querySelector('#timeline');
		
	progress.style.background = '-webkit-linear-gradient(left,rgba(255, 255, 255, 0.2) 0%, rgba(255, 255, 255, 0.2) ' + percent + '%, rgb(31,37,40) ' + percent + '%, rgb(31,37,40) 100%)';
	document.querySelector('#time').textContent = formatTime(sound.currentTime) + "/" + formatTime(sound.duration);	
}

function formatTime(seconds) {
    minutes = Math.floor(seconds / 60);
    minutes = (minutes >= 10) ? minutes : "0" + minutes;
    seconds = Math.floor(seconds % 60);
    seconds = (seconds >= 10) ? seconds : "0" + seconds;
    return minutes + ":" + seconds;
}

function getMousePosition(event) {
    return {
        x: event.pageX,
        y: event.pageY
    };
}

function getPosition(element){
    var top = 0, left = 0;
    
    do {
        top  += element.offsetTop;
        left += element.offsetLeft;
    } while (element = element.offsetParent);
    
    return { x: left, y: top };
}

function clickProgress(idPlayer, control, event) {
    var parent = getPosition(control);    // La position absolue de la progressBar
    var target = getMousePosition(event); // L'endroit de la progressBar où on a cliqué
  
    var x = target.x - parent.x; 
    var wrapperWidth = document.querySelector('#timeline').offsetWidth;
    
    var percent = Math.ceil((x / wrapperWidth) * 100);    
    var duration = sound.duration;
    
    sound.currentTime = (duration * percent) / 100;
}

function hide() {
	if (document.getElementById("icon_hide").className=="fa fa-caret-left") {
		document.getElementById("prev").style.display = "none";
		document.getElementById("control").style.width = "50px";
		document.getElementById("play").style.width = "50px";
		document.getElementById("play").style.backgroundColor = "black";
		document.getElementById("play").style.opacity = "0.7";
		document.getElementById("next").style.display = "none";
		document.getElementById("timeline").style.display = "none";
		document.getElementById("control_plus").style.display = "none";
		document.getElementById("player").style.width = "auto";
		document.getElementById("icon_hide").className="fa fa-caret-right";
		document.getElementById("player_album").style.width = "50px";
		document.getElementById("player_album").style.zIndex = "-1";
		document.getElementById("control").style.position = "absolute";
		document.getElementById("list").style.display = "none";
	}else{
		document.getElementById("control").style.display = "flex";
		document.getElementById("control").style.position = "static";
		document.getElementById("timeline").style.display = "flex";
		document.getElementById("control_plus").style.display = "flex";
		document.getElementById("player_album").style.display = "flex";
		document.getElementById("player").style.width = "100%";
		document.getElementById("icon_hide").className="fa fa-caret-left";
		document.getElementById("prev").style.display = "inline";
		document.getElementById("next").style.display = "inline";
		document.getElementById("control").style.width = "180px";
		document.getElementById("player_album").style.zIndex = "0";
		document.getElementById("play").style.background = "transparent";
		if (document.getElementById("icon_playlist").className=="fa fa-times") {
			document.getElementById("list").style.display = "block";	
		} else {
			document.getElementById("list").style.display = "none";
		}
	}
}

var morning=[
	{
		nom:"Keeper of the Winds",
		duree: "2:30",
		mp3: "song/Sara Lugo & Protoje - Really Like You.mp3"
	},
	{
		nom:"Morning Star",
		duree: "2:39",
		mp3:"song/Fils de France.mp3"
	},
	{
		nom:"Ovid's Account",
		duree:"",
		mp3:"song/Vladimir Cosma & Gheorghe Zamfir - Le grand blond avec une chaussure noire (Suite) [1972].mp3",
	},	
	{
		nom:"Seven Days in Winter",
		duree:"",
		mp3:"",
	},
	{
		nom:"She Threw Herself Into the Sea",
		duree:"",
		mp3:"",
	},
	{
		nom:"Shortest Day of the Year",
		duree:"",
		mp3:"",
	},
	{
		nom:"Six Sons and Six Daugth",
		duree:"",
		mp3:"",
	},
	{
		nom:"Zeus and Hera",
		duree:"",
		mp3:"",
	}
]

var gravitational=[
	{
		nom:"Keeper of the Winds",
		duree: "2:30",
		mp3: "Sara Lugo & Protoje - Really Like You.mp3"
	},
	{
		nom:"Morning Star",
		duree: "2:39",
		mp3:"Skrillex & Damian Jr. Gong Marley - Make It Bun Dem [OFFICIAL VIDEO].mp3"
	},
	{
		nom:"Ovid's Account",
		duree:"",
		mp3:"",
	},	
	{
		nom:"Seven Days in Winter",
		duree:"",
		mp3:"",
	},
	{
		nom:"She Threw Herself Into the Sea",
		duree:"",
		mp3:"",
	},
	{
		nom:"Shortest Day of the Year",
		duree:"",
		mp3:"",
	},
	{
		nom:"Six Sons and Six Daugth",
		duree:"",
		mp3:"",
	},
	{
		nom:"Zeus and Hera",
		duree:"",
		mp3:"",
	}
]

var vivienne=[
	{
		nom:"Keeper of the Winds",
		duree: "2:30",
		mp3: "Sara Lugo & Protoje - Really Like You.mp3"
	},
	{
		nom:"Morning Star",
		duree: "2:39",
		mp3:"Skrillex & Damian Jr. Gong Marley - Make It Bun Dem [OFFICIAL VIDEO].mp3"
	},
	{
		nom:"Ovid's Account",
		duree:"",
		mp3:"",
	},	
	{
		nom:"Seven Days in Winter",
		duree:"",
		mp3:"",
	},
	{
		nom:"She Threw Herself Into the Sea",
		duree:"",
		mp3:"",
	},
	{
		nom:"Shortest Day of the Year",
		duree:"",
		mp3:"",
	},
	{
		nom:"Six Sons and Six Daugth",
		duree:"",
		mp3:"",
	},
	{
		nom:"Zeus and Hera",
		duree:"",
		mp3:"",
	}
]

var mix=[
	{
		auteur: "Aeolus",
		titre: "Really Like You",
		mp3:"song/Sara Lugo & Protoje - Really Like You.mp3"
	},
	{
		auteur: "Aeolus",
		titre: "Fils de France",
		mp3:"song/Fils de France.mp3"
	},
	{
		auteur: "Aeolus",
		titre: "Le grand blond avec une chaussure noire",
		mp3:"song/Vladimir Cosma & Gheorghe Zamfir - Le grand blond avec une chaussure noire (Suite) [1972].mp3"
	},
	{
		auteur: "Aeolus",
		titre: "rien",
		mp3:"rien",
	},
	{
		auteur: "Aeolus",
		titre: "rien",
		mp3:"rien",
	},
	{
		auteur: "Aeolus",
		titre: "riennn",
		mp3:"rien",
	}
]

var sound = new Audio(mix[0].mp3);
var id = 0;

function reinit(){
			sound.pause();
			sound.currentTime = 0;

		}

function next(c){
	if (id+1 <= mix.length-1) {
	reinit();
	sound = new Audio(mix[id+1].mp3);
	document.querySelector('#title').textContent = mix[id+1].titre;
	id++;
	playSound();
		sound.ontimeupdate = function() {update();}
	}
}
	
function playMix(c){
	reinit();
	sound = new Audio(mix[c].mp3);
	document.querySelector('#title').textContent = mix[c].titre;
	id= c;
	playSound();
	sound.ontimeupdate = function() {update();}
}

function prev(c){
	if (id-1 >= 0) {
		reinit();
		sound = new Audio(mix[id-1].mp3);
		document.querySelector('#title').textContent = mix[id-1].titre;
		id--;
		playSound();
		sound.ontimeupdate = function() {update();}
	}
}

slider.onchange = function() {
    sound.volume = this.value/100;
};

sound.ontimeupdate = function() {
  update();
}