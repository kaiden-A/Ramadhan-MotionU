

/*

Inside a Button	<LoadingSpinner size="xs" color="text-white" />
Full Page Load	<LoadingSpinner size="xl" className="h-screen" />
Inside a Card	<LoadingSpinner size="md" color="text-gray-400" />    

*/

function LoadingSpinner({ size = 'md', color = 'text-blue-600', className = "" }) {
  // Mapping sizes to Tailwind classes
  const sizeClasses = {
    xs: 'h-4 w-4 border-2',
    sm: 'h-6 w-6 border-2',
    md: 'h-10 w-10 border-4',
    lg: 'h-16 w-16 border-4',
    xl: 'h-24 w-24 border-8',
  };

  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div
        className={`
          ${sizeClasses[size] || sizeClasses.md}
          ${color}
          animate-spin
          rounded-full
          border-solid
          border-current
          border-t-transparent
        `}
        role="status"
        aria-label="loading"
      >
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default LoadingSpinner;