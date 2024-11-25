let x = document.getElementById("ele1");
let y = document.getElementById("ele2");

x.addEventListener("click",function(){
    x.innerHTML = "NO";
})

x.addEventListener("mouseleave",function(){
    x.innerHTML = "YES";
})

y.addEventListener("click",function(){
    y.innerHTML = "YES";
})

y.addEventListener("mouseleave",function(){
    y.innerHTML = "NO";
})