$(function(e) {

	//WOW init
	new WOW().init();

	//--------------------------------------------------------WOW-Aniamte----------------------------------------------------------------------//

	$(window).scroll(function(event) {
		/* Act on the event */
		var i = $('body, html').scrollTop()

		if ( i >= 10 ) {
			$('.navbar').addClass('lock')
		} else {
			$('.navbar').removeClass('lock')
		}
	});

	// ------------------------------------------------------Scroll-nav---------------------------------------------------------------------------//


	$(window).scroll(function(event) {
		/* Act on the event */
		var l = $('body, html').scrollTop()

		if ( l >= 200 ) {
			$('.scrolltop').addClass('locked')
		} else {
			$('.scrolltop').removeClass('locked')
		}
	});


	$('.scrolltop').on('click', function(event) {
		event.preventDefault();
	    
	    $('body, html').animate({scrollTop:0}, 1000)

	});


	// ------------------------------------------------------SrollTop-Btn---------------------------------------------------------------------------//



	
	$('.question-page12 .awnser-question12').slideUp()

	$('.question-page12 .title-question12').click(function(event) {
		
		var temp = $(this).attr('v')

		$('.question-page12').each(function(i){
			$('.question-page12 .awnser-question12').slideUp()
			if( temp == i) {
				return 
			}
		})

		$(this).next('.question-page12 .awnser-question12').slideDown()

	});


	// -------------------------------------------------------Question-pag12-----------------------------------------------------------------------//

	function getTimeRemaining(endtime) {
	  var t = Date.parse(endtime) - Date.parse(new Date());
	  var seconds = Math.floor((t / 1000) % 60);
	  var minutes = Math.floor((t / 1000 / 60) % 60);
	  var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
	  var days = Math.floor(t / (1000 * 60 * 60 * 24));
	  return {
	    'total': t,
	    'days': days,
	    'hours': hours,
	    'minutes': minutes,
	    'seconds': seconds
	  };
	}

	function initializeClock(id, endtime) {
	  var clock = document.getElementById(id);
	  var daysSpan = clock.querySelector('.days');
	  var hoursSpan = clock.querySelector('.hours');
	  var minutesSpan = clock.querySelector('.minutes');
	  var secondsSpan = clock.querySelector('.seconds');

	  function updateClock() {
	    var t = getTimeRemaining(endtime);

	    daysSpan.innerHTML = t.days;
	    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
	    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
	    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

	    if (t.total <= 0) {
	      clearInterval(timeinterval);
	    }
	  }

	  updateClock();
	  var timeinterval = setInterval(updateClock, 1000);
	}

	var deadline = new Date(Date.parse(new Date()) + 1368 * 24 * 60 * 60 * 1000);
	initializeClock('clock', deadline);


	// ----------------------------------------------------------Clock-----------------------------------------------------------------------//

	$('.content-input input').click(function(event) {
		$('.content-input label').addClass('goup')
		event.stopPropagation();
	});

	
	//NameText

	$('.name-text').click(function(event) {
		$('.name-text').addClass('phongto')
		$('.lb-name').addClass('goup')
		event.stopPropagation();
	});


	//EmailText

	$('.email-text').click(function(event) {
		$('.email-text').addClass('phongto')
		$('.lb-email').addClass('goup')
		event.stopPropagation();
	});


	//SubjectText

	$('.subject-text').click(function(event) {
		$('.subject-text').addClass('phongto')
		$('.lb-subject').addClass('goup')
		event.stopPropagation();
	});

	//Textarea

	$('textarea').click(function(event) {
		$('textarea').addClass('phongto')
		$('.lb-message').addClass('goup')
		event.stopPropagation();

	});



	$('html').click(function(event) {
		$('.content-input label').removeClass('goup')
		$('.name-text').removeClass('phongto')
		$('.lb-name').removeClass('goup')
		$('.email-text').removeClass('phongto')
		$('.lb-email').removeClass('goup')
		$('.subject-text').removeClass('phongto')
		$('.lb-subject').removeClass('goup')
		$('textarea').removeClass('phongto')
		$('.lb-message').removeClass('goup')
	});

	// ----------------------------------------------------------Text--------------------------------------------------------------------------------


	$('.files').hover(function() {
		$(this).append($('<i class="fas fa-download showic"></i>'))
	}, function() {
		$(this).find($('i')).last().remove()
	});

});
