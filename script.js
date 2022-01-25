(function (){

    document.querySelector(".btnGoogle").addEventListener("click", ()=>{
        let form = document.querySelector(".formularioSignIn")
        form.addEventListener("submit", (event)=>{
            event.preventDefault()
        })
        alert("Entrando com Google")
        window.location.replace("logado.html");
    })
    document.querySelector("#btnFormSignIn").addEventListener("click", getDataLogin)
    document.querySelector("#btnFormLogin").addEventListener("click", createAccount)
    document.querySelector(".loginTitle").addEventListener("click", chengePageToLogin)
    document.querySelector(".signInTitle").addEventListener("click", chengePageToSignIn)

    function chengePageToSignIn(){
        signInTitle = document.querySelector(".signInTitle")
        if(signInTitle.classList == "PageActivity"){
            return
        }
        const h1Disponiveis = document.querySelectorAll(".SignLog h1")
        h1Disponiveis[1].classList.remove("PageActivity")
        h1Disponiveis[0].classList.add("PageActivity")
        chengeSignin()
        function chengeSignin(){
            let signFomr = document.querySelector(".formularioSignIn")
            let loginForm = document.querySelector(".formularioLogIn")
            loginForm.style.display="none"
            signFomr.style.display="block"
        }

    }
    function chengePageToLogin(){
        let loginTitle = document.querySelector(".loginTitle")
        if(loginTitle.classList == "PageActivity"){
            return
        }
        const h1Disponiveis = document.querySelectorAll(".SignLog h1")
        h1Disponiveis[0].classList.remove("PageActivity")
        h1Disponiveis[1].classList.add("PageActivity")
        chengeLogin()
        function chengeLogin(){
            let signFomr = document.querySelector(".formularioSignIn")
            let loginForm = document.querySelector(".formularioLogIn")
            signFomr.style.display="none"
            loginForm.style.display="block"
        }
    }

    function getDataLogin(){
        let nomeOuEmail = document.querySelector(".Email")
        let senha = document.querySelector(".SenhaSign")
        let form = document.querySelector(".formularioSignIn")

        form.addEventListener("submit", (event)=>{
            event.preventDefault()
        })

        if(nomeOuEmail.value == "" || senha.value == ""){
            alert("Por favor complete o formulário")
        }else{
            alert("Entrando...")
            window.location.replace("logado.html");
        }
    }
    function createAccount(){
        let form = document.querySelector(".formularioLogIn")
        form.addEventListener("submit", (event)=>{
            event.preventDefault()
        })
        let nome = document.querySelector(".UserInput")
        let email = document.querySelector(".EmailInput")
        let senha = document.querySelector(".SenhaInput")
        let check = document.querySelector("#checkInput")
        if(nome.value == "" || email.value == "" || senha.value == "" || check.checked == false){
            alert("Complete todos os campos")
        }else{
            window.location.replace("logado.html")
        }
    }

})()