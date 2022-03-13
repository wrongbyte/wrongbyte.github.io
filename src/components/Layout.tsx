import { ReactNode } from "react";
import Header from "./Header";

export default function Layout({ children }: { children: ReactNode }) {
    return (
      <>
        <Header />
          <main className='xl:w-7/12 lg:w-4/5 w-11/12 mx-auto mt-3'>{children}</main>
      </>
    )
  }