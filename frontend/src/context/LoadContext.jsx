import { createContext, useState } from 'react';

export const LoadContext = createContext();

export const LoadIAProvider = ({ children }) => {
  const [idLoadMsjIA, setLoadingIA] = useState(null);
  return (
    <LoadContext.Provider
      value={{
        idLoadMsjIA,
        setLoadingIA,
      }}
    >
      {children}
    </LoadContext.Provider>
  );
};
