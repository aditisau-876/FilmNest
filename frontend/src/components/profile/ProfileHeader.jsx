import { User } from "lucide-react";

const ProfileHeader = () => {
  return (
    <div className="pt-32 pb-12 text-center">

      <div
        className="
        w-36
        h-36
        rounded-full
        bg-red-600
        flex
        items-center
        justify-center
        mx-auto
        shadow-[0_0_35px_rgba(229,9,20,.35)]
        "
      >
        <User size={70} />
      </div>

      <h1 className="text-4xl font-bold mt-6">
        Aditi Sau
      </h1>

      <p className="text-gray-400 mt-2">
        aditi@email.com
      </p>

    </div>
  );
};

export default ProfileHeader;