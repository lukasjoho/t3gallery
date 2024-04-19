import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/36dd1e33-198c-4c8d-bd3f-1f4f57524543-4xirtz.webp",
  "https://utfs.io/f/aca7dea2-411d-4f9b-b1a9-b86c9edeec15-yj737g.jpeg",
  "https://utfs.io/f/a4fd9df0-b540-48b3-ae24-4e005115f53a-1xbh1q.jpg",
  "https://utfs.io/f/80fac6fc-ba56-4e00-a6a6-b5e4ea751803-ks0go6.jpeg",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="" />
          </div>
        ))}
      </div>
    </main>
  );
}
