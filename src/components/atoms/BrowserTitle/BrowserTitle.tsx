import { memo } from "react";

import { Helmet } from "react-helmet";

interface Props {
  /** Meta title (optional) */
  title?: string;
}

const BrowserTitle = ({ title }: Props) => {
  return (
    <Helmet>
      <title>{(!!title && `${title} | `) || "ML Admin panel"}</title>
    </Helmet>
  );
};

export default memo(BrowserTitle);
