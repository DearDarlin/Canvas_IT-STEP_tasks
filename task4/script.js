let current = 0;

function nextLight() {
  document.getElementById("red").classList.remove("active");
  document.getElementById("yellow").classList.remove("active");
  document.getElementById("green").classList.remove("active");

  if (current === 0) {
    document.getElementById("red").classList.add("active");
  } else if (current === 1) {
    document.getElementById("yellow").classList.add("active");
  } else {
    document.getElementById("green").classList.add("active");
  }

  current++;
  if (current > 2) {
    current = 0;
  }
}

nextLight();

document.getElementById("nextBtn").onclick = nextLight;
