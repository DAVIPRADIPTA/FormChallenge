const requiredMark= document.querySelectorAll('span');
for(let i = 0; i < requiredMark.length; i++) {
    requiredMark[i].style.color = 'red'
}

const input = document.getElementsByTagName('input');
for(let i = 0; i < input.length; i++){
    input[i].style.borderStyle = 'solid';
    input[i].style.borderColor = 'black';
    input[i].style.borderWidth = '1px';
    input[i].style.borderRadius = '3px';
}

const nama = document.getElementById('nama');
const email = document.getElementById('email');
const pesan = document.getElementById('pesan');

function cekValidasi() {
    if (nama.value == ""){
        alert('nama harus di isi');
    }else if (email.value == ""){
        alert('email harus di isi');
    } else if (pesan.value == ""){
        alert('pesan harus di isi');
    }else {
        const iya = confirm(nama.value +",terimakasih sudah mengisi semua form, Apakah kamu sudah yakin dengan jawabanmu?");

        if (iya){
            document.write(" nama :" + nama.value + " email :" + email.value + " pesan :" + pesan.value)
        }
    } 
}
