import { BrowserRouter , Routes , Route } from "react-router-dom"
import LandingPage from "./pages/LandingPage/LandingPage"
import Dashboard from "./pages/Dashboard/Dashboard"
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Auth from "./pages/Dashboard/Auth/Auth";

const queryClient = new QueryClient();

function App() {


  return (
    <QueryClientProvider client={queryClient}>

      <BrowserRouter>
        <Routes>

          <Route path="/" element={<LandingPage/>} />

          <Route path="/dashboard" element={
            <>
              <Dashboard/>
              <Auth/>
            </>
            
          } />

        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  )
}

export default App
