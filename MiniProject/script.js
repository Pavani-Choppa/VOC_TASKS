let currentStep = 0;

function toggleSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.classList.toggle("hidden");
}

function startCooking() {
  const steps = document.querySelectorAll("#steps li");
  if (steps.length > 0) {
    steps.forEach(step => step.style.backgroundColor = "");
    currentStep = 0;
    highlightStep(steps, currentStep);
    updateProgressBar(currentStep, steps.length);
  }
}

function nextStep() {
  const steps = document.querySelectorAll("#steps li");
  if (steps.length === 0 || currentStep >= steps.length - 1) return;
  currentStep++;
  highlightStep(steps, currentStep);
  updateProgressBar(currentStep, steps.length);
}

function highlightStep(steps, index) {
  steps.forEach(step => step.style.backgroundColor = "");
  steps[index].style.backgroundColor = "#ffebcd";
}

function updateProgressBar(current, total) {
  const bar = document.getElementById("progress-bar");
  let progress = ((current + 1) / total) * 100;
  bar.style.width = `${progress}%`;
}
