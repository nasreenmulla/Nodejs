const fs= require('fs');
fs.readFile('file.txt','utf8',(err,data)=>{//unblocking and last line will be printed
    console.log(err,data)

})
// const a=fs.readFileSync('file.txt')//this will block the execution here
// console.log(a.toString)
// fs.writeFile('file2.txt',"thisis file2",()=>{
//    console.log("written to the filr")
// });
console.log("file is reached end")