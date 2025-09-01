// import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
// import { redirect } from "next/navigation";
import Link from "next/link";
import { buttonVariants } from "../components/ui/Button";
export default async function DashboardPage() {
  // const { getUser } = getKindeServerSession();
  // const user = await getUser();
  // if (!user) {
  //   redirect("/api/auth/register"); // Redirect to home if not authenticated
  // }
  return (
    <div>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-4xl font-bold text-center mt-20">
          Your blog articles
        </h2>
        <Link className={buttonVariants()} href="/dashboard/create">
          Create post
        </Link>
      </div>
    </div>
  );
}
