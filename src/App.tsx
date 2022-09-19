import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import Login from "./components/Form/login";
import RecoveryEmail from "./components/Form/Recovery/recoveryEmail";
import RecoveryPassword from "./components/Form/Recovery/recoveryPassword";
import Dashboard from "./components/Dashboard";
import Ativos from "./components/socios/Ativos";
import Inativos from "./components/socios/Inativo";
import NovoRegisto from "./components/socios/NovoRegisto";
import Editar from "./components/socios/Editar";
import NovoRegistoUsers from "./components/Users/NovoRegisto";
import AtivosUsers from "./components/Users/AtivosUsers";
import EditarPerfil from "./components/Configuracoes/EditarPerfil";
import { AuthProvider } from "./contexts/AuthProvider";
import { ProtectedLayout } from "./components/ProtectedLayout";

const queryClient = new QueryClient();
export function App() {
  return (
    <div className="App">
      <AuthProvider>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/recovery" element={<RecoveryEmail />} />
              <Route path="/recoveryPassword" element={<RecoveryPassword />} />
              <Route path="/dashboard" element={<Dashboard />} />

              <ProtectedLayout>
                <Route path="/socios" element={<Ativos />} />
              </ProtectedLayout>

              <ProtectedLayout>
                <Route path="/inativos" element={<Inativos />} />
              </ProtectedLayout>

              <ProtectedLayout>
                <Route path="/novoRegisto" element={<NovoRegisto />} />
              </ProtectedLayout>

              <ProtectedLayout>
                <Route path="/Socios/FindOne/:id" element={<Editar />} />
              </ProtectedLayout>

              <ProtectedLayout>
                <Route path="/utilizadores" element={<AtivosUsers />} />
              </ProtectedLayout>

              <ProtectedLayout>
                <Route
                  path="/novoRegistoUsers"
                  element={<NovoRegistoUsers />}
                />
              </ProtectedLayout>

              <ProtectedLayout>
                <Route path="/EditarPerfil" element={<EditarPerfil />} />
              </ProtectedLayout>
              
            </Routes>
          </BrowserRouter>
          <ReactQueryDevtools initialIsOpen={false} position="bottom-right" />
        </QueryClientProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
