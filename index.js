/* 1) Observe o trecho de código abaixo: int INDICE = 13, SOMA = 0, K = 0;
Enquanto K < INDICE faça { K = K + 1; SOMA = SOMA + K; }
Imprimir(SOMA);
Ao final do processamento, qual será o valor da variável SOMA? */

const soma = Array.from({ length: 13 }, 
    (_, i) => i + 1).reduce((acc, cur) => 
        acc + cur, 0
);
console.log(soma);

/*2) Dado a sequência de Fibonacci, onde se inicia por 0 e 1 e o próximo valor sempre será a 
soma dos 2 valores anteriores (exemplo: 0, 1, 1, 2, 3, 5, 8, 13, 21, 34...), escreva um programa na 
linguagem que desejar onde, informado um número, ele calcule a sequência de Fibonacci e retorne uma mensagem avisando 
se o número informado pertence ou não a sequência.*/

function Fibonacci(n) {
    let [a,b] = [0,1];
    while (a <= n) {
        if(a === n) return`${(n)} Pertence a sequência de Fibonacci`;
        [a,b] = [b, a + b];
     }
     return `${n} não pertence`
}
console.log(Fibonacci(34));

/* 3) Dado um vetor que guarda o valor de faturamento diário de uma distribuidora, faça um programa, na linguagem que desejar, que calcule e retorne:
• O menor valor de faturamento ocorrido em um dia do mês;
• O maior valor de faturamento ocorrido em um dia do mês;
• Número de dias no mês em que o valor de faturamento diário foi superior à média mensal. */
const faturamnetoDiario = require('./faturamento.json')
function faturamento(dados) {
    const faturamentoValido = dados.filter(dia => dia.valor > 0);
    const menorFat = Math.min(...faturamentoValido.map(dia => dia.valor)); 
    const maiorFat = Math.max(...faturamentoValido.map(dia => dia.valor));

    //Media mensal
    const total = dados.reduce((acc, curr) => acc + curr.valor, 0);
    const mediaMensal = total / dados.length;
    
    //Dias com faturamento superior a media mensal.
    const diasAcimaMedia = dados.filter(dia => dia.valor > mediaMensal).length;

    return {
        menorFat,
        maiorFat,
        diasAcimaMedia
    };
}
const result = faturamento(faturamnetoDiario);
console.log(result.diasAcimaMedia)

/* 4) Dado o valor de faturamento mensal de uma distribuidora, detalhado por estado:
• SP – R$67.836,43
• RJ – R$36.678,66
• MG – R$29.229,88
• ES – R$27.165,48
• Outros – R$19.849,53

Escreva um programa na linguagem que desejar onde calcule o percentual de representação que cada estado teve 
dentro do valor total mensal da distribuidora.  */

const fatPorEstado = {
    SP: 67836.43,
    RJ: 36678.66,
    MG: 29229.88,
    ES: 27165.48,
    Outros: 19849.53,
};
function calcularPercentual(faturamento) {
    const totalFaturamento = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0); //valor total

    const percentuais = {};
    for (let estado in faturamento) {
        const percentual = ((faturamento[estado] / totalFaturamento) * 100).toFixed(2);
        percentuais[estado] = percentual
    }
    return percentuais;
}
const percentuaisEstados = calcularPercentual(fatPorEstado)
for(let estado in percentuaisEstados) {
    console.log(`${estado}:${percentuaisEstados[estado]}%`)
}

/* 5) Escreva um programa que inverta os caracteres de um string.

IMPORTANTE:
a) Essa string pode ser informada através de qualquer entrada de sua preferência ou pode ser previamente definida no código;
b) Evite usar funções prontas, como, por exemplo, reverse; */

function invertString(str) {
    let strInvertida = ''

    for(let i = str.length -1; i >= 0; i--) {
        strInvertida += str[i];
    }
    return strInvertida;
}
const minhaString = "exemplo de string";
const stringInvertida = invertString(minhaString)
console.log('string original' , minhaString)
console.log('string Invertida', stringInvertida)