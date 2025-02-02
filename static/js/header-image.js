document.addEventListener("DOMContentLoaded", function () {
  const headerImage = document.querySelector(".headerImage");

  // Get image URLs from the data attributes
  const smallImg = headerImage.getAttribute("small-Image");
  const largeImg = headerImage.getAttribute("large-Image");

  // Function to dynamically preload the right image based on screen size
  function preloadBackgroundImage() {
    let preloadImage;

    // Determine the appropriate image to preload based on viewport width
    if (window.innerWidth <= 480) {
      preloadImage = smallImg;
    } else {
      preloadImage = largeImg;
    }

    // Create a link element to preload the image
    const preloadLink = document.createElement("link");
    preloadLink.rel = "preload";
    preloadLink.href = preloadImage;
    preloadLink.as = "image";
    preloadLink.fetchpriority = "high";
    preloadLink.type = "image/webp";

    // Append the preload link to the head of the document
    document.head.appendChild(preloadLink);
  }

  preloadBackgroundImage();

  // Set default background image (small screen)
  headerImage.style.backgroundImage = `url(${smallImg})`;

  // Change background image based on screen width
  function updateBackgroundImage() {
    let backgroundImage;
    if (window.innerWidth <= 480) {
      backgroundImage = smallImg;
    } else {
      backgroundImage = largeImg;
    }
    headerImage.style.backgroundImage = `url(${backgroundImage})`;
  }

  // Update background image on window resize
  window.addEventListener("resize", updateBackgroundImage);
});
