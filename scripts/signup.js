const form = document.querySelector('form');
const namePerson = document.getElementById('name');
const nickPerson = document.getElementById('nickname');
const emailPerson = document.getElementById('email');
const passwordPerson = document.getElementById('password');
const repeatPasswordPerson = document.getElementById('repeatPassword');

//Constantes que linkam HTML e JS na parte de erro.
const missingName = document.getElementById('alertName');
const missingNickName = document.getElementById('alertNickName');
const missingEmail = document.getElementById('alertEmail');
const missingPassword = document.getElementById('alertPassword');
const missingRepeatPassword = document.getElementById('alertRepeatPassword');

//Criação de aparecer as mensagens após não ter dados dos clientes
namePerson.addEventListener('keyup', function () {
    if (namePerson.value == "") {
        missingName.innerHTML = "Insira seu nome, por favor. ☺"
    } else {
        missingName.innerHTML = ""
    }
})

nickPerson.addEventListener('keyup', function () {
    if (nickPerson.value == "") {
        missingNickName.innerHTML = "Insira seu Nickname, por favor. ☺"
    } else {
        missingNickName.innerHTML = ""
    }
})

emailPerson.addEventListener('keyup', function () {
    if (emailPerson.value == "") {
        missingEmail.innerHTML = "Insira seu E-mail, por favor. ☺"
    } else {
        missingEmail.innerHTML = ""
    }
})

passwordPerson.addEventListener('keyup', function () {
    if (passwordPerson.value == "") {
        missingPassword.innerHTML = "Insira sua senha, por favor. ☺"
    } else {
        missingPassword.innerHTML = ""
    }
})

repeatPasswordPerson.addEventListener('keyup', function () {
    if (repeatPasswordPerson.value == "") {
        missingRepeatPassword.innerHTML = "Insira sua senha, por favor. ☺"
    } else {
        missingRepeatPassword.innerHTML = ""
    }

    if (passwordPerson.value != repeatPasswordPerson.value) {
        missingRepeatPassword.innerHTML = "As senhas não coincidem."
    }
})

//Envio dos dados para o Back-end
form.addEventListener('submit', function (event) {
    event.preventDefault();
//essa const foi criada dentro desse escopo por ser uma questão muito específica e sem necessidade de uso global na aplicação
    const formData = {
        firstName: namePerson.value, 
        lastName: nickPerson.value,
        email: emailPerson.value,
        password: passwordPerson.value 
    } 
//iremos construir as informações de envio, a partir daqui estamos construindo uma promise
fetch('https://ctd-todo-api.herokuapp.com/v1/users', {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
              },
            body: JSON.stringify(formData)
    })
//criação da resposta da API ao envio de informação feito pelo formulário
    .then(function(response){
        return response.json()
    })
//criação da função que receberá os dados que virão dentro da resposta da API
    .then(function(data){
        console.log(data)

        if (typeof data === "object") { 
            alert ("Oba! Você foi cadastrado aqui (:");
            window.location.href = "index.html"
        } else {
            alert (data)
        }
        //pode armazenar o jwt no local storage ou no session storage. 
        //localStorage.setItem('jwt', data.jwt)
    })
//criação de função que receberá informações de quando ocorrerem erros ou imprevistos
    .catch(function(error){
        alert(error)
    })
})

