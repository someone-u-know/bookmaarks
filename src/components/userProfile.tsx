'use client';

import Image from 'next/image';
import { User } from "@phosphor-icons/react";

interface UserProfileIconProps {
  src?: string; // Optional image source
  alt?: string;
  size?: number; // Optional size, default is 40
}

const UserProfileIcon: React.FC<UserProfileIconProps> = ({
  src,
  alt = 'User Profile',
  size = 40,
}) => {
  return (
    <div
      className="rounded-lg overflow-hidden bg-[#FF6B4D] flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          className="object-cover"
        />
      ) : (
        <User weight="fill" size={size * 0.6} />
      )}
    </div>
  );
};

export default UserProfileIcon;
