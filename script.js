var apply = document.getElementById('apply');

		window.onscroll = function() {
			scrolling()
		};
		//		red -> yellow -> green -> blue

		//		red (239,73,45,1);
		//		yellow (255,213,61,1);
		//		green (20,166,75,1);		
		//		blue (46,53,147,1);
		var r = 239;
		var g = 73;
		var b = 45;

		function scrolling() {
			var y = document.body.scrollTop;
			var h = document.body.offsetHeight;
			if (y > 0 && y < h / 3) {
				//				1246.666666666666667 standard
				//				r 16
				//				g 140
				//				b 16
				r = 239 + (((255 - 239)/(h/3)) * y);
				g = 73 + (((213 - 73)/(h/3)) * y);
				b = 45 + (((61 - 45)/(h/3)) * y)
				apply.style.color = "rgba(" + r + "," + g +
					"," + b + ",1)"
			} else if (y >= h / 3 && y < (h / 3 + h / 3)) {

				//				1246.666666666666667 <-> 2493.333333333333333 standard
				//				r 235
				//				g 47
				//				b 14
				r = 255 - (((255 - 20)/(h/3)) * (y - (h/3)));
				g = 213 - (((213 - 166)/(h/3)) * (y - (h/3)));
				b = 61 + (((75 - 61)/(h/3)) * (y - (h/3)));
				apply.style.color = "rgba(" + r + "," + g +
					"," + b + ",1)"
			} else if (y >= (h / 3 + h / 3)) {

				//				2493.333333333333333 <-> 3740 standard
				//				r 26
				//				g 113
				//				b 72
				r = 20 + (((46 - 20)/(h/3)) * (y - (h/3 + h/3)));
				g = 116 - (((166 - 53)/(h/3)) * (y - (h/3 + h/3)));
				b = 75 + (((147 - 75)/(h/3)) * (y - (h/3 + h/3)));
				apply.style.color = "rgba(" + r + "," + g +
					"," + b + ",1)"
			}
			console.log(y)
		}
