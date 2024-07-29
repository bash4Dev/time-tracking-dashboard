const currentTime =  document.querySelectorAll('.current-time')
const previousTime = document.querySelectorAll(".previous-time");
const imgContainer = document.getElementById("img-container");
const reportSpan = document.getElementById("report");
const userTitle = document.getElementById("user-title");

// Converting NodeList to an Array and modifying elements
let converNodeList = Array.from(currentTime);
converNodeList.forEach(function(element) {
    element.style.color = 'snow';
});

const userReport = {
    userImage: 'images/image-jeremy.png',
    span: `<span class="report-span">Report for</span>`,
    userName: 'Jeremy Robson'
}

// Destructure the userReport Obj
const {userImage, span, userName} = userReport;

// Add image to the HTML
const imgElement = document.createElement('img');
imgElement.src = userImage;
imgContainer.appendChild(imgElement);

reportSpan.innerHTML += span; 
userTitle.innerHTML += userName;