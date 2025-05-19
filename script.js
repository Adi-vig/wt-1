

// Default project data (if nothing in localStorage)
const defaultData = {
  course: [
    { title: "Compiler Front-End", desc: "Lex/Yacc-based mini C compiler with TAC generation." },
    { title: "Maze-solving Robot using SLAM", desc: "ROS2-based robot with DFS navigation and live mapping." },
    { title: "PDF Knowledge Extractor using LLM + RAG", desc: "A full-stack web app to intelligently answer questions from large PDFs." }
  ],
  edi: [
    { title: "Smart Parking System", desc: "ESP32 + sensors + web dashboard for booking and live monitoring." },
    { title: "Smart Receptionist System", desc: "Face recognition with ESP32, IoT-based door control, and web dashboard." },
    { title: "Health Monitoring Wearable", desc: "Tracks vitals and sends data to a web interface." }
  ]
};

// Load default projects on first visit
if (!localStorage.getItem('projects')) {
  localStorage.setItem('projects', JSON.stringify(defaultData));
}

// Load and display projects
function loadProjects(type) {
  const data = JSON.parse(localStorage.getItem('projects'));
  const list = document.getElementById("projectList");
  list.innerHTML = '';

  data[type].forEach((proj, index) => {
    const li = document.createElement('li');
    li.className = "list-group-item";
    li.innerHTML = `<strong>${proj.title}</strong> ${proj.desc}`;
    list.appendChild(li);
  });
}

// Add new project
function addProject(event) {
  event.preventDefault();

  const title = document.getElementById("projectTitle").value;
  const desc = document.getElementById("projectDesc").value;
  const type = document.getElementById("projectType").value;

  const newProj = { title, desc };
  const data = JSON.parse(localStorage.getItem('projects'));
  data[type].push(newProj);
  localStorage.setItem('projects', JSON.stringify(data));

  document.getElementById("projectForm").reset();
  loadProjects(type);
}


$(document).ready(function () {
    $('#projectTabs a').on('shown.bs.tab', function (event) {
      console.log("Selected tab:", $(event.target).text());
    });
  });
  
