let car={
    brand:"mercedes",
    model:"a180",
    year:2021,
    color:"red",
    engine:2.0,
    doors:4,
};

const fillSelectForm = () => {
   let carKeys = Object.keys(car)
   //console.log(carKeys)
   let selectFormEl=document.getElementById("formSelect");
   
   let strSelectForm="";

   for (let i = 0; i < carKeys.length; i++) {

    strSelectForm += `<option>${carKeys[i]}</option>`
       
   }

   selectFormEl.innerHTML=strSelectForm

  
}


document.getElementById("formSelect").addEventListener("click",(e)=>{
    let carValue=e.target.value;

    document.getElementById("result").innerHTML=car[carValue]

})

fillSelectForm()
