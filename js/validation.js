const form = document.getElementById("form");

//*nombre
const nombre = document.getElementById("nombre")
const NameErrors = document.querySelector(".contact__contact__form__input_name__error")
const input = document.querySelector(".contact__contact__form__input_name")

//*email
const mail = document.getElementById("email")
const emailErrors = document.querySelector(".contact__contact__form__input_email__error")
const inputEmail = document.querySelector(".contact__contact__form__input_email")

//*Phone
const phone = document.getElementById("telefono")
const phoneErrors =document.querySelector(".contact__contact__form__input_phone__error")
const inputPhone = document. querySelector(".contact__contact__form__input_phone")

//*Direction
const direction = document.getElementById("direccion")
const directionErrors =document.querySelector(".contact__contact__form__input_direction__error")
const inputDirection = document. querySelector(".contact__contact__form__input_direction")

//*NombreCFE
const nombreCfe = document.getElementById("nombre_cfe")
const nombreCfeErrors =document.querySelector(".contact__contact__form__input_nombre_cfe__error")
const inputnombreCfe = document. querySelector(".contact__contact__form__input_nombre_cfe")

//*NumberCFE
const numberCfe = document.getElementById("number_cfe")
const numberCfeErrors =document.querySelector(".contact__contact__form__input_number_cfe__error")
const inputnumberCfe = document. querySelector(".contact__contact__form__input_number_cfe")

//*Mensaje
const mensaje = document.getElementById("mensaje")
const mensajeErrors =document.querySelector(".contact__contact__form__textarea__error")
const inputMensaje = document. querySelector(".contact__contact__form__textarea")


function Validation(e) {
    e.preventDefault()
    const regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/


    //*Reset Error
    //*Name
    NameErrors.classList.remove('contact__contact__form__input_name__error--active')
    input.classList.remove('contact__contact__form__input_name--active')

     //*Email
    emailErrors.classList.remove('contact__contact__form__input_email__error--active')
    inputEmail.classList.remove('contact__contact__form__input_email--active')

     //*Phone
    phoneErrors.classList.remove('contact__contact__form__input_phone__error--active')
    inputPhone.classList.remove('contact__contact__form__input_phone--active')

     //*Direction
    directionErrors.classList.remove('contact__contact__form__input_direction__error--active')
    inputDirection.classList.remove('contact__contact__form__input_direction--active')

    //*nombre_cfe
    nombreCfeErrors.classList.remove('contact__contact__form__input_nombre_cfe__error--active')
    inputnombreCfe.classList.remove('contact__contact__form__input_nombre_cfe--active')

     //*number_cfe
    numberCfeErrors.classList.remove('contact__contact__form__input_number_cfe__error--active')
    inputnumberCfe.classList.remove('contact__contact__form__input_number_cfe--active')

    //*textarea_cfe
    mensajeErrors.classList.remove('contact__contact__form__textarea__error--active')
    inputMensaje.classList.remove('contact__contact__form__textarea--active')

    if(nombre.value == "" ){
        NameErrors.classList.add('contact__contact__form__input_name__error--active')
        input.classList.add('contact__contact__form__input_name--active')
    }

    if(!regexEmail.test(mail.value || mail.value.length == "" )){
        emailErrors.classList.add('contact__contact__form__input_email__error--active')
        inputEmail.classList.add ('contact__contact__form__input_email--active')
    }

    if(phone.value.length == ""){
        phoneErrors.classList.add('contact__contact__form__input_phone__error--active')
        inputPhone.classList.add('contact__contact__form__input_phone--active')
    }

    if(direction.value.length == ""){
        directionErrors.classList.add('contact__contact__form__input_direction__error--active')
        inputDirection.classList.add('contact__contact__form__input_direction--active')
    }


    if(nombreCfe.value.length == ""){
        nombreCfeErrors.classList.add('contact__contact__form__input_nombre_cfe__error--active')
        inputnombreCfe.classList.add('contact__contact__form__input_nombre_cfe--active')
    }

    if(numberCfe.value.length == ""){
        numberCfeErrors.classList.add('contact__contact__form__input_number_cfe__error--active')
        inputnumberCfe.classList.add('contact__contact__form__input_number_cfe--active')
    }

    if(mensaje.value.length == ""){
        mensajeErrors.classList.add('contact__contact__form__textarea__error--active')
        inputMensaje.classList.add('contact__contact__form__textarea--active')
    }


    if(nombre.value !== "" && email.value.length !=="" && phone.value.length !== "" && direction.value.length !== "" && nombreCfe.value.length !== "" && numberCfe.value.length !== "" && mensaje.value.length !== ""){

        let datos = new FormData(form);

        peticion = {
            method:'POST',
            body:datos,
        }
    
        fetch('./correo.php', peticion)
        .then(respuesta => respuesta.json)
        .then(respuesta =>{
            
        }).catch(error => console.log('error' , error));

        location.replace('./thanks.html');

    }  
}

form.addEventListener("submit", Validation)
