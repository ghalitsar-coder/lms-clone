import React from "react";

type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout: React.FC<AuthLayoutProps> = (props) => {
  const { children } = props;
  return <div className="h-screen grid place-items-center">{children}</div>;
};

export default AuthLayout;
 