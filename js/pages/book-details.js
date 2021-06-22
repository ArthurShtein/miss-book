import { bookService } from "../services/book-service.js";
import bookReview from "../cmps/book-review.js";


export default {
    template: `
    <section v-if="book"  class="book-details app-main">
        <h2> {{book.title}} </h2>   
        <img :src="book.thumbnail"> 
        <p> List Price: {{book.listPrice.amount}}{{currencyIcon}}</p> 
        <book-review :book="book"></book-review> 
        <router-link to="/book"> Back to books </router-link>
    </section>
    <!-- <section v-else class="loading"> Loading ... </section> -->

    `,
    data() {
        return {
            book: null,
        }
    },

    created() {
        const { bookId } = this.$route.params
        bookService.getById(bookId)
            .then((book) => {
                this.book = book
                console.log('book', book);
            })
    },

    computed: {
        currencyIcon() {
            if (this.book.listPrice.currencyCode === 'EUR') return '€';
            if (this.book.listPrice.currencyCode === 'USD') return '$';
            if (this.book.listPrice.currencyCode === 'ILS') return '₪';
        }
    },

    components: {
        bookReview
    }
}

