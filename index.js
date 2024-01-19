// Função para gerar um número aleatório entre min (incluído) e max (excluído)
function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// Lista de 50 heróis
const listaHerois = [
    "Superman", "Batman", "Mulher Maravilha", "Flash", "Aquaman",
    "Lanterna Verde", "Capitão América", "Homem de Ferro", "Thor", "Hulk",
    "Spider-Man", "Black Widow", "Black Panther", "Doctor Strange", "Wolverine",
];

// Objeto para armazenar os níveis de XP
const xpLevels = {
    Ferro: getRandomInt(0, 1000),
    Bronze: getRandomInt(1001, 2001),
    Prata: getRandomInt(2001, 5001),
    Ouro: getRandomInt(5001, 7001),
    Platina: getRandomInt(7001, 8001),
    Ascendente: getRandomInt(8001, 9001),
    Imortal: getRandomInt(9001, 10001),
    Radiante: getRandomInt(10001, 15001)
};

// Objeto para armazenar detalhes dos ranks
const detalhesRanks = {
    Ferro: { descricao: "Inexperiente", habilidade: "Básica" },
    Bronze: { descricao: "Iniciante", habilidade: "Básica" },
    Prata: { descricao: "Competente", habilidade: "Intermediária" },
    Ouro: { descricao: "Experiente", habilidade: "Intermediária" },
    Platina: { descricao: "Proficiente", habilidade: "Avançada" },
    Ascendente: { descricao: "Exímio", habilidade: "Avançada" },
    Imortal: { descricao: "Lendário", habilidade: "Mestre" },
    Radiante: { descricao: "Divino", habilidade: "Mestre Supremo" }
};

// Função para classificar um herói com base na XP
function classificarHeroi(nomeHeroi, xpHeroi) {
    let nivelHeroi;

    if (xpHeroi === 0) {
        nivelHeroi = "Sem Classificação (XP zero)";
    } else if (xpHeroi < xpLevels.Bronze) {
        nivelHeroi = "Ferro";
    } else if (xpHeroi <= xpLevels.Prata) {
        nivelHeroi = "Bronze";
    } else if (xpHeroi <= xpLevels.Ouro) {
        nivelHeroi = "Prata";
    } else if (xpHeroi <= xpLevels.Platina) {
        nivelHeroi = "Ouro";
    } else if (xpHeroi <= xpLevels.Ascendente) {
        nivelHeroi = "Platina";
    } else if (xpHeroi <= xpLevels.Imortal) {
        nivelHeroi = "Ascendente";
    } else if (xpHeroi <= xpLevels.Radiante) {
        nivelHeroi = "Imortal";
    } else {
        nivelHeroi = "Radiante";
    }

    return nivelHeroi;
}

// Função para exibir detalhes do rank do herói escolhido
function exibirDetalhesRank(nivelHeroi) {
    if (detalhesRanks[nivelHeroi]) {
        const detalhes = detalhesRanks[nivelHeroi];
        console.log(`Descrição do Rank: ${detalhes.descricao}`);
        console.log(`Habilidade: ${detalhes.habilidade}`);
    } else {
        console.log("Detalhes do Rank não disponíveis.");
    }
}

// Função para permitir que o usuário escolha um herói
function escolherHeroi() {
    // Exibir lista de heróis
    console.log("Escolha um herói:");

    for (let i = 0; i < listaHerois.length; i++) {
        console.log(`${i + 1}. ${listaHerois[i]}`);
    }

    // Obter a escolha do usuário
    const escolha = prompt("Digite o número do herói desejado: ");
    const indiceHeroi = parseInt(escolha) - 1;

    // Verificar se o índice é válido
    if (indiceHeroi >= 0 && indiceHeroi < listaHerois.length) {
        const heroiEscolhido = listaHerois[indiceHeroi];
        const xpHeróiEscolhido = getRandomInt(0, xpLevels.Radiante + 1000);

        // Classificar e exibir os ranks do herói escolhido
        const nivelHeróiEscolhido = classificarHeroi(heroiEscolhido, xpHeróiEscolhido);
        console.log(`O Herói ${heroiEscolhido} está no nível de ${nivelHeróiEscolhido}`);

        // Exibir detalhes do rank
        exibirDetalhesRank(nivelHeróiEscolhido);
    } else {
        console.log("Escolha inválida. Tente novamente.");
    }
}

// Permitir que o usuário escolha um herói
escolherHeroi();
