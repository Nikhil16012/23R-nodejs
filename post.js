//task 1 creating a folder when we hit an api

// var http=require("http")
//var fs=require("fs");
// let server=http.createServer((req,res)=>{
// fs.mkdir("arjun",(err)=>{
//             if(err){
//                 throw err;
//                 res.end("")
//             }
//             else{
//                 console.log("folder is created")
//                 res.end("")


//             }
//         })
//      })

// port=3000
// server.listen(port,()=>{
//     console.log("server is running"+"http://localhost:"+port);
// })

//task2 deleting files and folder in folder using rmdir

// fs.rmdir("arjun",(err)=>{
//     if(err){
//     throw err;
//     }
//     else{
//         console.log("folder is deleted");
//     }
// })
const fs = require('fs');
const path = require('path');

function deleteFolderRecursive(folderPath, callback) {
    fs.readdir(folderPath, (err, files) => {
        if (err) return callback(err);

        if (files.length === 0) {
            // If the folder is empty, delete it
            return fs.rmdir(folderPath, callback);
        }

        let completed = 0;
        function checkCompletion(err) {
            if (err) return callback(err);
            completed++;
            if (completed === files.length) {
                // Once all contents are deleted, delete the folder itself
                fs.rmdir(folderPath, callback);
            }
        }

        // Iterate through files/subdirectories
        files.forEach((file) => {
            const curPath = path.join(folderPath, file);

            fs.lstat(curPath, (err, stats) => {
                if (err) return checkCompletion(err);

                if (stats.isDirectory()) {
                    // Recursively delete subdirectory
                    deleteFolderRecursive(curPath, checkCompletion);
                } else {
                    // Delete file (requires fs.unlink)
                    fs.unlink(curPath, checkCompletion);
                }
            });
        });
    });
}

// Example usage
deleteFolderRecursive('arjun', (err) => {
    if (err) {
        console.error('Error deleting folder:', err);
    } else {
        console.log('Folder and its contents are deleted');
    }
});