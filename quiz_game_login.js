function addUser() {
    var nameInput1 = document.getElementById("nameInput1").value
    var nameInput2 = document.getElementById("nameInput2").value

    localStorage.setItem("nameInput1", nameInput1)
    localStorage.setItem("nameInput2", nameInput2)

    window.location = "quiz_game_page.html"
}