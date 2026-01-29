const PlumbingAnimation = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated Pipes */}
      <svg
        className="absolute w-full h-full opacity-20"
        viewBox="0 0 1920 1080"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Horizontal Pipe */}
        <path
          d="M0 200 H 600 V 400 H 900 V 200 H 1200 V 500 H 1920"
          fill="none"
          stroke="hsl(0, 84%, 50%)"
          strokeWidth="8"
          strokeLinecap="round"
          className="animate-[pipe-pulse_3s_ease-in-out_infinite]"
          strokeDasharray="20 10"
        />
        
        {/* Vertical Pipe */}
        <path
          d="M400 0 V 300 H 700 V 600 H 400 V 1080"
          fill="none"
          stroke="hsl(43, 96%, 56%)"
          strokeWidth="6"
          strokeLinecap="round"
          className="animate-[pipe-pulse_4s_ease-in-out_infinite]"
          strokeDasharray="15 8"
          style={{ animationDelay: '1s' }}
        />

        {/* Another pipe network */}
        <path
          d="M1500 0 V 400 H 1200 V 700 H 1500 V 1080"
          fill="none"
          stroke="hsl(0, 84%, 50%)"
          strokeWidth="5"
          strokeLinecap="round"
          className="animate-[pipe-pulse_3.5s_ease-in-out_infinite]"
          strokeDasharray="12 6"
          style={{ animationDelay: '0.5s' }}
        />
      </svg>

      {/* Water Droplets */}
      {[...Array(8)].map((_, i) => (
        <div
          key={i}
          className="absolute animate-bubble"
          style={{
            left: `${10 + i * 12}%`,
            bottom: '-20px',
            animationDelay: `${i * 0.5}s`,
            animationDuration: `${3 + Math.random() * 2}s`,
          }}
        >
          <div
            className="w-3 h-4 bg-secondary/40 rounded-full"
            style={{
              clipPath: 'ellipse(50% 60% at 50% 60%)',
            }}
          />
        </div>
      ))}

      {/* Floating Tools */}
      <div className="absolute top-20 right-20 animate-float opacity-30">
        <svg width="60" height="60" viewBox="0 0 24 24" fill="none">
          <path
            d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"
            stroke="hsl(0, 84%, 50%)"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div
        className="absolute top-1/3 left-20 animate-float opacity-30"
        style={{ animationDelay: '1s' }}
      >
        <svg width="50" height="50" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 22h16"
            stroke="hsl(43, 96%, 56%)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M4 14h16"
            stroke="hsl(43, 96%, 56%)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M12 14V2"
            stroke="hsl(43, 96%, 56%)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <circle cx="12" cy="2" r="2" fill="hsl(43, 96%, 56%)" />
        </svg>
      </div>

      {/* Water Flow Effect */}
      <div className="absolute bottom-0 left-0 right-0 h-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
        <div
          className="absolute h-2 w-full bg-gradient-to-r from-transparent via-secondary/30 to-transparent animate-water-flow"
          style={{ bottom: '50px' }}
        />
        <div
          className="absolute h-1 w-full bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-water-flow"
          style={{ bottom: '30px', animationDelay: '0.5s', animationDuration: '4s' }}
        />
      </div>

      {/* Pipe Joints */}
      <div className="absolute top-1/4 right-1/3 w-8 h-8 rounded-full border-4 border-secondary/30 animate-pulse" />
      <div
        className="absolute top-2/3 left-1/4 w-6 h-6 rounded-full border-4 border-primary/30 animate-pulse"
        style={{ animationDelay: '1s' }}
      />
    </div>
  );
};

export default PlumbingAnimation;
