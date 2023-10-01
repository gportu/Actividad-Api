const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlN2MzMmE2ODE1YmYzODhkNjg5NzYyY2Q0YTQ3ODQ2YyIsInN1YiI6IjY1MTc3NTdkOWI4NjE2MDExYzQ4YjJkNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QON6CU0ipbhEcY6tl8oWLvy3DnL1oTXWzjXVB5sD81w'
  }
};

const cargarPeliculas= async()=>{
try{
  const respuesta= await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US', options);
  console.log(respuesta);
if (respuesta.status === 200) {
  const datos= await respuesta.json();
console.log(datos);
  let peliculas= "";

  datos.results.forEach(pelicula => {
    peliculas+= `
    <div class="pelicula">
    <img class="poster" src="https://image.tmdb.org/t/p/w500/${pelicula.poster_path}">
    </div>
    <h3 class="titulo"> ${pelicula.title} </h3>`
  });
  document.getElementById("container").innerHTML= peliculas;
}else if(respuesta.status===401){ 
  console.log("Pusiste la llave mal");
}else if(respuesta.status===404){
  console.log("la pelicula que buscas no existe");
}else{console.log("no se puede identificar el error");}



}catch(error){
  console.log(error)
};
}

cargarPeliculas();