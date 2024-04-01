import Image from "next/image";
import Button from "../ui/Button";

interface CardProps {
  title: string;
  imageUrl?: string;
  onSave?: () => void;
  onDelete?: () => void;
  onSearch?: () => void;
  children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({
  title,
  imageUrl,
  onSave,
  onDelete,
  onSearch,
  children,
}) => {

  return (
    
    <div className="max-w-sm rounded text-[#35374B] overflow-hidden shadow-lg bg-[#FFF7F1]">
      {imageUrl && (
        <Image className="w-full" src={imageUrl} alt={`Cover of ${title}`} />
      )}
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        {children}
      </div>
      <div className="px-6 pt-4 pb-2 flex justify-between">
        {onSave && <Button size="small" onClick={onSave}>Save</Button>}
        {onDelete && <Button size="small" onClick={onDelete}>Delete</Button>}
        {onSearch && (
          <input 
            type="text"
            placeholder="Search..."
            className="shadow appearance-none border rounded py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            // Need to add a key press event for the search
          />
        )}
      </div>
    </div>
  );
}

export default Card;