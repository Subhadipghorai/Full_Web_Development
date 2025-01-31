import fs from "fs/promises";
import fsn from "fs";
import path from "path";

const basePath = "D:\\Web_Dev_tutorial\\Full_Web_Development-\\video_93";
let file = await fs.readdir(basePath);

for (const item of file) {
    let ext = item.split(".")[item.split(".").length - 1];
    if (ext != "js" && ext != "json" && item.split(".").length > 1) {


        if (fsn.existsSync(path.join(basePath, ext))) {
            //move the file to the directory if its not a js or json file
            fs.rename(path.join(basePath, item), path.join(basePath, ext, item));
        } 
        else {
            fs.mkdir(ext);
        }
    }
    console.log(item);
}
