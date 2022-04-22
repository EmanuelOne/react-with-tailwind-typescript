import './App.css';
import { Route, Routes } from 'react-router-dom';
import { routers } from './routes';
// import socket from './socket.io';
function App() {
  // socket.on('connect', () => {
  //   console.log('connected');
  // });
  // socket.on('disconnect', () => {
  //   console.log('disconnected');
  // });
  // socket.on('test', (data) => {
  //   console.log(data);
  // });
  // socket.on('message', (data) => {
  //   console.log(data);
  // });
  // socket.emit('rider', {
  //   id: '6212b17bfb77e55a3dce653a',
  //   location: {
  //     lat: -6.91722,
  //     lng: 107.6098,
  //   },
  // });
  // socket.on('rider/6212b17bfb77e55a3dce653a', (data) => {
  //   console.log(data);
  // });

  return (
    <div className="bg-bgPrimary min-h-screen">
      <Routes>
        {routers.map(({ path, component: Component }) => (
          <Route {...{ key: path, path, element: <Component /> }} />
        ))}
      </Routes>
    </div>
  );
}

export default App;
