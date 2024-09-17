import { PipehawkIcon } from "./pipe-hawk-icon";

export const Logo = () => {
  return (
    <a href="/" className="flex items-center">
      <PipehawkIcon />
      <span className="text-lg font-mono bg-gray-900  bg-clip-text text-transparent ml-2">
        civmil labs
      </span>
    </a>
  );
};
