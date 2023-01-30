Vue.createApp({
  data() {
    return {
      goals: ["80% cotton", "20% polyester", "Gender-neutral"],
      eteredValue: "",
      title: "asdasd",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.eteredValue);
      this.enteredValue = "";
    },
  },
}).mount("#app");

// const buttonEl = document.querySelector("button");
// const inputEl = document.querySelector("input");
// const listEl = document.querySelector("ul");

// function addGoal() {
//   const enteredValue = inputEl.value;
//   const listItemEl = document.createElement("ul");
//   listItemEl.textContent = enteredValue;
//   listEl.appendChild(listItemEl);
//   inputEl.value = "";
// }

// buttonEl.addEventListener("click", addGoal);
