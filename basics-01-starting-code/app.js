const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Finish the course and lean Vue !', //vue interpolation
            courseGoalB: 'Master vue and build amazing !',
            vueLink: 'https://vuejs.org/'
        }
    },
    methods: {
        outputGoal() {
            const randomNumber = Math.random()
            if (randomNumber < 0.5) {
                // ตัวแปล this นี้ vue มันจะจัดการให้ เป็น goble instanst
                return this.courseGoalA
            } else {
                // ตัวแปล this นี้ vue มันจะจัดการให้ เป็น goble instanst
                return this.courseGoalB
            }
        }
    }
})

app.mount('#user-goal')