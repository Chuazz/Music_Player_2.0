import * as myVar  from "../../../../module/variable.js";
import * as myFunc from "../../../../module/function.js";

var songList = JSON.parse(localStorage.getItem("songs"));
var checkedSong = [];

const updateSongApp = {
    isDelete: false,
    isUpdate: false,
    // Chuyển tab
    changeTab: function () {
        myVar.navItems.forEach((navItem, i) => {
            var songForm = myVar.songForms[i];

            navItem.addEventListener("click", () => {
                myVar.songForms.forEach((songForm, i) => {
                    songForm.classList.add("remove");
                    myVar.navItems[i].classList.remove("active");
                });

                navItem.classList.add("active");
                songForm.classList.remove("remove");
            });
        })
    },

    // form cập nhập bài hát
    formUpdate: function (song) {
        return `
        <form action="" method="post" class="form__validator song__form--update relative">
            <div class="form__body">
                <div class="form__group">
                    <label for="songname">Tên bài hát</label>
                    <input type="text" value="${song.name}" name="songname" rule="required|fullname" id="songname" class="form__control" placeholder="Ví dụ: ú òa">
                    <span class="form__warning"></span>
                </div>

                <div class="form__group">
                    <label for="songlink">Link bài hát</label>
                    <input type="text" value="${song.path}" name="songlink" rule="required" id="songlink" class="form__control" placeholder="Sài link google drive nhaa 😁">
                    <span class="form__warning"></span>
                </div>

                <div class="form__group">
                    <label for="songimg">Ảnh bài hát</label>
                    <input type="text" value="${song.image}" name="songimg" rule="required" id="songimg" class="form__control" placeholder="Link nào cũng được ">
                    <span class="form__warning"></span>
                </div>

                <div class="form__group">
                    <label for="singername">Tên tác giả</label>
                    <input type="text" value="${song.singer}" name="singername" rule="required|fullname" id="singername" class="form__control" placeholder="Ví dụ: Ngô Văn Sơn">
                    <span class="form__warning"></span>
                </div>

                <div style="top: -18%" class="update-btn">Hoàn tất</div>
            </div>
        </form>
        `
    },

    handleEvents: function () { 
        // Bấm để hiển thị danh sách
        myVar.navBar.addEventListener("click", (e) => {
            var addBtn = e.target.closest(".add");
            var deleteBtn = e.target.closest(".delete");
            var updateBtn = e.target.closest(".update");

            if(addBtn){
                myVar.$("title").innerHTML = "Thêm bài hát";
            }

            if(deleteBtn){
                myVar.deleteBtn.classList.add("remove");
                myFunc.renderSong(songList, myVar.deleteBox);
                myVar.$("title").innerHTML = "Xóa bài hát";
            }

            if(updateBtn){
                checkedSong = [];
                myFunc.renderSong(songList, myVar.updateBox);
                myVar.$("title").innerHTML = "Cập nhập lại bài hát";
            }
        });

        // Đưa những bài hát cần xóa vào 1 mảng
        myVar.deleteBox.addEventListener("click", (e) => {
            var songContent = e.target.closest(".song__content-body");

            if(songContent){
                songContent.classList.toggle("active");
                var id = Number(songContent.dataset.index);

                checkedSong.push(songList[id-1]);
                checkedSong = checkedSong.filter(value => {
                    return myFunc.countElementTime(checkedSong, value) === 1;
                });

                if(checkedSong.length > 0){
                    myVar.deleteBtn.classList.remove("remove");
                    myVar.deleteBtn.querySelector("span").innerHTML = `${checkedSong.length}`;
                }
                else{
                    myVar.deleteBtn.classList.add("remove");
                }

            }
        });

        // Xóa những bài hát đã chọn
        myVar.deleteBtn.addEventListener("click", (e) => {
            for (let i = 0; i < checkedSong.length; i++) {
                const song = checkedSong[i];
                
                if(songList.includes(song)){
                    myFunc.CountFromID(songList.indexOf(song), songList);
                    songList.splice(songList.indexOf(song), 1);
                    myFunc.renderSong(songList, myVar.deleteBox);
                }
            }
            checkedSong = [];
            myVar.deleteBtn.classList.add("remove");
            localStorage.setItem("songs", JSON.stringify(songList));
            alert("Nhớ load lại trang chủ nhá😁");
        });

        // Thêm 1 bài hát
        myVar.addBtn.addEventListener("click", () => {
            const audio = document.createElement("audio");

            audio.src = myFunc.convertDriveLink(myVar.inputSongLink.value);
            audio.addEventListener("loadedmetadata", () => {
                const songDct = {
                    id: songList.length + 1,
                    name: myVar.inputSongName.value,
                    path: myVar.inputSongLink.value,
                    singer: myVar.inputSingerName.value,
                    image: myVar.inputSongImg.value,
                    duration: audio.duration,
                }

                songList.push(songDct);
                localStorage.setItem("songs", JSON.stringify(songList));

                myVar.inputSongLink.value = "";
                myVar.inputSongName.value = "";
                myVar.inputSingerName.value = "";
                myVar.inputSongImg.value = "";

                alert("Nhớ load lại trang chủ nhá😁");
            });
        });

        // #error
        // Khi nhấp vào bài khác thì form cũ ko mất đi🤦‍♀️
        // Cập nhập 1 bài hát
        myVar.updateBox.addEventListener("click", (e) => {
            var songContent = e.target.closest(".song__content-body");
            var contentParent = myFunc.getParentElement(songContent, ".song__content");
            var updateBtn = e.target.closest(".update-btn");
            
            if(songContent && !e.target.closest(".form-update")){
                var formUpdate = songContent.querySelector(".form-update");
                var id = Number(songContent.dataset.index - 1);
             
                // var songContents = myVar.$$(".song__content-body");
                // songContents.forEach((songContent, i) => {
                //     songContent.classList.remove("active");
                //     myVar.$$(".song__content")[i].classList.remove("checked");
                // });

                songContent.classList.toggle("active");
                contentParent.classList.toggle("checked");
                formUpdate.innerHTML = this.formUpdate(songList[id]);
                e.stopPropagation();
            }

            if(updateBtn){
                var id = Number(songContent.dataset.index);
                var path = songContent.querySelector("input[name=songlink]").value;
                var name = songContent.querySelector("input[name=songname]").value;
                var singer = songContent.querySelector("input[name=singername]").value;
                var image = songContent.querySelector("input[name=songimg]").value;
                var audio = document.createComment("audio");

                audio.src = myFunc.convertDriveLink(path);
                songContent.querySelector("audio").src = myFunc.convertDriveLink(path);
                songContent.querySelector(".song__name").innerHTML = name;
                songContent.querySelector(".song__author").innerHTML = singer;
                songContent.querySelector(".song__img").src = image;
                
                if(audio.src !== undefined){
                    songContent.querySelector("audio").addEventListener("loadedmetadata", () => {
                        var update = {
                            id: id,
                            name: name,
                            singer: singer,
                            path: path,
                            image: image,
                            duration: songContent.querySelector("audio").duration,
                        }
    
                        songList.splice(id-1, 1, update);
                        console.log(songList);
                        localStorage.setItem("songs", JSON.stringify(songList));

                        alert("Nhớ load lại trang chủ nhá😁");
                    });
                }
                else{
                    alert("Example about MP3 drive link:\nhttps://drive.google.com/file/d/XXXXXXXX/view?usp=sharing");
                }

                songContent.classList.remove("active");
                contentParent.classList.remove("checked");
            }
        });
    },

    start: function () {
        this.changeTab();
        this.handleEvents();
    }
};

updateSongApp.start();