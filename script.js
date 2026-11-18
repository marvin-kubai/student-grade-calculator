const marksInput = document.getElementById("marks");
const calculateBtn = document.getElementById("calculateBtn");
const result = document.getElementById("result");

calculateBtn.addEventListener("click", function () {
  // Check for empty input
  if (marksInput.value.trim() === "") {
    result.textContent = "Please enter your marks.";
    return;
  }

  // Convert input to a number
  const marks = Number(marksInput.value);

  // Validate the marks
  if (marks < 0 || marks > 100) {
    result.textContent = "Invalid marks. Enter a value between 0 and 100.";
    return;
  }

  const grade = calculateGrade(marks);
  const feedback = getFeedback(grade);
  const performance = getPerformance(grade);
  result.textContent = grade + " | " + feedback + " | " + performance;
});
function calculateGrade(marks) {
  if (marks >= 80) {
    return "Grade A";
  } else if (marks >= 70) {
    return "Grade B";
  } else if (marks >= 60) {
    return "Grade C";
  } else if (marks >= 50) {
    return "Grade D";
  } else {
    return "Grade F";
  }
}

function getFeedback(grade) {
  if (grade === "Grade A") {
    return "Excellent performance!";
  } else if (grade === "Grade B") {
    return "Very good work!";
  } else if (grade === "Grade C") {
    return "Good effort!";
  } else if (grade === "Grade D") {
    return "You passed. Keep improving!";
  } else if (grade === "Grade F") {
    return "You need more practice.";
  } else {
    return "Unknown grade.";
  }
}
function getPerformance(grade) {
  if (grade === "Grade A") {
    return "Outstanding";
  } else if (grade === "Grade B") {
    return "Above Average";
  } else if (grade === "Grade C") {
    return "Average";
  } else if (grade === "Grade D") {
    return "Below Average";
  } else if (grade === "Grade F") {
    return "Poor";
  }
}
