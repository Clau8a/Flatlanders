(function () {
    var app = angular.module('store', []);
    app.controller('StoreController', function () {
        this.products = gems;
    });
    
    app.controller('PanelController', function () {
        this.tab = 1;
        this.selectedTab = function (setTab) {
            this.tab = setTab;
        };
        this.isSelected = function(checkTab){
            return this.tab === checkTab;
        };
    });

    var gems = [
        {
            name: 'Dodecahedron',
            price: 2.95,
            description: 'this is our best gem because has a lot  of colors and properties thar cure the cancer',
            canPurchase: true,
            images: [
                {
                    full:'/Content/img/gem-02.jpg',
                    thumb:'/Content/img/gem-02.jpg',
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