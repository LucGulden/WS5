//var titre_article = "Article 1"

var app = new Vue({
    el: '#app',
    data: {
        articles:[
            {
                titre_article: 'Article 1',
                desc_article: 'Voici mon article 1 :)',
                img: './assets/img/article1.jpg',
                is_liked: false
            },
            {
                titre_article: 'Article 2',
                desc_article: 'Voici mon article 2 :)',
                img: './assets/img/article2.jpg',
                is_liked: false
            }
        ]
    },
    methods: {
        likeArticle: function (article){
            article.is_liked = !article.is_liked
        }
    }
  })