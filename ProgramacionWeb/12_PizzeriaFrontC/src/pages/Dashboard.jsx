const Dashboard = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Bienvenido, Admin1</h1>
      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Ventas del Día</h2>
          <p className="text-2xl">$10,000</p>
        </div>
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">Ventas del Mes</h2>
          <p className="text-2xl">$100,000</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;