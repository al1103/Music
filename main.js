const back = document.getElementById("back");
const forward = document.getElementById("forward");
forward.addEventListener("click", goForward);
back.addEventListener('click', goBack);
const inputSearch = document.querySelector('.search')
const btnSearch = document.querySelector('.btn-search')
const close = document.querySelector('.bar')
const open = document.querySelector('.show_navbar ')
const navBar = document.querySelector('.navs')

const list = document.querySelector('.list')
function goBack() {
    window.history.go(-1)
}
function goForward() {
    window.history.go(1);
}
// const options = {
//     method: 'GET',
//     headers: {
//         'X-RapidAPI-Key': ' e804f954a8184a6399d840b189d7b064',
//         'X-RapidAPI-Host': '85cfa8bbe59446588e8c55331cea4e36'
//     }
// };

// fetch('https://spotify.com/api/token', options)
//     .then(response => response.json())
//     .then(response => {
//         console.log(response);
//         handTop(response.albums.items)
//     })
//     .catch(err => console.error(err));

// function handTop(e) {
//     var newItem = e.map((item) => {
//         console.log(item.data);
//         const { uri, name, coverArt, artists } = item.data;
//         return `

//         <div class="item">
//           <div class="name-category">
//               <h3></h3>
//               <span><a href=""></a></span>
//           </div>
//           <div class="content-item">
//               <div class="image">
//                   <img src="${coverArt.sources[0].url || coverArt.sources[1].url || coverArt.sources[2].url}" alt="">
//               </div>
//               <div class="item-footer">
//                   <div class="name-song">${name}</div>
//                   <div class="name-author"></div>
//                   <div class="date"></div>
//               </div>

//           </div>
//       </div>
//           `

//     })
// var newItems = newItem.join('')
// list.innerHTML = newItems;
// }
const history = document.querySelector('.history')
const navLeft = document.getElementById('nav-left')
const input = document.getElementById('search')

btnSearch.addEventListener('click', showSearch);
function showSearch() {
    if (input.value.trim() == "") {
        inputSearch.classList.toggle('show-search');
        input.classList.toggle('show');
        navLeft.classList.toggle('hidden');
    } else {
        input.value = "không tìm thấy kết quả";
        input.style.color = "red";
        setTimeout(waitingText, 1500);
        function waitingText() {
            input.style.color = "black";
            input.value = "";

        }
    }
}

close.addEventListener('click', function () {
    navBar.style.transform = "translateX(-100%)"

})
open.addEventListener('click', handShow)
function handShow() { navBar.style.transform = "translateX(0%)" }
function myalert() {
    alert('tính năng này hiện chưa được cập nhật')
}
