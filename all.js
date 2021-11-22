import {
    createApp
} from "https://cdnjs.cloudflare.com/ajax/libs/vue/3.2.22/vue.esm-browser.js"


createApp({
    data() {
        return {
            products: [{
                    id: 0,
                    type: "蛋糕",
                    imgSrc: "https://images.unsplash.com/photo-1558234469-50fc184d1cc9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",
                    subImgSrc: {
                        first: "https://images.unsplash.com/photo-1622622008494-60c9e6b41996?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1922&q=80",
                        second: "https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80",

                    },
                    description: "濃郁的草莓風味，中心填入滑順不膩口的卡士達內餡，帶來滿滿幸福感！",
                    size: "14x14cm",
                    title: "草莓莓果夾心圈",
                    originPrice: 150,
                    actralPrice: 99,
                    isactive: true,

                },
                {
                    id: 1,
                    type: "蛋糕",
                    imgSrc: "https://images.unsplash.com/photo-1515754164677-ec9796621bcb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                    subImgSrc: {
                        first: "https://images.unsplash.com/photo-1591144090821-111eb897e118?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTh8fGxlbW9uJTIwY2FrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                        second: "https://images.unsplash.com/photo-1543508185-225c92847541?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",

                    },
                    description: "蜜蜂蜜蛋糕，夾層夾上酸酸甜甜的檸檬餡，清爽可口的滋味讓人口水直流！",
                    size: "6寸",
                    title: "蜂蜜檸檬蛋糕",
                    originPrice: 1000,
                    actralPrice: 900,
                    isactive: true,

                },
                {
                    id: 2,
                    type: "蛋糕",
                    imgSrc: "https://images.unsplash.com/photo-1623888884968-b5a895f882dc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
                    subImgSrc: {
                        first: "https://images.unsplash.com/photo-1606890737304-57a1ca8a5b62?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hvY29sYXRlJTIwY2FrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
                        second: "https://images.unsplash.com/photo-1540337706094-da10342c93d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2hvY29sYXRlJTIwY2FrZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",

                    },
                    description: "法式煎薄餅加上濃郁可可醬，呈現經典的美味及口感。",
                    size: "6寸",
                    title: "暗黑千層",
                   
                    originPrice: 700,
                    actralPrice: 600,
                    isactive: true,

                }


            ],
            showDetailData: {}
        }
    },
    methods: {
        showDetail(e) {

            this.showDetailData = this.products[e.target.dataset.id];

        },
        isActiveChange(e){
            this.products[e.target.dataset.id].isactive = ! this.products[e.target.dataset.id].isactive;
        }
    },

}).mount('#app');