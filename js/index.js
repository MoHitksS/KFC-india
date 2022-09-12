let flag = JSON.parse(localStorage.getItem("flag_value"));

if(flag === true){
    document.querySelector("#signIn_index").innerText = "";
    let a = document.createElement("a");
    a.setAttribute("href","account.html")
    a.innerText = "Account"
    document.querySelector("#signIn_index").append(a);
}


let imgslider=document.querySelector('.offerContainer')
console.log(imgslider.scrollWidth)
let total=imgslider.scrollWidth-400;
let count=0;

document.getElementById('btn').addEventListener('click',function(){
    
    //  count=total;
    count+=200;
    console.log(count,total)
    
    if(count>=total){
        count=0;
    }
    // imgslider.scrollTo(count,0)
    imgslider.scrollTo({
        top:0,
        left:count,
        behavior:'smooth'
    })
   
})

document.getElementById('btn2').addEventListener('click',function(){
    
    // let total=imgslider.scrollWidth;
    count+=200;
    if(count>=total){
        count=0;
    }
    imgslider.scrollTo({
        top:0,
        left:count,
        behavior:'smooth'
    })
    console.log(count,total)
    
   
})