// Valtozoban deklaralom a gombokat
var buttons = document.querySelectorAll('.button');
var result = document.getElementById('display-container');
// Vegig iteralok a gombokon
for (var i of buttons) {
    //hozzafuzom az esemenyt
    i.addEventListener("click", function(event1) {
        //Az erteket elmentem egy valtozoban majd hozzaadom a displayhez
        var numbers = event1.target.innerText;
        //Muveletek definialasa
        switch(numbers){
            case 'C':
                result.innerText = '';
                break
            case '<-':
                result.innerText = result.innerText.slice(0, -1);
                break
            case '=':
                try{
                    result.innerText = eval(result.innerText);
                }
                catch{
                    result.innerText = 'Error';
                }
                break
            default:
                result.innerText += numbers;
        }

    })
}













