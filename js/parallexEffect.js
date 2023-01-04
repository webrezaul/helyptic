/*  PARRALEX EFFECT - Home */
var h = $(window).height();
console.log(h);
if ($(window).height() > 1300) {
	var lastScrollTop = 0;
	$(window).scroll(function(event) {
		var y = $(this).scrollTop();
		if (y > lastScrollTop) {
			if (y > 1300 && y <= 1950) {
				$('#serviceOne').fadeIn(50);
			} else if (y > 1950 && y <= 3330) {
				$('#serviceOne').fadeOut(50);
				$('#serviceTwo').fadeIn(50);
			} else if (y > 3330 && y <= 4690) {
				$('#serviceTwo').fadeOut(50);
				$('#serviceThree').fadeIn(50);
			} else if (y > 4690 && y <= 6056) {
				$('#serviceThree').fadeOut(50);
				$('#serviceFour').fadeIn(50);
			} else if (y > 6056 && y <= 7322) {
				$('#serviceFour').fadeOut(50);
				$('#serviceFive').fadeIn(50);
			} else if (y > 7322 || y < 1300) {
				$('#serviceFive').fadeOut(50);
			}
			console.log(lastScrollTop);
		} else {
			if (y > 1300 && y < 1950) {
				$('#serviceOne').fadeIn(50);
				$('#serviceTwo').fadeOut(50);
				$('#serviceThree').fadeOut(50);
				$('#serviceFour').fadeOut(50);
				$('#serviceFive').fadeOut(50);
			} else if (y > 1950 && y < 3330) {
				$('#serviceOne').fadeOut(50);
				$('#serviceTwo').fadeIn(50);
				$('#serviceThree').fadeOut(50);
				$('#serviceFour').fadeOut(50);
				$('#serviceFive').fadeOut(50);
			} else if (y > 3330 && y <= 4690) {
				$('#serviceOne').fadeOut(50);
				$('#serviceTwo').fadeOut(50);
				$('#serviceThree').fadeIn(50);
				$('#serviceFour').fadeOut(50);
				$('#serviceFive').fadeOut(50);
			} else if (y > 4690 && y <= 6056) {
				$('#serviceOne').fadeOut(50);
				$('#serviceTwo').fadeOut(50);
				$('#serviceThree').fadeOut(50);
				$('#serviceFour').fadeIn(50);
				$('#serviceFive').fadeOut(50);
			} else if (y > 6056 && y <= 7322) {
				$('#serviceOne').fadeOut(50);
				$('#serviceTwo').fadeOut(50);
				$('#serviceThree').fadeOut(50);
				$('#serviceFour').fadeOut(50);
				$('#serviceFive').fadeIn(50);
			} else if (y > 7322 || y < 1300) {
				$('#serviceOne').fadeOut(50);
				$('#serviceTwo').fadeOut(50);
				$('#serviceThree').fadeOut(50);
				$('#serviceFour').fadeOut(50);
				$('#serviceFive').fadeOut(50);
			}
		}
		lastScrollTop = y;
	});
} else if ($(window).height() > 1050 && $(window).height() < 1300) {
	var lastScrollTop = 0;
	$(window).scroll(function(event) {
		var y = $(this).scrollTop();
		if (y > lastScrollTop) {
			if (y > 1300 && y <= 2100) {
				$('#serviceOne').fadeIn(50);
			} else if (y > 2100 && y <= 3200) {
				$('#serviceOne').fadeOut(50);
				$('#serviceTwo').fadeIn(50);
			} else if (y > 3200 && y <= 4290) {
				$('#serviceTwo').fadeOut(50);
				$('#serviceThree').fadeIn(50);
			} else if (y > 4290 && y <= 5380) {
				$('#serviceThree').fadeOut(50);
				$('#serviceFour').fadeIn(50);
			} else if (y > 5380 && y <= 6300) {
				$('#serviceFour').fadeOut(50);
				$('#serviceFive').fadeIn(50);
			} else if (y > 6300 || y < 1300) {
				$('#serviceFive').fadeOut(50);
			}
			console.log(lastScrollTop);
		} else {
			if (y > 1300 && y < 2100) {
				$('#serviceOne').fadeIn(50);
				$('#serviceTwo').fadeOut(50);
				$('#serviceThree').fadeOut(50);
				$('#serviceFour').fadeOut(50);
				$('#serviceFive').fadeOut(50);
			} else if (y > 2100 && y < 3200) {
				$('#serviceOne').fadeOut(50);
				$('#serviceTwo').fadeIn(50);
				$('#serviceThree').fadeOut(50);
				$('#serviceFour').fadeOut(50);
				$('#serviceFive').fadeOut(50);
			} else if (y > 3200 && y <= 4290) {
				$('#serviceOne').fadeOut(50);
				$('#serviceTwo').fadeOut(50);
				$('#serviceThree').fadeIn(50);
				$('#serviceFour').fadeOut(50);
				$('#serviceFive').fadeOut(50);
			} else if (y > 4290 && y <= 5380) {
				$('#serviceOne').fadeOut(50);
				$('#serviceTwo').fadeOut(50);
				$('#serviceThree').fadeOut(50);
				$('#serviceFour').fadeIn(50);
				$('#serviceFive').fadeOut(50);
			} else if (y > 5380 && y <= 6300) {
				$('#serviceOne').fadeOut(50);
				$('#serviceTwo').fadeOut(50);
				$('#serviceThree').fadeOut(50);
				$('#serviceFour').fadeOut(50);
				$('#serviceFive').fadeIn(50);
			} else if (y > 6300 || y < 1300) {
				$('#serviceOne').fadeOut(50);
				$('#serviceTwo').fadeOut(50);
				$('#serviceThree').fadeOut(50);
				$('#serviceFour').fadeOut(50);
				$('#serviceFive').fadeOut(50);
			}
		}
		lastScrollTop = y;
	});
}

else if ($(window).height() > 1025 && $(window).height() < 1050) {
	var lastScrollTop = 0;
	$(window).scroll(function(event) {
		var y = $(this).scrollTop();
		if (y > lastScrollTop) {
			if (y > 1300 && y <= 2100) {
				$('#serviceOne').fadeIn(50);
			} else if (y > 2100 && y <= 3100) {
				$('#serviceOne').fadeOut(50);
				$('#serviceTwo').fadeIn(50);
			} else if (y > 3100 && y <= 4130) {
				$('#serviceTwo').fadeOut(50);
				$('#serviceThree').fadeIn(50);
			} else if (y > 4130 && y <= 5160) {
				$('#serviceThree').fadeOut(50);
				$('#serviceFour').fadeIn(50);
			} else if (y > 5160 && y <= 6100) {
				$('#serviceFour').fadeOut(50);
				$('#serviceFive').fadeIn(50);
			} else if (y > 6100 || y < 1300) {
				$('#serviceFive').fadeOut(50);
			}
			console.log(lastScrollTop);
		} else {
			if (y > 1300 && y < 2100) {
				$('#serviceOne').fadeIn(50);
				$('#serviceTwo').fadeOut(50);
				$('#serviceThree').fadeOut(50);
				$('#serviceFour').fadeOut(50);
				$('#serviceFive').fadeOut(50);
			} else if (y > 2100 && y < 3100) {
				$('#serviceOne').fadeOut(50);
				$('#serviceTwo').fadeIn(50);
				$('#serviceThree').fadeOut(50);
				$('#serviceFour').fadeOut(50);
				$('#serviceFive').fadeOut(50);
			} else if (y > 3100 && y <= 4130) {
				$('#serviceOne').fadeOut(50);
				$('#serviceTwo').fadeOut(50);
				$('#serviceThree').fadeIn(50);
				$('#serviceFour').fadeOut(50);
				$('#serviceFive').fadeOut(50);
			} else if (y > 4130 && y <= 5160) {
				$('#serviceOne').fadeOut(50);
				$('#serviceTwo').fadeOut(50);
				$('#serviceThree').fadeOut(50);
				$('#serviceFour').fadeIn(50);
				$('#serviceFive').fadeOut(50);
			} else if (y > 5160 && y <= 6100) {
				$('#serviceOne').fadeOut(50);
				$('#serviceTwo').fadeOut(50);
				$('#serviceThree').fadeOut(50);
				$('#serviceFour').fadeOut(50);
				$('#serviceFive').fadeIn(50);
			} else if (y > 6100 || y < 1300) {
				$('#serviceOne').fadeOut(50);
				$('#serviceTwo').fadeOut(50);
				$('#serviceThree').fadeOut(50);
				$('#serviceFour').fadeOut(50);
				$('#serviceFive').fadeOut(50);
			}
		}
		lastScrollTop = y;
	});
}


else if ($(window).height() > 1000 && $(window).height() < 1025) {
	var lastScrollTop = 0;
	$(window).scroll(function(event) {
		var y = $(this).scrollTop();
		if (y > lastScrollTop) {
			if (y > 1000 && y <= 1500) {
				$('#serviceOne').fadeIn(50);
			} else if (y > 1500 && y <= 2524) {
				$('#serviceOne').fadeOut(50);
				$('#serviceTwo').fadeIn(50);
			} else if (y > 2524 && y <= 3548) {
				$('#serviceTwo').fadeOut(50);
				$('#serviceThree').fadeIn(50);
			} else if (y > 3548 && y <= 4572) {
				$('#serviceThree').fadeOut(50);
				$('#serviceFour').fadeIn(50);
			} else if (y > 4572 && y <= 5396) {
				$('#serviceFour').fadeOut(50);
				$('#serviceFive').fadeIn(50);
			} else if (y > 5396 || y < 1300) {
				$('#serviceFive').fadeOut(50);
			}
			console.log(lastScrollTop);
		} else {
			if (y > 1000 && y < 1500) {
				$('#serviceOne').fadeIn(50);
				$('#serviceTwo').fadeOut(50);
				$('#serviceThree').fadeOut(50);
				$('#serviceFour').fadeOut(50);
				$('#serviceFive').fadeOut(50);
			} else if (y > 1500 && y < 2524) {
				$('#serviceOne').fadeOut(50);
				$('#serviceTwo').fadeIn(50);
				$('#serviceThree').fadeOut(50);
				$('#serviceFour').fadeOut(50);
				$('#serviceFive').fadeOut(50);
			} else if (y > 2524 && y <= 3548) {
				$('#serviceOne').fadeOut(50);
				$('#serviceTwo').fadeOut(50);
				$('#serviceThree').fadeIn(50);
				$('#serviceFour').fadeOut(50);
				$('#serviceFive').fadeOut(50);
			} else if (y > 3548 && y <= 4572) {
				$('#serviceOne').fadeOut(50);
				$('#serviceTwo').fadeOut(50);
				$('#serviceThree').fadeOut(50);
				$('#serviceFour').fadeIn(50);
				$('#serviceFive').fadeOut(50);
			} else if (y > 4572 && y <= 5396) {
				$('#serviceOne').fadeOut(50);
				$('#serviceTwo').fadeOut(50);
				$('#serviceThree').fadeOut(50);
				$('#serviceFour').fadeOut(50);
				$('#serviceFive').fadeIn(50);
			} else if (y > 5396 || y < 1300) {
				$('#serviceOne').fadeOut(50);
				$('#serviceTwo').fadeOut(50);
				$('#serviceThree').fadeOut(50);
				$('#serviceFour').fadeOut(50);
				$('#serviceFive').fadeOut(50);
			}
		}
		lastScrollTop = y;
	});
} 

else if ($(window).height() > 950 && $(window).height() < 1000) {
	var lastScrollTop = 0;
	$(window).scroll(function(event) {
		var y = $(this).scrollTop();
		if (y > lastScrollTop) {
			if (y > 1150 && y <= 1950) {
				$('#serviceOne').fadeIn(50);
			} else if (y > 1950 && y <= 2900) {
				$('#serviceOne').fadeOut(50);
				$('#serviceTwo').fadeIn(50);
			} else if (y > 2900 && y <= 3850) {
				$('#serviceTwo').fadeOut(50);
				$('#serviceThree').fadeIn(50);
			} else if (y > 3850 && y <= 4800) {
				$('#serviceThree').fadeOut(50);
				$('#serviceFour').fadeIn(50);
			} else if (y > 4800 && y <= 5650) {
				$('#serviceFour').fadeOut(50);
				$('#serviceFive').fadeIn(50);
			} else if (y > 5650 || y < 1150) {
				$('#serviceFive').fadeOut(50);
			}
			console.log(lastScrollTop);
		} else {
			if (y > 1150 && y < 1950) {
				$('#serviceOne').fadeIn(50);
				$('#serviceTwo').fadeOut(50);
				$('#serviceThree').fadeOut(50);
				$('#serviceFour').fadeOut(50);
				$('#serviceFive').fadeOut(50);
			} else if (y > 1950 && y < 2900) {
				$('#serviceOne').fadeOut(50);
				$('#serviceTwo').fadeIn(50);
				$('#serviceThree').fadeOut(50);
				$('#serviceFour').fadeOut(50);
				$('#serviceFive').fadeOut(50);
			} else if (y > 2900 && y <= 3850) {
				$('#serviceOne').fadeOut(50);
				$('#serviceTwo').fadeOut(50);
				$('#serviceThree').fadeIn(50);
				$('#serviceFour').fadeOut(50);
				$('#serviceFive').fadeOut(50);
			} else if (y > 3850 && y <= 4800) {
				$('#serviceOne').fadeOut(50);
				$('#serviceTwo').fadeOut(50);
				$('#serviceThree').fadeOut(50);
				$('#serviceFour').fadeIn(50);
				$('#serviceFive').fadeOut(50);
			} else if (y > 4800 && y <= 5650) {
				$('#serviceOne').fadeOut(50);
				$('#serviceTwo').fadeOut(50);
				$('#serviceThree').fadeOut(50);
				$('#serviceFour').fadeOut(50);
				$('#serviceFive').fadeIn(50);
			} else if (y > 5650 || y < 1150) {
				$('#serviceOne').fadeOut(50);
				$('#serviceTwo').fadeOut(50);
				$('#serviceThree').fadeOut(50);
				$('#serviceFour').fadeOut(50);
				$('#serviceFive').fadeOut(50);
			}
		}
		lastScrollTop = y;
	});
} else if ($(window).height() > 800 && $(window).height() < 950) {
	var lastScrollTop = 0;
	$(window).scroll(function(event) {
		var y = $(this).scrollTop();
		if (y > lastScrollTop) {
			if (y > 1200 && y <= 1850) {
				$('#serviceOne').fadeIn(50);
			} else if (y > 1850 && y <= 2770) {
				$('#serviceOne').fadeOut(50);
				$('#serviceTwo').fadeIn(50);
			} else if (y > 2770 && y <= 3690) {
				$('#serviceTwo').fadeOut(50);
				$('#serviceThree').fadeIn(50);
			} else if (y > 3690 && y <= 4610) {
				$('#serviceThree').fadeOut(50);
				$('#serviceFour').fadeIn(50);
			} else if (y > 4610 && y <= 5410) {
				$('#serviceFour').fadeOut(50);
				$('#serviceFive').fadeIn(50);
			} else if (y > 5410 || y < 1200) {
				$('#serviceFive').fadeOut(50);
			}
			console.log(lastScrollTop);
		} else {
			if (y > 1200 && y < 1850) {
				$('#serviceOne').fadeIn(50);
				$('#serviceTwo').fadeOut(50);
				$('#serviceThree').fadeOut(50);
				$('#serviceFour').fadeOut(50);
				$('#serviceFive').fadeOut(50);
			} else if (y > 1850 && y < 2770) {
				$('#serviceOne').fadeOut(50);
				$('#serviceTwo').fadeIn(50);
				$('#serviceThree').fadeOut(50);
				$('#serviceFour').fadeOut(50);
				$('#serviceFive').fadeOut(50);
			} else if (y > 2770 && y <= 3690) {
				$('#serviceOne').fadeOut(50);
				$('#serviceTwo').fadeOut(50);
				$('#serviceThree').fadeIn(50);
				$('#serviceFour').fadeOut(50);
				$('#serviceFive').fadeOut(50);
			} else if (y > 3690 && y <= 4610) {
				$('#serviceOne').fadeOut(50);
				$('#serviceTwo').fadeOut(50);
				$('#serviceThree').fadeOut(50);
				$('#serviceFour').fadeIn(50);
				$('#serviceFive').fadeOut(50);
			} else if (y > 4610 && y <= 5410) {
				$('#serviceOne').fadeOut(50);
				$('#serviceTwo').fadeOut(50);
				$('#serviceThree').fadeOut(50);
				$('#serviceFour').fadeOut(50);
				$('#serviceFive').fadeIn(50);
			} else if (y > 5410 || y < 1200) {
				$('#serviceOne').fadeOut(50);
				$('#serviceTwo').fadeOut(50);
				$('#serviceThree').fadeOut(50);
				$('#serviceFour').fadeOut(50);
				$('#serviceFive').fadeOut(50);
			}
		}
		lastScrollTop = y;
	});
}  else if ($(window).height() > 768 && $(window).height() < 800) {
	var lastScrollTop = 0;
	$(window).scroll(function(event) {
		var y = $(this).scrollTop();
		if (y > lastScrollTop) {
			if (y > 1100 && y <= 1650) {
				$('#serviceOne').fadeIn(50);
			} else if (y > 1650 && y <= 2439) {
				$('#serviceOne').fadeOut(50);
				$('#serviceTwo').fadeIn(50);
			} else if (y > 2439 && y <= 3220) {
				$('#serviceTwo').fadeOut(50);
				$('#serviceThree').fadeIn(50);
			} else if (y > 3220 && y <= 4000) {
				$('#serviceThree').fadeOut(50);
				$('#serviceFour').fadeIn(50);
			} else if (y > 4000 && y <= 4700) {
				$('#serviceFour').fadeOut(50);
				$('#serviceFive').fadeIn(50);
			} else if (y > 4700 || y < 1100) {
				$('#serviceFive').fadeOut(50);
			}
			console.log(lastScrollTop);
		} else {
			if (y > 1100 && y < 1650) {
				$('#serviceOne').fadeIn(50);
				$('#serviceTwo').fadeOut(50);
				$('#serviceThree').fadeOut(50);
				$('#serviceFour').fadeOut(50);
				$('#serviceFive').fadeOut(50);
			} else if (y > 1650 && y < 2439) {
				$('#serviceOne').fadeOut(50);
				$('#serviceTwo').fadeIn(50);
				$('#serviceThree').fadeOut(50);
				$('#serviceFour').fadeOut(50);
				$('#serviceFive').fadeOut(50);
			} else if (y > 2439 && y <= 3220) {
				$('#serviceOne').fadeOut(50);
				$('#serviceTwo').fadeOut(50);
				$('#serviceThree').fadeIn(50);
				$('#serviceFour').fadeOut(50);
				$('#serviceFive').fadeOut(50);
			} else if (y > 3220 && y <= 4000) {
				$('#serviceOne').fadeOut(50);
				$('#serviceTwo').fadeOut(50);
				$('#serviceThree').fadeOut(50);
				$('#serviceFour').fadeIn(50);
				$('#serviceFive').fadeOut(50);
			} else if (y > 4000 && y <= 4700) {
				$('#serviceOne').fadeOut(50);
				$('#serviceTwo').fadeOut(50);
				$('#serviceThree').fadeOut(50);
				$('#serviceFour').fadeOut(50);
				$('#serviceFive').fadeIn(50);
			} else if (y > 4700 || y < 1100) {
				$('#serviceOne').fadeOut(50);
				$('#serviceTwo').fadeOut(50);
				$('#serviceThree').fadeOut(50);
				$('#serviceFour').fadeOut(50);
				$('#serviceFive').fadeOut(50);
			}
		}
		lastScrollTop = y;
	});
} else if ($(window).height() <= 768) {
	var lastScrollTop = 0;
	$(window).scroll(function(event) {
		var y = $(this).scrollTop();
		if (y > lastScrollTop) {
			if (y > 970 && y <= 1450) {
				$('#serviceOne').fadeIn(50);
			} else if (y > 1450 && y <= 2150) {
				$('#serviceOne').fadeOut(50);
				$('#serviceTwo').fadeIn(50);
			} else if (y > 2150 && y <= 2800) {
				$('#serviceTwo').fadeOut(50);
				$('#serviceThree').fadeIn(50);
			} else if (y > 2800 && y <= 3450) {
				$('#serviceThree').fadeOut(50);
				$('#serviceFour').fadeIn(50);
			} else if (y > 3450 && y <= 4000) {
				$('#serviceFour').fadeOut(50);
				$('#serviceFive').fadeIn(50);
			} else if (y > 4000 || y < 970) {
				$('#serviceFive').fadeOut(50);
			}
			console.log(lastScrollTop);
		} else {
			if (y > 970 && y < 1450) {
				$('#serviceOne').fadeIn(50);
				$('#serviceTwo').fadeOut(50);
				$('#serviceThree').fadeOut(50);
				$('#serviceFour').fadeOut(50);
				$('#serviceFive').fadeOut(50);
			} else if (y > 1450 && y < 2150) {
				$('#serviceOne').fadeOut(50);
				$('#serviceTwo').fadeIn(50);
				$('#serviceThree').fadeOut(50);
				$('#serviceFour').fadeOut(50);
				$('#serviceFive').fadeOut(50);
			} else if (y > 2150 && y <= 2800) {
				$('#serviceOne').fadeOut(50);
				$('#serviceTwo').fadeOut(50);
				$('#serviceThree').fadeIn(50);
				$('#serviceFour').fadeOut(50);
				$('#serviceFive').fadeOut(50);
			} else if (y > 2800 && y <= 3450) {
				$('#serviceOne').fadeOut(50);
				$('#serviceTwo').fadeOut(50);
				$('#serviceThree').fadeOut(50);
				$('#serviceFour').fadeIn(50);
				$('#serviceFive').fadeOut(50);
			} else if (y > 3450 && y <= 4000) {
				$('#serviceOne').fadeOut(50);
				$('#serviceTwo').fadeOut(50);
				$('#serviceThree').fadeOut(50);
				$('#serviceFour').fadeOut(50);
				$('#serviceFive').fadeIn(50);
			} else if (y > 4000 || y < 970) {
				$('#serviceOne').fadeOut(50);
				$('#serviceTwo').fadeOut(50);
				$('#serviceThree').fadeOut(50);
				$('#serviceFour').fadeOut(50);
				$('#serviceFive').fadeOut(50);
			}
		}
		lastScrollTop = y;
	});
}
/* Switching - Services Details one by one on scroll depending upon the active Service -> Parallex Effect */
var lastScrollTop = 0;
$(window).scroll(function(event) {
	var y = $(this).scrollTop();
	if (y > lastScrollTop) {
		if (y < 400) {
			$('#serviceOne').fadeIn(50);
			$('#serviceThree').fadeOut(50);
			$('#serviceFour').fadeOut(50);
			$('#serviceFive').fadeOut(50);
			$('#serviceTwo').fadeOut(50);
		}
		if (y > 400 && y < 1100) {
			$('#serviceOne').fadeOut(50);
			$('#serviceThree').fadeOut(50);
			$('#serviceFour').fadeOut(50);
			$('#serviceFive').fadeOut(50);
			$('#serviceTwo').fadeIn(50);
		} else if (y > 1100 && y < 1800) {
			$('#serviceOne').fadeOut(50);
			$('#serviceThree').fadeIn(50);
			$('#serviceFour').fadeOut(50);
			$('#serviceFive').fadeOut(50);
			$('#serviceTwo').fadeOut(50);
		} else if (y > 1800 && y < 2500) {
			$('#serviceOne').fadeOut(50);
			$('#serviceThree').fadeOut(50);
			$('#serviceFour').fadeIn(50);
			$('#serviceFive').fadeOut(50);
			$('#serviceTwo').fadeOut(50);
		} else if (y > 2500 && y < 3200) {
			$('#serviceOne').fadeOut(50);
			$('#serviceThree').fadeOut(50);
			$('#serviceFour').fadeOut(50);
			$('#serviceFive').fadeIn(50);
			$('#serviceTwo').fadeOut(50);
		}
	}
});