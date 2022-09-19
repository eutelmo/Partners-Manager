import React from "react";
import { useAuth } from "../../contexts/AuthProvider/useAuth";

import { Text } from "@chakra-ui/react";

export const ProtectedLayout = ({ children }: { children: JSX.Element }) => {
  const auth = useAuth();

  if (!auth.email) {
    return <Text fontWeight="bold">Não Tens permissao de entrar</Text>;
  }

  return children;
};
