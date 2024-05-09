function MaiorData(data1, data2) {
    let maiorDate;
    if (data1 > data2) {
        maiorDate = data1;
    } else {
        maiorDate = data2;
    }

    const dia = maiorDate.getDate();
    const hora = maiorDate.getHours();
    const minutos = maiorDate.getMinutes();

    const dataFormatada = `${dia}/${maiorDate.getMonth() + 1}/${maiorDate.getFullYear()} às ${hora}:${minutos}`;

    return dataFormatada;
}

function DataHoraAtual(data) {
    const dia = String(data.getDate()).padStart(2, '0');
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const ano = data.getFullYear();
    const hora = String(data.getHours()).padStart(2, '0');
    const minuto = String(data.getMinutes()).padStart(2, '0');
    return hora + ":" + minuto + " - " + dia + "/" + mes + "/" + ano;
}

function calcularIntervalo(dataInicial, dataFinal) {
    if (dataInicial > dataFinal) {
        const temp = dataInicial;
        dataInicial = dataFinal;
        dataFinal = temp;
    }

    const intervaloMs = dataFinal.getTime() - dataInicial.getTime();
    const intervaloSegundos = Math.floor(intervaloMs / 1000);
    const intervaloMinutos = Math.floor(intervaloSegundos / 60);
    const intervaloHoras = Math.floor(intervaloMinutos / 60);
    const intervaloDias = Math.floor(intervaloHoras / 24);

    const horasRestantes = intervaloHoras % 24;
    const minutosRestantes = intervaloMinutos % 60;

    if (intervaloDias > 0) {
        if (horasRestantes > 0) {
            if (minutosRestantes > 0) {
                return intervaloDias + " dias, " + horasRestantes + " horas, " + minutosRestantes + " minutos";
            } else {
                return intervaloDias + " dias, " + horasRestantes + " horas";
            }
        } else {
            return intervaloDias + " dias";
        }
    } else if (horasRestantes > 0) {
        if (minutosRestantes > 0) {
            return horasRestantes + " horas, " + minutosRestantes + " minutos";
        } else {
            return horasRestantes + " horas";
        }
    } else {
        return minutosRestantes + " minutos";
    }
}

function mostrarResultados() {
    const entradaData1 = document.getElementById("entradaData1").value;
    const entradaData2 = document.getElementById("entradaData2").value;

    const data1 = new Date(entradaData1);
    const data2 = new Date(entradaData2);

    document.getElementById("maiorData").innerText = "Maior data: " + MaiorData(data1, data2);
    document.getElementById("intervalo").innerText = "Intervalo de " + calcularIntervalo(data1, data2)+" entre as Datas";
    document.getElementById("dataAtual").innerText = "Data e Hora atual: " + DataHoraAtual(new Date());
}