export default {
    props: ['book'],
    template: `
    <div v-if="book" class="book-preview"> 
        <p> Movie Title: {{book.title}} </p>    
        <p> List Price: {{book.listPrice?.amount}}{{currencyIcon}}</p> 
    </div>
    `,

    computed: {
        currencyIcon() {
            if (this.book.listPrice.currencyCode === 'EUR') return '€';
            if (this.book.listPrice.currencyCode === 'USD') return '$';
            if (this.book.listPrice.currencyCode === 'ILS') return '₪';
        }
    }
}