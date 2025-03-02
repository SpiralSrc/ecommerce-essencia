// "use server";

// import { clerkClient } from "@clerk/nextjs/server";
// import { prisma } from "@/lib/prismadb";
// import { checkRole } from "@/lib/utils/roles";

// export async function updateRole(formData: FormData) {
//     const client = await clerkClient()

//   const adminId = formData.get("adminId") as string; // The admin making the change
//   const userId = formData.get("userId") as string; // The user being updated
//   const newRole = formData.get("role") as string;

//   if (!adminId || !userId || !newRole) {
//     return { message: "Admin ID, User ID, and role are required" };
//   }

//   // Ensure the admin is authorized to make role changes
//   const isAdmin = await checkRole("admin");
//   if (!isAdmin) {
//     return { message: "Not Authorized" };
//   }

//   try {
//     // Update role in Clerk
//     await client.users.updateUserMetadata(formData.get('id') as string, {
//         publicMetadata: { role: formData.get('role') },
//       })

//     // Update role in your database
//     await prisma.user.update({
//       where: { clerkId: userId },
//       data: { role: newRole },
//     });

//     console.log(`User ${userId} role updated to ${newRole}`);
//     return { message: `Role updated to ${newRole}` };
//   } catch (err) {
//     console.error("Error updating role:", err);
//     return { message: "Failed to update role" };
//   }
// }
