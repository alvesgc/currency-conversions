import { fetchApi } from './fetchApi.js';

export async function convertAll(valor) {

  if (typeof valor == 'number') {
    return console.log('Valor inválido!');
  }

  const moedas = [
    { sigla: 'USD', nome: 'Dólar' },
    { sigla: 'EUR', nome: 'Euro' },
    { sigla: 'BTC', nome: 'Bitcoin' },
    { sigla: 'JPY', nome: 'Iene Japonês' }
  ];

  const valorConvertidoHTML = document.getElementById("valorConvertido");
  if (!valorConvertidoHTML) {
    return console.log('Elemento para mostrar os resultados não encontrado!');
  }

  for (const moeda of moedas) {
    const preco = await fetchApi(moeda.sigla);
    const valorConvertido = (valor / preco).toFixed(2);
    console.log(`💱 ${moeda.nome}: ${valor} BRL = ${valorConvertido} ${moeda.sigla}`);
    
    valorConvertidoHTML.innerHTML += `<p>💱 ${moeda.nome}: ${valor} BRL = ${valorConvertido} ${moeda.sigla}</p>`;
  }

}
