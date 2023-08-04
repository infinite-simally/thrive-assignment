import { ThemeProvider, createTheme } from "@mui/material";
import { useAuth } from "contexts/AuthContext";

import CustomersPage from "pages/customers";
import LoginPage from "pages/login";

function App() {
  const defaultMaterialTheme = createTheme();

  const cntx = useAuth();

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ThemeProvider theme={defaultMaterialTheme}>
        {!cntx?.currentUser && <LoginPage onLogin={cntx?.login} />}
        <CustomersPage currentUser={cntx?.currentUser} />
      </ThemeProvider>
    </div>
  );
}

export default App;
