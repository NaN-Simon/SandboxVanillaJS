/* RUN: put getFilesJson.js file in scan zone,
        enter: node getFilesJson.js
        read data.json
*/

let fs = require("fs");
const path = require('path');

function removeExtension(filename) {
  return (
    filename.substring(0, filename.lastIndexOf('.')) || filename
  );
}

function readFolder(folderPath, fileArray = []) {
  fs.readdir(folderPath, { withFileTypes: true }, (err, files) => {
    /* обработка ошибки */
    err && console.log('ошибка чтения: ', err);
    /* просмотр каждого файла */
    files.forEach((file) => {
      const filePath = path.join(folderPath, file.name);
      /* проверка папка ли это */
      fs.stat(filePath, (error, stats) => {
        /* обработка ошибки */
        error && console.log('ошибка проверки информации: ', err);

        if (stats && stats.isDirectory()) {
          /* если папка - рекурсивный вызов */
          readFolder(filePath, fileArray)
        } else {
          /* запись результата в массив */
          const obj = {}
          obj.path = folderPath
          obj.filename = removeExtension(file.name)
          fileArray.push(obj);
        }
        /* вывод готового fileArray в файл в виде JSON */
        fs.writeFileSync("data.json", JSON.stringify(fileArray));
      });
    });
  })
}

readFolder('.')