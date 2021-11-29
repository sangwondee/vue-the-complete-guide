const app = Vue.createApp({
    data() {
        return {
            userInput: "",
            confirmedInput: "",
        }
    },
    methods: {
        showAlert() {
            alert('show alert from function 1')
        },
        saveInput(event) {
            this.userInput = event.target.value
        },
        confirmInput() {
            this.confirmedInput = this.userInput
        }
    }
});
app.mount('#assignment');