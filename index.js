const port = 3010;
const host = 'people-cloud.localtest.me';
const uri = 'http://' + host + ':' + port;

const messages = {
  sync: 'SYNC',
  addContact: 'ADD_CONTACT',
  editContact: 'EDIT_CONTACT',
  deleteContact: 'DELETE_CONTACT'
};

module.exports = {
  port: port,
  host: host,
  messages: messages,
  uri: uri
};
