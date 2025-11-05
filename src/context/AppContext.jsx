import { createContext, useContext, useState, useEffect } from 'react';

const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
  const [friends, setFriends] = useState(() => {
    const savedFriends = localStorage.getItem('friends');
    return savedFriends ? JSON.parse(savedFriends) : [];
  });

  const [splits, setSplits] = useState(() => {
    const savedSplits = localStorage.getItem('splits');
    return savedSplits ? JSON.parse(savedSplits) : [];
  });

  const [ezPoints, setEzPoints] = useState(() => {
    const savedPoints = localStorage.getItem('ezPoints');
    return savedPoints ? parseInt(savedPoints) : 0;
  });

  useEffect(() => {
    localStorage.setItem('friends', JSON.stringify(friends));
  }, [friends]);

  useEffect(() => {
    localStorage.setItem('splits', JSON.stringify(splits));
  }, [splits]);

  useEffect(() => {
    localStorage.setItem('ezPoints', ezPoints.toString());
  }, [ezPoints]);

  const addFriend = (friend) => {
    setFriends([...friends, { ...friend, id: Date.now().toString() }]);
  };

  const addSplit = (split) => {
    setSplits([...splits, { ...split, id: Date.now().toString(), date: new Date().toISOString() }]);
    // Award 20 ezPoints for each transaction
    setEzPoints(prevPoints => prevPoints + 20);
  };

  const deleteSplit = (splitId) => {
    setSplits(splits.filter(split => split.id !== splitId));
  };

  const settleTransaction = (splitId) => {
    setSplits(splits.map(split => 
      split.id === splitId ? { ...split, settled: true, settledDate: new Date().toISOString() } : split
    ));
  };

  const getTotalBalance = () => {
    return splits.reduce((total, split) => total + parseFloat(split.amount), 0).toFixed(2);
  };

  const getEzPoints = () => {
    return ezPoints;
  };

  return (
    <AppContext.Provider value={{ friends, splits, addFriend, addSplit, deleteSplit, settleTransaction, getTotalBalance, getEzPoints }}>
      {children}
    </AppContext.Provider>
  );
};
