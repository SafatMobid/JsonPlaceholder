window.onload = function () {
    let addBtn = document.getElementById("addBtn")
    addBtn.onclick = addBtnClick;
}

function addBtnClick() {
    let newInfo = document.getElementById("infoContainer")
    let bodyData = {
        userId:
            document.getElementById("userIdInput").value,

    }

    fetch("http://jsonplaceholder.typicode.com/todos",
        {
            method: "POST",
            body: JSON.stringify(bodyData),
        })
        .then(response => response.json())
        .then(data => {
           newInfo.innerHTML = "New User: " + data.id /* + " " + data.title; */
        });
/*         .catch (err => {
            document.getElementById("infoContainer").innerHTML = "Unexpected error "
        }); */
}

//WORKS I GUESS 