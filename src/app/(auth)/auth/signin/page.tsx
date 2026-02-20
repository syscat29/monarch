import { Metadata } from "next";
import SignInForm from "@/features/auth/components/SigninForm";

export const metadata: Metadata = {
  title: 'Sign in'
}

export default function SigninPage() {
  return <SignInForm />;
}
