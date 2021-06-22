import bookApp from './pages/book-app.js'
import appHeader from './cmps/app-header.js'
import appFooter from './cmps/app-footer.js'
import homePage from './pages/home-page.js'
import aboutPage from './pages/about-page.js'
import bookDetails from './pages/book-details.js'

const routes = [
    {
        path: '/',
        component: homePage
    },
    {
        path: '/book',
        component: bookApp
    },
    {
        path: '/about',
        component: aboutPage
    },
    {
        path: '/book/:bookId',
        component: bookDetails
    },
]


const myRouter = new VueRouter({ routes })



const options = {
    el: '#app',
    router: myRouter,
    template: `
    <section>
        <app-header />
        <router-view />
        <app-footer />
    </section>
    `,

    components: {
        bookApp,
        appHeader,
        appFooter
    }
}

const app = new Vue(options)