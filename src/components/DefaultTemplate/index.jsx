import { Header } from "../Header";

export const DefaultTemplate = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
