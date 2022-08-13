const songs = [
    {
        "id": 1,
        "name": "Hai Mươi Hai 22",
        "singer": "Amee, Hứa Kim Tuyền",
        "path": "https://drive.google.com/file/d/1DA1MtJJ81Q6ZmywsUgfRzmedRRcCsDQQ/view?usp=sharing",
        "image": "https://raw.githubusercontent.com/Chuazz/Music_PLayer_1.0/main/assets/img/HaiMuoiHai.jpg",
        "duration": ""
    },
    {
        "id": 2,
        "name":  "Tâm Sự Tuổi 30",
        "singer": "Trịnh Thanh Bình",
        "path": "https://drive.google.com/file/d/1kiKHHFDOozdYpoLGbHrDhfBioXfUc54C/view?usp=sharing",
        "image": "https://raw.githubusercontent.com/Chuazz/Music_PLayer_1.0/main/assets/img/TamSuTuoi30.jpg",
        "duration": ""
    },
    {
        "id": 3,
        "name": "Từng Thương",
        "singer": "Phan Duy Anh",
        "path": "https://drive.google.com/file/d/1GFNMfwq5Op68CjCEAHAioiuuKwbSdZgA/view?usp=sharing",
        "image": "https://raw.githubusercontent.com/Chuazz/Music_PLayer_1.0/main/assets/img/TungThuong.jpg",
        "duration": ""
    },
    {
        "id": 4,
        "name": "Yêu Đương Khó Quá Thì Về Khóc Với Anh",
        "singer": "Erik",
        "path": "https://drive.google.com/file/d/1NkDc0va1uTMCXXpWpo8E46m34URh2_Sm/view?usp=sharing",
        "image": "https://raw.githubusercontent.com/Chuazz/Music_PLayer_1.0/main/assets/img/YeuDuongkhoQua.jpg",
        "duration": ""
    },
    {
        "id": 5,
        "name": "3107",
        "singer": "Nâu, Dương, W/N",
        "path": "https://drive.google.com/file/d/1pkoDsQRpO7IUm4qt6w2-PqDmmeybwQer/view?usp=sharing",
        "image": "https://raw.githubusercontent.com/Chuazz/Music_PLayer_1.0/main/assets/img/3107.jpg",
        "duration": ""
    },
    {
        "id": 6,
        "name": "Tình Yêu Màu Nắng",
        "singer": "Đoàn Thúy Trang, Big Daddy",
        "path": "https://drive.google.com/file/d/18NIFJVwYrE4IdMLnrYij1XDP8aVVx5km/view?usp=sharing",
        "image": "https://raw.githubusercontent.com/Chuazz/Music_PLayer_1.0/main/assets/img/TinhYeuMauNang.jpg",
        "duration": ""
    },
    {
        "id": 7,
        "name": "Thu Cuối",
        "singer": "Mr T x Yanbi x Hằng Bingboong",
        "path": "https://drive.google.com/file/d/1-jTTjlMhWnsJ37VvqStWkoAD9gM--Mfd/view?usp=sharing",
        "image": "https://raw.githubusercontent.com/Chuazz/Music_PLayer_1.0/main/assets/img/ThuCuoi.jpg",
        "duration": ""
    },
    {
        "id": 8,
        "name": "Có Như Không Có",
        "singer": "Hiền Hồ",
        "path": "https://drive.google.com/file/d/1yLfECWCK0q8W___0aYsd0mbJy2etiE1D/view?usp=sharing",
        "image": "https://raw.githubusercontent.com/Chuazz/Music_PLayer_1.0/main/assets/img/CoNhuKhongCo.jpg",
        "duration": ""
    },
    {
        "id": 9,
        "name": "Cô Gái Vàng",
        "singer": "HuyR x Tùng Viu x Quang Đăng",
        "path": "https://drive.google.com/file/d/1q3hCp7YbvPa9YsplCqXUvgK2nmxAE4m6/view?usp=sharing",
        "image": "https://raw.githubusercontent.com/Chuazz/Music_PLayer_1.0/main/assets/img/CoGaiVang.jpg",
        "duration": ""
    },
    {
        "id": 10,
        "name": "Hạ Sang",
        "singer": "Đào Duy Quý, lenguyenhuukhanh",
        "path": "https://drive.google.com/file/d/1ta8ubXe1Rp81UfKZgkWlaxPU06fuM0CS/view?usp=sharing",
        "image": "https://raw.githubusercontent.com/Chuazz/Music_PLayer_1.0/main/assets/img/HaSang.jpg",
        "duration": ""
    },
    {
        "id": 11,
        "name": "Tìm lại bầu trời",
        "singer": "Tuấn Hưng",
        "path": "https://drive.google.com/file/d/1MITTxWFmC3ncj0HLfU4hIC3BCtWgZBO9/view?usp=sharing",
        "image": "https://raw.githubusercontent.com/Chuazz/Music_PLayer_1.0/main/assets/img/TuanHung.jpg",
        "duration": ""
    },
    {
        "id": 12,
        "name": "Sẽ không còn nữa",
        "singer": "Tuấn Hưng",
        "path": "https://drive.google.com/file/d/1kiKHHFDOozdYpoLGbHrDhfBioXfUc54C/view?usp=sharing",
        "image": "https://raw.githubusercontent.com/Chuazz/Music_PLayer_1.0/main/assets/img/TuanHung.jpg",
        "duration": ""
    },
    {
        "id": 13,
        "name": "Phải chia tay thôi",
        "singer": "Tuấn Hưng",
        "path": "https://drive.google.com/file/d/1ta8ubXe1Rp81UfKZgkWlaxPU06fuM0CS/view?usp=sharing",
        "image": "https://raw.githubusercontent.com/Chuazz/Music_PLayer_1.0/main/assets/img/TuanHung.jpg",
        "duration": ""
    },
    {
        "id": 14,
        "name": "Độc thoại",
        "singer": "Tuấn Hưng",
        "path": "https://drive.google.com/file/d/1mc6GFvYLUz7pkKaiDNbaJyFLDcKRQqly/view?usp=sharing",
        "image": "https://raw.githubusercontent.com/Chuazz/Music_PLayer_1.0/main/assets/img/TuanHung.jpg",
        "duration": ""
    },
    {
        "id": 15,
        "name": "Bánh mì không",
        "singer": "Đạt G, Du Uyên",
        "path": "https://drive.google.com/file/d/1q3hCp7YbvPa9YsplCqXUvgK2nmxAE4m6/view?usp=sharing",
        "image": "https://raw.githubusercontent.com/Chuazz/Music_PLayer_1.0/main/assets/img/BanhMiKhong.jpg",
        "duration": ""
    },
    {
        "id": 16,
        "name": "3107 2",
        "singer": "Nâu, Dương, W/N",
        "path": "https://drive.google.com/file/d/1pkoDsQRpO7IUm4qt6w2-PqDmmeybwQer/view?usp=sharing",
        "image": "https://raw.githubusercontent.com/Chuazz/Music_PLayer_1.0/main/assets/img/3107.jpg",
        "duration": ""
    }
]

export { songs };