const app = Vue.createApp({
    data() {
        return {
            name: 'Wichan',
            age: 32,
            image: 'https://vuejs.org/images/logo.svg',
        }
    },
    methods: {
        addAge() {
            return this.age + 5
        },
        randomNumber() {
            return Math.random()
        },
    }
})

app.mount('#assignment')