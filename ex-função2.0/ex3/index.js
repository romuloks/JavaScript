let hora_normal, hora_americana; minutos=0

hora_normal= prompt(" diga uma hora no normal")
minutos= prompt(" diga os minutos ")

function hora( hora_normal) {
    hora_americana= hora_normal - 12
    if ( hora_normal >= 0 && hora_normal <= 12)
     { hora_americana =hora_americana +12 
        return alert (" sua horá em hora americana será " + hora_americana+ ":"+minutos+"a.m")
    }

else {
    return alert(" sua hora em hora americana será " + hora_americana+":"+minutos+"p.m")
}
}
 hora( hora_normal, minutos) 

 do{ 
hora_normal= prompt("diga uma hora no normal ") 
 minutos= prompt("diga uma hora americana ")
hora(hora_normal, minutos)
 } while(hora_normal > 0 && minutos >=0)