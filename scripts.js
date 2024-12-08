function toggleAccessibilityPanel() {
  const panel = document.getElementById("accessibilityPanel");
  panel.style.display = panel.style.display === "none" ? "block" : "none";
}

// פעולה זו תגרום לפאנל להיסגר בטעינת הדף.
window.onload = function () {
  document.getElementById("accessibilityPanel").style.display = "none";
};

function increaseTextSize() {
  const elements = document.querySelectorAll("body *");
  elements.forEach((element) => {
    const currentSize = window.getComputedStyle(element).fontSize;
    element.style.fontSize = parseFloat(currentSize) * 1.2 + "px";
  });
}

function decreaseTextSize() {
  const elements = document.querySelectorAll("body *");
  elements.forEach((element) => {
    const currentSize = window.getComputedStyle(element).fontSize;
    element.style.fontSize = parseFloat(currentSize) * 0.8 + "px";
  });
}

function applyGrayscale() {
  const elements = document.querySelectorAll("body *");
  elements.forEach((element) => {
    element.style.filter = "grayscale(100%)";
  });
  document.body.style.backgroundColor = "#d3d3d3"; // רקע בגווני אפור
}

function applyHighContrast() {
  const elements = document.querySelectorAll("body *");
  elements.forEach((element) => {
    element.style.filter = "contrast(300%)";
    element.style.backgroundColor = "#000"; // רקע שחור
    element.style.color = "#fff"; // טקסט לבן
  });
}

function invertColors() {
  const elements = document.querySelectorAll("body *");
  elements.forEach((element) => {
    element.style.filter = "invert(100%)";
    element.style.backgroundColor = "#fff"; // רקע לבן
    element.style.color = "#000"; // טקסט שחור
  });
}

function reset() {
  const elements = document.querySelectorAll("body *");
  elements.forEach((element) => {
    element.style.filter = "";
    element.style.backgroundColor = "";
    element.style.color = "";
    element.style.fontSize = "";
  });
  document.body.style.backgroundColor = "";
}

function closeAccessibilityPanel() {
  const panel = document.getElementById("accessibilityPanel");
  const button = document.querySelector(".accessibility-button");
  panel.style.display = "none";
  button.style.display = "none";
}
