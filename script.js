let div = document.querySelector(".container");
let btn = document.querySelector(".downloadBtn");
btn.addEventListener('click', () => {
    html2pdf().from(div).save()

})