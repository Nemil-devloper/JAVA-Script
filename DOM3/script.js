let main = document.getElementById("main");
let arr = 
["https://i.pinimg.com/564x/65/14/e2/6514e2ade7ba2eddff40960d1ec8f507.jpg",
"https://i.pinimg.com/564x/3f/72/2e/3f722e7be5a952584063a35048820e89.jpg",
"https://i.pinimg.com/564x/65/b5/3d/65b53dd2bf30d0ba33cf055e021c2445.jpg",
"https://i.pinimg.com/564x/08/e7/f3/08e7f3f45fd3a34c7e7afdfd2e589e6a.jpg",
"https://i.pinimg.com/564x/8d/66/d9/8d66d96a9893ee18763d913767db869f.jpg",
"https://i.pinimg.com/564x/c3/9d/f1/c39df1e23ef1a98bea3ccba6fe173831.jpg"];
let s = "";
for(let i=1;i<=65;i++){
    let r = Math.floor(Math.random()*arr.length);
    s += `<div class="card"><img src=${arr[r]}></div>`;
}
main.innerHTML = s;

