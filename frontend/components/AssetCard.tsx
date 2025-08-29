import { Button } from "@/components/ui/Button";

interface AssetCardProps {
  title: string;
  description: string;
  imageUrl?: string;
}

export default function AssetCard({ title, description, imageUrl }: AssetCardProps) {
  return (
    <div className="rounded-2xl shadow-md bg-white overflow-hidden">
      {imageUrl && (
        <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
      )}
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Button variant="primary" size="sm">View</Button>
      </div>
    </div>
  );
}