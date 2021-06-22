import bookPreview from './book-preview.js'


export default {
    props: ['books'],
    template: `
    <ul class="book-list"> 
        <li v-for="book in books" :key="book.id" class="book-preview-container">
            <book-preview :book="book" @click.native="log(book.id)"/>
            <div class="more"> 
                <button @click="remove(book.id)"> x </button>
                <router-link :to="'book/'+book.id"> More Details</router-link>
            </div>
        </li>
    </ul>` ,

    methods: {
        select(book) {
            console.log('Showing more...');
            this.$emit('selected', book)
        },

        remove(bookId) {
            console.log('Removing...');
            this.$emit('remove', bookId)
        },

        log(id) {
            console.log('logging the id', id);
        }
    },

    components: {
        bookPreview
    }
};