import EditorPanel from "@/app/(root)/_componenets/EditorPanel";
import Header from "@/app/(root)/_componenets/Header";
import OutputPanel from "./_componenets/OutputPanel";

export default function Home() {
  return (
    <div className="min-h-screen">
      <div className="max-w-[1800px] mx-auto p-4">
           <Header />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          <EditorPanel />
          <OutputPanel /> 
        </div>
       
      </div>
    </div>
  );
}
