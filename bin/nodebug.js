var childProcess= require("child_process");
NODE_INSPECTOR = "node-inspector";
COFFEE = "COFFEE";
if(process.platform === "win32"){
    NODE_INSPECTOR += ".cmd"
    COFFEE += ".cmd";
}
nodeInpector = childProcess.spawn(NODE_INSPECTOR);
nodeInpector.stdout.on("data", function(data){
    console.log(data.toString("utf8"));
});
nodeInpector.stderr.on("data", function(data){
    console.log(data.toString("utf8"));
});

if(process.argv[2].indexOf(".coffee") != -1){
    debugProcess = childProcess.spawn(COFFEE, ["--nodejs", "--debug-brk", process.argv[2]]);
}else{
    debugProcess = childProcess.spawn("node", ["--debug-brk", process.argv[2]]);
}
debugProcess.stdout.on("data", function(data){
    console.log(data.toString("utf8"));
});
debugProcess.stderr.on("data", function(data){
    console.log(data.toString("utf8"));
});

