var tabela = document.querySelector("#tabela");
var tabela2 = document.querySelector("#tabela2");
var codigo = document.querySelector('.entrada').value;
var scan;

var dados = {
    "palabraReservada":['say','janisty','jani','ukacama','aywiña','ukaru','quellqaña','apaniña','ullaña','turka','yani'],
    "operador":['+','-','*','/','=','%','==','<=','>=','<','>','!='],
    "terminador":[';'],
    "separador":[','],
    "delimitador":['[',']'],
    "identificador":['maya','qallu','aru','chiqa',"k'ari"],
    "tipos":["palabraReservada","operador","terminador","identificador"]
}

function Identificar(token){
    saida={}
    saida["chave"]=false;
    if(token == ""){
        saida['token'] = "espacio vacio";
        saida['posicao'] = codigo.indexOf("  ");
    }else if(isNaN(token)){ // token no es numero
        //let existe = false;
        let ultimo = token.length-1;
        if(token[0]=="'" && token[ultimo]=="'"){
            saida["chave"]=true;
            saida['token'] = token;
            saida['tipo']="cadena";
            saida['identificador']="cadena";
            saida['tamanio'] = token.length;
            saida['posicao'] = "(0:"+codigo.indexOf(token)+")";
           
        }else if(token == ","){
            saida['token']=token;
            saida['tipo']="separador";
            saida['identificador']="separador";
            saida['tamanio'] = token.length;
            saida['posicao'] = "(0 : "+codigo.indexOf(token)+")";
            saida["chave"]=true;
        
        }else if(token == "[" || token == "]"){
            saida['token']=token;
            saida['tipo']="delimitador";
            saida['identificador']="delimitador";
            saida['tamanio'] = token.length;
            saida['posicao'] = "(0 : "+codigo.indexOf(token)+")";
            saida["chave"]=true;
        }
        else { 
            dados.tipos.forEach( tipo => {
                dados[tipo].forEach( item => {
                    if(item == token){
                        //existe = true;
                        saida['token'] = token;
                        if(tipo == "identificador"){
                            saida['tipo']=tipo
                            saida['identificador'] = tipo
                        }else{
                            saida['identificador'] = tipo;
                        }
                        saida['tamanio'] = token.length;
                        saida['posicao'] = "(0 : "+codigo.indexOf(token)+")";
                        //-----------------\\
                        //console.log("codigo: "+codigo);
                        saida["chave"] = true;
                    }
                });
            });
        };
    }else if(!isNaN(token)){
        saida['token']=token;
        saida['tipo']="numero";
        saida['identificador']="numero";
        saida['tamanio'] = token.length;
        saida['posicao'] = "(0 : "+codigo.indexOf(token)+")";
        saida["chave"]=true;

    }
    else {
        saida["chave"]=false;
        saida['token'] = token;
        saida['tipo']="desconocido";
        saida['identificador']="desconocido";
        saida['tamanio'] = token.length;
        saida['posicao'] = "(0:"+codigo.indexOf(token)+")";
    }
    console.log(saida);
    return saida;
}



function limpiar(){
    while(tabela.childNodes[2]){
        tabela.removeChild(tabela.childNodes[2]);
    }
  //  while(tabela2.childNodes[2]){
    //    tabela2.removeChild(tabela2.childNodes[2]);
    //}
    //document.getElementById("contenido").innerHTML = ""; 
    document.getElementById("salida").innerHTML = "";
    python = "";
}

function montarTokens(avaliacao){
    tabela.style['visibility'] = 'visible';
    //---------------------------------------------
    let tr = document.createElement('tr');
    tr.className="nova";
    let token = document.createElement('td');
    token.textContent = avaliacao.token;
    token.className="celula";
    let ident = document.createElement('td');
    ident.textContent = avaliacao.identificador;
    ident.className="celula";
    let tam = document.createElement('td');
    tam.textContent = avaliacao.tamanio;
    tam.className="celula";
    let pos = document.createElement('td');
    pos.textContent = avaliacao.posicao;
    pos.className="celula";
    tr.appendChild(token);
    tr.appendChild(ident);
    tr.appendChild(tam);
    tr.appendChild(pos);
    tabela.appendChild(tr);
}

async function loadFile(file){
    let text = await file.text();
    document.getElementById('contenido').textContent = text;
}

function texto_plano(text){
let aux = ' ';
let codigo="";

for (c of text){
    if (c == aux && c ==' '){
        continue;
    }
    else{
        if(c==';'){
            codigo += '; ';
        }
        else{
            codigo += c;
        }
    }
    aux=c;
}
console.log("codigo-> 1|"+codigo);
return codigo; 
}

var bandera = false;
var python = "";

function main(){
    limpiar();
    var entrada = document.querySelector('.entrada').value;

    //--------------------------------------SCANNER-------------------------------------------\\
    let text = entrada.trim();
    text = text.replace(/(\r\n|\n|\r|\t)/gm,"")
    var codigo = texto_plano(text);
    let lista = codigo.split(' ');
    let lista2 =[];
    for (i of lista){
        //console.log("->"+i)
        if (i ==""){
            continue;
        }  
        else{
            lista2.push(i)
        }
    }
    let scan = scannear(lista2);
    //console.log("scan:"+scan);
    
    //----------------------------------------PARSER-------------------------------------------\\
    let parse ;
    if( bandera == true){ 
        //console.log("entre...");
        let oraciones=[];
        let oraciones_aux= codigo.split(";");
        console.log("oras_aux->"+oraciones_aux);
        for (i of oraciones_aux){
            let oracion = i.trim()+" ;";
            oraciones.push(oracion);
            console.log("->"+oracion);
        }
        //console.log("oraciones:"+oraciones);
        let scaner =[];
        let scaner_aux = scan.split("terminador");
        for (i of scaner_aux){
            let sc = i.trim()+" terminador";
            scaner.push(sc);
            //console.log("->"+sc);
        }
        //console.log("scaner-->:"+scaner);
        
        oraciones.pop();
        scaner.pop();
        //console.log("oraciones:"+oraciones);
        //console.log("scaner-->:"+scaner);
        
        for(let x=0 ;x<=(scaner.length-1);x++){
            console.log(oraciones[x]);
            console.log(scaner[x]);
            let listscan = scaner[x].split(" ");
            let listoracion = oraciones[x].split(" ");
            python +=parcer(listscan,listoracion);
        }
        if (python == 'undefined'){
            salida_py = "# Woops!..No se pudo Compilar";
        }else salida_py = python;
        document.getElementById('salida').innerHTML= salida_py; 
    }
}
