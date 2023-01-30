// Vue.createApp ();

const app = Vue.createApp({
    data() {
        return {
            courseGoalA: 'Traine Vue!',
            courseGoalB: 'Master Vue!',
            vueLink: 'https://unpkg.com/'
        };
    },
    methods: {
        outputGoal(){
            const randomNumber = Math.random();
            if (randomNumber < 0.5) {
                return this.courseGoalA;
            } else {
                return this.courseGoalB;
            }
        }
    }
});

app.mount('#user-goal');