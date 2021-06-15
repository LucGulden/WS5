//var titre_article = "Article 1"

var app = new Vue({
    el: '#app',
    data: {
        titre_article: 'Article 1',
        desc_article: 'Voici mon article 1 :)',
        img: './assets/img/article1.jpg',
        is_liked: false
    },
    methods: {
        likeArticle: function (){
            this.is_liked = !this.is_liked
        }
    }
  })