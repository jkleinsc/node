const cp = require('child_process');

const shell = `${process.env.ProgramFiles}\\Git\\usr\\bin\\bash.exe`;
console.log('Shell is:', shell);

cp.exec('echo foo bar', { shell: shell }, (error, stdout, stderror) => {
  if (error) {
    console.log('Have error!');
  } else {
    console.log('Success!');
  }
  console.log('Stdout: ', stdout);
  console.log('Stderr: ', stderror);
});
