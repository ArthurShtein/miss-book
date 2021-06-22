export default {
    template: `
    <section class="book-filter">
        <label> Search Book: </label>
        <input v-model="filterBy.title" type="text" placeholder=" Search... " @input="filter">
    </section>
    `,
    data () {
        return {
            filterBy: {
                title: ''
            }
        }
    },

    methods: {
        filter() {
            this.$emit('filtered', this.filterBy)
        }
    }


};
