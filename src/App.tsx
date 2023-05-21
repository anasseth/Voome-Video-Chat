import { EuiProvider } from '@elastic/eui';
import '@elastic/eui/dist/eui_theme_light.json'
import { Routes, Route } from 'react-router-dom';
import Login from './app/pages/Login';
import Dashboard from './app/pages/Dashboard';

function App() {
  return (
    <EuiProvider>
      <Routes>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/dasboard" element={<Dashboard />}></Route>
        <Route path="*" element={<Dashboard />}></Route>
      </Routes>
    </EuiProvider>
  );
}

export default App;
