import { createContext, ReactNode, useState } from "react";

import { Layout } from "antd";

interface SidebarLayoutProviderProps {
  children: ReactNode;
}

type SidebarLayoutContext = {
  isSidebarCollapsed?: boolean;
  setIsSidebarCollapsed?: React.Dispatch<React.SetStateAction<boolean>>;
};

export const SidebarLayoutContext = createContext<SidebarLayoutContext>({});

export const SidebarLayoutProvider = ({
  children,
}: SidebarLayoutProviderProps) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <SidebarLayoutContext.Provider
      value={{ isSidebarCollapsed, setIsSidebarCollapsed }}
    >
      <Layout>{children}</Layout>
    </SidebarLayoutContext.Provider>
  );
};
