import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Dasboard",
};


export default function LoginLayout(props: { children: React.ReactNode }) {
  return (
    <body>
      <main className="flex-1">
        {props.children}
      </main>
    </body>
  );
}
