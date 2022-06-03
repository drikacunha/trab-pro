function Bolos(nome ) {
	
    this.nome = nome;
    this.cobertura = 'chatily'
    
    this.getInfo = function () {
		return this.nome + " " + this.cobertura;
 
	};
}
    var myBolo = new Bolos('Bolo de chocolate')
    myBolo.cobertura = '//Cobertura de chantilly'

    console.log(myBolo.getInfo())


  
  function Pao(nome ) {
	
    this.nome = nome;
    this.recheio = 'queijo'
    
    this.getInfo = function () {
		return this.nome + " " + this.recheio;
	};
}

 var myPao = new Pao('Pao francês')
  myPao.recheio = '// Recheio de queijo'

  console.log(myPao.getInfo())

  


  function Salgado(nome ) {
	
    this.nome = nome;
    this.recheio = 'frango'
    
    this.getInfo = function () {
		return this.nome + " " + this.recheio;
	};
}

 var mySalgado = new Salgado('Empadinha')
  mySalgado.recheio = '//Recheio De frango'

  console.log(mySalgado.getInfo())


function fabrica() {
    var cliente = [];
    var Bolos = new Bolos();
    var Pao = new Pao();
    var Salgado = new Salgado();

    cliente.push(Bolos.create("chocolate"));
    cliente.push(Pao.create("frances"));
    cliente.push(Salgado.create("frango"))


    for (var i = 0, len = cliente.length; i < len; i++) {
        cliente[i].say();
    }
}