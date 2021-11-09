const app = new Vue({
    el: '#app',
    data: {
        mailArr: [],
    },

    mounted(){
        axios
        .get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then(response =>{
            // console.log(response);
            // console.log(response.data.response);
            while (app.mailArr.length < 10) {
                app.mailArr.push(response.data.response);
                
            }
        })
        .catch(error => {
            console.log(error);
        })
    }

})
