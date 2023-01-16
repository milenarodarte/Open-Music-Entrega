function darkMode () {

    const buttonMode = document.querySelector('.darkMode')
    const imgMode = document.querySelector('.modo-noturno')
    const html = document.querySelector('html')

    buttonMode.addEventListener('click', () => {
        html.classList.toggle('dark-mode')
        imgMode.classList.toggle('text-white')

        const dmPref = localStorage.getItem('darkmode')
        if (!dmPref){localStorage.setItem('darkmode', true)}
        if (dmPref){localStorage.removeItem('darkmode')}

        if(imgMode.classList.contains('text-white')){
            imgMode.src= './assets/img/iconSun.svg' 
        } else {
            imgMode.src = './assets/img/iconLua.svg'
        }
    })
}
darkMode()