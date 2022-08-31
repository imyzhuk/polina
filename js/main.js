window.onload = () => {
    const createImage = (src, className, alt) => {
        const image = document.createElement('img');
        image.setAttribute('src', src);
        image.setAttribute('alt', alt ?? '');
        image.classList.add(className ?? '');
        return image;
    }

    form.addEventListener('submit', e => {
        e.preventDefault();

        const formData = Object.fromEntries(new FormData(e.target));

        console.log({
            name: formData.name,
            phone: formData.phone
        });
        fetch("http://localhost:3000", {
            method: 'POST',
            body: JSON.stringify(formData),
            // headers: {
            //     'Content-Type': 'application/json'
            // }
        }).then(() => {
            const image = createImage('assets/images/checkmark.svg', "signup__btn-image", 'Отправлено');
            btn.append(image);
            btn.innerText = "Отправлено";
        })
    })

    // const headerHint = document.querySelector('.header__hint');
    // headerHint.addEventListener('click', () => headerHint.classList.toggle('header__hint_visible'))
}
