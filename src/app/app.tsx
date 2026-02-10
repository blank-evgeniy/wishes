import "./styles/globals.css";

export const App = ({ children }: { children: React.ReactNode }) => {
  return <div className="min-h-dvh flex">{children}</div>;
};
