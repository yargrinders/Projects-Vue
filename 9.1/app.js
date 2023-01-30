const app = Vue.createApp ({
    data() {
        return {
            name: 'Jaroslav',
            age: '38'
        }
    },
    method: {
        outputAge(){
            const randomNumber = Math.random();
            if (randomNumber < 50) {
                return this.age;
            } else {
                return this.secondAge;
            }
        }
    },
      
});

app.mount('#assignment')