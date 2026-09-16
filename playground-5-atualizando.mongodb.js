// ATIVIDADE 3 - BANCO DE DADOS 3
// ETEC de Embu
// BD3-NoSQL-Produtos
// Collection: bd3-nosql-atv7


// Seleciona o banco de dados
use("BD3-NoSQL-Produtos");


// Limpa a collection caso já existam dados
db.getCollection("bd3-nosql-atv7").deleteMany({});


// 1. INSERIR 10 PRODUTOS
db.getCollection("bd3-nosql-atv7").insertMany([
    {
        cod_produto: 1,
        nome_produto: "Notebook",
        desc_produto: "Notebook para estudos e trabalho",
        valor: 2500.00
    },
    {
        cod_produto: 2,
        nome_produto: "Mouse Gamer",
        desc_produto: "Mouse gamer com iluminação RGB",
        valor: 150.00
    },
    {
        cod_produto: 3,
        nome_produto: "Teclado Mecânico",
        desc_produto: "Teclado mecânico para jogos",
        valor: 450.00
    },
    {
        cod_produto: 4,
        nome_produto: "Monitor 24",
        desc_produto: "Monitor Full HD de 24 polegadas",
        valor: 700.00
    },
    {
        cod_produto: 5,
        nome_produto: "Headset",
        desc_produto: "Headset com microfone",
        valor: 320.00
    },
    {
        cod_produto: 6,
        nome_produto: "SSD 1TB",
        desc_produto: "SSD de 1TB para armazenamento",
        valor: 550.00
    },
    {
        cod_produto: 7,
        nome_produto: "Placa de Vídeo",
        desc_produto: "Placa de vídeo para jogos",
        valor: 950.00
    },
    {
        cod_produto: 8,
        nome_produto: "Webcam",
        desc_produto: "Webcam Full HD",
        valor: 280.00
    },
    {
        cod_produto: 9,
        nome_produto: "Cadeira Gamer",
        desc_produto: "Cadeira gamer ergonômica",
        valor: 850.00
    },
    {
        cod_produto: 10,
        nome_produto: "HD Externo",
        desc_produto: "HD externo de 2TB",
        valor: 400.00
    }
]);


// 2. PRODUTOS COM VALOR MAIOR QUE 700
db.getCollection("bd3-nosql-atv7").find({
    valor: { $gt: 700 }
});


// 3. PRODUTOS COM VALOR MENOR QUE 450
db.getCollection("bd3-nosql-atv7").find({
    valor: { $lt: 450 }
});


// 4. PRODUTOS COM VALOR ENTRE 500 E 950
db.getCollection("bd3-nosql-atv7").find({
    valor: {
        $gte: 500,
        $lte: 950
    }
});