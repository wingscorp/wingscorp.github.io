
import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useLanguage } from "@/context/LanguageContext";

// Define the form schema with validation
const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name is required" }),
  organization: z.string().optional(),
  email: z.string().email({ message: "Please enter a valid email address" }),
  jobTitle: z.string().optional(),
  interestedFor: z.enum(["self", "organization"], {
    required_error: "Please select an option",
  }),
  hasITDepartment: z.enum(["yes", "no", "unsure"]).optional(),
});

type FormValues = z.infer<typeof formSchema>;

interface ContactFormProps {
  onSubmit?: (data: FormValues) => void;
  onCancel?: () => void;
}

export function ContactForm({ onSubmit, onCancel }: ContactFormProps) {
  const { t, direction } = useLanguage();
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      organization: "",
      email: "",
      jobTitle: "",
      interestedFor: undefined,
      hasITDepartment: undefined,
    },
  });

  const handleSubmit = async (values: FormValues) => {
    setIsSubmitting(true);
    
    try {
      // Prepare the form data with field order for Google Script
      const formData = new FormData();
      
      // Add the form values
      formData.append("fullName", values.fullName);
      formData.append("email", values.email);
      formData.append("interestedFor", values.interestedFor);
      
      // Add optional fields if they exist
      if (values.organization) {
        formData.append("organization", values.organization);
      }
      
      if (values.jobTitle) {
        formData.append("jobTitle", values.jobTitle);
      }
      
      if (values.hasITDepartment) {
        formData.append("hasITDepartment", values.hasITDepartment);
      }
      
      // Add metadata for Google Script
      formData.append("formDataNameOrder", JSON.stringify([
        "fullName", 
        "organization", 
        "email", 
        "jobTitle", 
        "interestedFor", 
        "hasITDepartment"
      ]));
      
      formData.append("formGoogleSheetName", "responses");
      formData.append("formGoogleSendEmail", "CS@wings.work");
      
      // Send to Google Apps Script
      const response = await fetch(
        "https://script.google.com/macros/s/AKfycbwR-ZjQdqs-qySQrx7x2HIPl1vegA95uz_Mj8T731ieyutRAAX5bakaBqLf94LmhQRm/exec",
        {
          method: "POST",
          body: formData,
          mode: "no-cors", // This is important for CORS restrictions with Google Apps Script
        }
      );
      
      // Since no-cors doesn't return readable data, we can't check response status
      // We can only assume it was successful
      toast.success("Your application has been submitted!");
      
      if (onSubmit) {
        onSubmit(values);
      }
    } catch (error) {
      console.error("Form submission error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div dir={direction}>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(handleSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="fullName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Full Name *</FormLabel>
                <FormControl>
                  <Input placeholder="John Doe" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="organization"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Organization Name</FormLabel>
                <FormControl>
                  <Input placeholder="Company Ltd." {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Work Email Address *</FormLabel>
                <FormControl>
                  <Input placeholder="john.doe@company.com" type="email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="jobTitle"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Job Title</FormLabel>
                <FormControl>
                  <Input placeholder="Product Manager" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          <FormField
            control={form.control}
            name="interestedFor"
            render={({ field }) => (
              <FormItem className="space-y-3">
                <FormLabel>Are you interested in Wings only for you or for your organization? *</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="self" />
                      </FormControl>
                      <FormLabel className="font-normal">For myself</FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="organization" />
                      </FormControl>
                      <FormLabel className="font-normal">For my organization</FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          
          {form.watch("interestedFor") === "organization" && (
            <FormField
              control={form.control}
              name="hasITDepartment"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel>Does your organization have an IT department or IT provider?</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="flex flex-col space-y-1"
                    >
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="yes" />
                        </FormControl>
                        <FormLabel className="font-normal">Yes</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="no" />
                        </FormControl>
                        <FormLabel className="font-normal">No</FormLabel>
                      </FormItem>
                      <FormItem className="flex items-center space-x-3 space-y-0">
                        <FormControl>
                          <RadioGroupItem value="unsure" />
                        </FormControl>
                        <FormLabel className="font-normal">Not sure</FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          )}
          
          <div className="text-sm text-muted-foreground italic mt-4">
            We will contact you within the next 3 business days.
          </div>
          
          <div className="flex justify-end gap-4 pt-4">
            <Button type="button" variant="outline" onClick={onCancel} disabled={isSubmitting}>
              Cancel
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
