document.addEventListener("DOMContentLoaded", function() {

  let movies = document.querySelectorAll(".movie-card");
  let movieData = [];

  movies.forEach(movie => {
    let name = movie.innerText.trim();
    let img = movie.querySelector("img").src;

let views = parseInt(movie.dataset.view) || 0;

movieData.push({
  name,
  img,
  score: views
});
  });

  // sắp xếp top
  movieData.sort((a, b) => b.score - a.score);

  let topContainer = document.getElementById("top-movies");

  // lấy top 
movieData.slice(0, 5).forEach((m, index) => {
  let div = document.createElement("div");
  div.classList.add("top-movie");

  div.innerHTML = `
    <div class="rank rank-${index+1}">${index + 1}</div>

    <img src="${m.img}">

    <div class="info">
      <p class="name">${m.name}</p>
    </div>
  `;

  // 👉 CLICK vào là sang detail
  div.addEventListener("click", function() {
    window.location.href = "detail.html?id=" + encodeURIComponent(m.name);
  });

  topContainer.appendChild(div);
});

});
