import { Logo } from 'src/assets/logo';
// import socket from 'src/socket.io';
const Login = () => {
  // socket.emit('sendBack', 'send Data back to test');
  // socket.on('rider/61fe2dd74ccbe94e5d9645a7', (data) => {
  // console.log(data);
  // });
  return (
    <div className="px-12">
      <Logo />
      <h1 className="text-2xl font-bold text-center">Login</h1>
    </div>
  );
};

export default Login;
