import Link from "next/link";
import React from "react";
import Image from "next/image";
interface RootLayoutProps {
  children: React.ReactNode;
}

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <div className="root-layout">
      <nav>
        <Link className="flex items-center gap-2" href="/">
          <Image src="/logo.svg" alt="logo" width={38} height={32} />
          <h2 className="text-primary-100">CareerPrep AI</h2>
        </Link>
      </nav>
      {children}
    </div>
  );
};

export default RootLayout;
