const form = document.getElementById("form");

//*nombre
const nombre = document.getElementById("nombre")
const NameErrors = document.querySelector(".contact__contact__form__input_name__error")
const input = document.querySelector(".contact__contact__form__input_name")


function Validation(e) {
    e.preventDefault()
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/


    //*Reset Error
    //*Name
    NameErrors.classList.remove('contact__contact__form__input_name__error--active')
    input.classList.remove('contact__contact__form__input_name--active')


    if(nombre.value == "" ){
        NameErrors.classList.add('contact__contact__form__input_name__error--active')
        input.classList.add('contact__contact__form__input_name--active')
    }


    if(nombre.value !== "" ){

        let datos = new FormData(form);

        peticion = {
            method:'POST',
            body:datos,
        }
    
        fetch('./correo.php', peticion)
        .then(respuesta => respuesta.json)
        .then(respuesta =>{
            
        }).catch(error => console.log('error' , error));

    }  
}

form.addEventListener("submit", Validation)
