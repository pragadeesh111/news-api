
    
async function api(){
    var url_api = 'https://api.currentsapi.services/v1/latest-news?' +
    'apiKey=eNty5AveeLOhsYV-3hw7R-gntSnfCR9m33PFd55oMF7fmwvI';
    var news_api = fetch(url_api);
    var prom = await (await news_api).json();
    console.log(prom);
    for(let i of prom.news){
        var container = document.querySelector('.container');

        var parent = document.createElement('div');
        parent.classList.add('parent');

        //images
        var news_img = document.createElement('img');
        news_img.setAttribute('src',i.image);
        parent.append(news_img);

        //published
        var news_publish = document.createElement('p');
        news_publish.innerText = "Publish date : "+ i.published;
        parent.append(news_publish);

        //category
        var news_category = document.createElement('p');
        news_category.innerText = "Category : "+ i.category[0];
        parent.append(news_category);

        //title
        var news_tab = document.createElement('a');
        news_tab.setAttribute('href', i.url);
        news_tab.setAttribute('target', '_blank');
        var news_title = document.createElement('h6');
        news_title.innerText = i.title;
        news_tab.append(news_title);
        parent.append(news_tab);

        //description
        var news_describ = document.createElement('p');
        news_describ.innerText = "Description : "+ i.description;
        parent.append(news_describ);

        //button
        var tab2 = document.createElement('a');
        tab2.setAttribute('href', i.url);
        tab2.setAttribute('target', '_blank');
        var read_btn = document.createElement('button');
        read_btn.innerHTML = "Read more";
        tab2.append(read_btn);
        parent.append(tab2);



        container.append(parent);
    }

}
api()