import React, { createContext, useState, useContext, ReactNode } from 'react';

interface AppContextProps {
    lastCalculation: string;
    setLastCalculation: (value: string) => void;
    visitedCards: string[];
    addVisitedCard: (cardId: string) => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

export const AppProvider: React.FC<{children: ReactNode}> = ({ children }) => {
    const [lastCalculation, setLastCalculation] = useState<string>('');
    const [visitedCards, setVisitedCards] = useState<string[]>([]);

    const addVisitedCard = (cardId: string) => {
        setVisitedCards((prev) => {
        if (!prev.includes(cardId)) {
            return [...prev, cardId];
        }
        return prev;
    });
};

return (
    <AppContext.Provider 
        value={{ 
            lastCalculation, 
            setLastCalculation, 
            visitedCards, 
            addVisitedCard 
        }}
        >
        {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => {
    const context = useContext(AppContext);
    if (context === undefined) {
        throw new Error('useAppContext must be used within an AppProvider');
    }
    return context;
};