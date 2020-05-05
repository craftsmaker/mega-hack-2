const accounts = [
  {
  	id: "1",
    name: "Jodie Whittaker",
    imgData: require("../../assets/images/people/jw.jpg"),
    following: "79",
    beingFollowedBy: "8.439"
  },
  {
  	id: "2",
    name: "Diego Deschamps",
    imgData: require("../../assets/images/people/dd.jpg"),
    following: "10",
    beingFollowedBy: "1000"
  },
  {
  	id: "3",
    name: "Victor Guedes",
    imgData: require("../../assets/images/people/vg.jpg"),
    following: "100",
    beingFollowedBy: "0"
  },
  {
  	id: "4",
  	name: "Kelvin Queiroz",
  	imgData: require("../../assets/images/people/vg.jpg"),
  	following: "100",
    beingFollowedBy: "0"
  }
]

const community = [
	{
		id: "1",
    name: "Jodie Whittaker",
    imgData: require("../../assets/images/people/jw.jpg"),
		message:"Alguém conhece uma montadora de propulsores boa?"
	},
	{
		id: "2",
    name: "Diego Deschamps",
    imgData: require("../../assets/images/people/dd.jpg"),
		message:"Preciso de uma ajuda com contadores"
	},
	{
		id: "3",
    name: "Victor Guedes",
    imgData: require("../../assets/images/people/vg.jpg"),
		message:"Quais estratégias vocês tão usando para aumentar..."
	},
	{
		id: "4",
    name: "Kelvin Queiroz",
    imgData: require("../../assets/images/people/vg.jpg"),
		message:"Troco serviços de consultoria por serviços de design"
	}
]

const feed = [
  {
    id: "1",
    name: "Jodie Whittaker",
    imgData: require("../../assets/images/people/jw.jpg"),
    message:"Alguém conhece uma montadora de propulsores boa?"
  },
  {
    id: "2",
    name: "Diego Deschamps",
    imgData: require("../../assets/images/people/dd.jpg"),
    message:"Preciso de uma ajuda com contadores"
  },
  {
    id: "3",
    name: "Victor Guedes",
    imgData: require("../../assets/images/people/vg.jpg"),
    message:"Quais estratégias vocês tão usando para aumentar..."
  },
  {
    id: "4",
    name: "Kelvin Queiroz",
    imgData: require("../../assets/images/people/vg.jpg"),
    message:"Troco serviços de consultoria por serviços de design"
  }
]


const home = [
  {
    id: "1",
    name: "Jodie Whittaker",
    imgData: require("../../assets/images/people/jw.jpg"),
    message:"Alguém conhece uma montadora de propulsores boa?"
  },
  {
    id: "2",
    name: "Diego Deschamps",
    imgData: require("../../assets/images/people/dd.jpg"),
    message:"Preciso de uma ajuda com contadores"
  },
  {
    id: "3",
    name: "Victor Guedes",
    imgData: require("../../assets/images/people/vg.jpg"),
    message:"Quais estratégias vocês tão usando para aumentar..."
  },
  {
    id: "4",
    name: "Kelvin Queiroz",
    imgData: require("../../assets/images/people/vg.jpg"),
    message:"Troco serviços de consultoria por serviços de design"
  }
]

const topics = [
  {
    id: "1",
    source: require("../../assets/images/topics/attendance.png"),
    title: "ATENDIMENTO"
  },
  {
    id: "2",
    source: require("../../assets/images/topics/marketing.jpg"),
    title: "MARKETING"
  },
  {
    id: "3",
    source: require("../../assets/images/topics/sells.png"),
    title: "VENDAS"
  }
]

export {
	accounts,
	community,
  feed,
  home,
  topics
}