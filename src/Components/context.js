import { createContext, useState } from "react";

const appContext = createContext();

const AppProvider = ({ children }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const sidebarOpen = () => {
    setIsSidebarOpen(true);
  };

  const sidebarClose = () => {
    setIsSidebarOpen(false);
  };

  const modalOpen = () => {
    setIsModalOpen(true);
  };

  const modalClose = () => {
    setIsModalOpen(false);
  };

  return (
    <appContext.Provider
      value={{
        isModalOpen,
        isSidebarOpen,
        sidebarOpen,
        sidebarClose,
        modalOpen,
        modalClose,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

export { appContext, AppProvider };
