import Link from "next/link";
import {
  SiInstagram,
  SiSpotify,
  SiYoutube,
  SiAudiomack,
} from "react-icons/si";

export default function Footer() {
  return (
    <footer className="border-t border-[#1d1a28] bg-[#09070d]">
      <div className="mx-auto max-w-[1380px] px-6 py-16 lg:px-10">

        {/* Artist Name */}
        <h2 className="text-center text-xl font-bold uppercase tracking-widest text-[#d8b44d]">
          TRAP6109
        </h2>

        {/* Tagline */}
        <p className="mt-4 text-center text-lg text-gray-400">
          Independent. Cinematic. Global.
        </p>

        {/* Socials */}
        <div className="mt-10 flex justify-center gap-5">

          <SocialIcon
            href="https://instagram.com"
            icon={<SiInstagram size={22} />}
            label="Instagram"
          />

          <SocialIcon
            href="https://spotify.com"
            icon={<SiSpotify size={22} />}
            label="Spotify"
          />

          <SocialIcon
            href="https://youtube.com"
            icon={<SiYoutube size={22} />}
            label="YouTube"
          />

          {/* Audiomack */}
          <SocialIcon
            href="https://audiomack.com"
            icon={<SiAudiomack size={22} />}
            label="Audiomack"
          />

        </div>

        <p className="mt-12 text-center text-sm text-gray-600">
          © {new Date().getFullYear()} TRAP6109. All rights reserved.
        </p>

      </div>
    </footer>
  );
}

type SocialProps = {
  href: string;
  icon: React.ReactNode;
  label: string;
};

function SocialIcon({ href, icon, label }: SocialProps) {
  return (
    <Link
      href={href}
      aria-label={label}
      target="_blank"
      className="
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        border
        border-[#34303f]
        bg-[#131019]
        text-gray-300
        transition-all
        duration-300
        hover:-translate-y-1
        hover:border-[#d8b44d]
        hover:bg-[#d8b44d]
        hover:text-black
      "
    >
      {icon}
    </Link>
  );
}