window.onload = function () {
    document.getElementById("download")
        .addEventListener("click", () => {
            const invoice = this.document.getElementById("invoice");
            var opt = {
                margin: -0.15,
                filename: 'CV-Homero_Hurtado.pdf',
                image: { type: 'jpeg', quality: 1 },
                html2canvas: { scale: 2 },
                jsPDF: { unit: 'in', format: [10, 17.5], orientation: 'portrait' }
            };
            html2pdf().from(invoice).set(opt).save();
        })
}
