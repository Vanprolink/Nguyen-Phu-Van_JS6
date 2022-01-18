function soNguyenDuong(){
    // var nhapNVl= document.getElementById("nhapN").value*1;
    var count = 0;
    var sum = 0;
    while(sum < 10000){
        sum += count;
        count++;
    }
    document.getElementById("xuatKetQua1").innerText = count;
    document.getElementById("xuatKetQua").innerText = sum;
    console.log(sum);
    console.log(count);
}