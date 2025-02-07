
import { Phone } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ContactDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const ContactDialog = ({ open, onOpenChange }: ContactDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="font-amaranth text-2xl">Contact Information</DialogTitle>
        </DialogHeader>
        <div className="space-y-4 py-4">
          <div className="group flex items-center gap-4 p-3 rounded-lg transition-all duration-300 hover:bg-gray-100">
            <Phone className="h-5 w-5 text-primary transition-transform group-hover:scale-110" />
            <span className="text-accent group-hover:text-primary transition-colors">+91 9884261429</span>
          </div>
          <div className="group flex items-center gap-4 p-3 rounded-lg transition-all duration-300 hover:bg-gray-100">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-primary transition-transform group-hover:scale-110"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span className="text-accent group-hover:text-primary transition-colors">ahsansaleem2006@gmail.com</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ContactDialog;
