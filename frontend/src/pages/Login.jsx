import React, { useState } from "react";

function Login() {
  const [state, setState] = useState("Sign up");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="flex items-center justify-center p-5">
      <form className="flex min-h-[70vh]  items-center ">
        <div className="flex flex-col gap-3 px-8 py-5 border-1 border-gray-100  items-start sm:min-w-96 shadow-lg  text-zinc-600 rounded-xl">
          <p className="text-2xl font-semibold">
            {state == "Sign up" ? "Create Account" : "Login"}
          </p>
          <p className="my-2 text-sm">
            Please {state == "Sign up" ? "Signup" : "Login"} to book an
            appointment.
          </p>

          <div className="flex flex-col gap-4 w-full">
            {state == "Sign up" && (
              <div>
                <p>Name</p>
                <input
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  value={name}
                  className="border-1 border-gray-500 w-full px-3 py-1 rounded-sm"
                />
              </div>
            )}
            <div>
              <p>Email</p>
              <input
                type="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
                className="border-1 border-gray-500 w-full px-3 py-1 rounded-sm"
              />
            </div>
            <div>
              <p>Password</p>
              <input
                type="password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
                className="border-1 border-gray-500 w-full px-3 py-1 rounded-sm"
              />
            </div>
            <div>
              <button className="bg-violet-500 text-white text-center w-full py-2 rounded-sm">
                {state == "Sign up" ? "Create Account" : "Login"}
              </button>
            </div>
            {state == "Sign up" ? (
              <p>
                Already have account?{" "}
                <span
                  onClick={() => setState("Login")}
                  className="text-violet-500 cursor-pointer underline"
                >
                  Login here
                </span>
              </p>
            ) : (
              <p>
                D'nt have account?{" "}
                <span
                  className="text-violet-500 cursor-pointer underline"
                  onClick={() => setState("Sign up")}
                >
                  Singup here
                </span>
              </p>
            )}
          </div>
        </div>
      </form>
    </div>
  );
}

export default Login;
