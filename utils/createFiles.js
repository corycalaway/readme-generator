// allows use of filesystems in node
const fs = require('fs');

// creates Readme file
const createReadme = fileContent => {
    return new Promise((resolve, reject) => {
        // uses data from generate markdown page as filecontent
    fs.writeFile('./src/README.md', fileContent, err => {
        // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
        if (err) {
          reject(err);
          // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
          return;
        }
  
        // if everything went well, resolve the Promise and send the successful data to the `.then()` method
        resolve({
          ok: true,
          message: 'File created!'
    })})})
}; 

const createLicense = (fileContent) => {
  return new Promise((resolve, reject) => {
      // uses data from generate markdown page as filecontent
  fs.writeFile('./src/LICENSE', fileContent, err => {
      // if there's an error, reject the Promise and send the error to the Promise's `.catch()` method
      if (err) {
        reject(err);
        // return out of the function here to make sure the Promise doesn't accidentally execute the resolve() function as well
        return;
      }

      // if everything went well, resolve the Promise and send the successful data to the `.then()` method
      resolve({
        ok: true,
        message: 'File created!'
  })})})
}; 

module.exports = {createReadme, createLicense};