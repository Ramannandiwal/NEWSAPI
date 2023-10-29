let query =window.location.search.split("?")[1].split("&")[0].split("=")[1];
let pageNo=parseInt(window.location.search.split("?")[1].split("&")[1].split("=")[1]);
console.log(pageNo)
let articlesPerPage;
let totalpage;
const fetchNews= async(query,pageNo)=>{
     let a = await fetch(`https://newsapi.org/v2/everything?q=${query}&from=2023-09-29&sortBy=publishedAt&apiKey=f48af28ceaad458ab77de602ef32d34a&pageSize=12&page=${pageNo}`)
     let r = await a.json();
     totalpage=Math.ceil(r.totalResults/articlesPerPage);
   let pre=document.querySelector('#pre');
   let next=document.querySelector('#next');
  pre.href=`/?q=${query}&pageno=${pageNo-1}`;
  next.href=`/?q=${query}&pageno=${pageNo+1}`;
  let str="";
  for(let item of r.articles){
        str =str+`
        <!-- card start here -->
        <div class="card m-3" style="width: 18rem">
          <img src="${item.urlToImage}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${item.title}</h5>
            <p class="card-text">
            ${item.description}
            </p>
            <a href="${item.url}" class="btn btn-primary">Read more</a>
          </div>
        </div>
        <!-- cards end herer -->
        `

  }
  let content =document.querySelector("#content");
  content.innerHTML=str;
   
}
fetchNews(query,pageNo)