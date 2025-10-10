
(function(){
  const gallery2d = document.getElementById("gallery2d");
  if (gallery2d) {
    const cards = gallery2d.querySelectorAll(".card");
    let idx = 0;

    function show(i) {
      cards.forEach((c, j) => c.classList.toggle("active", i === j));
    }
    function prev() {
      idx = (idx - 1 + cards.length) % cards.length;
      show(idx);
    }
    function next() {
      idx = (idx + 1) % cards.length;
      show(idx);
    }
    const prevBtn = document.getElementById("prev2d");
    const nextBtn = document.getElementById("next2d");
    if (prevBtn) prevBtn.onclick = prev;
    if (nextBtn) nextBtn.onclick = next;
    let startX = null;
    gallery2d.addEventListener("touchstart", e => {
      startX = e.touches[0].clientX;
    });
    gallery2d.addEventListener("touchend", e => {
      if (startX === null) return;
      let dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 40) {
        if (dx < 0) next();
        else prev();
      }
      startX = null;
    });
    let mouseStartX = null;
    gallery2d.addEventListener("mousedown", e => {
      mouseStartX = e.clientX;
    });
    gallery2d.addEventListener("mouseup", e => {
      if (mouseStartX === null) return;
      let dx = e.clientX - mouseStartX;
      if (Math.abs(dx) > 40) {
        if (dx < 0) next();
        else prev();
      }
      mouseStartX = null;
    });
  }

  const gallery3d = document.getElementById("gallery3d");
  if (gallery3d) {
    const cards = gallery3d.querySelectorAll(".card");
    let idx = 0;

    function show(i) {
      cards.forEach((c, j) => c.classList.toggle("active", i === j));
    }
    function prev() {
      idx = (idx - 1 + cards.length) % cards.length;
      show(idx);
    }
    function next() {
      idx = (idx + 1) % cards.length;
      show(idx);
    }
    const prevBtn = document.getElementById("prev3d");
    const nextBtn = document.getElementById("next3d");
    if (prevBtn) prevBtn.onclick = prev;
    if (nextBtn) nextBtn.onclick = next;
    let startX = null;
    gallery3d.addEventListener("touchstart", e => {
      startX = e.touches[0].clientX;
    });
    gallery3d.addEventListener("touchend", e => {
      if (startX === null) return;
      let dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 40) {
        if (dx < 0) next();
        else prev();
      }
      startX = null;
    });
    let mouseStartX = null;
    gallery3d.addEventListener("mousedown", e => {
      mouseStartX = e.clientX;
    });
    gallery3d.addEventListener("mouseup", e => {
      if (mouseStartX === null) return;
      let dx = e.clientX - mouseStartX;
      if (Math.abs(dx) > 40) {
        if (dx < 0) next();
        else prev();
      }
      mouseStartX = null;
    });
  }
})();