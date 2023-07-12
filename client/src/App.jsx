
import { CssBaseline, ThemeProvider } from "@mui/material"
import createTheme from "@mui/material/styles"
import { useMemo } from "react";
import { useSelector } from "react-redux"
import { themeSettings } from "./theme"
import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Dashboard from "./scenes/dashboard/index";
function App() {
  const mode = useSelector((state)=>state.global.mode);
  const theme = useMemo(()=>createTheme(themeSettings(mode)), [mode]);
  return (
  <div className='app'>
    <BrowserRouter>

    <h1>hello</h1>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Routes>
          <Route element={<Layout/>}>
            <Route path="/"  element={<Navigate to="/dashboard" replace/>} />
            <Route path="/dashboard" element={<Dashboard/>}/>
          </Route>
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
    
   </div>
   )
}

export default App
