export type Product = {
    name: string,
    price: number,
    desc: string,
    img: string,
    id: number,
    qtdEstoque: number
}

export const produtos = [
    {
        name: "Mouse Gamer",
        desc: "Mouse da logitec de muita qualidade",
        price: 130,
        img: "mouse.jpg",
        id: 0,
        qtdEstoque: 5
    },
    {
        name: "Monitor Gamer",
        desc: "Monitor da LG com muitas polegadas para jogar games",
        price: 3000,
        img: "monitor.jpg",
        id: 1,
        qtdEstoque: 10

    },
    {
        name: "CD Windows",
        desc: "Licença digital do windows 10 ",
        price: 30,
        img: "windows.jpg",
        id: 2,
        qtdEstoque: 0
    },
    {
        name: "Razer Kraken",
        desc: "Headset De altíssima qualidade para gamers",
        price: 30,
        img: "kraken.jpg",
        id: 3,
        qtdEstoque: 2
    },
    {
        name: "Teclado Kumara",
        desc: "teclado mecânico muito brabo",
        price: 220,
        img: "teclado.jpg",
        id: 4,
        qtdEstoque: 100
    }

]