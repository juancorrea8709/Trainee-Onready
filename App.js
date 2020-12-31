/*function Carros (Marca, Modelo, Puertas, Precio) {
    this.Marca = Marca;
    this.Modelo = Modelo;
    this.Puertas = Puertas;
    this.Precio = Precio;
};

function Motos (Marca, Modelo, Cilindrada, Precio) {
    this.Marca = Marca;
    this.Modelo = Modelo;
    this.Cilindrada = Cilindrada;
    this.Precio = Precio;
}

    let carro1 = new Carros("Peugeot", 206, 4, "$200.000,00");
        console.log(carro1)

    let moto1 = new Motos("Honda", "Titan", "125cc", "$60.000,00");
        console.log(moto1)

    let carro2 = new Carros("Peugeot", 208, 5, "$250.000,00");
        console.log(carro2)

    let moto2 = new Motos("Yamaha", "YBR", "160cc", "$80.500,50");
        console.log(moto2)

let concesionario = [carro1, moto1, carro2, moto2];
    console.log(concesionario);*/


const concesionario = [
    {
        Marca: "Peugeot",
        Modelo: 206,
        Puertas: 4,
        Precio: 20000000,        
    },
    {
        Marca: "Honda",
        Modelo: "Titan",
        Cilindrada: "125cc",
        Precio: 6000000,
    },
    {
        Marca: "Peugeot",
        Modelo: 208,
        Puertas: 5,
        Precio: 25000000,
    },
    {
        Marca: "Yamaha",
        Modelo: "YBR",
        Cilindrada: "160cc",
        Precio: 8050050,
    }
];

console.log(concesionario);

const items = concesionario.filter(item => item.Precio > 24000000);
    console.log(items);

const items1 = concesionario.filter(item => item.Precio < 7000000);
    console.log(items1);

const items2 = concesionario.find(item => {
    return (/Y/g).test(item.Modelo)})
    console.log(items2);

concesionario.sort((a, b) => {
    if (a.Precio > b.Precio) {
        return -1;
    }
    if (a.Precio < b.Precio) {
        return 1;
    }
    return 0;
});
    console.log(concesionario);







