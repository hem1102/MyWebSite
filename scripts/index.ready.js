$(document).ready(function()
{
	$('.frame').fadeOut(0);
	now = Math.round($(this).scrollTop()/900);
	$(frame[now]).fadeIn(1000);
	
	$(window).scroll(function()
	{
		now = Math.round($(this).scrollTop()/900);
		$(frame[now]).fadeIn(1000);
		for (var i in frame) if(frame[Math.round($(this).scrollTop()/900)]!=frame[i]) $(frame[i]).fadeOut(500);	
	});
	
	$('#nav').localScroll(200);
	$('#page1').parallax("50%", 0.1);
	$('#page2').parallax("50%", 0.1);
	$('#page3').parallax("50%", 0.1);
	$('#page4' ).parallax("50%", 0.1);
	
	var board_col_now = "rgb(0, 0, 0)";
	$('.colbtn').click(function()
	{ 
		if(this.style.backgroundColor!=board_col_now)
		{
			board_col_now=this.style.backgroundColor;
			$(frame[now]).fadeOut(300 ,function(){$('.board').css('background-color', board_col_now); });
			$(frame[now]).fadeIn (300 );
		}
	});
	
	$("#"+lan_now).css('color', 'black').css('background-color','white');
	$('.lanbtn').mouseover(function(){ if(this.id!=lan_now)$("#"+this.id).css('background-color','gray');  });
	$('.lanbtn').mouseout(function() { if(this.id!=lan_now)$("#"+this.id).css('background-color','transparent');   });
	$('.lanbtn').click(function() 
	{ 	
		if(this.id!=lan_now)
		{
			$("#"+lan_now).css('color', 'white').css('background-color','transparent');
			$(".btn").fadeOut(300, function() { 	chg_lan(lan_now); });
			$(".btn").fadeIn(300);
			lan_now = this.id;
			$("#"+lan_now).css('color', 'black').css('background-color','white');   
		}
	});
	chg_lan(lan_now);
	
	$("#"+art_now).css('color', 'black').css('background-color','white');
	$('.artbtn').mouseover(function(){ if(this.id!=art_now)$("#"+this.id).css('background-color','gray');  });
	$('.artbtn').mouseout(function() { if(this.id!=art_now)$("#"+this.id).css('background-color','transparent');   });
	$('.artbtn').click(function()    
	{ 
		if(this.id!=art_now)
		{
			$("#"+art_now).css('color', 'white').css('background-color','transparent');
			art_now = this.id;
			$("#"+art_now).css('color', 'black').css('background-color','white'); 
			
			$("#art_board").fadeOut(350);
			$("#art_c").fadeOut(350, function () {  chg_art(art_now) });
			$("#art_board").fadeIn(350);
			$("#art_c").fadeIn(350);	
		}
	});
	chg_art(art_now);
});

var frame = ["#first_frame","#second_frame","#third_frame","#fifth_frame"];
var art_now = "artbtn_0";
function chg_art(id)
{
	var c;
	switch (id)
	{
		case "artbtn_0": c=30; break;
		case "artbtn_1": c=31; break;
		case "artbtn_2": c=32; break;
		case "artbtn_3": c=33; break;
		default:         c=30;
	}
	document.getElementById('art_c').innerHTML = myLangArray[c];
}

var lan_now = "lanbtn_0",myLangArray;
function chg_lan(a)
{
	switch(a) 
	{ 	   
		case "lanbtn_0": myLangArray = L_jp; break;
		case "lanbtn_1": myLangArray = L_tw; break; 
		case "lanbtn_2": myLangArray = L_en; break;
	    default :        myLangArray = L_jp; 
	} 

	document.getElementById('a1').innerHTML = myLangArray[1]; 
	document.getElementById('a2').innerHTML = myLangArray[2]; 
	document.getElementById('a3').innerHTML = myLangArray[3]; 
	document.getElementById('a4').innerHTML = myLangArray[4]; 
		
	document.getElementById('b1').innerHTML = myLangArray[11]; 
	document.getElementById('b2').innerHTML = myLangArray[12]; 
	document.getElementById('b3').innerHTML = myLangArray[13]; 
		
	document.getElementById('c1').innerHTML = myLangArray[19]; 
	document.getElementById('artbtn_0').value = myLangArray[20]; 
	document.getElementById('artbtn_1').value = myLangArray[21]; 
	document.getElementById('artbtn_2').value = myLangArray[22]; 
	document.getElementById('artbtn_3').value = myLangArray[23]; 
	
	chg_art(art_now);
		
	document.getElementById('d1').innerHTML = myLangArray[40]; 
}



