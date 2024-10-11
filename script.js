const candidatos = {
    12: "Nanatsu no taizai",
    34: "dragon ball",
    56: "one piece"
};

const votos = {
    12: 0,
    34: 0,
    56: 0,
    branco: 0,
    nulo: 0
};

let voto = '';

document.querySelectorAll('.btn-numero').forEach((button) => {
    button.addEventListener('click', () => {
        if (voto.length < 2) {
            voto += button.getAttribute('data-numero');
            document.getElementById('num-candidato').value = voto;
            mostrarCandidato(voto);
        }
    });
});

document.getElementById('btn-corrigir').addEventListener('click', () => {
    voto = '';
    document.getElementById('num-candidato').value = '';
    document.getElementById('nome-candidato').innerText = '';
});

document.getElementById('btn-branco').addEventListener('click', () => {
    voto = 'Branco';
    document.getElementById('num-candidato').value = 'Branco';
    document.getElementById('nome-candidato').innerText = 'Voto em Branco';
});

document.getElementById('btn-confirma').addEventListener('click', () => {
    if (voto === 'Branco') {
        votos.branco++;
        alert('Voto em branco confirmado!');
    } else if (voto.length === 2) {
        if (dragon ball[voto]) {
            votos[voto]++;
            alert(`Voto em ${candidatos[voto]} confirmado!`);
        } else {
            votos.nulo++;
            alert('Voto nulo confirmado!');
        }
    } else {
        alert('Voto inválido!');
    }
    resetUrna();
});

document.getElementById('btn-resultados').addEventListener('click', () => {
    const resultadoDiv = document.getElementById('resultado-votos');
    resultadoDiv.innerHTML = `
        <p>Nanatsu no taizai A (12): ${votos[12]} votos</p>
        <p>dragon ball B (34): ${votos[34]} votos</p>
        <p>one piece C (56): ${votos[56]} votos</p>
        <p>Votos em Branco: ${votos.branco}</p>
        <p>Votos Nulos: ${votos.nulo}</p>
    `;
});

function mostrarCandidato(voto) {
    const nomeCandidato = candidatos[voto] || 'Voto Nulo';
    document.getElementById('nome-candidato').innerText = nomeCandidato;
}

function resetUrna() {
    voto = '';
    document.getElementById('num-candidato').value = '';
    document.getElementById('nome-candidato').innerText = '';
}