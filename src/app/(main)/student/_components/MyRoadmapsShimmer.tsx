const MyRoadmapsShimmer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 animate-pulse">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="border-[2px] border-emerald-400/20 bg-emerald-500/5 rounded-xl h-14 flex flex-col justify-center px-4"
        >
          <div className="h-3 w-2/3 bg-emerald-300/30 rounded mb-2"></div>
          <div className="h-2 w-1/3 bg-emerald-300/20 rounded"></div>
        </div>
      ))}
    </div>
  );
};

export default MyRoadmapsShimmer;
