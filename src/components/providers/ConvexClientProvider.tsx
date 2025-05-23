"use client";

import {ConvexReactClient} from "convex/react"
import { ClerkProvider,useAuth  } from "@clerk/nextjs";
import {ConvexProviderWithClerk} from "convex/react-clerk"
const convex = new ConvexReactClient(process.env.NEXT_PUBLIC_CONVEX_URL!)

function ConvexClientProvider({children}:{children: React.ReactNode}) {
  return (
    <div>
        <ClerkProvider publishableKey={process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY!}>
      <ConvexProviderWithClerk client={convex} useAuth={useAuth}>
        {children}
      </ConvexProviderWithClerk>
    </ClerkProvider>
    </div>
  );
}

export default ConvexClientProvider;