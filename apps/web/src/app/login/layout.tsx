import Starfield from "../_components/starfield";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
};


export default function LoginLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
          <Starfield
            starCount={2500}
            starColor={[255, 255, 255]}
            speedFactor={0.02}
            backgroundColor="black"
          />
          {props.children}
      </body>
    </html>
  );
}
