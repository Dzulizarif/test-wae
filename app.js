const data = require('./contact.js');


const main = async() => {
    const nama = await data.tulisPertanyaan('Masukan Nama Anda :');
    const email = await data.tulisPertanyaan('Masukan Email Anda :');
    const noHp = await data.tulisPertanyaan('Masukan Nomer Anda :');

    data.simpanContact(nama, email, noHp);
}
main();