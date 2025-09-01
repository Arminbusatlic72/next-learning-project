import Image from "next/image";
interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}
async function getData() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-store" // Or use: next: { revalidate: 10 }
  });

  if (!res.ok) {
    throw new Error(`Failed to fetch posts: ${res.status}`);
  }

  return res.json();
}

// This is a Server Component by default in Next.js 13+
export default async function Home() {
  const data = await getData();
  console.log(data);
  return (
    <div>
      <h1 className="text-4xl font-bold text-center mt-20">
        Welcome to <span className="text-blue-500">Armin</span>
      </h1>
      <p className="text-center mt-4">Fetched {data.length} posts.</p>
      {data.slice(0, 5).map((item: Post) => (
        <div key={item.id} className="p-4 border-b">
          <h2 className="text-2xl font-semibold">{item.title}</h2>
          <p className="mt-2 text-gray-600">{item.body}</p>
        </div>
      ))}
    </div>
  );
}
