const App = {
    data(){
        return{
            title: 'Счетчик',
            counter: 0
        }
    }
}

Vue.createApp(App).mount ('#app')

