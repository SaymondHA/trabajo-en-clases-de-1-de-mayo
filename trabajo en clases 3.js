1.

function getBaseLog(x, y) {
    return Math.log(y) / Math.log(x);
  }
  console.log(getBaseLog(4, 120));
 
  
  console.log(getBaseLog(5, 500));
 


2.
//*2. busqueda simple si el texto incluye playa
var mañana_vamos_a_comer_un_churchill_al_puerto,
luego_vamos_a_la_playa,
playa;

function vamos_de_viaje (playa){
    if (playa.includes('si')){
        if (playa.includes('no')){
            console.log('no podemos ir a la playa y comer churchil');
        }else{
            console.log('si podemos ir a la playa y comer churchil');
        }
    }else{
        console.log('no podemos ir a la playa y comer churchill');
    }
  
   
}
//*vamos_de_viaje("si");