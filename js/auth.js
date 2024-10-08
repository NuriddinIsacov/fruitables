// {
//     "username": "username",
//     "email": "user@example.com",
//     "password": "admin123",
//     "password_confirm": "admin123"
// }


const url = "http://192.168.0.110:7076"

const login = () => {
    const inps = document.querySelectorAll('.login-form input')
    const obj = {}
    inps.forEach(inp =>{
        obj[inp.name] = inp.value
    })

    
    axios.post(`${url}/auth/login/`, obj, {
        Headers:{
            'Content-Type':'application/json'
        }
    })
    .then(res =>{
        const token = res.data.access
        localStorage.setItem('fruitables_token', token)
        console.log(res);

        window.location='index.html'
    })
};

const register = () => {
    const inps = document.querySelectorAll('.register-form input')
    const obj = {}

    inps.forEach(inp =>{
        obj[inp.name] = inp.value
    })

    console.log(obj);
    

    axios.post(`http://192.168.0.110:7076/auth/register/`, obj,{
        headers:{
            'Content-Type':'application/json'
        }
    })
    .then(res =>{
        console.log(res);

        window.location='login.html'
        
    })
    .catch(err =>{
        console.log(err.body);
    })
    
};


function parseJWT(token) {
    // JWT uch qismdan iborat: header.payload.signature
    // Bizga payload kerak, shuning uchun tokenni '.' bilan ajratamiz
    const base64Url = token.split('.')[1];

    // Base64'dan Base64URL'ga konvertatsiya
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    
    // Base64 ni JSON'ga dekodlash
    const jsonPayload = decodeURIComponent(atob(base64).split('').map(function(c) {
        return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    // JSON ma'lumotini qaytarish
    return JSON.parse(jsonPayload);
}

function logToken(){
    const token = localStorage.getItem('fruitables_token');
    console.log(parseJWT(token));

    console.log("Tokenni decodelash");
    
    

}

logToken()

