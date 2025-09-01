import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription
} from "@/components/ui/card";
import { Car } from "lucide-react";

export default function CreateBlogPage() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-20">
        Dashboard <span className="text-blue-500">Page</span>
      </h1>
      <p className="text-center mt-4">This is the dashboard page.</p>
      <Card>
        <CardHeader className="text-2xl font-bold flex items-center gap-2">
          <CardTitle>Create post</CardTitle>
          <CardDescription>This is the card description</CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
