document.addEventListener("DOMContentLoaded", () => {
  const galleryItems = document.querySelectorAll(".gallery-item img");
  const fullScreenOverlay = document.getElementById("fullScreenOverlay");
  const fullScreenImage = document.getElementById("fullScreenImage");
  const closeButton = document.getElementById("closeButton");

  galleryItems.forEach((img) => {
    img.addEventListener("click", (event) => {
      fullScreenImage.src = event.target.src;
      fullScreenOverlay.style.display = "flex";

      // Hide image titles during full screen view
      const titles = document.querySelectorAll(".image-title");
      titles.forEach((title) => (title.style.display = "none"));
    });
  });

  closeButton.addEventListener("click", () => {
    fullScreenOverlay.style.display = "none";
    fullScreenImage.src = "";

    // Show image titles when closing full screen view
    const titles = document.querySelectorAll(".image-title");
    titles.forEach((title) => (title.style.display = "block"));
  });

  fullScreenOverlay.addEventListener("click", (e) => {
    if (e.target === fullScreenOverlay) {
      fullScreenOverlay.style.display = "none";
      fullScreenImage.src = "";

      // Show image titles when closing full screen view
      const titles = document.querySelectorAll(".image-title");
      titles.forEach((title) => (title.style.display = "block"));
    }
  });
});
