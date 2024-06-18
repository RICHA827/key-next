"use client";

import { ApolloProvider } from "@apollo/client";
import { ReactNode } from "react";
import client from "../lib/apollo-client";

interface ApolloProviderProps {
  children: ReactNode;
}

const ApolloProviderWrapper = ({ children }: ApolloProviderProps) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};

export default ApolloProviderWrapper;
