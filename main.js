const app = new Vue({
    el: '#app',
    data: {
        mailArr: [],
    },
    methods: {
        getMail(){
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response =>{
                    app.mailArr.push(response.data.response);
            })
            .catch(error => {
                console.error(error);
            })
        },
    },

    mounted(){
        for (let i = 0; i < 10; i++) {
            this.getMail();
        }
    }

})
