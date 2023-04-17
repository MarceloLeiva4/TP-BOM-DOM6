let intervalId;
let tiempoRestante;
let contadorElemento = document.getElementById('contador');
let inputTiempo = document.getElementById('inputTiempo');

function iniciarTemporizador() {
  let tiempo = parseInt(inputTiempo.value);
  if (isNaN(tiempo) || tiempo <= 0) {
    alert('Ingrese un tiempo válido en segundos');
    return;
  }
  tiempoRestante = tiempo;
  intervalId = setInterval(actualizarContador, 1000);
}

function pausarTemporizador() {
  clearInterval(intervalId);
}

function reiniciarTemporizador() {
  clearInterval(intervalId);
  contadorElemento.textContent = '00:00:00';
  inputTiempo.value = '';
}

function actualizarContador() {
  let horas = Math.floor(tiempoRestante / 3600);
  let minutos = Math.floor((tiempoRestante % 3600) / 60);
  let segundos = tiempoRestante % 60;

  let horasStr = horas.toString().padStart(2, '0');
  let minutosStr = minutos.toString().padStart(2, '0');
  let segundosStr = segundos.toString().padStart(2, '0');

  contadorElemento.textContent = `${horasStr}:${minutosStr}:${segundosStr}`;

  tiempoRestante--;

  if (tiempoRestante < 0) {
    pausarTemporizador();
    alert('¡Se Acabo el Tiempo!');
  }
}