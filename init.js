"use_strict";

atom.commands.add('atom-workspace', 'custom:semicolonize', () => {
  let editor = atom.workspace.getActiveTextEditor();
  let pos = editor.getCursorBufferPosition();
  editor.moveToEndOfLine();
  editor.insertText(";");
  editor.setCursorBufferPosition(pos);
});

atom.commands.add('atom-workspace', 'custom:testuoju', () => {
  alert('labas init ssdsdscriptas');
  console.log('something');
});

atom.commands.add('atom-workspace', 'custom:save-and-execute', () => {
  atom.commands.dispatch(atom.views.getView(atom.workspace), 'core:save');
  console.log('--------------');
  console.log(process.cwd());
  console.log('--------------');

  let pro = require('child_process');
  pro.exec('curl localhost:8080/send-reload-response', (error, stdout, stderr) => {
    console.log(stdout);
  })
  pro.exec('echo labadiena', (error, stdout, stderr) => {
    console.log('this is stdout');
    console.log(stdout);
  })
});

atom.commands.add('atom-workspace', 'custom:terminal-show-focus', () => {
  console.log('somethng something');
  let pane = atom.workspace.getPaneItems();
  const pro = require('child_process');
  console.log(process);
  let el = document.createElement('atom-panel');
  let container = document.getElementsByTagName('atom-panel-container');
});

atom.commands.add('atom-workspace', 'custom:eval-code', () => {
  console.log('staring_evaluation');
  let proc = require('child_process');
  proc.exec('node /home/none/Documents/projects/jsPrac/', (error, stdout, stderr) => {
    console.log(stdout);
  });
});
