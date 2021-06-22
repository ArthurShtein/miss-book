import { bookService } from '../services/book-service.js';
import bookList from '../cmps/book-list.js'
import bookFilter from '../cmps/book-filter.js'
import bookDetails from '../pages/book-details.js'



export default {
    template: `
        <section class="book-app">
            <book-filter @filtered="setFilter"/>
            <book-list :books="booksToShow"@remove="removeBook" />
        </section>
    `,
    data() {
        return {
            books: [],
            filterBy: null,
        };
    },

    created() {
        this.loadBooks()
    },

    methods: {
        loadBooks() {
            bookService.query()
                .then(books => {
                    console.log('books bookapp',books);
                    this.books = books
                })
        },

      

        removeBook(id) {
            bookService.remove(id)
                .then(this.loadBooks)
        },

        setFilter(filterBy) {
            console.log(filterBy);
            this.filterBy = filterBy
        }
    },


    computed: {
        booksToShow() {
            if (!this.filterBy) return this.books
            const searchStr = this.filterBy.title.toLowerCase()
            const booksToShow = this.books.filter(book => {
                return book.title.toLowerCase().includes(searchStr)
            })
            return booksToShow
        }
    },

    components: {
        bookList,
        bookFilter,
        bookDetails,
    }
};
