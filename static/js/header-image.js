document.addEventListener("DOMContentLoaded", function () {
  const headerImage = document.querySelector(".headerImage");

  // Get image URLs from the data attributes
  const smallImg = headerImage.getAttribute("small-Image");
  const largeImg = headerImage.getAttribute("large-Image");

  // Set default background image (medium screen)
  headerImage.style.backgroundImage = `url(${smallImg})`;

  // Change background image based on screen width
  function updateBackgroundImage() {
    if (window.innerWidth <= 480) {
      headerImage.style.backgroundImage = `url(${smallImg})`;
    } else {
      headerImage.style.backgroundImage = `url(${largeImg})`;
    }
  }

  // Initial check
  updateBackgroundImage();

  // Update background image on window resize
  window.addEventListener("resize", updateBackgroundImage);
});
