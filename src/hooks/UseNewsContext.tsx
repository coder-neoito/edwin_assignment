import { useContext } from 'react';
import { NewsContext } from 'services/NewsContext';

export default function useNewsContext() {
  const context = useContext(NewsContext);
  if (!context) {
    throw new Error('useNewsContext must be used within a NewsContextProvider');
  }
  return context;
}
