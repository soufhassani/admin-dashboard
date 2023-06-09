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
import Line from "./components/line/Line";
import Geo from "./components/geo/Geo";

const App = () => {
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
                <Route path="/bar-chart" exact element={<Bar />} />
                <Route path="/pie-chart" exact element={<Pie />} />
                <Route path="/line-chart" exact element={<Line />} />
                <Route path="/geography-chart" exact element={<Geo />} />
              </Routes>
            </main>
          </div>
        </ProSidebarProvider>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
