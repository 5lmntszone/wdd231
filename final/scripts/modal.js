export function setupModal({ overlayId = null, modalId, closeBtnId }) {
    const modal = document.getElementById(modalId);
    const closeBtn = document.getElementById(closeBtnId);
    const overlay = overlayId ? document.getElementById(overlayId) : null;
  
    function openModal() {
      if (overlay) overlay.classList.remove('hidden');
      modal.showModal();
    }
  
    function closeModal() {
      modal.close();
      if (overlay) overlay.classList.add('hidden');
    }
  
    closeBtn.addEventListener('click', closeModal);
  
    window.addEventListener('click', (e) => {
      const rect = modal.getBoundingClientRect();
      const outsideClick =
        e.clientX < rect.left ||
        e.clientX > rect.right ||
        e.clientY < rect.top ||
        e.clientY > rect.bottom;
  
      if (outsideClick && e.target === modal) {
        closeModal();
      }
    });
  
    return { openModal, closeModal };
  }
  