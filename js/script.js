function mostrarPcd(championName) {
    var Pcdselecionados = {
        'Bruno': '../img/Bruno_Select.png',
        'Caleb': '../img/CalebChampion.jpg',
        'Carlos': '../img/CarlosChampion.jpg',
        'David': '../img/david_select.png',
        'Lucas': '../img/LucasChampion.jpg',
        'Mestre Arthur': '../img/MestreArthurChampion.jpg',
        'Pedro': '../img/pedro_Select.png',
        'Átila': '../img/Átila_Select.png'
    };

    var Pcdselecionado = document.getElementById('Pcdselecionado');
    Pcdselecionado.innerHTML = '<img src="' + Pcdselecionados[championName] + '" alt="' + championName + '">';
}
