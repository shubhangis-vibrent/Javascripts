var correct = 0;
var pos = 0;
var choice;
var allQuestions = [{
    question: "What is 10 + 5?",
    choices: ["15", "12", "10"],
    answer: "A"
  },
  {
    question: "What is 10 - 5?",
    choices: ["5", "6", "8"],
    answer: "A"
  },
  {
    question: "What is 10 * 5?",
    choices: ["50", "60", "70"],
    answer: "A"
  },
  {
    question: "What is 10 / 5?",
    choices: ["1", "2", "3"],
    answer: "B"
  }
];

function getID(x) {
  return document.getElementById(x)
}

function renderQuestions() {
  var testStatus = getID("test_status");
  var test = getID("test");
  if (pos >= allQuestions.length) {
    testStatus.innerHTML = "Test Completed";
    test.innerHTML = "<h2>" + "You got " + correct + " out of " + allQuestions.length + "</h2><br/>";
    pos = 0;
    return false
  };
  testStatus.innerHTML = "Question " + (pos + 1) + " of " + allQuestions.length;

  var A = allQuestions[pos].choices[0];;
  var B = allQuestions[pos].choices[1];;
  var C = allQuestions[pos].choices[2];

  test.innerHTML = "<h2>" + allQuestions[pos].question + "</h2><br/>";
  test.innerHTML += '<input type="radio" value="A" name="answerChoice" /> ' + A + '<br />';
  test.innerHTML += '<input type="radio" value="B" name="answerChoice" /> ' + B + '<br />';
  test.innerHTML += '<input type="radio" value="C" name="answerChoice" /> ' + C + '<br /><br />';
  if (pos == allQuestions.length - 1) {
    test.innerHTML += '<input type="button" id="next" onclick="prevAnswer()" value="Prev"> ';
    test.innerHTML += '<input type="button" id="next" onclick="checkAnswer()" value="Submit"> ';
  } else if (pos >= 1) {
    test.innerHTML += '<input type="button" id="next" onclick="prevAnswer()" value="Prev"> ';
    test.innerHTML += '<input type="button" id="next" onclick="checkAnswer()" value="Next"> ';
  } else {
    test.innerHTML += '<input type="button" id="next" onclick="checkAnswer()" value="Next"> ';
  }

  test.innerHTML += '<br /><br /><p id="error"></p>'
}

choice = document.getElementsByName("answerChoice");
var checkedAnswer = null;

function checkAnswer() {

  choice = document.getElementsByName("answerChoice");
  var checkedAnswer = null;
  for (var i = 0; i < choice.length; i++) {
    if (choice[i].checked) {
      checkedAnswer = choice[i].value;
    }
  }

  if (checkedAnswer == null) {
    document.getElementById("error").innerHTML = 'Please select an answer'
    return false;
  }

  if (checkedAnswer == allQuestions[pos].answer) {
    correct++
  }

  pos++
  renderQuestions()
}

function prevAnswer() {
  pos--
  renderQuestions()
}
