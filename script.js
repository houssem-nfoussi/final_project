
let plus_btn=document.getElementsByClassName("plus-btn")
let Quant=document.getElementsByClassName("Quant")
let minus_btn=document.getElementsByClassName("minus-btn")
let finalPrice=document.getElementById("finalPrice")
let prices =[105,80,70,50,75,55,269,199,259,160,139,130]




for(let index = 0; index <10; index++){

    
plus_btn[index].addEventListener("click",function()  {
    Quant[index].value=Number(Quant[index].value)+1
    finalPrice.value=Number(finalPrice.value)+Number(prices[index])
 

})
minus_btn[index].addEventListener("click",function() {
    if(Number(Quant[index].value)>0){
    Quant[index].value=Number(Quant[index].value)-1
    finalPrice.value=Number(finalPrice.value)-Number(prices[index])

    }
    
    
})

}