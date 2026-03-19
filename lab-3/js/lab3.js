//tab functions 

//Gt all tab links
const tabs = document.querySelectorAll('.tabs a');

//Get all panels
const panels = document.querySelectorAll('[role="tabpanel"]');

// Function to switch tabs
function switchTab(e) {
	e.preventDefault();

	//remove active from all tabs
	tabs.forEach(tab => tab.classList.remove('active'));

	//Hide all panels
	panels.forEach(panel => panel.classList.remove('active'));

	//Add active to clicked tab
	this.classList.add('active');

	// Show corresponding panel
	const target = document.querySelector(this.getAttribute('href'));
	target.classList.add('active');
}

// Add click event to each tab
tabs.forEach(tab => {
	tab.addEventListener('click', switchTab);
});

// Set default active tab (first one)
tabs[0].classList.add('active');
panels[0].classList.add('active');



