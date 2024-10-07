const url = "http://192.168.0.110:7076"

class App{
    constructor(){}

    checkToken(token){
        const path = "/auth/verify/"

        let result = false
        axios.post(`${url}/${path}`, {
            "access_token": `${token}`
        },{
            Headers:{
                'Content-Type':'application/json'
            }
        })
        .then(res =>{
            console.log(res);
            
            if(result.status === 200){
                result = true
            }

            return result
        })



    }

    changeHeaderAuth(isHave){
        // <a href="./register.html" class="sign-up">sign up</a>
        // <a href="./login.html" class="sign-in">sign in</a>

        // <a href="./profile.html" class="my-auto">
        //     <i class="fas fa-user fa-2x"></i>
        // </a> 

        const htmlItem = document.querySelector('.my-auth')
        if(!isHave){
            htmlItem.innerHTML = `
            <a href="./register.html" class="sign-up">sign up</a>
            <a href="./login.html" class="sign-in">sign in</a>`
        }else{
            htmlItem.innerHTML = `
                <a href="./profile.html" class="my-auto">
                    <i class="fas fa-user fa-2x"></i>
                </a> 
            `
        }

        console.log(htmlItem);
        
    }

}