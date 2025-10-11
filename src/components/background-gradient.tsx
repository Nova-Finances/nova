export function BackgroundGradient() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1024px] opacity-30">
        <div
          className="w-full h-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(46,204,113,0.15) 0%, transparent 70%)",
          }}
        />
      </div>
    </div>
  );
}
