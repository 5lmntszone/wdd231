import { courses } from '../data/courses.mjs';

const container = document.getElementById('course-container');
const creditDisplay = document.getElementById('credit-display');
const courseModal = document.getElementById('course-modal');
const modalContent = document.getElementById('modal-content');

function renderCourses(courseList) {
  container.innerHTML = '';
  let totalCredits = 0;

  courseList.forEach(course => {
    const card = document.createElement('div');
    card.classList.add('course-card');
    if (course.completed) card.classList.add('completed');

    card.innerHTML = `
      <p><strong>${course.subject} ${course.number}</strong></p>
      <h3>${course.title}</h3>
      <p>${course.description}</p>
    `;

    card.addEventListener('click', () => displayCourseDetails(course));

    container.appendChild(card);
    totalCredits += course.credits;
  });

  creditDisplay.textContent = `Total Credits: ${totalCredits}`;
}

function displayCourseDetails(course) {
  modalContent.innerHTML = `
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits:</strong> ${course.credits}</p>
    <p><strong>Certificate:</strong> ${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies:</strong> ${course.technology.join(', ')}</p>
  `;

  courseModal.showModal();
}

document.getElementById('closeModal').addEventListener('click', () => {
  courseModal.close();
});

window.addEventListener('click', (event) => {
  if (event.target === courseModal) {
    courseModal.close();
  }
});

renderCourses(courses);
