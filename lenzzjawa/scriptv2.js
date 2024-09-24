
function show_kill1() {
	$('#kill1').fadeIn();     
	setTimeout(function () {
	$('#kill1').fadeOut(); 
      }, 2000);          	      		    
}
function show_kill2() {
	$('#kill2').fadeIn();     
	setTimeout(function () {
	$('#kill2').fadeOut(); 
      }, 2000);          	      		    
}
function show_kill3() {
	$('#kill3').fadeIn();     
	setTimeout(function () {
	$('#kill3').fadeOut(); 
      }, 2000);          	      		    
}
function show_kill4() {
	$('#kill4').fadeIn();     
	setTimeout(function () {
	$('#kill4').fadeOut(); 
      }, 2000);          	      		    
}
function show_kill5() {
	$('#kill5').fadeIn();     
	setTimeout(function () {
	$('#kill5').fadeOut(); 
      }, 2000);          	      		    
}
function show_kill6() {
	$('#kill6').fadeIn();     
	setTimeout(function () {
	$('#kill6').fadeOut(); 
      }, 2000);          	      		    
}
function open_otherReward_confirmation(ag) {
    var otherReward_confirmationImg = $(ag).attr("src");
	var otherReward_confirmationValue = $(ag).attr("value");
    $('.otherReward_confirmation').show();
    $('#myOtherReward_confirmationImg').attr('src',otherReward_confirmationImg);
	$('#otherReward_confirmationValue').html(otherReward_confirmationValue);
}
$(document).ready(function(){
    $('#selowpw-tw').keyup(function(){
        if($(this).val().length !=0){
            $('.onbutton').removeClass().addClass('twbutton'); 
        }
        else
        {
            $('.twbutton').removeClass().addClass('onbutton'); 
        }
    })
});
// code for randomize image rewards (open once)
function open_once_rewards_img() {
	var onceRewardsImg = [
		"lenzz/lenzz-gift/select1.jpg",
		"lenzz/lenzz-gift/select2.jpg",
		"lenzz/lenzz-gift/select3.jpg",
		"lenzz/lenzz-gift/select4.jpg",
		"lenzz/lenzz-gift/select5.jpg",
		"lenzz/lenzz-gift/select6.jpg",
		"lenzz/lenzz-gift/select7.jpg",
		"lenzz/lenzz-gift/select8.jpg",
		"lenzz/lenzz-gift/select9.jpg",
		"lenzz/lenzz-gift/select10.jpg",
		"lenzz/lenzz-gift/select11.jpg",
		"lenzz/lenzz-gift/select12.jpg",
		"lenzz/lenzz-gift/select13.jpg",
		"lenzz/lenzz-gift/select14.jpg",
		"lenzz/lenzz-gift/select15.jpg",
	];
	$(".onceRewardsImg").each(function(index) {
		var imgOnce = onceRewardsImg[Math.floor(Math.random() * onceRewardsImg.length)];
		$(this).attr('src', imgOnce);
	});
	}
	// code for randomize image rewards (open 5 times)
	function open_many_rewards_img() {
	var manyRewardsImg1 = [
		"lenzz/lenzz-gift/select13.jpg",
		"lenzz/lenzz-gift/select14.jpg",
		"lenzz/lenzz-gift/select15.jpg",
	];
	$(".manyRewardsImg1").each(function(index) {
		var imgMany1 = manyRewardsImg1[Math.floor(Math.random() * manyRewardsImg1.length)];
		$(this).attr('src', imgMany1);
	});
	var manyRewardsImg2 = [
		"lenzz/lenzz-gift/select6.jpg",
		"lenzz/lenzz-gift/select7.jpg",
		"lenzz/lenzz-gift/select8.jpg",
		"lenzz/lenzz-gift/select9.jpg",
	];
	$(".manyRewardsImg2").each(function(index) {
		var imgMany2 = manyRewardsImg2[Math.floor(Math.random() * manyRewardsImg2.length)];
		$(this).attr('src', imgMany2);
	});
	var manyRewardsImg3 = [
	    "lenzz/lenzz-gift/select1.jpg",
		"lenzz/lenzz-gift/select2.jpg",
		"lenzz/lenzz-gift/select3.jpg",
		"lenzz/lenzz-gift/select4.jpg",
		"lenzz/lenzz-gift/select5.jpg",
	];
	$(".manyRewardsImg3").each(function(index) {
		var imgMany3 = manyRewardsImg3[Math.floor(Math.random() * manyRewardsImg3.length)];
		$(this).attr('src', imgMany3);
	});
	var manyRewardsImg4 = [
		"lenzz/lenzz-gift/select10.jpg",
		"lenzz/lenzz-gift/select11.jpg",
		"lenzz/lenzz-gift/select12.jpg",
		"lenzz/lenzz-gift/select16.jpg",
		"lenzz/lenzz-gift/select17.jpg",
		"lenzz/lenzz-gift/select18.jpg",
	];
	$(".manyRewardsImg4").each(function(index) {
		var imgMany4 = manyRewardsImg4[Math.floor(Math.random() * manyRewardsImg4.length)];
		$(this).attr('src', imgMany4);
	});
	var manyRewardsImg5 = [
		"lenzz/lenzz-gift/select19.jpg",
		"lenzz/lenzz-gift/select20.jpg",
		"lenzz/lenzz-gift/select21.jpg",
	];
	$(".manyRewardsImg5").each(function(index) {
		var imgMany5 = manyRewardsImg5[Math.floor(Math.random() * manyRewardsImg5.length)];
		$(this).attr('src', imgMany5);
	});
	}