import { memo, ReactNode } from "react";

import { Layout } from "antd";

import Navigation from "@app/components/molecules/Navigation/Navigation";

import styles from "./SidebarLayout.module.scss";
import { SidebarLayoutProvider } from "./components/SidebarLayoutProvider/SidebarLayoutProvider";

const { Content } = Layout;

type SidebarLayoutProps = {
  children: ReactNode;
};

const SidebarLayout = memo(({ children }: SidebarLayoutProps) => {
  return (
    <SidebarLayoutProvider>
      <Navigation sidebar />
      <Layout className={styles.pushContent}>
        <Content>{children}</Content>
      </Layout>
    </SidebarLayoutProvider>
  );
});

export default SidebarLayout;
