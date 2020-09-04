document.body.style.backgroundColor = "white";

document.body.style.color = "black";

// Change the background and text color of the boxes.
let panels = Array.from(document.getElementsByClassName('panel'));
panels = panels.concat(Array.from(document.getElementsByClassName('list-group-item')));
panels = panels.concat(Array.from(document.getElementsByClassName('table table-hover')));


for (let i = 0; i < panels.length; ++i) {
	panels[i].style.backgroundColor = "#F6F8FA";
	panels[i].style.color = "black";
}

// This is to silence/override the onhover event on lecture page.
// I know it's horrendous code. But I don't want to spend more time
// researching a better approach.
let tableHover = document.getElementsByTagName('tr');
for (let i = 0; i < tableHover.length; ++i) {
	tableHover[i].onmouseover = () => {
		for (let j = 0; j < tableHover.length; ++j) {
			tableHover[j].style.backgroundColor = "#F6F8FA";
		}
	}
}

// Change all the hyperlinks from green to blue.
// Since it looks nicer for light themed page.
let anchors = Array.from(document.getElementsByTagName('a'));

const headerAnchors = ['Software Engineering', 'Lectures', 'Assignments <span class="caret"></span>',
					   'HW1 — Test Coverage', 'HW2 — Test Automation', 'HW3 — Mutation Testing',
					   'HW4 — Defect Detection', 'HW5 — Debugging Automation', 'HW6 — Contribution',
					   'Homework Submission', 'Exams', 'Advice', 'Piazza', 'Forum'];
// This method causes a problem of not changing the color of homeworks link on
// Homework Submission/Homework Assignment page. But I like the conciseness compared
// to the good ol' for-loop.
anchors = anchors.filter( (item) => {
	return headerAnchors.indexOf(item.innerHTML) < 0;
})

for (let i = 0; i < anchors.length; ++i) {
	// This is for anchors with different colors on the lecture page
	const currentColor = window.getComputedStyle(anchors[i], null).getPropertyValue("color");
	if (currentColor === 'rgb(12, 227, 172)') {
		anchors[i].style.color = "blue";
	}
}
