var path = require('path');
var store = require('nstore');

var home_dirname = process.env['HOME'];
var data_dirname = path.join(home_dirname, '.serverlicious');

var username = process.env['SERVERLICIOUS_USER'];
var command = process.env['SSH_ORIGINAL_COMMAND'];

var args = command.split(/\s+/);
var executable = args.shift();

var users;
try {
  users = store(path.join(data_dirname, 'users.db'));
} catch (err) {
  throw new Error('Failed to open the user database');
}

users.get(username, function (err, user) {
  if (err) {
    throw new Error('No such user "' + username + '"');
  }

  process.stdout.write('Continue handling command: %s\n', command);

  switch (executable) {
  case 'git':

  }
});
