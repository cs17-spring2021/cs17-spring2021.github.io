import { MdDescription, MdCode, MdSlideshow } from 'react-icons/md';

const labs = [
	{ 
		number: 1, title: "warmup", dueDate: "01-21-2021", active: true,
		links: [
			{ icon: <MdDescription/>, link: "" },
			{ icon: <MdCode/>, link: "" },
			{ icon: <MdSlideshow/>, link: "" },
		]
	},
	{ 
		number: 2, title: "functions + procedures", dueDate: "01-21-2021", active: false,
		links: [
			{ icon: <MdDescription/>, link: "" },
			{ icon: <MdCode/>, link: "" },
			{ icon: <MdSlideshow/>, link: "" },
		]
	},
	{ 
		number: 3, title: "recursion", dueDate: "01-21-2021", active: false,
		links: [
			{ icon: <MdDescription/>, link: "" },
			{ icon: <MdCode/>, link: "" },
			{ icon: <MdSlideshow/>, link: "" },
		]
	},
	{ 
		number: 4, title: "more recursion", dueDate: "01-21-2021", active: false,
		links: [
			{ icon: <MdDescription/>, link: "" },
			{ icon: <MdCode/>, link: "" },
			{ icon: <MdSlideshow/>, link: "" },
		]
	},
]

export default labs;