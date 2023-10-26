function addUser() {
    var nameInput1 = document.getElementById("nameInput1").value
    var nameInput2 = document.getElementById("nameInput2").value

    localStorage.setItem("nameInput1", nameInput1)
    localStorage.setItem("nameInput2", nameInput2)

    window.location = "quiz_game_page.html"
}

function check() {

}

function send() {
    number1 = document.getElementById("inputBox1").value;
    number2 = document.getElementById("inputBox2").value;
    actual_answer = parseInt(number1) * parseInt(number2);

    question_number = "<h4>" + number1 + "X" + number2 + "</h4>";
    input_box = "<br>Answer : <input type-'text' id='input_check_box'>"
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>"
    row = question_number + input_box + check_button;

    document.getElementById("output").innerHTML = row
    document.getElementById("inputBox1").value = "";
    document.getElementById("inputBox2").value = "";
}