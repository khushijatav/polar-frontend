import { Compass } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-6">

      <div className="w-full max-w-md">

        <div className="mb-8 text-center">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400">
            <Compass
              size={27}
              className="text-slate-950"
            />
          </div>

          <h1 className="mt-5 text-2xl font-black text-white">
            POLARIS
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Expedition Command Center
          </p>

        </div>


        <div className="rounded-3xl border border-white/10 bg-slate-900 p-7 shadow-2xl">

          <h2 className="text-xl font-bold text-white">
            Welcome back
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Sign in to access your expedition operations.
          </p>


          <form className="mt-7 space-y-5">

            <div>
              <label className="text-sm font-medium text-slate-300">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400"
              />
            </div>


            <div>
              <label className="text-sm font-medium text-slate-300">
                Password
              </label>

              <input
                type="password"
                placeholder="Enter your password"
                className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400"
              />
            </div>


            <button
              type="submit"
              className="w-full rounded-xl bg-cyan-400 py-3.5 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Enter Command Center
            </button>

          </form>


          <Link
            to="/"
            className="mt-6 block text-center text-sm text-slate-500 transition hover:text-cyan-400"
          >
            ← Back to homepage
          </Link>

        </div>

      </div>

    </div>
  );
};

export default Login;