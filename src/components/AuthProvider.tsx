// components/auth-provider.tsx
"use client";

import { SignedIn, SignedOut } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { SignIn } from "@clerk/nextjs";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  useEffect(() => {
    if (window.location.hash === "#sign-in") {
      router.push('/sign-in');
    }
  }, [router]);

  return (
    <>
      <SignedIn>
        {children}
      </SignedIn>
      <SignedOut>
        <div className="flex justify-center items-center h-[100vh]">
          <SignIn 
            routing="virtual"
            afterSignInUrl="/"
            afterSignUpUrl="/"
          />
        </div>
      </SignedOut>
    </>
  );
}