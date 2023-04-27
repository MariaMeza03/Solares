//*WhatsApp
const button = document.querySelector('.layout_whatsapp__button')
const chat = document.querySelector('.chat_whatsApp')

function toggleMenu() {
	chat.classList.toggle('chat_whatsApp--active')
    button.classList.toggle('layout_whatsapp__button--active')
}

button.addEventListener('click', toggleMenu)