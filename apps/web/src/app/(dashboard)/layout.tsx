import type { Metadata } from "next";
import Header from "../_components/header";

export const metadata: Metadata = {
  title: "Dasboard",
};


export default function LoginLayout(props: { children: React.ReactNode }) {
  return (
    <body>
      <Header />
      <main className="flex-1">
        {props.children}
      </main>
    </body>
  );
}
