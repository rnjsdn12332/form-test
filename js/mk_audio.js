let Audio_p=function(audio){
	this.audio1=new Audio(audio);


	this.play_sound=function(){

		console.log(this.audio1);
    	this.audio1.loop = false;
    	this.audio1.playbackRate=1.2;
    	this.audio1.play();

	};
	this.stop_sound=function(){

		console.log("audio paused");
    	this.audio1.pause();
    	this.audio1.currentTime = 0
	};
	
	}

let q1=new Audio_p("https://docs.google.com/uc?export=open&id=1bwNC6pgDd5nq-wbogloruKJcrMfpAUiz");
document.querySelector(".q1").addEventListener("mouseover",function(){q1.play_sound();});
document.querySelector(".q1").addEventListener("mouseout",function(){q1.stop_sound();});  


let q1_ex1=new Audio_p("https://docs.google.com/uc?export=open&id=1CkEYUMYrbNHkVM8c68WWEan8sSlIhGOY");
document.querySelector(".q1_ex1").addEventListener("mouseover",function(){q1_ex1.play_sound();});
document.querySelector(".q1_ex1").addEventListener("mouseout",function(){q1_ex1.stop_sound();});     

let q1_ex2=new Audio_p("https://docs.google.com/uc?export=open&id=1me0Mi7jE0LyB7gcpJTmkcxwy6sZR_zJg");
document.querySelector(".q1_ex2").addEventListener("mouseover",function(){q1_ex2.play_sound();});
document.querySelector(".q1_ex2").addEventListener("mouseout",function(){q1_ex2.stop_sound();});     

let q1_ex3=new Audio_p("https://docs.google.com/uc?export=open&id=1FMxiLhuQ2jwmyNstON9J5GomkL2lDi-p");
document.querySelector(".q1_ex3").addEventListener("mouseover",function(){q1_ex3.play_sound();});
document.querySelector(".q1_ex3").addEventListener("mouseout",function(){q1_ex3.stop_sound();});     

let am_bt1=new Audio_p("https://docs.google.com/uc?export=open&id=1POClMR3PQ3DEQUWM7YJYZ35tGgczcsZw");
document.querySelector(".before_bt").addEventListener("mouseover",function(){am_bt1.play_sound();});
document.querySelector(".before_bt").addEventListener("mouseout",function(){am_bt1.stop_sound();});

let am_bt2=new Audio_p("https://docs.google.com/uc?export=open&id=1VWIJEuMLEaMNp4ofWBVUGcAq8VDbEvuB");
document.querySelector(".next_bt").addEventListener("mouseover",function(){am_bt2.play_sound();});
document.querySelector(".next_bt").addEventListener("mouseout",function(){am_bt2.stop_sound();});


let q2=new Audio_p("https://docs.google.com/uc?export=open&id=1ERImLVa9Ya1MlrKd-6ewqe5Q09XrMkLb");
document.querySelector(".q2").addEventListener("mouseover",function(){q2.play_sound();});
document.querySelector(".q2").addEventListener("mouseout",function(){q2.stop_sound();});


let q2_ex1=new Audio_p("https://docs.google.com/uc?export=open&id=1RZoJAltRsrXT9JuvpiEUYrMxuqysoCLP");
document.querySelector(".q2_ex1").addEventListener("mouseover",function(){q2_ex1.play_sound();});
document.querySelector(".q2_ex1").addEventListener("mouseout",function(){q2_ex1.stop_sound();});


let q2_ex2=new Audio_p("https://docs.google.com/uc?export=open&id=1JshFyzFk0tlDgQIKAGnWavt7dbbi5k-w");
document.querySelector(".q2_ex2").addEventListener("mouseover",function(){q2_ex2.play_sound();});
document.querySelector(".q2_ex2").addEventListener("mouseout",function(){q2_ex2.stop_sound();});

let q2_ex3=new Audio_p("https://docs.google.com/uc?export=open&id=1zXonhjJgAIUQpZtOI9mW-47ATOsu58M4");
document.querySelector(".q2_ex3").addEventListener("mouseover",function(){q2_ex3.play_sound();});
document.querySelector(".q2_ex3").addEventListener("mouseout",function(){q2_ex3.stop_sound();});

let q2_ex4=new Audio_p("https://docs.google.com/uc?export=open&id=1OOWaj_bPcDtyjKFIH7WYC1sShmmAM5jY");
document.querySelector(".q2_ex4").addEventListener("mouseover",function(){q2_ex4.play_sound();});
document.querySelector(".q2_ex4").addEventListener("mouseout",function(){q2_ex4.stop_sound();});

let q2_ex5=new Audio_p("https://docs.google.com/uc?export=open&id=1sQ-By1YsB_qkWI55otKnQjN8rriAxNgl");
document.querySelector(".q2_ex5").addEventListener("mouseover",function(){q2_ex5.play_sound();});
document.querySelector(".q2_ex5").addEventListener("mouseout",function(){q2_ex5.stop_sound();});

let q2_ex6=new Audio_p("https://docs.google.com/uc?export=open&id=1olAyXZvfWcCR_CX7Ckhd5ykYRx90T79A");
document.querySelector(".q2_ex6").addEventListener("mouseover",function(){q2_ex6.play_sound();});
document.querySelector(".q2_ex6").addEventListener("mouseout",function(){q2_ex6.stop_sound();});

let q2_ex7=new Audio_p("https://docs.google.com/uc?export=open&id=1gXsPB4iTTVvP5XA-38owAIZdAj3B4A0V");
document.querySelector(".q2_ex7").addEventListener("mouseover",function(){q2_ex7.play_sound();});
document.querySelector(".q2_ex7").addEventListener("mouseout",function(){q2_ex7.stop_sound();});





//https://drive.google.com/file/d/1OOWaj_bPcDtyjKFIH7WYC1sShmmAM5jY/view?usp=sharing
