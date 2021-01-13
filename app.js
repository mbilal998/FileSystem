require("dotenv").config();
const os = require("os");
const fs = require("fs");

const path = os.homedir();
console.log(path);

const saving_path = path + '/' + process.env.doc_name + '/';

const tutorialInfo = () => {
  return "React" + " " + "Node" + " " + os.platform();
};

if (!fs.existsSync(saving_path)) {
  fs.mkdirSync(saving_path);
}

new Promise((resolve, reject) => {
  fs.writeFile(saving_path + "TestingFile.txt", tutorialInfo(), (err, data) => {
    if (err) {
      reject(err);
    } else {
      resolve("File created");
    }
  });
})
  .then((message) => {
    console.log(message);
  })
  .catch((err) => {
    console.log(err);
  });
