exports.index = function(req, res){
res.render('index', { title: 'Glider Master Tool' });
};
exports.login = function(req, res){
res.render('login', { title: '用户登陆'});
};
exports.sendCMD = function(req, res){
res.render('sendCMD', { title: '发送命令'});
};
exports.doSendCMD = function (req, res) {
    var commandLine = "";
    var result;
    commandLine = 'ssh root@9.111.36.78 "cd /etc/chef/repository/run_scripts ; ./run_recipe_auto.rb cdlg3 ' + req.body.servername + ' '+req.body.cmd+'"';
    var exec = require('child_process').exec,
    child;
    console.log('trace commandLine:' + commandLine);
    child = exec(commandLine,function (error, stdout, stderr) {
        result=stdout+stderr;
        console.log('result: ' + result);
        res.render('doSendCMD', { title: '结果', result: result });
    if (error !== null) {
      console.log('exec error: ' + error);
      res.render('doSendCMD', { title: '结果', result: result });
    }
});
    
};
exports.doLogin = function(req, res){
var user={
username:'admin',
password:'admin'
}
if(req.body.username===user.username && req.body.password===user.password){
res.redirect('/home');
}
res.redirect('/login');
};
exports.logout = function(req, res){
res.redirect('/');
};
exports.home = function(req, res){
var user={
username:'admin',
password:'admin'
}
res.render('home', { title: 'Home',user: user});
};