
import { bookService } from "../services/book-service.js";

export default {
    props: ['book-rate', 'book'],
    template: `
    <div class="book-review-container">
        <h3>Rate this book: </h3>

        <form @submit.prevent="addReview">
            
            <label for="name"> Full name: </label>
            <input v-model="review.name" id="fullname" type="text" placeholder="Full name">
            <label for="rating"> Rating - 1 is the lowest and 5 is the highest:</label>
            <select v-model.number="review.rate" id="rate" name="rating">
                <option disabled value=""></option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
            </select>
            
            <label for=""> When did you read the book? </label>
            <input v-model="review.date" id="date" type="date">
            <label for="review">Your review:</label>
            <input v-model="review.txt" type="text">
            <button class="submit" @click="addReview(book.id)"> Submit rating </button>
        </form>

        {{review}}
    </div>
    `,


    data() {
        return {
            review: {
                name: '',
                rate: 0,
                date: '',
                txt: '',
            }
        }
    },

    methods: {
        addReview(bookId) {
            console.log(bookId);
            // console.log(this.review);
            bookService.newReview(bookId,this.review)

        }
    }
}
