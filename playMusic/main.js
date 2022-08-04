console.time('one')
const back = document.getElementById("");
const forward = document.getElementById("forward");
forward.addEventListener("click", () => {
    window.history.go(1)
});
document.getElementById('back').addEventListener('click', () => {
    window.history.go(-1);
});
const inputSearch = document.querySelector('.search')
const btnSearch = document.querySelector('.btn-search')
const love = document.querySelector('.fa-hearts')
const volume = document.querySelector('.fa-volume-highs')
const list = document.querySelector('.list')
const muteVolume = document.querySelector('.fa-volume-xmarks')
const valueVolume = document.getElementById('range')
const range2 = document.getElementById('second')
const pause = document.querySelector('.fpauses')
const play = document.querySelector('.fplays')
const playSongs = document.getElementById('playsongs')
const nextSong = document.querySelector('.nextSong')
const backSong = document.querySelector('.backSong')
const start = document.querySelector('.currentTime')
const end = document.querySelector('.duration')
const repeats = document.querySelector('.frepeat')
const shuffle = document.querySelector('.fshuffle')
const rotate_left = document.querySelector('.rotate-left')
const rotate_right = document.querySelector('.rotate-right')
const rotate = document.querySelector('.img-song')
const close = document.querySelector('.bar')
const open = document.querySelector('.show_navbar ')
const navBar = document.querySelector('.navs')
let nameSC = document.querySelector('.name')
const describe = document.querySelector('.describe')
const body = document.getElementById('body')
const clicksearch = document.querySelector('.searchit').addEventListener('click', showSearch)



//---------------------------------------------------------------------------------------
const song = [
    {
        id: '1',
        nameSong: 'Head-In-The-Clouds',
        title: 'lorem',
        album: 'lorem',
        link: 'Head-In-The-Clouds.mp3',
        img: 'https://i.pinimg.com/564x/54/23/b6/5423b641d93f8d3e1dd19cb39f247de0.jpg'

    },
    {
        id: '2',
        nameSong: 'Landslide',
        title: 'lorem',
        link: 'Landslide.mp3',
        album: 'lorem',
        img: 'https://i.pinimg.com/564x/a8/8b/9a/a88b9ae22e2bc04ca221a2a15ae1447b.jpg'
    },
    {
        id: '3',
        nameSong: 'Một Mình  Ta',
        title: 'lorem',
        link: 'motminhta.mp3',
        album: 'lorem',
        img: 'https://i.pinimg.com/736x/cf/15/c6/cf15c69b34e9e0892581f3d0e88269d5.jpg'
    },
    {
        id: '4',
        nameSong: '5s',
        title: 'lorem',
        link: '5s.mp3',
        album: 'lorem',
        img: 'https://i.pinimg.com/236x/8d/12/28/8d12289cdb1ff8a6690b69b718bac11b.jpg'
    },
    {
        id: '5',
        nameSong: 'Bao tiền một mớ bình yên',
        title: '14 caspe& bon',
        link: 'Bao_tien_mot_mo_binh_yen.mp3',
        album: 'chọn lọc',
        img: 'https://i.pinimg.com/564x/b5/b2/15/b5b2152621822ad82bd58672303a3999.jpg'
    },
    {
        id: '6',
        nameSong: 'Glimpse of Us ',
        title: 'Joji',
        link: 'Glimpse_of_Us_Lyrics.mp3',
        img: 'https://i.pinimg.com/564x/a8/8b/9a/a88b9ae22e2bc04ca221a2a15ae1447b.jpg'
    }


]
let indexSong = Math.floor(Math.random() * (song.length - 1));
// fetch('https://open.spotify.com/user/zilong')
//   .then((response) => response.json)
//   .then((response) => {
//     console.log(response);
//   });
// //   {
// //     "display_name": "Torbjörn Wellbring",
// //     "external_urls": {
// //       "spotify": "
// //     },
// //     "followers": {
// //       "href": null,
// //       "total": 2
// //     },
// //     "href": "https://api.spotify.com/v1/users/zilong",
// //     "id": "zilong",
// //     "images": [
// //       {
// //         "height": null,
// //         "url": "https://scontent.fmaa10-1.fna.fbcdn.net/v/t39.30808-1/274231552_10221753545810901_9027915653368650940_n.jpg?stp=dst-jpg_p320x320&_nc_cat=111&ccb=1-7&_nc_sid=0c64ff&_nc_ohc=3cVzB2E5Y4gAX_-B0NG&_nc_ht=scontent.fmaa10-1.fna&edm=AP4hL3IEAAAA&oh=00_AT-8nLwAwQVaYTQyedyewiEVOmaa2IO9PtpiuaTWnHAN5w&oe=62EED25A",
// //         "width": null
// //       }
// //     ],
// //     "type": "user",
// //     "uri": "spotify:user:zilong"
// //   }
// //   curl -X "GET" "https://api.spotify.com/v1/users/zilong" -H "Accept: application/json" -H "Content-Type: application/json" -H "Authorization: Bearer BQDxiObbl1YnCe-z4SmH6NE_eS_B0ifqarJrV2SV7hOsGluSHIXA4X6f4HF0p8aBZWlroyEnQYBW8yRK8jEPjxEHbUfAmLWo3dVBVPZncHDXYiuPfKIpncNfWlXOM6TpFYP9HxeVSJrGAUXAXd8M5NfQBdrUa8FD1sYuWnRuhikhX9Z9zJ5QHvF3b85joM8tCCEWhQtW5CkgcZEqrEkPVU2koornWtYHGTFqfzBFIggrqM2ys0Ne7jhPC_CQ17TFsWt_vY2gnm8"

// //---------------------------------------------------------------------------------------
playSongs.setAttribute('src', `./songs/${song[indexSong].link}`)
nextSong.addEventListener('click', function () { handleSong(1) })
backSong.addEventListener('click', function () { handleSong(-1) })
function handleSong(e) {
    if (e === 1) {
        indexSong += 1;

        if (shuffles) {
            randomcheck()

        }

        if (indexSong >= song.length) {
            indexSong = 0;

            if (shuffles) {
                randomcheck()

            }


        }
        nameplay()


    } else if (e === -1) {
        indexSong -= 1;
        playSongs.play()



        if (shuffles) {
            randomcheck()



        }

        if (indexSong < 0) {
            indexSong = song.length - 1;
            if (shuffles) {
                randomcheck()


            }

        }
        nameplay()
    }
    playSongs.setAttribute('src', `./songs/${song[indexSong].link}`)
    playSongs.play()

}



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
let load1s;
var setRotate = setInterval(rotatefs, 1000)

love.addEventListener('click', handleLove)
function handleLove() {
    love.classList.toggle('colorRed')

}

play.addEventListener('click', function () {
    play.classList.toggle('hidden')
    pause.classList.toggle('hidden')
    playSongs.play()
    load1s = setInterval(checkSecondEnd, 200)
    setRotate = setInterval(rotatefs, 1000)
    if (widthImg < 100) {
        rotate.classList.add('rotate')
        console.log(widthImg)
    }
    nameplay()


})
function rotatefs() {
    widthImg = rotate.offsetWidth
}
rotatefs()
pause.addEventListener('click', function () {
    pause.classList.toggle('hidden')
    play.classList.toggle('hidden')
    playSongs.pause()
    clearInterval(load1s)
    rotate.classList.remove('rotate')
    clearInterval(setRotate)

})




let range = document.getElementById("range");
let base = window.getComputedStyle(document.body).getPropertyValue("--base");
let second = window.getComputedStyle(document.body).getPropertyValue("--second");
let init = (value) => {
    document.getElementById("value").innerHTML = value;
    playSongs.volume = value * 0.01;
    document.documentElement.style.setProperty("--range", value + "%");
}
let updateValue = (value) => {
    document.getElementById("value").innerHTML = Math.floor(value);
    playSongs.volume = value * 0.01;



}
let updateVar = (value) => {
    document.documentElement.style.setProperty("--deg", value * 3.6 + "deg");
    document.documentElement.style.setProperty("--range", value + "%");
    if (value >= 100) {
        document.documentElement.style.setProperty("--trackball", second);
    } else {
        document.documentElement.style.setProperty("--trackball", base);
    }

}

let updateVar2 = (value) => {
    let valueChanger = (playSongs.duration) / 100
    document.documentElement.style.setProperty("--deg2", value * 3.6 + "deg2");
    range2.max = Math.floor(playSongs.duration)
    document.documentElement.style.setProperty("--range2", (value / valueChanger) + "%")
    if (value >= 100) {
        document.documentElement.style.setProperty("--trackball", second);
    } else {
        document.documentElement.style.setProperty("--trackball", base);
    }

}

init(range.value);
range.addEventListener("input", () => {
    let deg = range.value * 3.6;
    updateVar(range.value);
    updateValue(range.value);
});
range2.addEventListener("input", () => {
    updateVar2(range2.value);
});

volume.addEventListener('click', function () {
    volume.classList.toggle('hidden');
    muteVolume.classList.toggle('hidden');
    valueVolume.value = '0'
    init(range.value);
    updateVar(range.value);
    updateValue(range.value);
})
muteVolume.addEventListener('click', function () {
    muteVolume.classList.toggle('hidden');
    volume.classList.toggle('hidden');
    valueVolume.value = '35'
    init(range.value);
    let deg = range.value * 3.6;
    updateVar(range.value);
    updateValue(range.value);


})
function checkSecondEnd() {
    const { duration, currentTime } = playSongs
    range2.value = playSongs.currentTime;

    updateVar2(currentTime)
    if (!duration) {
        end.textContent = "0:00";
    } else {
        end.textContent = minute(duration);

    }
    if (!currentTime) {
        start.textContent = "0:00";
    } else {
        start.textContent = minute(currentTime);
    }
}
range2.addEventListener('change', function () {
    playSongs.currentTime = range2.value;


})
function minute(value) {
    const minutes = Math.floor(value / 60)
    const seconds = Math.floor(value - minutes * 60)
    if (seconds < 10) {
        return minutes + ": 0" + seconds

    }
    return minutes + ":" + seconds
}
let repeat = false;
let shuffles = false
playSongs.addEventListener('ended', handleEndSOng)
function handleEndSOng() {
    if (repeat) {
        playSongs.play()
    } else {
        handleSong(1)
    }
    if (repeats) {
        handleShuffle
    }
    nameplay()

    playSongs.play()
}
repeats.addEventListener('click', handleRepat)
function handleRepat() {
    repeats.classList.toggle('colorwhite')
    if (repeat) {
        repeat = false;
    } else {
        repeat = true;
    }
}

shuffle.addEventListener('click', handleShuffle)
function handleShuffle() {
    shuffle.classList.toggle('colorwhite')
    randomcheck()

    if (shuffles) {
        shuffles = false;
    } else {
        shuffles = true;
    }
    console.log(shuffles)
}
function randomcheck() {
    let randomNumber = Math.floor(Math.random() * (song.length - 1))
    indexSong = randomNumber;
}
rotate_left.addEventListener('click', handleLeft)
function handleLeft() {
    playSongs.currentTime -= 15;
    if (playSongs.currentTime <= 0) {
        handleSong(-1)
    }
}
rotate_right.addEventListener('click', handleRight)
function handleRight() {
    playSongs.currentTime += 15;
    if (playSongs.currentTime >= playSongs.duration) {
        handleSong(-1)
    }
}
close.addEventListener('click', function () {
    navBar.style.transform = "translateX(-100%)"

})

open.addEventListener('click', handShow)
function handShow() { navBar.style.transform = "translateX(0%)" }
console.timeEnd('one')
function nameplay() {
    nameSC.innerHTML = song[indexSong].nameSong
    document.querySelector('.img').setAttribute('src', song[indexSong].img);
    describe.innerHTML = song[indexSong].album
}
nameplay();
function loadFull() {
    body.style.display = "block"
}
let buttons = false
window.addEventListener('keydown', function (e) {
    if (e.code === 'Space') {
        buttons = !buttons
        if (buttons) {
            playSongs.play()
            // tối ưu lại
            play.classList.toggle('hidden')
            pause.classList.toggle('hidden')
            load1s = setInterval(checkSecondEnd, 200)
            setRotate = setInterval(rotatefs, 1000)
            if (widthImg < 100) {
                rotate.classList.add('rotate')
            }
            nameplay()
        } else {

            pause.classList.toggle('hidden')
            play.classList.toggle('hidden')
            playSongs.pause()
            clearInterval(load1s)
            rotate.classList.remove('rotate')
            clearInterval(setRotate)

        }
    }
});
window.oncontextmenu = function (e) {
    e.preventDefault()
    alert('tính năng này đã bị chặn bơi nhà phát triển')
}
function myalert() {
    alert('tính năng này hiện chưa được cập nhật')
}
