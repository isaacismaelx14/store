export const routes = {
    home:'/',
    cart:'/cart',
    login:'/login',
    register:'/register',
    stores:'/stores',
    profiles: (id?:number) => id ? `/profiles/${id}` : '/profiles/:id',
    products: {
        home: '/products',
        byId: (id?:number) => id ? `/products/${id}` : '/products/:id',
        add: '/products/add'
    },
    profile:{
        edit:'/profile/edit',
        details: '/profile-details'
    },
    seller:{
        add: '/seller/add'
    }
}