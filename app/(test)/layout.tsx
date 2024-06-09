import { ReactNode } from "react";

type TestLayoutProps = {
  children: ReactNode;
};

const TestLayout: React.FC<TestLayoutProps> = ({ children }) => {
  return <>{children}</>;
};

export default TestLayout;
