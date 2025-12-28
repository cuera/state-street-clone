"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Loader2 } from "lucide-react";
import confetti from "canvas-confetti";
import LinearProgress, { LinearProgressProps } from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { Button } from "@/components/ui/stateful-button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { cn } from "@/lib/utils";

const steps = [{ id: "inquiry", title: "Admission Inquiry" }];

interface FormData {
  parentName: string;
  parentEmail: string;
  parentPhone: string;
  studentName: string;
  grade: string;
  session: string;
  question: string;
}

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
};

const contentVariants = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, x: -50, transition: { duration: 0.2 } },
};

function LinearProgressWithLabel(props: LinearProgressProps & { value: number }) {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography
          variant="body2"
          sx={{ color: 'text.secondary' }}
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

const EnrollwithRoyalGlobalSchool = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [progress, setProgress] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    parentName: "",
    parentEmail: "",
    parentPhone: "",
    studentName: "",
    grade: "",
    session: "",
    question: "",
  });

  // Calculate form completion progress
  React.useEffect(() => {
    const requiredFields = [
      formData.studentName,
      formData.grade,
      formData.session,
      formData.parentName,
      formData.parentPhone,
      formData.parentEmail
    ];
    
    const completedFields = requiredFields.filter(field => field.trim() !== "").length;
    const newProgress = (completedFields / requiredFields.length) * 100;
    setProgress(newProgress);
  }, [formData]);

  const updateFormData = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const submitToGoogleSheets = async (data: FormData) => {
    // 1. Get URL from Env (or hardcode if testing)
    const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL || "https://script.google.com/macros/s/AKfycbzOrRlxAyQmA2TNDY8uYXG8ctrnoJ7Re_iX6aJ4WDoaIKo7s1DjVFc10MrYbn1z0g6qdg/exec";

    // 2. Prepare Payload
    // Note: We send as Plain Text to bypass CORS flight checks
    const payload = {
      ...data,
      pagePath: window.location.pathname,
      userAgent: navigator.userAgent,
    };

    // 3. The "Blind" Send (no-cors)
    // We cannot read the response (result.json), but the data WILL arrive.
    await fetch(GOOGLE_SCRIPT_URL, {
      method: "POST",
      mode: "no-cors", 
      headers: {
        "Content-Type": "text/plain", // Apps Script reads this easily now
      },
      body: JSON.stringify(payload),
    });

    // Since we use no-cors, we assume success if the line above didn't crash.
    return true;
  };

  const handleSubmit = () => {
    if (!isValid()) {
      toast.error("Please fill all required fields correctly.");
      return Promise.resolve(); // keeps stateful Button happy
    }

    setIsSubmitting(true);
    setProgress(90); // show almost full while saving

    return submitToGoogleSheets(formData)
      .then(() => {
        setProgress(100);

        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });

        toast.success(
          "Thank you for your interest in Royal Global School! Our admissions team has received your inquiry and will contact you within 2 working days. We look forward to speaking with you."
        );
        setIsSubmitted(true);
      })
      .catch((error) => {
        console.error("Error in form submission:", error);
        toast.error(
          "Something went wrong while submitting. Please try again after some time."
        );
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  const isValid = () => {
    const emailOk = /.+@.+\..+/.test(formData.parentEmail);
    const phoneOk = /\d{8,}/.test(formData.parentPhone.replace(/\D/g, ""));
    return (
      formData.parentName.trim() !== "" &&
      emailOk &&
      phoneOk &&
      formData.studentName.trim() !== "" &&
      formData.grade !== "" &&
      formData.session !== ""
    );
  };

  return (
    <section className="py-12 md:py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl text-center mb-2">
          <div className="inline-block px-4 py-2 bg-muted/30 rounded-full">
            <span className="text-xs text-muted-foreground">Enroll with</span>
          </div>
          <h2 className="mt-4 text-4xl md:text-5xl font-bold tracking-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-t from-neutral-700 to-neutral-800 dark:from-stone-200 dark:to-neutral-200">
              Royal <span className="text-[#bdd663]">Global</span> School
            </span>
          </h2>
          <p className="mt-3 text-muted-foreground">Begin your journey with a simple admission inquiry.</p>
        </div>

        <div className="w-full max-w-3xl mx-auto">
          {/* Progress indicator (single-step aesthetic) */}
          <motion.div className="mb-4" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            {/* Circular indicator and text - COMMENTED OUT */}
            {/* <div className="flex justify-center mb-2">
              {steps.map((step, index) => (
                <motion.div key={index} className="flex flex-col items-center">
                  <div className="relative w-6 h-6 flex items-center justify-center">
                    <span className="absolute inset-0 rounded-full border-2 border-neutral-300 bg-background" />
                    <span className="w-2.5 h-2.5 rounded-full bg-black" />
                  </div>
                  <motion.span className={cn("text-sm mt-1 text-primary font-semibold text-center mb-0")}>{step.title}</motion.span>
                </motion.div>
              ))}
            </div> */}
            <Box sx={{ width: '100%', mt: 2 }}>
              <LinearProgressWithLabel 
                value={progress} 
                sx={{
                  '& .MuiLinearProgress-bar': {
                    background: 'linear-gradient(90deg, #bdd663 0%, #a8c552 50%, #93b441 100%)',
                  },
                }}
              />
            </Box>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}>
            <Card className="border shadow-md rounded-3xl overflow-hidden">
              <div>
                <AnimatePresence mode="wait">
                  {!isSubmitted ? (
                    <motion.div key="form" initial="hidden" animate="visible" exit="exit" variants={contentVariants}>
                      <CardHeader className="pb-2">
                        <CardTitle>Admission Inquiry</CardTitle>
                        <CardDescription>
                          Interested in joining the Royal Global School family? Please fill out this short form, and our admissions team will get in touch with you shortly with more details and next steps.
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <motion.div variants={fadeInUp} className="space-y-2">
                          <Label htmlFor="studentName">Student&apos;s Full Name</Label>
                          <Input id="studentName" placeholder="e.g., Aarav Sharma" value={formData.studentName} onChange={(e) => updateFormData("studentName", e.target.value)} className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                        </motion.div>
                        <motion.div variants={fadeInUp} className="space-y-2">
                          <Label htmlFor="grade">Grade Applying For</Label>
                          <Select value={formData.grade} onValueChange={(value) => updateFormData("grade", value)}>
                            <SelectTrigger id="grade" className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary">
                              <SelectValue placeholder="Select a grade" />
                            </SelectTrigger>
                            <SelectContent>
                              {["Playgroup","Nursery","KG-I","KG-II","Grade 1","Grade 2","Grade 3","Grade 4","Grade 5","Grade 6","Grade 7","Grade 8","Grade 9","Grade 10","Grade 11","Grade 12"].map((g) => (
                                <SelectItem key={g} value={g}>{g}</SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </motion.div>
                        <motion.div variants={fadeInUp} className="space-y-2">
                          <Label htmlFor="session">Academic Session</Label>
                          <Select value={formData.session} onValueChange={(value) => updateFormData("session", value)}>
                            <SelectTrigger id="session" className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary">
                              <SelectValue placeholder="Select a session" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="2025-2026">2025-2026</SelectItem>
                              <SelectItem value="2026-2027">2026-2027</SelectItem>
                            </SelectContent>
                          </Select>
                        </motion.div>
                        <motion.div variants={fadeInUp} className="space-y-2">
                          <Label htmlFor="parentName">Parent&apos;s Full Name</Label>
                          <Input id="parentName" placeholder="e.g., Priya Sharma" value={formData.parentName} onChange={(e) => updateFormData("parentName", e.target.value)} className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                        </motion.div>
                        <motion.div variants={fadeInUp} className="space-y-2">
                          <Label htmlFor="parentPhone">Parent&apos;s Mobile Number</Label>
                          <Input id="parentPhone" type="tel" placeholder="e.g., 98xxxxxxxx" value={formData.parentPhone} onChange={(e) => updateFormData("parentPhone", e.target.value)} className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                        </motion.div>
                        <motion.div variants={fadeInUp} className="space-y-2">
                          <Label htmlFor="parentEmail">Parent&apos;s Email Address</Label>
                          <Input id="parentEmail" type="email" placeholder="e.g., name@example.com" value={formData.parentEmail} onChange={(e) => updateFormData("parentEmail", e.target.value)} className="transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                        </motion.div>
                        <motion.div variants={fadeInUp} className="space-y-2 md:col-span-2">
                          <Label htmlFor="question">Your Question (Optional)</Label>
                          <Textarea id="question" placeholder="If you have any specific questions, please let us know here..." value={formData.question} onChange={(e) => updateFormData("question", e.target.value)} className="min-h-[64px] transition-all duration-300 focus:ring-2 focus:ring-primary/20 focus:border-primary" />
                        </motion.div>
                      </CardContent>

                      <CardFooter className="flex justify-end pt-4 pb-4">
                        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button 
                            type="button" 
                            onClick={handleSubmit} 
                            disabled={!isValid() || isSubmitting}
                            className="bg-[#bdd663] hover:ring-[#bdd663] rounded-2xl"
                          > 
                            Request Information
                          </Button>
                        </motion.div>
                      </CardFooter>
                    </motion.div>
                  ) : (
                    <motion.div key="success" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}>
                      <CardHeader>
                        <CardTitle>Thank you!</CardTitle>
                        <CardDescription>
                          Thank you for your interest in Royal Global School! Our admissions team has received your inquiry and will contact you within 2 working days. We look forward to speaking with you.
                        </CardDescription>
                      </CardHeader>
                      <CardFooter className="flex justify-center pt-4 pb-4">
                         <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                          <Button 
                            type="button" 
                            onClick={() => {
                              setIsSubmitted(false);
                              setFormData({
                                parentName: "",
                                parentEmail: "",
                                parentPhone: "",
                                studentName: "",
                                grade: "",
                                session: "",
                                question: "",
                              });
                              setProgress(0);
                            }}
                            className="bg-[#bdd663] hover:ring-[#bdd663] rounded-2xl"
                          > 
                            Submit Another Inquiry
                          </Button>
                        </motion.div>
                      </CardFooter>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </Card>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default EnrollwithRoyalGlobalSchool;



