Vue.component('header-component', {
    template: `<div class="header">
    <div class="logo">
        <a href="index.html"><img src="images/logo.png" alt=""/> </a>
    </div>
    <!-- start header_right -->
    <div class="header_right">
    <div class="create_btn">
        <a class="arrow"  href="registration.html">create account <img src="images/right_arrow.png" alt=""/>  </a>
    </div>
    <ul class="icon1 sub-icon1 profile_img">
        <li><a class="active-icon c2" href="#"> </a>
            <ul class="sub-icon1 list">
                <li><h3>shopping cart empty</h3><a href=""></a></li>
                <li><p>if items in your wishlit are missing, <a href="">login to your account</a> to view them</p></li>
            </ul>
        </li>
    </ul>
    <ul class="icon1 sub-icon1 profile_img">
        <li><a class="active-icon c1" href="#"> </a>
            <ul class="sub-icon1 list">
                <li><h3>wishlist empty</h3><a href=""></a></li>
                <li><p>if items in your wishlit are missing, <a href="">login to your account</a> to view them</p></li>
            </ul>
        </li>
    </ul>
    <div class="search">
        <form>
            <input type="text" value="" placeholder="search...">
            <input type="submit" value="">
        </form>
    </div>
    <div class="clearfix"></div>
    </div>
    <!-- start header menu -->
    
</div>`
});

Vue.component('product', {
    template: '#product-template',
    replace: true,
    props: ['datas']

});

var v = new Vue({
    el: '#app',

    data: {
        productList: null,
        columns: 4,
        groups: null,
    },
    computed: {
        dataList: function () {
            var len = this.productList.length;
            var datalist = [];
            for (var i = 0; i < len; i += this.columns) {
                datalist.push(this.productList.slice(i, i + this.columns));
            }
            return datalist;
        }
    },
    created: function () {
        this.fetchData();
    },
    methods: {
        fetchData: function () {

            this.productList = [
                { code: 'w1', name: 'DUIS AUTEMCC', imgUrl: 'images/w1.jpg', price: '499', desc: 'this is a desc text.' },
                { code: 'w2', name: 'DUIS AUTEMUU', imgUrl: 'images/w2.jpg', price: '500', desc: 'this is a desc text.' },
                { code: 'w3', name: 'DUIS AUTEMXX', imgUrl: 'images/w3.jpg', price: '600', desc: 'this is a desc text.' },
                { code: 'w4', name: 'DUIS AUTEMFF', imgUrl: 'images/w4.jpg', price: '700', desc: 'this is a desc text.' },
                { code: 'w4', name: 'DUIS AUTEMFF', imgUrl: 'images/w4.jpg', price: '700', desc: 'this is a desc text.' },
                { code: 'w4', name: 'DUIS AUTEMFF', imgUrl: 'images/w4.jpg', price: '700', desc: 'this is a desc text.' },
                { code: 'w4', name: 'DUIS AUTEMFF', imgUrl: 'images/w4.jpg', price: '700', desc: 'this is a desc text.' },
                { code: 'w4', name: 'DUIS AUTEMFF', imgUrl: 'images/w4.jpg', price: '700', desc: 'this is a desc text.' },
                { code: 'w4', name: 'DUIS AUTEMFF', imgUrl: 'images/w4.jpg', price: '700', desc: 'this is a desc text.' },
                { code: 'w4', name: 'DUIS AUTEMFF', imgUrl: 'images/w4.jpg', price: '700', desc: 'this is a desc text.' },
            ];
            this.groups=['WOMEN', 'NEW ARRIVALS'];
        }
    }
});  