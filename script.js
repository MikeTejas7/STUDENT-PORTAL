let signupBtn = document.getElementById("signupBtn");
let signinBtn = document.getElementById("signinBtn");
let nameField = document.getElementById("nameField");
let title = document.getElementById("title");

signinBtn.onclick = function () {
  nameField.style.maxHeight = "0";
  title.innerHTML = "Sign In";
  signupBtn.classList.add("disable");
  signinBtn.classList.remove("disable");

  // Check if the sign-in fields are filled before redirecting
  let emailField = document.querySelector('input[type="email"]');
  let passwordField = document.querySelector('input[type="password"]');

  if (emailField.value.trim() !== "" && passwordField.value.trim() !== "") {
    window.location.href = "portal.html";
  }
}

signupBtn.onclick = function () {
  nameField.style.maxHeight = "60px";
  title.innerHTML = "Sign Up";
  signupBtn.classList.remove("disable");
  signinBtn.classList.add("disable");
}

// JavaScript code to populate the course dropdown based on the selected semester
const semesterSelect = document.getElementById('semester-select');
const courseSelect = document.getElementById('course-select');
const unitLoad = document.getElementById('unit-load');

// Define course data for first and second semesters
const firstSemesterCourses = [
  'Course 1A',
  'Course 2A',
  'Course 3A',
  // Add more courses as needed
];

const secondSemesterCourses = [
  'Course 1B',
  'Course 2B',
  'Course 3B',
  // Add more courses as needed
];

// Function to populate the course dropdown
function populateCourseDropdown() {
  const selectedSemester = semesterSelect.value;
  const courses = selectedSemester === 'first-semester' ? firstSemesterCourses : secondSemesterCourses;

  // Clear the current options
  courseSelect.innerHTML = '';

  // Populate the dropdown with courses
  courses.forEach(course => {
    const option = document.createElement('option');
    option.value = course;
    option.textContent = course;
    courseSelect.appendChild(option);
  });
}

// Event listener for semester selection
semesterSelect.addEventListener('change', populateCourseDropdown);

// Event listener for course selection (to update unit load, if needed)
courseSelect.addEventListener('change', () => {
  // You can implement logic to update unit load based on the selected course
  // For simplicity, we will set it to a fixed value for now
  unitLoad.textContent = '4'; // Example unit load
});

// Initial population of the course dropdown
populateCourseDropdown();


// Log Out
document.getElementById('logoutButton').addEventListener('click', function() {
  // Redirect to the Log-in page
  window.location.href = 'Login.html';
})

