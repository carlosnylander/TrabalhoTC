// Expressões regulares para validar diferentes tipos de entrada
const regexValidations = {
    nome: /^[A-Z][a-z]*(?: [A-Z][a-z]*){0,1} [A-Z][a-z]*$/,
    email: /^[^\s@]+@[^\s@]+\.(?:com\.br|br)$/,
    senha: /^(?=.*[A-Z])(?=.*[0-9])[a-zA-Z0-9]{8}$/,
    cpf: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
    telefone: /^(\(\d{2}\) 9\d{4}-\d{4}|\(\d{2}\) 9\d{8}|\d{2} 9\d{8})$/,
    dataHorario: /^(0[1-9]|[1-2][0-9]|3[01])\/(0[1-9]|1[0-2])\/\d{4} (0\d|1\d|2[0-3]):([0-5]\d):([0-5]\d)$/,
    numeroReal: /^([-+]?[0-9]+(\.[0-9]+)?|[+-]?[0-9]*\.[0-9]+)$/
};

// Função para validar a entrada
function validateInput(input, type) {
    const regex = regexValidations[type];
    return regex.test(input);
}

// Exemplos de entrada para testar
const exemplos = [
    { entrada: "Ada Lovelace", tipo: "nome" },
    { entrada: "ada@lovelace.com.br", tipo: "email" },
    { entrada: "SenhaSe2", tipo: "senha" },
    { entrada: "123.456.789-09", tipo: "cpf" },
    { entrada: "(91) 99999-9999", tipo: "telefone" },
    { entrada: "31/08/2019 20:14:55", tipo: "dataHorario" },
    { entrada: "-25.467", tipo: "numeroReal" }
];

// Testando as entradas
exemplos.forEach(exemplo => {
    const { entrada, tipo } = exemplo;
    const isValid = validateInput(entrada, tipo);
    console.log(`${entrada} é uma entrada válida do tipo ${tipo}? ${isValid}`);
});
