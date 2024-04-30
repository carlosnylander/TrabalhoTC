// Função para verificar se uma família atende aos requisitos de casais heterossexuais
function isCasalHeterossexualMaisVelhoQueFilhos(familia) {
    // Verifica se há pelo menos um casal heterossexual
    if ((familia.includes('H') && familia.includes('M')) || (familia.includes('h') && familia.includes('m'))) {
        // Conta o número de filhas mulheres e filhos homens
        const numFilhasMulheres = (familia.match(/m/g) || []).length;
        const numFilhosHomens = (familia.match(/h/g) || []).length;

        // Verifica as condições
        return (numFilhasMulheres >= 2) || (numFilhosHomens >= 1) || (numFilhosHomens >= 2 && numFilhasMulheres >= 1);
    }
    return false;
}

// Testando a função com exemplo
const familiaA = "HMhmhm";
console.log("a) Atende aos requisitos:", isCasalHeterossexualMaisVelhoQueFilhos(familiaA));

// Função para verificar se uma família atende aos requisitos de casais heterossexuais mais velhos que os filhos e com uma quantidade ímpar de filhas mulheres
function isCasalHeterossexualMaisVelhoQueFilhosComFilhasImpares(familia) {
    // Verifica se há pelo menos um casal heterossexual
    if ((familia.includes('H') && familia.includes('M')) || (familia.includes('h') && familia.includes('m'))) {
        // Conta o número de filhas mulheres
        const numFilhasMulheres = (familia.match(/m/g) || []).length;

        // Verifica se o número de filhas mulheres é ímpar
        return numFilhasMulheres % 2 !== 0;
    }
    return false;
}

// Testando a função com exemplo
const familiaB = "MHmhm";
console.log("b) Atende aos requisitos:", isCasalHeterossexualMaisVelhoQueFilhosComFilhasImpares(familiaB));

// Função para verificar se uma família atende aos requisitos de casais heterossexuais mais velhos que os filhos, com a filha mais velha mulher e o filho mais novo homem
function isCasalHeterossexualMaisVelhoQueFilhosComFilhaMaisVelhaMulherEFilhoMaisNovoHomem(familia) {
    // Verifica se há pelo menos um casal heterossexual
    if ((familia.includes('H') && familia.includes('M')) || (familia.includes('h') && familia.includes('m'))) {
        // Verifica se a filha mais velha é mulher
        if (familia.indexOf('m') < familia.indexOf('h')) {
            return true;
        }
    }
    return false;
}

// Testando a função com exemplo
const familiaC = "mHMhm";
console.log("c) Atende aos requisitos:", isCasalHeterossexualMaisVelhoQueFilhosComFilhaMaisVelhaMulherEFilhoMaisNovoHomem(familiaC));

// Função para verificar se uma família atende aos requisitos de casais homossexuais mais velhos que os filhos, com pelo menos seis filhos, em que os dois primeiros formam um casal e os últimos também
function isCasalHomossexualMaisVelhoQueFilhosComSeisFilhosCasais(familia) {
    // Conta o número de filhos
    const numFilhos = (familia.match(/h|m/g) || []).length;

    // Verifica se há pelo menos seis filhos
    if (numFilhos >= 6) {
        // Verifica se os dois primeiros filhos formam um casal e os últimos também
        const casalInicial = familia[0].toLowerCase() === familia[1].toLowerCase();
        const casalFinal = familia[familia.length - 2].toLowerCase() === familia[familia.length - 1].toLowerCase();
        return casalInicial && casalFinal;
    }
    return false;
}

// Testando a função com exemplo
const familiaD = "HHhhhhmm";
console.log("d) Atende aos requisitos:", isCasalHomossexualMaisVelhoQueFilhosComSeisFilhosCasais(familiaD));

// Função para verificar se uma família atende aos requisitos de casais homossexuais mais velhos que os filhos, em que o sexo dos filhos é alternado conforme a ordem de nascimento
function isCasalHomossexualMaisVelhoQueFilhosComSexoAlternado(familia) {
    // Verifica se há pelo menos dois filhos
    if (familia.includes('h') && familia.includes('m')) {
        // Verifica se o sexo dos filhos é alternado
        for (let i = 0; i < familia.length - 1; i++) {
            if ((familia[i] === 'h' && familia[i + 1] === 'h') || (familia[i] === 'm' && familia[i + 1] === 'm')) {
                return false;
            }
        }
        return true;
    }
    return false;
}

// Testando a função com exemplo
const familiaE = "hMhMhMh";
console.log("e) Atende aos requisitos:", isCasalHomossexualMaisVelhoQueFilhosComSexoAlternado(familiaE));

// Função para verificar se uma família atende aos requisitos de casais homossexuais mais velhos que os filhos, com qualquer quantidade de filhos homens e mulheres, mas que não tiveram dois filhos homens consecutivos
function isCasalHomossexualMaisVelhoQueFilhosSemDoisHomensConsecutivos(familia) {
    // Verifica se há pelo menos dois filhos
    if (familia.includes('h')) {
        // Verifica se não há dois filhos homens consecutivos
        for (let i = 0; i < familia.length - 1; i++) {
            if (familia[i] === 'h' && familia[i + 1] === 'h') {
                return false;
            }
        }
        return true;
    }
    return false;
}

// Testando a função com exemplo
const familiaF = "hHhHhM";
console.log("f) Atende aos requisitos:", isCasalHomossexualMaisVelhoQueFilhosSemDoisHomensConsecutivos(familiaF));

// Função para gerar arranjo de adultos mais velhos que os filhos com os três filhos mais novos não sendo homens
function gerarArranjoAdultosMaisVelhosQueFilhosSemTresFilhosMaisNovosHomens(min, max) {
    // Gerando uma quantidade aleatória de adultos
    const numAdultos = Math.floor(Math.random() * (max - min + 1)) + min;

    // Gerando a família com adultos e filhos
    let familia = '';
    for (let i = 0; i < numAdultos; i++) {
        // Adicionando adultos (H ou M)
        const genero = Math.random() < 0.5 ? 'H' : 'M';
        familia += genero;
    }

    // Adicionando filhos (h ou m)
    const numFilhos = Math.floor(Math.random() * (max - min + 1)) + min;
    for (let i = 0; i < numFilhos; i++) {
        const genero = Math.random() < 0.5 ? 'h' : 'm';
        familia += genero;
    }

    // Verificando se os três filhos mais novos não são homens
    const tresFilhosMaisNovos = familia.slice(-3);
    if (!tresFilhosMaisNovos.includes('h')) {
        return familia;
    } else {
        // Se os três filhos mais novos forem homens, chama a função recursivamente até encontrar um arranjo válido
        return gerarArranjoAdultosMaisVelhosQueFilhosSemTresFilhosMaisNovosHomens(min, max);
    }
}

// Testando a função para gerar arranjo de adultos mais velhos que os filhos com os três filhos mais novos não sendo homens
const arranjoG = gerarArranjoAdultosMaisVelhosQueFilhosSemTresFilhosMaisNovosHomens(3, 10);
console.log("g) Arranjo de adultos mais velhos que os filhos:", arranjoG);
