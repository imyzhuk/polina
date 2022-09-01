window.onload = () => {
    const createImage = (src, className, alt) => {
        const image = document.createElement('img');
        image.setAttribute('src', src);
        image.setAttribute('alt', alt ?? '');
        image.classList.add(className ?? '');
        return image;
    }

    const options = Object.freeze({
        token: '5751275639:AAGluIWl2c6VlVGrM-7hCecKkJjs02gcDKM',
        chatId: -795909208
    })
    
    const createSendMessageUrl = (message, options) => `https://api.telegram.org/bot${options.token}/sendMessage?chat_id=${options.chatId}&text=${message}&parse_mode=HTML`;
    const createMessageText = (name, phone) => `<b>Имя</b>: ${name}; <b>Номер</b>: ${phone}`;

    form.addEventListener('submit', e => {
        e.preventDefault();

        const formData = Object.fromEntries(new FormData(e.target));
        fetch(createSendMessageUrl(createMessageText(formData.name, formData.phone), options), {
            method: 'POST'
        }).then(() => {
            const btnText  = document.querySelector('.signup__btn-text');
            const btnImage  = document.querySelector('.signup__btn-image');
            btnText.innerText = "Отправлено";
            btnImage.classList.add('signup__btn-image_visible')
        }).catch(error => error)
    })

    // const headerHint = document.querySelector('.header__hint');
    // headerHint.addEventListener('click', () => headerHint.classList.toggle('header__hint_visible'))
}
