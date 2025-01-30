import { AuthLayout } from "@/components/auth/auth-layout";
import { ForgotPasswordScreen } from "@/pages/auth/forgot-password";

const ForgotPassword = () => {
  return (
    <AuthLayout>
      <ForgotPasswordScreen />
    </AuthLayout>
  );
};

export default ForgotPassword;
