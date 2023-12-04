document.getElementById('titulo').innerText = 'Título do Projeto';
document.getElementById('link').innerText = 'Proz Educação';

document.querySelector('ul').innerHTML = '<li>Item 1</li><li>Item 2</li><li>Item 3</li>';

var olElement = document.getElementById('lista-ordenada');
['https://site1.com', 'https://site2.com', 'https://site3.com'].forEach(function (site, index) {
    olElement.innerHTML += `<li><a href="${site}">Link ${index + 1}</a></li>`;
});
