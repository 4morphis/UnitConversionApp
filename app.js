//const button = document.getElementById("convert");

let error = "";

document.getElementById("conversion").addEventListener("submit", (event) => {
    event.preventDefault();


    

    const conversionTable =[
        ["lb", "g", "453.59237"],
        ["lb", "kg", "0.45359237"],
        ["kg", "lb", "2.20462262"],
        ["kg", "metric ton", "0.001"]
        ];
                

    let quantity = document.getElementById('quantity');
    let inputFrom = document.getElementById('unitFrom');
    let inputTo = document.getElementById('unitTo');

    

    console.log("quantity : " + quantity.value);
    console.log("inputFrom : " + inputFrom.value);
    console.log("inputTo : " + inputTo.value);


    

    if ((!quantity.value) || Number.isInteger(parseInt(quantity.value)) == false ) {
        
        error = "You must enter a numerical value !";
        return document.getElementById("error").innerHTML = error;
    }

    if(inputFrom.value == inputTo.value) quantity.value = quantity.value;

    if(inputFrom.value == 'lb' && inputTo.value == 'g') quantity.value = quantity.value * conversionTable[0][2];
    if(inputFrom.value == 'lb' && inputTo.value == 'kg') quantity.value = quantity.value * conversionTable[1][2];
    if(inputFrom.value == 'kg' && inputTo.value == 'lb') quantity.value = quantity.value * conversionTable[2][2];
    if(inputFrom.value == 'kg' && inputTo.value == 'metric ton') quantity.value = quantity.value * conversionTable[3][2];
    

    console.log("quantity after loop : " + quantity.value);

    

    
})





