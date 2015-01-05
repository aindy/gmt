var exec = require('child_process').exec,
    child;
exports.execEngrueDominoIsRunning = function (serverName){

child = exec('ssh root@9.111.36.78 "cd /etc/chef/repository/run_scripts ; ./run_recipe_auto.rb cdlg3 ' + serverName + ' domino::ensure-domino-is-running"',
  function (error, stdout, stderr) {
    console.log('stdout: ' + stdout);
    console.log('stderr: ' + stderr);
    if (error !== null) {
      console.log('exec error: ' + error);
    }
  });
};
