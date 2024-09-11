import PipeHawkIcon from "@/components/PipeHawkIcon";

const Logo = () => {
  return (
    <a href="/" className="flex items-center">
      <PipeHawkIcon />
      <span className="text-lg font-mono bg-gradient-to-r from-blue-900 via-purple-900 to-purple-500 bg-clip-text text-transparent ml-2">
        civmil labs
      </span>
    </a>
  );
};

export default Logo;
