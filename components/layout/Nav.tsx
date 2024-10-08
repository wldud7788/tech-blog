import HeaderAuth from "@/components/layout/header-auth";
import Link from "next/link";

const Nav = () => {
  return (
    <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16 fixed z-20 bg-white">
      <div className="w-full max-w-5xl flex justify-between items-center p-3 px-5 text-sm">
        <div className="flex gap-12 ">
          <Link href={"/"}>TECH_BLOG</Link>
          <Link href={"/community"}>커뮤니티</Link>
        </div>
        <div>
          <HeaderAuth />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
