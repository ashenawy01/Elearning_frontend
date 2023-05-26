var userNames = ["abdelrhman225328", "ahmed123456", "omar654321", "nivine.atef"];
var passwords = ["12345", "5678", "4321", "123456"];
var accountsType = ["student", "student", "student", "professor"];

function isUser() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let isStudent = document.getElementById('student').checked;
    let isProf = document.getElementById('professor').checked;
    for (let i = 0; i < userNames.length; i++) {

        if (username == userNames[i] && password == passwords[i]) {
            if (isStudent && accountsType[i] == "student")
                window.open("../StudentsWeb/home.html");
            else if (isProf && accountsType[i] == "professor")
                window.open("../ProfessorsWeb/home.html");

        }
    }

    alert("Incorrect username or password!")
}

function checkUser(newUsername, newPassword, accType) {

    for (let i = 0; i < userNames.length; i++) {
        if (newUsername == userNames[i] && newPassword == passwords[i]) {
            return false;
        }
    }
    userNames.push(newUsername);
    passwords.push(newPassword);
    accountsType.push(accType);

    return true;
}

function addUser() {
    let username = document.getElementById("newUsername").value;
    let password = document.getElementById("newPassword").value;
    let accType = document.getElementById("newAccType").value;

    if (checkUser(username, password, accType)) {
        alert("Your accoun wad added successfully");
    } else {
        alert("User is already exist!");
    }
}

let loginCard = document.getElementById('loginCard');

function closeAddLogin() {
    loginCard.classList.add("display");
}

function addLogin() {
    loginCard.classList.remove("display");
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == loginCard) {
        closeAddLogin();
    }
}

function popElement(id) {
    console.log(id);
    let accounts = document.querySelectorAll('.existedAccount');
    for (let i = 0; i < accounts.length; i++) {
        if (accounts[i].classList.contains(id)) {
            accounts[i].classList.add('display');
        }
    }
}

function addNewUser() {
    let username = document.getElementById("usernameN").value;
    let password = document.getElementById("passwordN").value;
    let isStudent = document.getElementById('studentN').checked;
    let isProf = document.getElementById('professorN').checked;

    for (let i = 0; i < userNames.length; i++) {

        if (username == userNames[i] && password == passwords[i]) {
            if (isStudent && accountsType[i] == "student") {
                document.getElementById('myform').reset();
                document.getElementById('studAcc').classList.remove('display');
            }
            else if (isProf && accountsType[i] == "professor") {
                document.getElementById('myform').reset();
                document.getElementById('profAcc').classList.remove('display');
            }
        }
    }
    document.getElementById('myform').reset();
    closeAddLogin();
}