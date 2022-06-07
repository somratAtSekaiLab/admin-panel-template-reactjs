import { memo, ReactNode } from "react";

import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons";
import { Layout, PageHeader, PageHeaderProps } from "antd";
import { Route } from "antd/lib/breadcrumb/Breadcrumb";
import cx from "classnames";
import { Link } from "react-router-dom";

import useSidebarLayout from "../SidebarLayout/hooks/useSidebarLayout";
import styles from "./ContentLayout.module.scss";

const { Content } = Layout;

type ContentLayoutProps = {
  header: PageHeaderProps;
  filters?: ReactNode;
  children: ReactNode;
  noContentStyle?: boolean;
};

const ContentLayout = memo(
  ({ header, filters, children, noContentStyle }: ContentLayoutProps) => {
    const { isSidebarCollapsed, setIsSidebarCollapsed } = useSidebarLayout();

    // Add custom breadcrumb item render to support Link from react-router-dom
    const renderBreadcrumbItem = (
      route: Route,
      params: unknown,
      routes: Route[]
    ) => {
      const last = routes.indexOf(route) === routes.length - 1;
      return last ? (
        <span>{route.breadcrumbName}</span>
      ) : (
        <Link to={route.path}>{route.breadcrumbName}</Link>
      );
    };

    const renderSidebarTrigger = () => {
      const props = {
        onClick: () => setIsSidebarCollapsed?.(prevState => !prevState),
        className: styles.trigger,
      };

      return isSidebarCollapsed ? (
        <MenuUnfoldOutlined {...props} />
      ) : (
        <MenuFoldOutlined {...props} />
      );
    };

    return (
      <Layout className={styles.container}>
        <PageHeader
          ghost={false}
          {...header}
          breadcrumb={{
            itemRender: renderBreadcrumbItem,
            ...header.breadcrumb,
          }}
          className={cx(styles.pageHeader, header.className)}
        >
          {renderSidebarTrigger()}
        </PageHeader>
        {filters && (
          <div className={cx(styles.filters, styles.content)}>{filters}</div>
        )}
        <Content className={cx({ [styles.content]: !noContentStyle })}>
          {children}
        </Content>
      </Layout>
    );
  }
);

export default ContentLayout;
