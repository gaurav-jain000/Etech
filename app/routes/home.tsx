import type { MetaArgs } from "react-router";

export function meta({}: MetaArgs) {
  return [
    { title: "Etech" },
    { name: "description", content: "Welcome to Etech!" },
  ];
}

export default function Home() {
  return (
    <>
      <section></section>
    </>
  );
}
