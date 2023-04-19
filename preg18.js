function calcularPuntaje(numeros) {
    let puntajeTotal = 0;
    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] % 2 === 0) {
        // número par
        puntajeTotal += 2;
      } else if (numeros[i] === 7) {
        // número 7
        puntajeTotal += 3;
      } else {
        // número impar diferente de 7
        puntajeTotal += 1;
      }
    }
    return puntajeTotal;
  }