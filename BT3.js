function tinhGiaiThua(){
    var nhapN2Vl = document.getElementById("nhapN2").value*1;
    var giaiThua = 1;
    for(var i =1; i<= nhapN2Vl; i++){
        giaiThua = giaiThua*i;
    }
    document.getElementById("xuatKetQua3").innerText = giaiThua;
}