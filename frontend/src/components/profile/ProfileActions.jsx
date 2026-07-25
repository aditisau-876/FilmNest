import { LogOut, Pencil } from "lucide-react";

const ProfileActions = () => {
  return (
    <section className="max-w-6xl mx-auto px-8 py-16">
      <div className="flex flex-wrap gap-5">
        <button
          className="flex items-center gap-3 px-8 py-4 bg-red-600 hover:bg-red-700 rounded-full transition">
          <Pencil size={20} />Edit Profile</button>
        <button className="flex items-center gap-3 px-8 py-4 border border-red-600 rounded-full hover:bg-red-600 transition"><LogOut size={20} />Logout</button>
      </div>
    </section>
  );
};

export default ProfileActions;