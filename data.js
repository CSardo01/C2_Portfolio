function renderItems(projectList) {
    console.log(projectList);
    projectList.forEach((project) => {
        console.log("this is a project", project.link)
        let projectButton = `
        <a class="project-btn" data-name="${project.name}" data-course="${project.course}"href="${project.link}">
            <p class="project-title">${project.name}</p>
            <p class="project-date">${project.date}</p>
            <div class="rule-horizontal"></div>
        </a>`;

        let projectList = document.getElementById("projectList");
        console.log("grr", projectList);
        projectList.insertAdjacentHTML("beforeend", projectButton);

        let details = `
        <div data-name="${project.name}" class="project-details hidden">
       <p><span class="highlight">${project.description}</span></p>
        <div class="container-image">
            <img src="${project.image}" alt="screenshot of ${project.name}">
        </div></div>`;

        let projectDetailsContainer = document.getElementById("projectDetailsContainer");
        projectDetailsContainer.insertAdjacentHTML("beforeend", details);

        let projectDescription = `<p data-name="${project.name}" class="project-description hidden"><span  class="highlight">${project.description}</span></p>`;

        let projectDescriptionContainer = document.getElementById("projectDescriptionContainer")
        projectDescriptionContainer.insertAdjacentHTML("beforeend", projectDescription);

        let projectBtn = document.querySelectorAll(".project-btn")

        projectBtn.forEach((btn) => {
            console.log("1", btn)
            let projectDetails = document.querySelectorAll(".project-details");
            let header = document.getElementById("header");
            let projectDescription = document.querySelectorAll(".project-description");
            let footerContent = document.querySelector(".footer-content")
            btn.onmouseenter = (event) => {
                console.log("mouse has entered!")
                header.classList.add("hidden")
                footerContent.classList.add("hidden")
                projectDetails.forEach((item) => {
                    // console.log("3", item.dataset.name)
                    // console.log("4", btn.dataset.name)
                    if (item.dataset.name == btn.dataset.name) {
                        item.classList.remove("hidden")
                    } else {
                        item.classList.add("hidden")
                    }

                })
                projectDescription.forEach((item) => {
                    // console.log("5", item.dataset.name)
                    if (item.dataset.name == btn.dataset.name) {
                        console.log("6", item.dataset.name, item.classList)
                        console.log("7", btn.dataset.name, btn.classList)
                        item.classList.remove("hidden")
                    } else {
                        item.classList.add("hidden")
                    }

                })
            }
            btn.onmouseleave = (event) => {
                header.classList.remove("hidden")
                footerContent.classList.remove("hidden")


                projectDetails.forEach((item) => {
                    item.classList.add("hidden")
                })
                projectDescription.forEach((item) => {
                    item.classList.add("hidden")
                })

            }
        })

    })

}


fetch("projects.json")
    .then(function (response) {
        return response.json();
    })
    .then(function (projectList) {
        // And passes the data to the function, above!
        renderItems(projectList); // In reverse order
    });
