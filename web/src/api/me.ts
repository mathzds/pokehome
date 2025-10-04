export default async function fetchMe() {
  const response = await fetch("http://localhost:3000/user/me", {
    method: "GET",
    credentials: "include",
  });

  const data = await response.json();

  return data;
}
