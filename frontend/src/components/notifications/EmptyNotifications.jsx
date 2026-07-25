import { BellOff } from "lucide-react";
const EmptyNotifications = () => {
  return (
    <div className="py-28 text-center">
      <BellOff size={90} className="mx-auto text-red-600"/>
      <h2 className="text-4xl font-bold mt-8">No Notifications</h2>
      <p className="text-gray-400 mt-4">You're all caught up!</p>
    </div>
  );
};

export default EmptyNotifications;