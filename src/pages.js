module.exports  = [
    {
      path: '/',
      route: {
        name: 'index',
        meta: {
          requiresAuth: false
        }
      },
      component: './src/views/Index.vue'
    } 
    ,
    {
      path: '/about',
      route: {
        name: 'About',
        meta: {
          requiresAuth: false
        }
      },
      component: './src/views/About.vue'
    }  ,
    {
      path: '/contact',
      route: {
        name: 'Contact',
        meta: {
          requiresAuth: false
        }
      },
      component: './src/views/Contact.vue'
    } ,
    {
      path: '/store',
      route: {
        name: 'Store',
        meta: {
          requiresAuth: false
        }
      },
      component: './src/views/Store.vue'
    }  ,
    {
      path: '/technology',
      route: {
        name: 'Technology',
        meta: {
          requiresAuth: false
        }
      },
      component: './src/views/Technology.vue'
    }  
    ,
    {
      path: '/inventory',
      route: {
        name: 'Inventory',
        meta: {
          requiresAuth: true
        }
      },
      component: './src/views/InventoryUpload.vue'
    }  
    ]