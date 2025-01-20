function Clock(){

  var now= new Date();// Obtiene la fecha y hora actual
  var hours= now.getHours(); // Obtiene la hora actual (0-23)
  var minutes= now.getMinutes();// Obtiene los minutos actuales (0-59)
  var seconds = now.getSeconds();// Obtiene los segundos actuales (0-59)
// Agrega un cero delante si el valor es menor a 10
  hours = hours < 10 ? "0" + hours : hours
  minutes = minutes < 10 ? "0" + minutes : minutes
  seconds = seconds < 10 ? "0" + seconds : seconds

  // Forma la cadena de tiempo en el formato "HH:MM:SS"
  var Time = hours + ":" + minutes + ":" + seconds
// Actualiza el contenido del elemento con id "clock" con la hora actual
  document.getElementById("clock").innerHTML = Time;

  // Define los nombres de los días de la semana
  var days= ["Sunday", "Monday","Tuesday","Wednesday","Thursday", "Friday" ,"Saturday"];
  // Obtiene el nombre del día actual según el índice (0 para Domingo, 6 para Sábado)
  var dayName = days[now.getDay()];

   // Actualiza el contenido del elemento con id "day" con el nombre del día actual
  document.getElementById("day").innerHTML = dayName;
}
// Llama a la función `Clock` cada segundo (1000 ms) para actualizar la hora y el día
setInterval(Clock,1000)
// Llama a la función `Clock` inmediatamente para que el reloj aparezca al cargar la página
Clock();