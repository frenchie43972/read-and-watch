import Image from "next/image";
import Card from "./Card";

interface ReadCardProps {
  title: string;
  author: string;
  imageUrl?: string;
}

const ReadCard: React.FC<ReadCardProps> = ({
  title,
  author,
  imageUrl,
}) => {
  return (
    <Card title={title} imageUrl={imageUrl}>
      <p className="text-sm text-gray-800">{author}</p>
    </Card>
  );
};

export default ReadCard;