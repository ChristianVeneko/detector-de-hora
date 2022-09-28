const hora = new Date().getHours();
        const minuto = new Date().getMinutes()
        let relleno;
        let momentoDelDia
        if(hora < 10){
            relleno = "Buenos dias hehe";
        }else if(hora > 10 && hora < 20){
            relleno = "Buenas tardes hehe";
        }else if(hora >20){
            relleno = "Buenas noches hehe";
        }

        if(hora <= 12){
            momentoDelDia = " AM"
        }else{
            momentoDelDia = " PM"
        }

        document.getElementById("time").innerHTML = hora + ":" + minuto + momentoDelDia
        document.getElementById("mensaje").innerHTML = relleno