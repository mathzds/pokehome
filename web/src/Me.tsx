function Me() {
  const onFetch = async () => {
    const response = await fetch("http://localhost:3000/user/me", {
      method: "GET",
      credentials: "include", // precisa ser "include"
    });

    const data = await response.json();
    console.log(data);
  };

  return (
    <>
      <h1 className="flex flex-row justify-center">Ola mundo</h1>
      <button onClick={onFetch} className="btn btn-primary">
        Testar /me
      </button>
    </>
  );
}

export default Me;
