const options = {
  keyboard: true,
  size: "fullscreen", //  'sm' | 'lg' | 'xl' | 'fullscreen'. Default is 'xl'
};

document.querySelectorAll(".lightbox-toggle").forEach((el) =>
  el.addEventListener("click", (e) => {
    e.preventDefault();
    const lightbox = new Lightbox(el, options);
    lightbox.show();
  })
);
