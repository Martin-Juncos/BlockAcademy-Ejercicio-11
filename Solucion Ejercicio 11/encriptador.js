const fs = require('fs');
const crypto = require('crypto');

// 1. Lectura del Archivo
const mensaje = fs.readFileSync('mensaje.txt', 'utf8');

// 2. Generar una Clave Secreta
const clave = crypto.randomBytes(32); // Generar una clave secreta de 256 bits

// 3. Encriptación
const iv = crypto.randomBytes(16); // Generar un vector de inicialización
const cifrador = crypto.createCipheriv('aes-256-cbc', clave, iv);
const textoCifrado = Buffer.concat([cifrador.update(mensaje, 'utf8'), cifrador.final()]);

// 4. Almacenamiento del Archivo Encriptado
fs.writeFileSync('mensaje_encriptado.txt', textoCifrado);

// 5. Almacenar la Clave Secreta
fs.writeFileSync('clave.txt', clave.toString('hex'));

console.log('Archivo encriptado y clave secreta guardados con éxito.');
