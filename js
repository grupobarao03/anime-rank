const candidatos = {
    12: "Candidato A",
    34: "Candidato B",
    56: "Candidato C"
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
        if (candidatos[voto]) {
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
        <p>Candidato A (12): ${votos[12]} votos</p>
        <p>Candidato B (34): ${votos[34]} votos</p>
        <p>Candidato C (56): ${votos[56]} votos</p>
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
 59 changes: 59 additions & 0 deletions59  
style.css
Original file line number	Diff line number	Diff line change
@@ -0,0 +1,59 @@
body {
    font-family: Arial, sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f4f4f4;
    margin: 0;
}

.urna {
    width: 300px;
    background-color: #fff;
    padding: 20px;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

.display {
    text-align: center;
    margin-bottom: 20px;
}

#num-candidato {
    font-size: 24px;
    text-align: center;
    width: 100%;
    padding: 10px;
    margin-bottom: 10px;
    border: 1px solid #000;
}

.btn {
    width: 80px;
    height: 50px;
    font-size: 18px;
}

.btn-funcao {
    width: 80px;
    height: 50px;
    background-color: #f57c00;
    color: white;
    margin: 5px;
}

#btn-confirma {
    background-color: #4caf50;
}

.btn-numero {
    width: 80px;
    height: 50px;
    font-size: 18px;
}

.resultados {
    margin-top: 20px;
}
0 comments on commit 8b10e00
Please sign in to comment.
Footer
© 2024 GitHub, Inc.
Footer navigation
Terms
Privacy
Securi