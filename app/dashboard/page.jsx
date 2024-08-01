import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import React from "react";

const page = () => {
  return (
    <>
      <div className="md:w-full flex flex-col min-h-screen m-4">
        <Button className="flex gap-x-2 w-fit self-end">
          Create Form
          <Plus size={18} />
        </Button>
      </div>
    </>
  );
};

export default page;
