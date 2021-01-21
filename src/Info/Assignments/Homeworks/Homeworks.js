import { FaFileAlt, FaCode } from "react-icons/fa";

const homeworks = [
	{ 
		number: 1, title: "Warmup", dueDate: "1/27/2021 11:00 PM EST", active: true,
		links: [
			{ icon: <FaFileAlt/>, link: "https://drive.google.com/file/d/1CM9UxSoXK7fYM6TWang9DvxJ2rKrIRCM/view?usp=sharing", label: "Handout" },
		]
	},
	{ 
		number: 2, title: "Functions & Procedures", dueDate: "2/03/2021 11:00 PM EST", active: false,
		links: [
			{ icon: <FaFileAlt/>, link: "", label: "Handout" },
			{ icon: <FaCode/>, link: "", label: "Source Code" },
		]
	},
	{ 
		number: 3, title: "Recursion", dueDate: "2/10/2021 11:00 PM EST", active: false,
		links: [
			{ icon: <FaFileAlt/>, link: "", label: "Handout" },
			{ icon: <FaCode/>, link: "", label: "Source Code" },
		]
	},
	{ 
		number: 4, title: "More Recursion", dueDate: "2/19/2021 11:00 PM EST", active: false,
		links: [
			{ icon: <FaFileAlt/>, link: "", label: "Handout" },
			{ icon: <FaCode/>, link: "", label: "Source Code" },
		]
	},
	{ 
		number: 5, title: "Higher-Order Procedures", dueDate: "2/24/2021 11:00 PM EST", active: false,
		links: [
			{ icon: <FaFileAlt/>, link: "", label: "Handout" },
			{ icon: <FaCode/>, link: "", label: "Source Code" },
		]
	},
	{ 
		number: 6, title: "Subsets", dueDate: "3/03/2021 11:00 PM EST", active: false,
		links: [
			{ icon: <FaFileAlt/>, link: "", label: "Handout" },
			{ icon: <FaCode/>, link: "", label: "Source Code" },
		]
	},
	{ 
		number: 7, title: "ReasonML/Matrices", dueDate: "3/10/2021 11:00 PM EST", active: false,
		links: [
			{ icon: <FaFileAlt/>, link: "", label: "Handout" },
			{ icon: <FaCode/>, link: "", label: "Source Code" },
		]
	},
	{ 
		number: 8, title: "Rackettecita", dueDate: "3/17/2021 11:00 PM EST", active: false,
		links: [
			{ icon: <FaFileAlt/>, link: "", label: "Handout" },
			{ icon: <FaCode/>, link: "", label: "Source Code" },
		]
	},
	{ 
		number: 9, title: "Homework 9", dueDate: "3/24/2021 11:00 PM EST", active: false,
		links: [
			{ icon: <FaFileAlt/>, link: "", label: "Handout" },
			{ icon: <FaCode/>, link: "", label: "Source Code" },
		]
	},
	{ 
		number: 10, title: "Homework 10", dueDate: "3/31/2021 11:00 PM EST", active: false,
		links: [
			{ icon: <FaFileAlt/>, link: "", label: "Handout" },
			{ icon: <FaCode/>, link: "", label: "Source Code" },
		]
	},
	{ 
		number: 11, title: "Homework 11", dueDate: "4/07/2021 11:00 PM EST", active: false,
		links: [
			{ icon: <FaFileAlt/>, link: "", label: "Handout" },
			{ icon: <FaCode/>, link: "", label: "Source Code" },
		]
	}
]

export default homeworks;