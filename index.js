console.log(`Listas`);
console.log(`Cidades que já visitei: `);

const curitiba = `Curitiba`;
const SaoPaulo = `São Paulo`;
const morretes = `Morretes`;
const ribeiraoClaro= `Ribeirão Claro`;
const jacarezinho = `Jacarezinho`;

//console.log(curitiba, SaoPaulo, morretes, ribeiraoClaro, jacarezinho);//

const cidadesQueJaVisitei = new Array(
  `Curitiba`, //0//
  `São Paulo`, //1/
  `Morretes`, //2/
  `Ribeirão Claro`, //3/
  `Jacarezinho` //4/
);

//cidadesQueJaVisitei.push(`Jacarezinho`);//

console.log(cidadesQueJaVisitei);

console.log(`A cidade mais bonita: `);
console.log(cidadesQueJaVisitei[3]);

console.log(` Meus amigos disseram que eu nunca visitei Morretes`);

cidadesQueJaVisitei.splice(2, 1);
//splice deleta o iten e os itens que vem depois do item indicado//
// 1°num no splice diz a posição do elemento que será excluído//
//2°num informa quantos elementos serão excluídos//

console.log(cidadesQueJaVisitei);