(function () {
    var app = angular.module('store', []);
    app.controller('StoreController', function() {
        this.products = gems;
    });
    
    app.controller('PanelController', function() {
        this.tab = 1;
        this.selectTab = function(setTab) {
            this.tab = setTab;
        };
        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        };
    });

    app.controller("ReviewController", function () {
        this.review = {};

        this.addReview = function (product) {
            product.reviews.push(this.review);
            this.review = {};
        };
    });

    var gems = [
        {
            name: 'Dodecahedron',
            price: 2.95,
            description: 'this is our best gem because it has a lot  of colors and properties thar cure the cancer',
            canPurchase: true,
            images: [
                {
                    full:'/Content/img/gem-02.jpg',
                    thumb:'/Content/img/gem-02.jpg',
                }
            ],
            reviews: [
                {
                    stars: 5,
                    body: "I love this product",
                    author: "joe@thomas.com"
                },
                {
                    stars: 1,
                    body: "This product sucks",
                    author: "tim@hater.com"
                }
            ]
        },
        {
            name: 'Pentagonal Gem',
            price: 5.95,
            description: '. . .',
            canPurchase: false
        }  
    ];
})();