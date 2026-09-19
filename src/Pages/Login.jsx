import { Snowflake, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-950 px-5">

      <div className="w-full max-w-md">

        <div className="mb-8 text-center">

          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10">
            <Snowflake
              size={28}
              className="text-cyan-400"
            />
          </div>

          <h1 className="mt-5 text-2xl font-black">
            POLARIS
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Expedition Command Center
          </p>

        </div>


        <div className="rounded-3xl border border-white/10 bg-slate-900 p-7">

          <h2 className="text-xl font-bold">
            Sign in
          </h2>

          <p className="mt-2 text-sm text-slate-500">
            Access your expedition workspace.
          </p>

          <form className="mt-7 space-y-5">

            <div>
              <label className="text-sm text-slate-400">
                Email
              </label>

              <input
                type="email"
                placeholder="you@example.com"
                className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/50"
              />
            </div>

            <div>
              <label className="text-sm text-slate-400">
                Password
              </label>

              <input
                type="password"
                placeholder="••••••••"
                className="mt-2 w-full rounded-xl border border-white/10 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-cyan-400/50"
              />
            </div>

            <button
              type="button"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 py-3 text-sm font-bold text-slate-950 transition hover:bg-cyan-300"
            >
              Sign In
              <ArrowRight size={17} />
            </button>

          </form>

          <Link
            to="/"
            className="mt-6 block text-center text-sm text-slate-500 hover:text-cyan-400"
          >
            ← Back to Home
          </Link>

        </div>

      </div>

    </div>
  );
};

export default Login;