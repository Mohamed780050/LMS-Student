import { RouterProvider } from "react-router-dom";
import routes from "./Routes/routes";
import { Toaster } from "react-hot-toast";
import "./app.css";
import { ThemeProvider } from "./components/Provider/theme-provider";
function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={routes} />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
