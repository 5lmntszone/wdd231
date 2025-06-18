export function updateFooter() {
    const year = document.getElementById("year");
    const modified = document.getElementById("lastModified");
  
    if (year) {
      year.textContent = new Date().getFullYear();
    }
  
    if (modified) {
      modified.textContent = document.lastModified;
    }
  }
  