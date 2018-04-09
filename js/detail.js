
var v = new Vue({
    el: '#app',

    data: {
        num_actual: 1,
        min: 1,
        max: 10
    },

    computed: {
        num: {
            get: function () {
                return this.num_actual;
            },
            set: function (newValue) {
                if (!isNaN(newValue)) {
                    this.num_actual = newValue < this.min ? this.min : newValue > this.max ? this.max : newValue;
                }
            }
        }
    },
    methods: {

        buy: function (event) {
            event.preventDefault();
            alert()
        }
    }


});  