import { clerkMiddleware, createRouteMatcher } from "@clerk/nextjs/server";
import { NextResponse } from "next/server";

// Define protected routes
const isProtectedRoute = createRouteMatcher([
  "/dashboard(.*)",
  "/favorites(.*)",
  "/wishlists(.*)",
]);

export default clerkMiddleware(async (auth, req) => {
  const { userId, redirectToSignIn } = await auth();

  // Create a response object to modify headers
  const response = NextResponse.next();

  // Check if the user is authenticated
  if (!userId && isProtectedRoute(req)) {
    // Custom logic before redirecting
    const cookieName = "__your_cookie_name__"; // Replace with your cookie name
    const cookieValue = "your_cookie_value"; // Replace with your desired cookie value

    // Set cookie if the value exists
    if (cookieValue) {
      const cookieString = `${cookieName}=${cookieValue}; HttpOnly; Secure; SameSite=None; Path=/`;
      response.headers.set("Set-Cookie", cookieString);
    }

    // Redirect user to sign-in page
    return redirectToSignIn();
  }

  // Return the response for authenticated users or non-protected routes
  return response;
});

// Middleware configuration
export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    "/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)",
    // Always run for API routes
    "/(api|trpc)(.*)",
  ],
};
