var words = ["of beautiful user experiences", "of effective/efficient code", "of some dope art", "of various spotify playlists"];
let i = 0, timer = 0;

var leftCode = document.getElementById("leftCode"), rightArt = document.getElementById("rightArt");

function typingEffect() {
	let word = words[i].split("");
	var loopTyping = function() {
		if (word.length > 0) {
			document.getElementById('word').innerHTML += word.shift();
        } 
        else {
			deletingEffect();
			return false;
		};
		timer = setTimeout(loopTyping, 225);
	};
	loopTyping();
};

function deletingEffect() {
	let word = words[i].split("");
	var loopDeleting = function() {
		if (word.length > 0) {
			word.pop();
			document.getElementById('word').innerHTML = word.join("");
		} else {
			if (words.length > (i + 1)) {
				i++;
			} else {
				i = 0;
			};
			typingEffect();
			return false;
		};
		timer = setTimeout(loopDeleting, 100);
	};
	loopDeleting();
};

typingEffect();

[leftCode, rightArt].forEach(function(element){
	var codeDrawing = document.getElementById("code-drawing"), artDrawing = document.getElementById("art-drawing"),
	codeLink = document.getElementById("code-link"), artLink = document.getElementById("art-link");
    element.addEventListener("mouseover", function() {
        element.style["transition-duration"] = "0.4s";
        element.classList.add("creation-hover");
        if(element.isSameNode(leftCode)) {
			codeDrawing.src = "media/leftHoverInverse.png";
			codeLink.style.color = "#8ae7ff";
        }
        else {
			artDrawing.src = "media/rightHover.png";
			artLink.style.color = "#8ae7ff";
        }
    });
    element.addEventListener("mouseout", function() {
        element.classList.remove("creation-hover");
        if(element.isSameNode(leftCode)) {
			codeDrawing.src = "media/leftInverse.png";
			codeLink.style.color = "white";
        }
        else {
			artDrawing.src = "media/right.png";
			artLink.style.color = "black";
        }
    });
});
