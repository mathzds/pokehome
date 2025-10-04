function App() {
  interface PokemonCard {
    id: string;
    name: string;
    image: string;
    price: number;
  }

  const cards: PokemonCard[] = [
    {
      id: "1",
      name: "Lucario VAstro",
      image:
        "https://assets.pokemon.com/static-assets/content-assets/cms2-pt-br/img/cards/web/SWSHP/SWSHP_PT-BR_SWSH214.png",
      price: 12.99,
    },
  ];

  return (
    <div className="min-h-screen p-6 ">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <div
            key={card.id}
            className="card bg-base-100 shadow-lg rounded-lg transform transition duration-300 hover:scale-105 hover:shadow-2xl"
          >
            <figure>
              <img
                src={card.image}
                alt={card.name}
                className="w-full h-56 object-contain p-4"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{card.name}</h2>
              <p className="text-lg font-semibold">${card.price.toFixed(2)}</p>
              <div className="card-actions justify-end">
                <button className="btn btn-primary btn-sm">Comprar</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
