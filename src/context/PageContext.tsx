import React, {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from 'react';

type PageContext = {
  count: number;
  setCount: Dispatch<SetStateAction<number>>;
};

export const PageContext = createContext<PageContext>({
  count: 0,
  setCount: () => {},
});

const PageContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [count, setCount] = useState<number>(0);

  return (
    <PageContext.Provider value={{ count, setCount }}>
      {children}
    </PageContext.Provider>
  );
};

export default PageContextProvider;
