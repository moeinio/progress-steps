const progress = document.getElementById("progress");

const prev = document.getElementById("previous");

const next = document.getElementById("next");

const circles = Array.from(document.getElementsByClassName("circle"));

let activeStep = 1;

next.addEventListener("click", () => {
  activeStep++;

  if (activeStep > circles.length) {
    activeStep = circles.length;
  }
  updateDOM();
});

prev.addEventListener("click", () => {
  activeStep--;

  if (activeStep < 1) {
    activeStep = 1;
  }
  updateDOM();
});

function updateDOM() {
  circles.forEach((circle, index) => {
    if (index < activeStep) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });

  const activeElemets = Array.from(document.getElementsByClassName("active"));
  progress.style.width = ((activeElemets.length -1) / (circles.length -1)) * 100 + "%";

  if (activeStep === 1) {
      prev.disabled = true
  } else if (activeStep === circles.length) {
      next.disabled = true
  } else
  {
      prev.disabled = false;
      next.disabled = false;
  }
}
