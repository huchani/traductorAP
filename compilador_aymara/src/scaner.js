function scannear(lista){
    count = 0;
    scan ="";
    tamaño = lista.length;
    let ult=0;
    //console.log("la lista es----->|"+lista+"|");//----------
    for(let element of lista) {
        //console.log("element es-->|"+element);//----------
        let avaliacao = Identificar(element);
        if(avaliacao.chave){   
            ult=avaliacao.posicao;
            montarTokens(avaliacao);
            scan += (avaliacao.identificador +" ");
            count ++ ;
        }else{
            alert("Scanner error...! --> ["+element+"]" +" <desconocido>");
            break;
        }
    };
    if (count == tamaño){
        bandera = true;
        console.log("bandera esta true")
    }
    else{
        bandera = false;
    }
    console.log("tamaño"+tamaño);
    console.log("count"+count);

    return scan;
}
