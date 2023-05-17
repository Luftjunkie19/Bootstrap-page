const monthlyBtn = document.querySelector(".monthly");
const yearlyBtn = document.querySelector(".yearly");
const monthlyContainer = document.querySelector(".monthly-container");
const yearlyContainer = document.querySelector(".yearly-container");

function addActiveMonthly(button, container) {
  document.querySelectorAll(".choice-btn").forEach((btn) => {
    btn.classList.remove("active");
    btn.classList.remove("btn-warning");
  });

  document.querySelectorAll(".holder").forEach((holder) => {
    holder.style.display = "none";
  });

  container.style.display = "flex";
  button.classList.add("active");
  button.classList.add("btn-warning");
}

monthlyBtn.addEventListener("click", () => {
  addActiveMonthly(monthlyBtn, monthlyContainer);
});

yearlyBtn.addEventListener("click", () => {
  addActiveMonthly(yearlyBtn, yearlyContainer);
});
