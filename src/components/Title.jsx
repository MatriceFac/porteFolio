const Title = ({ children }) => {
  return (
    <div className="text-center mb-16 relative">
      <h2 className="text-4xl md:text-5xl font-bold inline-block relative">
        <span className="gradient-text">{children}</span>
        <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-accent to-primary rounded-full"></div>
      </h2>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-accent/5 rounded-full filter blur-3xl -z-10 animate-pulse-slow"></div>
    </div>
  );
};

export default Title;