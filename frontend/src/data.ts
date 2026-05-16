export const data = {
    banners: [
        { img: '/assets/banners/banner-1.png', link: ''},
        { img: '/assets/banners/banner-2.png', link: ''},
        { img: '/assets/banners/banner-3.png', link: ''},
        { img: '/assets/banners/banner-4.png', link: ''},
    ],
    products: [
        { id: 1, label: 'Camisa JS', price: 25.90, image: '/assets/products/camiseta-js.png', liked: false},
        { id: 2, label: 'Camisa REACT', price: 49.90, image: '/assets/products/camiseta-react-azul.png', liked: false},
        { id: 3, label: 'Camisa Laravel', price: 29.90, image: '/assets/products/camiseta-laravel-branca.png', liked: false},
        { id: 4, label: 'Camisa Node', price: 39.90, image: '/assets/products/camiseta-node.png', liked: false},
    ],
    product: {
        id: 1,
        label:'Camisa React',
        images: [
            '/assets/products/camiseta-react-azul.png',
            '/assets/products/camiseta-js.png'
        ],
        price: 29.90,
        liked: false,
        description: 'Exemplo description product...'

    }
}