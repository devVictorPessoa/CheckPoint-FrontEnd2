const email = document.getElementById("inputEmail")
const password = document.getElementById("inputPassword")

const form = document.querySelector("form")

//Constantes que linkam HTML e JS na parte de erro.
const alertEmailLogin = document.getElementById("alertEmailLogin")
const alertPasswordLogin = document.getElementById("alertPasswordLogin")

//Criação de aparecer as mensagens após não ter dados dos clientes
email.addEventListener("keyup", function () {
    if (email.value == "") {
        alertEmailLogin.innerHTML = "Este campo precisa ser preenchido."
    } else {
        alertEmailLogin.innerHTML = ""
            }
})

password.addEventListener("keyup", function () {
    if (password.value == "") {
        alertPasswordLogin.innerHTML = "Este campo precisa ser preenchido."
    } else {
        alertPasswordLogin.innerHTML = ""
            }
})

//Envio dos dados para o Back-end
form.addEventListener("submit", function (event) {
    event.preventDefault();

    //informações recebidas para fazer o login
    const loginData = {
        email: email.value, 
        password: password.value 
    }

fetch('https://ctd-todo-api.herokuapp.com/v1/users/login', {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(loginData)
})
//criação da resposta da API ao envio de informação feito pelo formulário
    .then(function(response){
        return response.json()
    })
    //criação da função que receberá os dados que virão dentro da resposta da API
    .then(function(data){
        console.log(data)
        sessionStorage.setItem('jwt', data.jwt)
        window.location.href = "tarefas.html"
    })

})
