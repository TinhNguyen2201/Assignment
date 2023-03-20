// Khối cỡ


var checkNutThem1, checkNutThem2;


let khoico = document.getElementsByClassName("khoico");

for (let i = 0; i < khoico.length; i++) {

    
    
    khoico[i].onclick = function() {
        
        if(this.classList.contains('selected')){

            checkNutThem1 = false;
            // document.getElementById('addToCart').disabled = true;


        }else{
            for(var j = 0; j < khoico.length; j++){
    
                function chonkhoico() {
                    khoico[j].classList.remove('selected');
                };
                chonkhoico();
            }
            // document.getElementById('addToCart').disabled = false;
            checkNutThem1 = true;

        }


    if(this.classList.contains('selected')){
        this.classList.remove('selected');
    }else{
        this.classList.add('selected');
    }



    if(checkNutThem1==true & checkNutThem2==true){
        document.getElementById('addToCart').disabled = false;
    }else{
        document.getElementById('addToCart').disabled = true;
    }






}


}




// khối màu




let khoimau = document.getElementsByClassName("khoimau");

for (let i = 0; i < khoimau.length; i++) {

    
    
    khoimau[i].onclick = function() {
        
        if(this.classList.contains('selected')){

            checkNutThem2 = false;

        }else{
            for(var j = 0; j < khoimau.length; j++){
    
                function chonkhoimau() {
                    khoimau[j].classList.remove('selected');
                };
                chonkhoimau();
            }

            checkNutThem2 = true;

        }


    if(this.classList.contains('selected')){
        this.classList.remove('selected');
    }else{
        this.classList.add('selected');
    }


if(checkNutThem1==true & checkNutThem2==true){
    document.getElementById('addToCart').disabled = false;
}else{
    document.getElementById('addToCart').disabled = true;
}


}


}







// nút thêm vào giỏ hàng










document.getElementById('showcart').style.display = 'none';


var giohang = new Array();


function themSP(sp) {
    var boxsp = sp.parentElement.children;
    var hinh = boxsp[0].src;
    var ten = boxsp[1].innerText;
    var gia = boxsp[3].children[0].innerText;
    var soluong = 1;
    var sanpham = new Array(hinh, ten, gia, soluong);
    
    giohang.push(sanpham);

    showmycart();


    sessionStorage.setItem('giohang', JSON.stringify(giohang));
}

    var gh = sessionStorage.getItem('giohang');
    var giohang = JSON.parse(gh);




function showmycart() {
    
    var ttgh = '';
    var tong = 0;
    tong += tt;
    for(var i = 0; i < giohang.length; i++) {
        var tt = giohang[i][2] * giohang[i][3];
        ttgh +='<tr>'+
        '<th>'+
            '<div class="hinhHangMua-tenHangMua">'+
                '<div class="hinhHangMua"><img src="'+giohang[i][0]+'" alt=""></div>'+
                '<div class="tenHangMua"><a href="#">'+giohang[i][1]+'</a></div>'+
            '</div>'+
        '</th>'+
        '<th>'+giohang[i][2]+'₫</th>'+
        '<th><input type="number" value="1" min="0" id="soLuongSP" readonly></th>'+
        '<th>'+tt+'₫</th>'+
    '</tr>'


    }

document.getElementById('mycart').innerHTML = ttgh;
}


function showcart(){
    var x = document.getElementById('showcart');
    if(x.style.display == 'block') {
        x.style.display = 'none';
    }else {
        x.style.display = 'block';
    }
}




function showgiohang() {
    var gh = sessionStorage.getItem('giohang');
    var giohang = JSON.parse(gh);
    
    var ttgh = '';
    var tttt = '';
    var tong = 0;
    var stt = 0;
    for(var i = 0; i < giohang.length; i++) {

        var tt = parseInt(giohang[i][2]) * parseInt(giohang[i][3]);
        tong += tt;
        ttgh +='<tr>'+
        '<th>'+
            '<div class="hinhHangMua-tenHangMua">'+
                '<span>'+ `${++stt}` +'</span>'+
                '<div class="nutXoaSP"><a onclick="xoaSP(this)"><i class="fa fa-trash" aria-hidden="true"></i></a></div>'+
                '<div class="hinhHangMua"><img src="'+giohang[i][0]+'" alt=""></div>'+
                '<div class="tenHangMua"><a href="#">'+giohang[i][1]+'</a></div>'+
            '</div>'+
        '</th>'+
        '<th>'+giohang[i][2]+'₫</th>'+
        '<th><input type="number" value="1" min="0" class="soLuongSP"></th>'+
        '<th>'+tt+'₫</th>'+
    '</tr>'

    }

    tttt += '<tr>'+
    '<td>Tạm Tính</td>'+
    '<td>'+tong+'₫</th>'+
'</tr>'+
'<tr>'+
    '<td>Tổng Tiền</td>'+
    '<td>'+tong+'₫</td>'+
'</tr>'

document.getElementById('sumPrice').innerHTML = tttt;
document.getElementById('mycart').innerHTML = ttgh;

};



function capNhatGioHang() {
    var gh = sessionStorage.getItem('giohang');
    var giohang = JSON.parse(gh);

    var tttt = '';
    var tong = 0;
    for(var i = 0; i < giohang.length; i++) {
        var x = document.getElementsByClassName('soLuongSP');
        for(var j = 0; j < x.length; j++){
            var tt = parseInt(giohang[i][2]) * x[j].value;
            if(i == j){
                tong += tt;
            }
        }
    }

    tttt += '<tr>'+
    '<td>Tạm Tính</td>'+
    '<td>'+tong+'₫</th>'+
'</tr>'+
'<tr>'+
    '<td>Tổng Tiền</td>'+
    '<td>'+tong+'₫</td>'+
'</tr>'

document.getElementById('sumPrice').innerHTML = tttt;
}


function xoaSP(sanPhamXoa) {
    var spx = sanPhamXoa.parentElement.parentElement.children;
    console.log(spx[0].innerText);
    
    var gh = sessionStorage.getItem('giohang');
    var giohang = JSON.parse(gh);
    
    for(var i = 0; i < giohang.length; i++) {
        
        if(i == (spx[0].innerText - 1)){
            giohang.splice(i, 1);
        }
    }
    // showgiohang();
    
//     var ttgh = '';
//     var tttt = '';
//     var tong = 0;
//     var stt = 0;
//         for(var i = 0; i < giohang.length; i++) {
//         var tt = parseInt(giohang[i][2]) * parseInt(giohang[i][3]);
//         tong += tt;
//         ttgh +='<tr>'+
//         '<th>'+
//             '<div class="hinhHangMua-tenHangMua">'+
//                 '<span>'+ `${++stt}` +'</span>'+
//                 '<div class="nutXoaSP"><a onclick="xoaSP()"><i class="fa fa-trash" aria-hidden="true"></i></a></div>'+
//                 '<div class="hinhHangMua"><img src="'+giohang[i][0]+'" alt=""></div>'+
//                 '<div class="tenHangMua"><a href="#">'+giohang[i][1]+'</a></div>'+
//             '</div>'+
//         '</th>'+
//         '<th>'+giohang[i][2]+'₫</th>'+
//         '<th><input type="number" value="1" min="0" class="soLuongSP"></th>'+
//         '<th>'+tt+'₫</th>'+
//     '</tr>'

//     }

//     tttt += '<tr>'+
//     '<td>Tạm Tính</td>'+
//     '<td>'+tong+'₫</th>'+
// '</tr>'+
// '<tr>'+
//     '<td>Tổng Tiền</td>'+
//     '<td>'+tong+'₫</td>'+
// '</tr>'

// document.getElementById('sumPrice').innerHTML = tttt;
// document.getElementById('mycart').innerHTML = ttgh;

sessionStorage.setItem('giohang', JSON.stringify(giohang));
showgiohang();

// var spx = sanPhamXoa.parentElement.parentElement.children;
}