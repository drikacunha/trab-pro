function Briquedos ( modelo, marca ) {
	
	this.modelo = modelo;
	this.marca = marca;

	this.toString = function () {
		return this.modelo + " barbie " + this.marca + " reais";
	};
}

var boneca = new Briquedos( "Boneca", 20000 );
var carinho = new Briquedos( "carinho", 5000 );

console.log( boneca.toString() );
console.log( carinho.toString() ); 