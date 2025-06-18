import { showLoader, hideLoader } from './loader.js';
import { courses } from '../data/courses.mjs';
import { setupModal } from './modal.js';
import { updateFooter } from './footerUtils.js';

showLoader();

const container = document.getElementById('course-container');
const creditDisplay = document.getElementById('credit-display');

const { openModal, closeModal } = setupModal({
  overlayId: 'modal-overlay',
  modalId: 'modal',
  closeBtnId: 'closeModal'
});

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

    card.addEventListener('click', () => showCourseDetails(course));

    container.appendChild(card);
    totalCredits += course.credits;
  });

  creditDisplay.textContent = `Total Credits: ${totalCredits}`;
}

function showCourseDetails(course) {
  const modalContent = document.getElementById('modal-content');

  modalContent.innerHTML = `
    <h2>${course.subject} ${course.number}</h2>
    <h3>${course.title}</h3>
    <p><strong>Credits:</strong> ${course.credits}</p>
    <p><strong>Certificate:</strong> ${course.certificate}</p>
    <p>${course.description}</p>
    <p><strong>Technologies:</strong> ${course.technology.join(', ')}</p>
  `;

  openModal();
}

renderCourses(courses);

hideLoader();
updateFooter();
