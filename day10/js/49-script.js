let numberEl=document.querySelector("#inpNumber")
let tahminEl=document.querySelector(".btn-tahmin")
let baslaEl=document.querySelector(".btn-basla")
let sonucEl=document.querySelector("#sonuc")

const randomNumber = (max,min) => {
 return   Math.floor(Math.random()*(max-min+1)+min)
}

let  randomNumberOlustur;

const basla = () => { 
    randomNumberOlustur= randomNumber(100,1)
   tahminEl.style.display="inline-block" ;
   baslaEl.style.display="none";
   numberEl.focus()
 }

const tahminEt = () => {
    let number=Number(numberEl.value)
    number ??=0

    if(number<1 || number>100) {
        sonucEl.innerHTML="1-100 arasinda bir sayi giriniz"
        return;
    }
    if(number<randomNumberOlustur){
        sonucEl.innerHTML="Lutfen Daha buyuk sayi giriniz"

    }else if(number>randomNumberOlustur){
        sonucEl.innerHTML="Lutfen Daha kucuk sayi giriniz"

    }else{
        sonucEl.innerHTML="Tebrikler tahmininiz dogru"
        tahminEl.style.display="none"
        baslaEl.style.display="inline-block"
    }
    numberEl.value="";
    numberEl.focus()
}
