let livros = [];
const endPointAPI =
	'https://guilhermeonrails.github.io/casadocodigo/livros.json';

getBuscarLivrosDaAPI();



async function getBuscarLivrosDaAPI() {
	const resp = await fetch(endPointAPI);
	livros = await resp.json();
	let livrosComDesconto = aplicarDesconto(livros)
	criarEstante(livrosComDesconto);
}
