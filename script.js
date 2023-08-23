const btnGenPDF = document.querySelector('#pdf-btn');

btnGenPDF.addEventListener('click', () => {
    const element = document.querySelector('#content');

    const options = {
        margin: [10, 10, 10, 10],
        filename: 'documento-teste.pdf',
        html2canvas: {scale: 2},
        pageBreak: {mode: 'css'},
        jsPDF: {unit: 'mm', format: 'a4', orientation: 'portrait'},
    };

    html2pdf().set(options).from(element).save();
})