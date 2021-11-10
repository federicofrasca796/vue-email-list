const app = new Vue({
    el: '#app',
    data: {
        mailArr: [],
    },
    methods: {
        pushMail(){
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            .then(response =>{
                app.mailArr.push(response.data.response);
            })
            .catch(error => {
                console.error(error);
            })
        },

        //bonus
        storeMail(){
            axios
            .get('https://flynn.boolean.careers/exercises/api/random/mail')
            then(response =>{
                const stanbyArr = [];
                while (standbyArr.length < 10) {
                    stanbyArr.push(response.data.response);
                }
                return standbyArr;
            })
        }
    },

    mounted(){
        for (let i = 0; i < 10; i++) {
            this.pushMail();
        }

        //bonus 
        const readyToPrint = storeMail();

    }

})
