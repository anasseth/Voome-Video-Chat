import { EuiProvider, EuiThemeProvider } from '@elastic/eui';
import '@elastic/eui/dist/eui_theme_light.json'
import { Routes, Route } from 'react-router-dom';
import Login from './app/pages/Login';
import Dashboard from './app/pages/Dashboard';

function App() {

  const overrideThemeColor = {
    colors: {
      LIGHT: { primary: "#6b5efc" },
      DARK: { primary: "#6b5efc" }
    },
  }

  return (
    <EuiProvider>
      <EuiThemeProvider modify={overrideThemeColor}>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/" element={<Dashboard />}></Route>
          <Route path="*" element={<Dashboard />}></Route>
        </Routes>
      </EuiThemeProvider>
    </EuiProvider>
  );
}

export default App;
