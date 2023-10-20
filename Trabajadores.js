class Trabajador {
  constructor(nombre, cargo, inicioJornada, finJornada, horasAlimento, horasNocturnasManuales) {
    this.nombre = nombre;
    this.cargo = cargo;
    this.inicioJornada = inicioJornada;
    this.finJornada = finJornada;
    this.horasAlimento = horasAlimento;
    this.horasNocturnasManuales = horasNocturnasManuales;
  }

  calcularHorasTrabajadas() {
    const minutosInicio = this.inicioJornada;
    const minutosFin = this.finJornada;
    const minutosAlimento = this.horasAlimento;

    if (minutosFin < minutosInicio) {
      // Si el día siguiente
      return (minutosFin + 24 * 60 - minutosInicio - minutosAlimento) / 60;
    } else {
      return (minutosFin - minutosInicio - minutosAlimento) / 60;
    }
  }

  calcularHorasExtras() {
    const jornadaLaboralEstándar = 8; // 8 horas de jornada laboral estándar
    const horasTrabajadas = this.calcularHorasTrabajadas();
    const horasExtras = Math.max(horasTrabajadas - jornadaLaboralEstándar, 0);
    return horasExtras;
  }

  calcularHorasNocturnas() {
    const inicioNocturno = 2100; // 21:00 en formato de 24 horas
    const finNocturno = 600;   // 06:00 en formato de 24 horas

    const minutosInicio = this.inicioJornada;
    const minutosFin = this.finJornada;
    const minutosAlimento = this.horasAlimento;

    let horasNocturnas = 0;

    if (this.horasNocturnasManuales) {
      // Si se ingresaron horas nocturnas manuales, las usamos.
      horasNocturnas = this.horasNocturnasManuales;
    } else if (minutosFin >= inicioNocturno && minutosInicio < finNocturno) {
      // Si la jornada cubre parte o todo el período nocturno
      if (minutosInicio < inicioNocturno) {
        // Si la jornada comienza antes de las 21:00
        horasNocturnas += (inicioNocturno - minutosInicio - minutosAlimento) / 60;
      }
      if (minutosFin > finNocturno) {
        // Si la jornada termina después de las 06:00
        horasNocturnas += (minutosFin + 1440 - finNocturno - minutosAlimento) / 60;
      }
    }

    // Asegura que las horas nocturnas no sean negativas
    horasNocturnas = Math.max(horasNocturnas, 0);

    return horasNocturnas;
  }

}

// Exporta la clase para su uso en otros módulos
export { Trabajador };
