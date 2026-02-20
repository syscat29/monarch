import { Metadata } from "next";
import SignUpForm from "@/features/auth/components/SignupForm";

export const metadata: Metadata = {
  title: 'Sign up'
}

export default function SignupPage() {
  return <SignUpForm />;
}
