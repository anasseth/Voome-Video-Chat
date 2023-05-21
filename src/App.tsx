import { EuiProvider } from '@elastic/eui';
import '@elastic/eui/dist/eui_theme_light.json'

function App() {
  return (
    <EuiProvider>
      <div>Application</div>
    </EuiProvider>
  );
}

export default App;
