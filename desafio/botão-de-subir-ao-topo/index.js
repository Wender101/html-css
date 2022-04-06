window.addEventListener("scroll", (event) => {
    let scroll = this.scrollY;
    console.log(scroll)

    if(scroll < 50) {
        let subir = window.document.getElementById('subir')
        subir.style.display = 'none'
    } else {
        let subir = window.document.getElementById('subir')
    subir.style.display = 'block'
    }
});