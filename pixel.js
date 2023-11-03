var parent = document.querySelector(".parent");
for (var i = 0; i < 20; i++) {
	for (var j = 0; j < 20; j++) {
		var cell = document.createElement("div");
		cell.classList.add("cell");
		parent.appendChild(cell);
	}
}

function colorPicker() {
	let letters = "012345678ABCDEF";
	let color = "#";
	for (let i = 0; i < 6; i++) {
		color += letters[(Math.floor(Math.random() * 16))];

	}
	return color;
}
//  console.log(colorPicker());

let div = document.querySelector(".box")
var newColor
div.addEventListener("click", function () {
	newColor = colorPicker();
	div.style.backgroundColor = newColor;
})

let totalNode = document.querySelectorAll(".cell");
console.log(totalNode);
totalNode.forEach((div) => {
	div.addEventListener("click", () => {
		div.style.backgroundColor = newColor;
	})
})
var mousedown = 0
totalNode.forEach((div) => {
  div.addEventListener("mousedown", () => {
    mousedown = true;
    div.style.backgroundColor = newColor;
  })
})

totalNode.forEach((div) => {
  div.addEventListener("mouseup", () => {
    mousedown = false;
  })
})

totalNode.forEach((div) => {
  div.addEventListener("mouseover", () => {
    if (mousedown === true)
      div.style.backgroundColor = newColor;
  })
})










