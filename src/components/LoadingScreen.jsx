import { useEffect, useState } from 'react';

const LoadingScreen = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-base-100 flex items-center justify-center z-[100]">
      <div className="text-center">
        <div className="relative mb-8">
          <div className="w-24 h-24 border-4 border-accent/20 border-t-accent rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl font-bold gradient-text">{progress}%</span>
          </div>
        </div>
        <h2 className="text-2xl font-bold mb-2">Chargement...</h2>
        <p className="text-base-content/60">Préparez-vous à découvrir mon univers</p>
      </div>
    </div>
  );
};

export default LoadingScreen;