const input = document.getElementById("search");;
const movies = document.querySelectorAll(".movie-card");
const suggestions = document.getElementById("suggestions");
let searchHistory = [];

// Danh sách phim
let movieList = [
    "Sword Art Online",
    "Kamisama Hajimemashita",
    "Fukumenkei Noise",
    "Yowamushi Pedal",
    "Tokyo Ghoul",
    "Attack On Titan",
    "Mairimashita! Iruma-kun",
    "Mairimashita! Iruma-kun 2nd Season",
    "Mairimashita! Iruma-kun 3nd Season",
    "Mairimashita! Iruma-kun 4nd Season",
    "Hunter x Hunter",
    "Toàn Chức Pháp Sư",
];

// GỢI Ý
input.addEventListener("keyup", function(){
    let value = input.value.toLowerCase();
    suggestions.innerHTML = "";

    // CHƯA NHẬP → HIỆN LỊCH SỬ
    if(value === ""){
        if(searchHistory.length === 0){
            suggestions.style.display = "none";
            return;
        }

        searchHistory.forEach(item => {
            let div = document.createElement("div");
            div.classList.add("suggest-item");
            div.textContent = item;

            div.onclick = function(){
                input.value = item;
                suggestions.style.display = "none";
                searchMovie();
            };

            suggestions.appendChild(div);
        });

        suggestions.style.display = "block";
        return;
    }

    //ĐANG GÕ → HIỆN GỢI Ý
    let filtered = movieList.filter(movie => 
        movie.toLowerCase().includes(value)
    );

    filtered.forEach(movie => {
        let div = document.createElement("div");
        div.classList.add("suggest-item");
        div.textContent = movie;

        div.onclick = function(){
            input.value = movie;
            suggestions.style.display = "none";
            saveHistory(movie); // lưu lịch sử
            searchMovie();
        };

        suggestions.appendChild(div);
    });

    suggestions.style.display = "block";
});

// TÌM PHIM
function searchMovie(){
    let keyword = input.value.toLowerCase();

    movies.forEach(movie => {
        let name = movie.dataset.name;

        if(name.toLowerCase().includes(keyword)){
            movie.style.display = "block";
        }else{
            movie.style.display = "none";
        }
    });
}



// CLICK VÀO CARD
movies.forEach(movie => {
    movie.onclick = function(){
        let name = movie.dataset.name;
        window.location.href = "detail.html?name=" + encodeURIComponent(name);
    };
});

function saveHistory(keyword){
    searchHistory = searchHistory.filter(item => item !== keyword);
    searchHistory.unshift(keyword);

    if(searchHistory.length > 5){
        searchHistory.pop();
    }
}

// CLICK NÚT SEARCH
document.getElementById("searchForm").addEventListener("submit", function(e){
    e.preventDefault();
    saveHistory(input.value);
    searchMovie();
});

movies.forEach(movie => {
    movie.onclick = function(){
        let id = movie.dataset.id;
        window.location.href = "detail.html?id=" + encodeURIComponent(id);
    };
});