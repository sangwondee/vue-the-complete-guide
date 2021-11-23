Vue.createApp({
    data() {
        // ต้อง return ออกเป็น object
        return {
            goals: [],
            enteredValue: ''
        };
    },
    methods: { // ใช้ functions
        addGoal() {
            this.goals.push(this.enteredValue)
            this.enteredValue = ''
        }
    }
}).mount('#app')

// const buttonEl = document.querySelector('button')
// const inputEl =document.querySelector('input')
// const listEl = document.querySelector('ul')

// function addGoal() {
//     const enteredValue = inputEl.value
//     const listItemEl = document.createElement('li')
//     listItemEl.textContent = enteredValue
//     listEl.appendChild(listItemEl)
//     inputEl.value = ''
// }

// buttonEl.addEventListener('click', addGoal)