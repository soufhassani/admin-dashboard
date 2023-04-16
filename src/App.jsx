import { useEffect } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { ProSidebarProvider } from "react-pro-sidebar";
import { Routes, Route } from "react-router-dom";
import { ColorModeContext, useMode } from "./theme";
import Sidebar from "./components/global/Sidebar";
import Topbar from "./components/global/Topbar";
import Dashboard from "./components/dashboard/Dashboard";
import Contacts from "./components/contacts/Contacts";
import Invoices from "./components/invoices/Invoices";
import Team from "./components/team/Team";
import Form from "./components/form/Form";
import Calendar from "./components/calendar/Calendar";
import Faq from "./components/faq/Faq";
import Bar from "./components/bar/Bar";
import Pie from "./components/pie/Pie";

function App() {
  const [theme, colorMode] = useMode();

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <ProSidebarProvider>
          <CssBaseline />
          <div className="app">
            <Sidebar />
            <main className="content">
              <Topbar />
              <Routes>
                <Route path="/" exact element={<Dashboard />} />
                <Route path="/team" exact element={<Team />} />
                <Route path="/contacts" exact element={<Contacts />} />
                <Route path="/invoices" exact element={<Invoices />} />
                <Route path="/form" exact element={<Form />} />
                <Route path="/calendar" exact element={<Calendar />} />
                <Route path="/faq" exact element={<Faq />} />
                <Route path="/bar" exact element={<Bar />} />
                <Route path="/pie" exact element={<Pie />} />
              </Routes>
            </main>
          </div>
        </ProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;
