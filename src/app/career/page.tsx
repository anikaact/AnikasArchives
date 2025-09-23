export default function CareerPage() {
    const coming = ['c', 'o', 'm', 'i', 'n', 'g'];
    const soon = ['s', 'o', 'o', 'n'];
  
    return (
      <main className="p-8 flex flex-col items-center justify-center min-h-screen">
        <div className="flex flex-wrap gap-1 justify-center mb-2">
          {coming.map((letter, idx) => (
            <img
              key={`coming-${idx}`}
              src={`/svgs/${letter}.svg`}
              alt={letter}
              className="h-[70px] w-auto"
            />
          ))}
        </div>
        <div className="flex flex-wrap gap-1 justify-center">
          {soon.map((letter, idx) => (
            <img
              key={`soon-${idx}`}
              src={`/svgs/${letter}.svg`}
              alt={letter}
              className="h-[70px] w-auto"
            />
          ))}
        </div>
      </main>
    );
  }
  