const validacaoUsuario = sessionStorage.getItem('jwt')

const obterUsuario = (jwt) => {
//chamada para getMe - pegar a informação do usuário na API

    fetch("https://ctd-todo-api.herokuapp.com/v1/users/getMe", {
        headers: {
            "Content-type": "application/json",
            authorization: jwt
        },
    })
//utilização do jwt para carregamento dinâmico na página
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
    })
}

obterUsuario(validacaoUsuario)