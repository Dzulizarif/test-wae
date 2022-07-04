const { rejects } = require('assert');
const fs = require('fs');
const { resolve } = require('path');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin, 
    output: process.stdout,
})

const data = './data';

if(!fs.existsSync(data)){
    fs.mkdirSync(data);
}

const file = './data/contact.js';

if(!fs.existsSync(file)){
    fs.writeFileSync(file, '[]', 'utf-8');
}

const tulisPertanyaan = (pertanyaan) => {
    return new Promise((resolve, reject) => {
        rl.question(pertanyaan, (nama) => {
            resolve(nama);
        })
    })
} 


const simpanContact = (nama, email, noHp) =>{
    const contact = {nama, email, noHp};
    const files = fs.readFileSync('data/contact.js', 'utf-8');
    const contacts = JSON.parse(files);
    contacts.push(contact);
    fs.writeFileSync('data/contact.js', JSON.stringify(contacts), 'utf-8');
    console.log('Terimakasih Sudah Menginput!');
    rl.close();
}

module.exports = {tulisPertanyaan, simpanContact};