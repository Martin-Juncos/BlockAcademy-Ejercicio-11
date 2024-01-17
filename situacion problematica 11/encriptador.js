const fs = require("fs");
const crypto = require("crypto");

// Lectura del archivo
const contenidoDocumento = fs.readFileSync("documento.txt", "utf8");

// Encriptacion
const algoritmo = "aes-256-cbc";
const clave = crypto.randomBytes(32);
const iv = crypto.randomBytes(16);

const cifrador = crypto.createCipheriv(algoritmo, clave, iv);
let contenidoEncriptado = cifrador.update(contenidoDocumento, "utf8", "hex");
contenidoEncriptado += cifrador.final("hex");

// Almacenamiento del archivo encriptado
const carpetaEncriptados = "archivos_encriptados";
if (!fs.existsSync(carpetaEncriptados)) {
  fs.mkdirSync(carpetaEncriptados);
}
fs.writeFileSync(
  `${carpetaEncriptados}/documento_encriptado.txt`,
  contenidoEncriptado,
  "utf8"
);

// Confirmar de exito
console.log(
  'Archivo encriptado y guardado en la carpeta "Archivos encriptados"!'
);
