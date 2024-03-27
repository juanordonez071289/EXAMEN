//EXAMEN CURSILLO INGRESO

let pi = 3.14159;
function tipoFigura(lados, medida){
    if(lados < 0){
        console.log(`La cantidad de lados no puede ser negativo`);
        } else if(lados > 6){
        console.log(`La figura tiene ${lados} por lo tanto es un Polígono`);
        console.log(`El perimetro es: ${lados * medida}`);   
        }else if(lados == 1 || lados == 2){
        console.log(`La cantidad de lados no corresponde a una figur geometrica`);    
        }else{
            switch(lados){
    
                case 0:
                console.log(`La figura tiene ${lados} por lo tanto es un Círculo`);
                console.log(`El perimetro es: ${2 * pi * medida}`);
                break;
            
                case 3:
                console.log(`La figura tiene ${lados} por lo tanto es un Triángulo`);
                console.log(`El perimetro es: ${lados * medida}`);
                break;
            
                case 4:
                console.log(`La figura tiene ${lados} por lo tanto es un Cuadrado`);
                console.log(`El perimetro es: ${lados * medida}`);
                break;
            
                case 5:
                console.log(`La figura tiene ${lados} por lo tanto es un Pentágono`);
                console.log(`El perimetro es: ${lados * medida}`);
                break;
            
                case 6:
                console.log(`La figura tiene ${lados} por lo tanto es un Hexágono`);
                console.log(`El perimetro es: ${lados * medida}`);
                break;
                       
            }
        }
}
tipoFigura(5,3)