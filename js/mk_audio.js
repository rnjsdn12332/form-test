let Audio_p=function(audio){
	this.audio1=new Audio(audio);


	this.play_sound=function(){

		console.log(this.audio1);
    	this.audio1.loop = false;
    	this.audio1.play();

	};
	this.stop_sound=function(){

		console.log("audio paused");
    	this.audio1.pause();
    	this.audio1.currentTime = 0
	};
	
	}

let am_q1=new Audio_p("https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav");
document.querySelector(".q1").addEventListener("mouseover",function(){am_q1.play_sound();});
document.querySelector(".q1").addEventListener("mouseout",function(){am_q1.stop_sound();});  

let am_ex1=new Audio_p("https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav");
document.querySelector(".radio_ex1").addEventListener("mouseover",function(){am_ex1.play_sound();});
document.querySelector(".radio_ex1").addEventListener("mouseout",function(){am_ex1.stop_sound();});     

let am_ex2=new Audio_p("https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav");
document.querySelector(".radio_ex2").addEventListener("mouseover",function(){am_ex2.play_sound();});
document.querySelector(".radio_ex2").addEventListener("mouseout",function(){am_ex2.stop_sound();});     

let am_ex3=new Audio_p("https://www2.cs.uic.edu/~i101/SoundFiles/StarWars60.wav");
document.querySelector(".radio_ex3").addEventListener("mouseover",function(){am_ex3.play_sound();});
document.querySelector(".radio_ex3").addEventListener("mouseout",function(){am_ex3.stop_sound();});     

let am_bt1=new Audio_p("audio/이전페이지.wav");
document.querySelector(".before_bt").addEventListener("mouseover",function(){am_bt1.play_sound();});
document.querySelector(".before_bt").addEventListener("mouseout",function(){am_bt1.stop_sound();});

let q2_ex2=new Audio_p("audio/담임교사.wav");
document.querySelector(".q2_ex2").addEventListener("mouseover",function(){q2_ex2.play_sound();});
document.querySelector(".q2_ex2").addEventListener("mouseout",function(){q2_ex2.stop_sound();});

let q2_ex5=new Audio_p("audio/친구또는선후배.wav");
document.querySelector(".q2_ex5").addEventListener("mouseover",function(){q2_ex5.play_sound();});
document.querySelector(".q2_ex5").addEventListener("mouseout",function(){q2_ex5.stop_sound();});
