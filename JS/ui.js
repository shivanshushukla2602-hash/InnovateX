function renderMembers(){
    const teamContainer = document.querySelector(".team-container");

    teamContainer.innerHTML = "";
    members.forEach(function(member){

        teamContainer.innerHTML += `<div class="member-card">
                                       <img src="${member.photo}" alt="${member.name}" id="memberImage">
                                       <h3>${member.name}</h3>
                                       <p class="member-role">${member.role}</p>
                                       <p>
                                          <a href="${member.github}" target="_blank" class="bi bi-github github-icon"></a>
                                       </p>
                                   </div>`
   });
}

function renderProjects() {
  const projectContainer = document.querySelector(".project-container");
  projects.forEach(function(project, i) {
    const tech = Array.isArray(project.tech) ? project.tech.join(", ") : project.tech;
    projectContainer.innerHTML += `
      <div class="flip-card" onclick="if (!event.target.closest('.gh-btn') && !event.target.closest('.view-btn')) { window.open('${project.deployed}', '_blank'); }">
        <div class="flip-inner">
          <div class="flip-front project-card">
            <span class="project-num">0${i + 1}</span>
            <h3>${project.title}</h3>
            <span class="flip-hint">↻ hover to see more</span>
          </div>
          <div class="flip-back project-card">
            <p class="project-desc">${project.description}</p>
            <div class="project-footer">
              <span class="tech-pill">${tech}</span>
              <div class="project-actions">
                <a href="${project.github}" target="_blank" class="gh-btn" onclick="event.stopPropagation()">
                  <i class="bi bi-github"></i> Code
                </a>
                <a href="${project.deployed}" target="_blank" class="view-btn" onclick="event.stopPropagation()">
                  <i class="bi bi-eye"></i> View
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>`;
  });
}