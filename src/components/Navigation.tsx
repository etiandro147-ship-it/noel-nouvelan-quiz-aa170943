import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export const Navigation = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 right-0 z-50 p-4">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline" size="icon" className="bg-background/80 backdrop-blur-sm">
            <Menu className="h-5 w-5" />
          </Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
          </SheetHeader>
          <div className="flex flex-col gap-4 mt-8">
            <Link to="/curiosites" onClick={() => setOpen(false)}>
              <Button variant="ghost" className="w-full justify-start text-lg">
                Curiosités
              </Button>
            </Link>
            <Link to="/newsletter" onClick={() => setOpen(false)}>
              <Button variant="ghost" className="w-full justify-start text-lg">
                Plus
              </Button>
            </Link>
          </div>
        </SheetContent>
      </Sheet>
    </nav>
  );
};
