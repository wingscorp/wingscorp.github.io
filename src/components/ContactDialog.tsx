
import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ContactForm } from "@/components/ContactForm";
import { useLanguage } from "@/context/LanguageContext";

interface ContactDialogProps {
  children: React.ReactNode;
}

export function ContactDialog({ children }: ContactDialogProps) {
  const [open, setOpen] = React.useState(false);
  const { t } = useLanguage();

  const handleFormSubmit = () => {
    setOpen(false);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Apply for Wings AI Platform</DialogTitle>
          <DialogDescription>
            Please fill out the form below to get started with Wings AI Platform.
          </DialogDescription>
        </DialogHeader>
        <ContactForm onSubmit={handleFormSubmit} onCancel={handleCancel} />
      </DialogContent>
    </Dialog>
  );
}
