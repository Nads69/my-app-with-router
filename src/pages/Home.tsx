import { useRouteLoaderData } from "react-router-dom";

export default function Home() {
  const weather = useRouteLoaderData("app") as string;

  return (
    <>
      <h1>Hello from Home</h1>
      <p>Today is a {weather} day</p>
    </>
  );
}
