function tinhTong(){
    var nhapXVl= document.getElementById("nhapX").value*1;
    var nhapNVl= document.getElementById("nhapN").value*1;
    var sum = 0;
    var giaithua = 1;
    for (var i = 1; i <= nhapNVl; i++){
        giaithua = giaithua * nhapXVl;
        sum += giaithua;
    }
    console.log(sum);
    document.getElementById("xuatKetQua2").innerText = sum;
}
