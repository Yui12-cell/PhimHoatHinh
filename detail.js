// Lấy id từ URL
let params = new URLSearchParams(window.location.search);
let id = params.get("id");


// DATA
let movieData = {
    "Sword Art Online": {
        name: "Sword Art Online",
        img: "https://animehay01.site/upload/poster/35.jpg",
        genres: "Hành động, Tình cảm, Viễn tưởng, Phiêu lưu",
        status: "Hoàn thành",
        time:"2013",
        desc: "Con đường sống duy nhất là đánh bại mọi kẻ thù. Cái chết trong game đồng nghĩa với cái chết ngoài đời thực---- Bằng Nerve Gear, mười ngàn con người lao đầu vào một trò chơi bí ẩn 'Sword Art Online', để rồi bị giam cầm trong đó, buộc phải dấn thân vào một đấu trường sinh tử. Anh main của chúng ta, Kirito, một trong số các game thủ, đã nhận ra được 'sự thật' khủng khiếp này. Anh đơn thương độc mã, chiến đấu trong một lâu đài bay khổng lồ --- mang tên 'Aincrad' Để có thể hoàn thành trò chơi và trở về với thực tại, anh phải vượt qua đủ 100 thử thách. Liệu anh có thể làm được hay anh sẽ về với cát bụi? Cứ xem thì biết.",
        video: "https://animehay04.site/xem-phim/sword-art-online-tap-1-124.html",
    },

    "Kamisama Hajimemashita": {
        name: "Kamisama Hajimemashita",
        img: "https://animehay01.site/upload/poster/188.jpg",
        genres: "Hài hước, Kinh dị, Siêu nhiên",
        status: "Hoàn thành",
        time:"2012",
        desc: "Kamisama Hajimemashita kể về cha của Momozono Nanami - một người đàn ông có máu ham mê cờ bạc - đã biến mất sau khi mắc phải một món nợ lớn.Vậy nên, Nanami bị những người đòi nợ đuổi ra khỏi nhà.Tình cờ, cô gặp một người đàn ông kì lạ đang bị chó rượt, ông ta bảo sẽ cho cô căn nhà của mình.Nanami đã tin vào lời thuyết phục ấy.Nhưng khi đến nơi, căn nhà... hóa ra lại là một đền thần.Và mọi chuyện càng rắc rối hơn nữa khi một kẻ có đôi tai cáo xuất hiện...",
        video:"https://animehay04.site/xem-phim/kamisama-hajimemashita-tap-1-1460.html",
    },

    "Fukumenkei Noise": {
        name: "Fukumenkei Noise",
        img: "https://animehay01.site/upload/poster/2035.jpg",
        genres: "Tình cảm, Âm nhạc",
        status: "Hoàn thành",
        time:"2017",
        desc: "Nino, một cô gái thích hát, trải qua hai lần chia tay trong quá khứ. Thứ nhất, với tình yêu đầu tiên của mình, Momo, và lần thứ hai, với Yuzu, một cậu bé sáng tác nhạc. Nhưng sau hai lời chia tay, cô ấy đã hứa với mỗi người: hãy tiếp tục hát cho đến khi họ tìm thấy giọng của cô ấy lần nữa. Thời gian đã trôi qua, và bây giờ cả ba đang học trung học ...?!",
        video:"https://animehay04.site/xem-phim/fukumenkei-noise-tap-1-17878.html",
    },

    "Yowamushi Pedal": {
        name: "Yowamushi Pedal",
        img: "https://animehay01.site/upload/poster/1187.jpg",
        genres: "Hài hước, Thể thao",
        status: "Hoàn thành",
        time:"2013",
        desc: "Em zai otaku Sakamichi Onoda đáng ra đã thành lập câu lạc bộ anime nhưng cuối cùng bị các anh zai bên câu lạc bộ đua xe đạp đe dọa bắt vào ",
        video:"https://animehay04.site/xem-phim/yowamushi-pedal-tap-1-7326.html",
    },

    "Tokyo Ghoul": {
        name: "Tokyo Ghoul",
        img: "https://animehay01.site/upload/poster/16.jpg",
        genres: "Hành động, Viễn tưởng, Kinh dị",
        status: "Hoàn thành",
        time:"2014",
        desc: "Tokyo Ghoul là một câu chuyện mang bầu sắc u tối của thành phố Tokyo, nơi xảy ra hàng loạt các vụ án mạng được gây ra bởi các con quỷ đội lốt con người. Main chính nhà ta là sinh viên đại học tên Kaneki gặp gỡ được em Rize, do 2 người có cùng sở thích nên đã phải lòng nhau. Vào buổi tối hôm hẹn hò, em và ảnh cùng nhau đi vào một con phố hẻo rồi cuộc đời anh main thay đổi ngay trong đêm hôm đó.",
        video:"https://animehay04.site/xem-phim/tokyo-ghoul-tap-1-2384.html",
    },

    "Attack On Titan": {
        name: "Attack On Titan",
        img: "https://cdn.animevietsub.by/data/poster/2017/09/16/animevsub-iQ3nal5F91.jpg",
        genres: "Hành động, Viễn tưởng, Siêu  nhiên",
        status: "Hoàn thành",
        time:"2013",
        desc: "Cuộc chiến của con người chống lại các Titan khổng lồ để giành giật mạng sống của mình. Vài trăm năm trước, con người bắt đầu bị tấn công bởi những người Khổng lồ, một sinh vật ăn thịt người. Đáng ngại thay, chúng ăn con người như một thú vui hơn là nhu cầu ăn uống. Diện tích sống của con người ngày càng thu hẹp dần, họ đành phải xây những bước tường cao đến 60m để ngăn người Khổng lồ cao nhất lúc đó là 15m. Con người tuy sống gò bó trong những bức tường chật hẹp nhưng đổi lại, họ sống yên bình. Nhưng rồi một ngày nọ, tất cả sự yên bình đó đã tan vào hư vô trong phút chốc...",
        video:"https://animehay04.site/xem-phim/attack-on-titan-shingeki-no-kyojin-tap-1-1399.html",
    },

    "Mairimashita! Iruma-kun":{
        name:"Mairimashita! Iruma-kun",
        img:"https://animehay04.site/upload/poster/2889.jpg",
        genres: "Hành động, Tình cảm, Hài hước, Học đường, Siêu nhiên",
        status: "Hoàn thành",
        time:"2019",
        desc:"Suzuki Iruma đã bị cha mẹ bán cho quỷ để đổi lấy tiền. Đáng ngạc nhiên anh ta đang sống với yêu quái và đã được chuyển đến một trường học trong Thế giới quỷ ...",
        video:"https://animehay04.site/xem-phim/mairimashita-iruma-kun-tap-1-42393.html",
    },

    "Mairimashita! Iruma-kun 2nd Season":{
        name:"Mairimashita! Iruma-kun 2nd Season",
        img:"https://animehay04.site/upload/poster/3246.jpg",
        genres: "Hành động, Tình cảm, Hài hước, Học đường, Siêu nhiên",
        status: "Hoàn thành",
        time:"2021",
        desc:"Mùa thứ 2 Của Series anime Mairimashita! Iruma-kun",
        video:"https://animehay04.site/xem-phim/mairimashita-iruma-kun-2nd-season-tap-1-47371.html",
    },

    "Mairimashita! Iruma-kun 3nd Season":{
        name:"Mairimashita! Iruma-kun 3nd Season",
        img:"https://animehay04.site//upload/poster/3620.jpg",
        genres: "Hành động, Tình cảm, Hài hước, Học đường, Siêu nhiên",
        status: "Hoàn thành",
        time:"2022",
        desc:"Mùa thứ 3 Của Series anime Mairimashita! Iruma-kun",
        video:"https://animehay04.site/xem-phim/mairimashita-iruma-kun-3rd-season-tap-1-54089.html",
    },

    "Mairimashita! Iruma-kun 4nd Season":{
        name:"Mairimashita! Iruma-kun 4nd Season",
        img:"https://animehay04.site//upload/poster/4648.jpg",
        genres: "Hành động, Tình cảm, Hài hước, Học đường, Siêu nhiên",
        status: "Đang chiếu",
        time:"2026",
        desc:"Mùa thứ 4 Của Series anime Mairimashita! Iruma-kun",
        video:"https://animehay04.site/xem-phim/mairimashita-iruma-kun-4th-season-tap-1-74528.html",
    },

    "Hunter x Hunter":{
        name:"Hunter x Hunter",
        img:"https://animevsub.app/wp-content/uploads/2026/01/Hunter-x-Hunter.jpg",
        genres: "Hành động, Phiêu lưu",
        status: "Hoàn thành",
        time:"2011",
        desc:"Gon – từ nhỏ đến lớn chưa bao giờ được gặp mặt cha – tham gia vào cuộc thi lấy chứng chỉ Hunter, một cuộc thi rất khắc nghiệt nhằm chọn ra những thành viên ưu tú cho đội ngũ “Hunters”. Cha của Gon là một Hunter huyền thoại và cậu ấy muốn tìm ra cha mình nên đã chọn con đường theo nghiệp Hunter. Gon gặp Killua trong vòng kiểm tra đầu tiên. Killua đến từ một dòng họ nổi tiếng trong việc hành nghề ám sát: ZhaoldYeck. Killua đã được huấn luyện từ nhỏ để trở thành sát thủ, và cậu ấy có tài năng thiên bẩm trong việc đó. Bạn đồng hành của họ là Leorio và Kurapica...",
        video:"https://animehay04.site/xem-phim/hunter-x-hunter-2011-tap-1-32095.html",
    },

    "Toàn Chức Pháp Sư":{
        name:"Toàn Chức Pháp Sư",
        img:"https://animehay04.site/upload/poster/1635.jpg",
        genres: "Hành động",
        status: "Hoàn thành",
        time:"2016",
        desc:"Mở mắt tỉnh giấc, thế giới đại biến. Một trường cấp 3 quen thuộc giảng dạy Ma pháp, cổ vũ các học sinh phải trở thành Ma pháp sư xuất sắc. Bên ngoài đô thị, lũ yêu ma quỷ quái đăng chằm chằm nhìn loài người như hổ đói, chực chờ tấn công. Thế giới vốn tôn sùng khoa học giờ đây tôn sùng Ma pháp... Mạc Phàm phát hiện hầu hết mọi người chỉ học được một hệ ma thuật, nhưng cậu lại là một pháp sư toàn năng...",
        video:"https://animehay04.site/xem-phim/toan-chuc-phap-su-1-tap-1-8628.html",
    },
};

// HIỂN THỊ
if(movieData[id]){
    document.getElementById("movie-title").innerText = movieData[id].name;
    document.getElementById("movie-img").src = movieData[id].img;
    document.getElementById("movie-desc").innerText = movieData[id].desc;
    
    let genreMap = {
    "Hành động": "hanhdong.html",
    "Tình cảm": "tinhcam.html",
    "Âm nhạc": "amnhac.html",
    "Kinh dị": "kinhdi.html",
    "Thể thao": "thethao.html",
    "Siêu nhiên": "sieunhien.html",
    "Viễn tưởng": "vientuong.html",
    "Phiêu lưu": "phieuluu.html",
    "Hài hước": "haihuoc.html"
    };

    let genres = movieData[id].genres.split(",");
    let genreHTML = "";

    genres.forEach(g => {
    let name = g.trim();
    let link = genreMap[name] || "#";

    genreHTML += `<a href="${link}" class="tag">${name}</a>`;
    });
    document.getElementById("movie-genres").innerHTML = genreHTML;

    let statusText = movieData[id].status;
    let statusClass = "";

    if(statusText === "Hoàn thành"){
        statusClass = "status done";
    } else if(statusText === "Đang chiếu"){
        statusClass = "status airing";
        }

    document.getElementById("movie-status").innerHTML =
    `<span class="${statusClass}">${statusText}</span>`;

    document.getElementById("movie-time").innerHTML =
    `<span class="tag">${movieData[id].time}</span>`;
} else {
    document.getElementById("movie-title").innerText = "Không tìm thấy phim";
}

// ===== XEM PHIM =====
let playBtn = document.querySelector(".play-btn");

if(movieData[id]){
    playBtn.onclick = function(){
        let videoLink = movieData[id].video;

        if(videoLink){
            window.open(videoLink, "_blank"); // mở YouTube
        } else {
            alert("Phim này chưa có link!");
        }
    }
}