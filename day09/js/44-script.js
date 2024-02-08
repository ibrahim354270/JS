const hesapla = (price,tax,discount) => {

   price ??=0; // price = price ?? 0

   tax ??=0;

   discount ??=0;

   if(discount<=0) tax=0;

   /*
   if(discount<=0){
       tax=0;
   }
   */
  
   if(price>=1500) discount+=10;

   let totalTax = (price*tax)/100;
   let totalDiscount = (price*discount)/100;

   let result = price + totalTax - totalDiscount;   
   return result;

};

const sonucuGoster = () => {
    let inpFiyat = document.querySelector("#inpFiyat");
    let inpValue = Number(inpFiyat.value);

    let inpKdv = document.querySelector("#inpKdv");
    let inpKdvValue = Number(inpKdv.value);

    let inpIndirim = document.querySelector("#inpIndirim");
    let inpIndirimValue = Number(inpIndirim.value);

    let totalResult = hesapla(inpValue,inpKdvValue,inpIndirimValue);

    document.getElementById("sonuc").innerHTML=`Sonuc:   ${totalResult.toFixed(2)}`
  
}

