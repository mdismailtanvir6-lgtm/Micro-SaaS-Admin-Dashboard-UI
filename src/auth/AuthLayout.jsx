import React from 'react'

const AuthLayout = ({children}) => {
 return (
    <div className="m-auto flex max-w-md min-w-xs min-h-screen items-center justify-center bg-neutral-100 px-4 dark:bg-neutral-950">
      <div className="w-full  rounded-2xl bg-white p-6 shadow-xl dark:bg-neutral-900">
        <h1 className="mb-6 text-center text-2xl font-bold text-neutral-900 dark:text-neutral-100">
          Welcome back
        </h1>
        {children}
      </div>
    </div>
  );
}

export default AuthLayout
