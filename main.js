// const text =document.getElementById("text")
// console.log(text);


// const text=document.getElementsByTagName("h1")
// console.log(text);

// const text=document.getElementsByClassName('box')
// console.log(text);



//  document.querySelector('#hello').textContent="Hello World"


document.querySelector(".button").addEventListener('click',()=>{

// var flex =document.querySelector(".main-card")
// if(flex.style.flexDirection=="row"){
//     flex.style.flexDirection="column"
//     console.log("coloum");
// }
// else{
//     flex.style.flexDirection=="row"
//     console.log("row");
// }
document.querySelector('.main-card').style.flexDirection="column"


 })

document.getElementById("heading").style.color="red"


document.querySelector(".button-2").addEventListener('click',()=>{
    document.querySelector(".texts").textContent="Welcome to Elevation academy"

})

setInterval(() => {
    const date = new Date()

    let hr=date.getHours();
    let mi=date.getMinutes();
    let sec=date.getSeconds();
    // console.log(hr,mi,sec);
    if(hr>12){
       
       hr=hr-12
    }
     document.querySelector(".hour").textContent=hr
    document.querySelector(".min").textContent=mi
    document.querySelector(".sec").textContent=sec

}, 1000);
document.querySelector('.time').style.display="flex"
document.querySelector('.time').style.color="red"
document.querySelector('.time').style.backgroundColor="black"
document.querySelector('.time').style.justifyContent="centre"


let saal= document.querySelector('#text-input').value
document.querySelector(".year").textContent=`selected year${saal}`

