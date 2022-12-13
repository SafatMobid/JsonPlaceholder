window.onload = function () {
    let getUserBtn = document.getElementById("getUserBtn")
    getUserBtn.onclick = getUserBtnClick;

    let updateBtn = document.getElementById("updateBtn")
    updateBtn.onclick = updateBtnClick;

    let cancelBtn = document.getElementById("cancelBtn")
    cancelBtn.onclick = cancelBtnClick;

    document.getElementById("infoContainer").style.display = "none";
}

function getUserBtnClick() {
    document.getElementById("infoContainer").style.display = "block";
    document.getElementById("inputUserField").style.display = "none";

    let idInput = document.getElementById("userIdInput");
    fetch("http://jsonplaceholder.typicode.com/todos/"+ idInput.value)
        .then(result => result.json())
        .then(data => {
            document.getElementById("idNumber").innerHTML = idInput.value

            document.getElementById("titleInput").value = data.title
            if (document.getElementById("titleInput").value != data.title) {
                document.getElementById("titleInput").value = "title not found"
            }
            document.getElementById("completedInput").value = data.completed
            if (document.getElementById("completedInput").value == "undefined") {
                document.getElementById("completedInput").value = "Completed not found"
            }
        })
        .catch(err => {
            messageDiv.innerHTML = "Unexpected error";
        })
}

function updateBtnClick() { //I guess it works
    const updateContainer = document.getElementById("updateContainer");
    let idInput = document.getElementById("userIdInput");
    let bodyData = {
        
        title: document.getElementById("titleInput").value,
        completed: document.getElementById("completedInput").value
    }
    fetch("http://jsonplaceholder.typicode.com/todos/"+ idInput.value, {
        method: "PUT",
        body: bodyData,
        })
        .then(response => response.json())
        .then(json => {
            updateContainer.innerHTML = "User Updated User:" + json.id
        });
 /*        .catch(err => {
        // If the PUT returns an error, ...
        });) */
}

function cancelBtnClick() {
    window.location.href = 'index.html'
}