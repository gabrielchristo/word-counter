
function convert(){

	// Verifica campo vazio
	if(document.getElementById("texto").value==""){
		alert("Campo de texto vazio!");
		return none;
	}

	// Número de palavras diferentes
	var tamanho=0;
	
	// Número de palavras totais
	var tamanho_total=0;
	
	// Dicionário para guardar ocorrências de cada palavra
	var words = {};
	
	// Regex para gerar array com palavras do texto eliminando pontuações (pode conter erros)
	// split(/\s+/)
	var arr = document.getElementById("texto").value.toLowerCase().split(/[ ,\[\].()-;—\"\'»?:!]+/).filter(Boolean);

 
	// Para cada palavra na array é incrementado o número de aparições no dicionário
	for (var i in arr){
    	var word = arr[i];
    	if(words[word] === undefined){
        	words[word]=0;
            tamanho++;
        }
    	words[word]++;
		tamanho_total++;
	}
	
	// Array com as entradas do dicionário
    var keys = [];
	for(var k in words) keys.push(k);
	// Ordenação para gerar ordem decrescente das palavras
    keysSorted = Object.keys(words).sort(function(a,b){return words[b]-words[a]});
	// document.write(keysSorted);

	
	// Abre uma janela vazia em nova aba
	var janela = window.open("","_blank");

	// Escrevo número de palavras ímpares e crio a tabela (bootstrap)
	janela.document.write("<h2 align='center'>Result</h1><h4 align='center'>"+tamanho+" odd-words</h4><br>");
    janela.document.write('<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"><table class="table table-striped"><thead><tr><th>Palavra</th><th>Ocorrências</th></tr></thead><tbody>');

	// Link google tradutor -> https://translate.google.com.br/?hl=pt-BR#view=home&op=translate&sl=auto&tl=pt&text=word%20counter
	
	// Para cada palavra escrevo sua entrada na tabela seguindo a ordenação decrescente
    for(i=0;i<tamanho;i++){
		percent = (words[keysSorted[i]]*100/tamanho_total).toFixed(3);
    	janela.document.write("<title>Word Counter - Result</title><tr><td><a target='_blank' href='https://translate.google.com.br/?hl=pt-BR#view=home&op=translate&sl=auto&tl=pt&text="+keysSorted[i]+"'>"+keysSorted[i]+"</a></td><td> "+words[keysSorted[i]]+" <span style='color:#2E8B57'>("+percent+"%)</span></td></tr>");
    }
	
}




