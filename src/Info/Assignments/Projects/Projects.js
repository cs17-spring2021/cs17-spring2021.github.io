import { MdDescription, MdCode, MdSlideshow } from 'react-icons/md';

const projects = [
	{ 
		number: 1, title: "Bignum", dueDate: "Not yet!", active: false,
		notes: "",
		links: [
			{ icon: <MdDescription/>, link: "", label: "Handout" },
			{ icon: <MdCode/>, link: "", label: "Source Code" },
		]
	},
	// { 
	// 	number: 2, title: "Rackette", dueDate: "01-21-2021", active: false,
	// 	notes: "",
	// 	links: [
	// 		{ icon: <MdDescription/>, link: "", label: "Handout" },
	// 		{ icon: <MdCode/>, link: "", label: "Source Code" },
	// 	]
	// },
	// { 
	// 	number: 3, title: "Game", dueDate: "01-21-2021", active: false,
	// 	notes: "",
	// 	links: [
	// 		{ icon: <MdDescription/>, link: "", label: "Handout" },
	// 		{ icon: <MdCode/>, link: "", label: "Source Code" },
	// 	]
	// },
]

export default projects;