import AuthLayout from "../components/auth/AuthLayout";
import SignupForm from "../components/auth/SignupForm";

const Signup = () => {
  return (
    <AuthLayout
      title="Create Account"
      subtitle="Join FilmNest and discover amazing movies."
    >
      <SignupForm />
    </AuthLayout>
  );
};

export default Signup;