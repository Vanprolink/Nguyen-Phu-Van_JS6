function inSo(){
    var nhapN5Vl = document.getElementById("nhapN5").value*1;
    var chuoiSo = " ";
    for(var i =1; i<=nhapN5Vl; i++){
        chuoiSo = chuoiSo + i+",";
    }

    document.getElementById("xuatKetQua5").innerHTML = chuoiSo;
}