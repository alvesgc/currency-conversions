// Array de Objetos com as Siglas e Nomes das Moedas
const moedas = [
  { sigla: 'USD', nome: 'Dólar' },
  { sigla: 'EUR', nome: 'Euro' },
  { sigla: 'BTC', nome: 'Bitcoin' },
  { sigla: 'JPY', nome: 'Iene Japonês' }
]

// Funções assíncronas para buscar a cotação de cada moeda
async function fetchApi(sigla) {
  try { // Adicionando tratamento de erro
    const response = await fetch(`https://economia.awesomeapi.com.br/json/last/${sigla}-BRL`);
    if (!response.ok) {
      return JSON.stringify({ error: 'Erro ao buscar a cotação' }); // Retorna um erro se a resposta não for ok
    }
    const data = await response.json();
    const chave = `${sigla}BRL`;
    return parseFloat(data[chave].bid);
  }catch(err) {
    console.error('Erro ao buscar a cotação:', err);
    return null;
  }
}

async function convertAll(valor) { // Função para converter o valor em todas as moedas

  if (typeof valor !== 'number') {
    return console.log('Valor inválido!');
  }

  for (const moeda of moedas) {
    const preco = await fetchApi(moeda.sigla);
    const valorConvertido = (valor / preco).toFixed(2);
    console.log(`💱 ${moeda.nome}: ${valor} BRL = ${valorConvertido} ${moeda.sigla}`);
  }
}

convertAll(3000);