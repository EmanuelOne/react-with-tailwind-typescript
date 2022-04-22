import socket from 'socket.io-client';
const io = socket('https://muv-delivery.herokuapp.com/');

export default io;
