import { ChevronDown } from "lucide-react";

const ScrollIndicator = () => {
  return (
    <div
      className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center text-gray-300">
      <span className="text-sm tracking-widest uppercase mb-2">Scroll</span>
      <ChevronDown className="scroll-indicator" size={34}/>
    </div>
  );
};

export default ScrollIndicator;