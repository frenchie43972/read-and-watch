import { NextPage } from "next";
import Card from "@/app/components/common/Card";
import ReadCard from "@/app/components/common/ReadCard";

const Read: NextPage = () =>  {
  return (
    <div className="flex">
      <ReadCard 
        author="Sample" 
        title="Sample Card"
      />
    </div>
    
  );
};

export default Read;

// export default function Read() {
//   return (
//     <h1>What are you Reading?</h1>
//   );
// }