export async function fetchApi(sigla) {
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