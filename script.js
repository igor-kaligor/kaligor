function route_De(){
    window.location.href = "portifolio.html";
}

function template_img(){
    fetch('https://kflasks.herokuapp.com/')
    .then(function(response){
        return response.json();
    })
    .then( function(myJson){
        /*console.log(myJson)*/
        Timg(myJson)
    })


}
function Timg(json){
    console.log( json[0])
    for (let i = 0; i < json.length; i++) {
        const Div = document.createElement("div");
        const h1 = document.createElement("h1");
        const Img = document.createElement("img");
        h1.innerText=Img.title=json[i][1]+","+json[i][2].toString();
        Div.className='c-img'
        Img.src=json[i][3];
        Img.alt=json[i][1]+","+json[i][2].toString();
        Img.title=json[i][1]+", " +json[i][2].toString();
        json[i];
        Div.appendChild(h1);
        Div.appendChild(Img);
        document.getElementsByClassName('box-p3')[0].appendChild(Div)
        console.log(Div)
        
        
    }

}