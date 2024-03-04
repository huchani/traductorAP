function parcer(scaner,codigo){
    
    let codigo_py="";
  
    palabraReservada = ['say','janisty','jani','turka','quellqaña',"ukaru","aywiña",'apaniña','ullaña','yani'];
    comparacion =['==','<=','>=','<','>','!='];
    numero = [1,2,3,4,5,6,7,8,9,0];
    operador = ['+','-','*','/','%'];
    terminador = ";";
    asignacion= "=";
    separador = ",";
    delimitador = ["[","]"]
    vars = ["'i'","'j'","'suma'","'resta'","'multiplicacion'","'division'"]
    identificadores = dados.identificador;


//palabra reservada cadena 
//palabraReservada cadena operador palabraReservada cadena terminador



    if (scaner[0]=="palabraReservada"){
        if (codigo[0]=="janisty"){
            codigo_py += "\nelif (";
        }else if(codigo[0]=="say"){
            codigo_py += "\nif (";
        }else if(codigo[0]=="jani"){
            codigo_py += "else ";
        }else if(codigo[0]=="quellqaña"){
            codigo_py += "print (";
        }else if(codigo[0]=="ukacama"){
            codigo_py += "while (";
            if (scaner[1]=="cadena"){
                let aux=codigo[1];
                for (c of aux){
                    if(c =="'") continue;
                    else codigo_py +=c ; 
                }
                console.log(codigo_py)
                if(scaner[2]=="operador" && operador.includes(codigo[2])){
                    codigo_py+=codigo[2]+" ";
                    if(scaner[3]=="cadena"){
                        let aux=codigo[3];
                        for (c of aux){
                            if(c =="'") continue;
                            else codigo_py +=c ;
                        }
                        if (scaner[4]=="terminador"){
                            codigo_py +=":\n";
                            console.log(codigo_py);
                            return codigo_py;
                        }
                    }

                }
            }
        }else if (codigo[0] =="aywiña"){
            codigo_py += "for ";
            if (scaner[1]=="cadena"){
                let aux=codigo[1];
                for (c of aux){
                    if(c =="'") continue;
                    else codigo_py +=c ;
                }
                if (scaner[2]=="palabraReservada" && palabraReservada.includes(codigo[2])){
                    codigo_py+=" in ";
                    if (scaner[3]=="cadena"){
                        let aux=codigo[3];
                        for (c of aux){
                            if(c =="'") continue;
                            else codigo_py +=c ;
                        }
                        codigo_py+=":\n\t";
                        return codigo_py;
                    }
                    
                }
            }
        }else if(codigo[0]=="turka"){
            if (scaner[1]=="cadena"){
                let aux=codigo[1];
                for (c of aux){
                    if(c =="'") continue;
                    else codigo_py += c ;
                }
                //---------------
                if (scaner[2]=="operador" && asignacion.includes(codigo[2])){
                    
                    codigo_py += codigo[2]+" ";  
                    if (scaner[3]=="palabraReservada" && palabraReservada.includes(codigo[3])){
                        codigo_py +="input(";

                        if(scaner[4]=="cadena"){
                            codigo_py +=codigo[4];
                            
                            
                            if (scaner[5]=="terminador"){
                                codigo_py +=")\n";
                                //document.write("si existe el numero")
                                //document.write("bien <br>");
                                console.log(codigo_py);
                                return codigo_py;
                            }
                        }
                    }else if(scaner[3]=="cadena"){
                        let aux=codigo[3];
                        for (c of aux){
                            if(c =="'") continue;
                            else codigo_py +=c ;
                        }
                        if (scaner[4]=="operador" && operador.includes(codigo[4])){
                            codigo_py += codigo[4];
                            if(scaner[5]=="cadena"){
                                let aux=codigo[5];
                                for (c of aux){
                                    if(c =="'") continue;
                                    else codigo_py +=c ;
                                }    
                                if (scaner[6]=="terminador"){
                                    codigo_py +="\n\t";
                                    console.log(codigo_py);
                                    return codigo_py;
                                }
                            }
                        }
                    }


                    else if (scaner[3]=="identificador" && identificadores.includes(codigo[3])){
                        codigo_py +="int(";
                        if (scaner[4]=="cadena"){
                            let aux=codigo[4];
                            for (c of aux){
                                if(c =="'") continue;
                                else codigo_py +=c ;
                            }
                        
                            ///-----------
                            if (scaner[5]=="terminador"){
                                codigo_py +=")\n";
                                console.log(codigo_py);
                                return codigo_py;
                                }  
                        }
                        else if(scaner[4]=="palabraReservada" && palabraReservada.includes(codigo[4])){
                            codigo_py +="input(";
                            if(scaner[5]=="cadena"){
                                codigo_py +=codigo[5]+")";                             
                                if (scaner[6]=="terminador"){
                                    codigo_py +=")\n\t";
                                    console.log(codigo_py);
                                    return codigo_py;
                                }
                            }
                        }
                    }
                    
                    else if (scaner[3]=="cadena"){
                        codigo_py +=codigo[3];
                        if (scaner[4]=="terminador"){
                            codigo_py +="\n";
                            return codigo_py;
                        }
                    }
                    else if(scaner[3]=="numero"){
                        codigo_py +=codigo[3];
                        if (scaner[4]=="terminador"){
                            codigo_py +="\n";
                            return codigo_py;
                        }
                    }
                }
                //---------------

                else if (scaner[2]=="operador"){
                    codigo_py += codigo[2]+" ";
                    
                    if (scaner[3]=="delimitador" && delimitador.includes(codigo[3])){
                        codigo_py +="[";

                        if(scaner[4]=="cadena" || scaner[4]=="numero"){
                            codigo_py +=codigo[4];
                            if(scaner[5]=="separador" && separador.includes(codigo[5])){
                                codigo_py +=codigo[5]
                            }
                            if(scaner[6]=="cadena" || scaner[4]=="numero"){
                                codigo_py +=codigo[6];
                            }
                            if(scaner[7]=="separador" && separador.includes(codigo[7])){
                                codigo_py +=codigo[7]
                            }
                            if(scaner[8]=="cadena" || scaner[4]=="numero"){
                                codigo_py +=codigo[8];
                            }
                            if(scaner[9]=="separador" && separador.includes(codigo[9])){
                                codigo_py +=codigo[9]
                            }
                            if(scaner[10]=="cadena" || scaner[4]=="numero"){
                                codigo_py +=codigo[10];
                            }    
                            if (scaner[11]=="delimitador" && delimitador.includes(codigo[11])){
                                codigo_py += "]";
                            }
                            if (scaner[12]=="terminador"){
                                codigo_py +="\n";
                                return codigo_py;
                            }
                        }
                    }
                }
            }else alert("-----------------")
        }else return "# Woops..No se pudo compilar";

        if(scaner[1]=="cadena"){            
            if(scaner[2]=="operador"){
                let aux=codigo[1];
                for (c of aux){
                    if(c =="'") continue;
                    else codigo_py +=c ;
                }
                if(comparacion.includes(codigo[2])){
                    codigo_py+=codigo[2];
                    if (scaner[3]="cadena"){
                        let aux=codigo[3];
                        for (c of aux){
                            if(c =="'") continue;
                            else codigo_py +=c ;
                        }
                        if (scaner[4]=="terminador"){
                            codigo_py +=") :\n\t";
                            return codigo_py;          
                        }
                    }
                }else if (codigo[2] == "="){
                   codigo_py += codigo[2] ;
                }
                else{
                    alert("El operador ["+codigo[2]+"] es Desconocido")
                }
            }else if(scaner[1]=="cadena" && vars.includes(codigo[1])) {
                
                let aux=codigo[1];
                for (c of aux){
                    if(c =="'") continue;
                    else codigo_py +=c ;
                }
                if(scaner[2]=="terminador"){
                    codigo_py +=")\n"
                    return codigo_py ;
                }
                
            }
            else if(scaner[2]=="terminador"){
                codigo_py +=codigo[1]+")\n"
                return codigo_py ;

            }
        }else if(scaner[1]=="terminador"){
            codigo_py += ":\n\t";
            return codigo_py ;
        }
    }
    else{
        return "# Woops..NO se pudo compilar";
    }
}
