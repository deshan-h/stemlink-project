import { useState } from "react"
import { Button } from "@/components/ui/button"
import { NavLink, useNavigate } from "react-router-dom"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import AuthLayout from '../../../layouts/AuthLayout'
import { signInWithPassword } from "@/lib/auth"

const landingPageByRole = {
  "stock-manager": "/",
  "fdo": "/fdo",
}

function Login() {
  const navigate = useNavigate();

  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  function handleChange(event) {
    const { name, value } = event.target

    setForm((currentForm) => ({
      ...currentForm,
      [name]: value,
    }))
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const user = await signInWithPassword(form);
      const destination = user && landingPageByRole[user.role];

      if (!destination) {
        setError("Invalid Email or Password");
        return;
      }
      navigate(destination, { replace: true });
    } catch {
      setError("Unable to sign in. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <AuthLayout>
      <Card className="w-full max-w-sm">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl">Login</CardTitle>
          <CardDescription>
            Enter your email below to login to your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="m@example.com"
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Password</Label>
                  <a
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <Input id="password" name="password" type="password" required onChange={handleChange} />
              </div>
            </div>
            {error && (
              <p role="alert" className="mt-4 text-sm text-red-600">
                {error}
              </p>
            )}
            <Button type="submit" className="w-full bg-orange-500 mt-5" disabled={isSubmitting}>
              {isSubmitting ? "Signing in..." : "Sign in"}
            </Button>

          </form>
          <p className="mt-6 text-center text-sm text-muted-foreground">
            New to StackFlow?{" "}
            <NavLink
              to="/sign-up"
              className="font-medium text-orange-600 hover:underline"
            >
              Sign up
            </NavLink>
          </p>
        </CardContent>
      </Card>
    </AuthLayout>
  )
}

export default Login