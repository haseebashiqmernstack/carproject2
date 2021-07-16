let day=document.querySelector('#dayss');
let hour=document.querySelector('#hourss');
let min=document.querySelector('#minss');
let sec=document.querySelector('#secs');

const countdown= () => {
    let futurDate=new Date('25 Jun 2021');
    let today=new Date();
    let date=futurDate - today;
let days=Math.floor(date / 1000 / 60 / 60 / 24);
let hours=Math.floor(date / 1000 / 60 / 60) % 24;
let mins=Math.floor(date / 1000 / 60) % 60;
let secs=Math.floor(date / 1000) % 60;
day.innerHTML=days;
hour.innerHTML=hours;
min.innerHTML=mins;
sec.innerHTML=secs;
}
export const Timer=()=>{
    setInterval(countdown,1000);
}


// export default Timer;