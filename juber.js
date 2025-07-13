const projects = [
  {
    name: "Exposure of IoT Project",
    link: "https://github.com/DHRUVa-MISHRa/Stock_Portfolio_Tracker20"
  },
  {
    name: "Stock Portfolio Tracker",
    link: "https://github.com/DHRUVa-MISHRa/Stock_Portfolio_Tracker20"
  },
  {
    name: "Basic Calculator Project",
    link: "https://github.com/DHRUVa-MISHRa/basic-_calculator_project-_web"
  },
  {
    name: "Tic Tac Toe with AI",
    link: "https://github.com/DHRUVa-MISHRa/Tic-Tac-Toe-with-AI-hcj"
  },
  {
    name: "Rock Paper Scissors Game",
    link: "https://github.com/DHRUVa-MISHRa/Rock-Paper-Scissors.Game"
  },
  {
    name: "AI Chatbot",
    link: "https://github.com/DHRUVa-MISHRa/Aichatbot"
  }
];

const projectList = document.getElementById("project-list");

projects.forEach(project => {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.href = project.link;
  a.target = "_blank";
  a.textContent = project.name;
  li.appendChild(a);
  projectList.appendChild(li);
});
