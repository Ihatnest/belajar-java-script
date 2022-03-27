// popupbox
// 1.alert
// 2.prompt
// 3.confirm

// 1.alert
alert('welcome');
// prompt
var x = prompt('masukan nama anda');
alert('hai ' + x);
// confimi
var c = confirm('apakah anda ingin menghapus wahai ' + x);
if(c === true){
    alert('oke ada akan menghapus')
}else{
    alert('oke tridak jadi')
};
