import { useState } from "react";
import { Eye, EyeOff, Loader2 } from "lucide-react";
import { useNavigate } from "react-router-dom";
import InputField from "./InputField";

const LoginForm = () => {
  //   ====== use navigate ====
  const navigate = useNavigate();
  const fields = [
    {
      name: "email",
      label: "Email",
      type: "email",
      placeholder: "Enter your email",
    },
    {
      name: "password",
      label: "Password",
      type: "password",
      placeholder: "Enter your password",
    },
  ];

  const [data, setData] = useState({
    username: "",
    email: "",
    password: "",
    remember: false,
  });

  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!data.username) newErrors.username = "User name is required";
    if (!data.email) newErrors.email = "Email is required";
    if (!data.password) {
      newErrors.password = "Password is required";
    } else if (data.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) return;

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      console.log(data);

      // Reset form AFTER successful submit
      setData({
        username: "",
        email: "",
        password: "",
        remember: false,
      });
    }, 1500);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        {fields.map((field) => (
          <InputField
            key={field.name}
            {...field}
            type={
              field.name === "password" && showPassword ? "text" : field.type
            }
            value={data[field.name]}
            onChange={(e) => setData({ ...data, [field.name]: e.target.value })}
            error={errors[field.name]}
            eyeIcon={
              field.name === "password" && (
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-neutral-500 hover:text-neutral-700 dark:hover:text-neutral-300 cursor-pointer"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              )
            }
          />
        ))}

        {/* ======= Remember + Forgot =========== */}
        <div className="flex items-center justify-between text-sm">
          <label className="flex items-center gap-2 text-neutral-600 dark:text-neutral-400">
            <input
              type="checkbox"
              checked={data.remember}
              onChange={(e) => setData({ ...data, remember: e.target.checked })}
              className="rounded border-neutral-300 text-indigo-600 focus:ring-indigo-500"
            />
            Remember me
          </label>

          <button
            type="button"
            className="font-medium text-indigo-600 hover:underline dark:text-indigo-400 cursor-pointer"
          >
            Forgot password?
          </button>
        </div>

        {/* ======== Submit ======= */}
        <button
          type="submit"
          disabled={loading}
          className="flex w-full items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-indigo-700 disabled:opacity-70 cursor-pointer"
        >
          {loading && <Loader2 className="h-4 w-4 animate-spin" />}
          {loading ? "Signing in..." : "Sign In"}
        </button>
      </form>

      {/* ====== Not registered link ======= */}
      <div className="mt-4 flex justify-center items-center gap-x-2">
        <p className="text-center text-sm text-neutral-700 dark:text-neutral-300">
          Not registered?
        </p>
        <button
          onClick={() => navigate("/register")}
          className="font-medium text-indigo-600 hover:underline dark:text-indigo-400 cursor-pointer"
        >
          Create account.
        </button>
      </div>
    </>
  );
};

export default LoginForm;
