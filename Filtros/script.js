//Teste
document.getElementById("search").addEventListener('click', function busca() {
    if (window.innerWidth < 768) {
        document.getElementById('search').classList.add('active');
    } else {
        document.getElementById('search').innerHTML = "Buscando...";
    }

});