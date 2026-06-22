 export default function App() {
  return (
    <div
      style={{
        backgroundColor: "#0f172a",
        color: "white",
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>🕌 Islamic Prayer Display</h1>

      <div
        style={{
          backgroundColor: "#1e293b",
          padding: "20px",
          borderRadius: "15px",
          width: "300px",
          textAlign: "center",
        }}
      >
        <h2>Fajr - 04:15 AM</h2>
        <h2>Dhuhr - 12:20 PM</h2>
        <h2>Asr - 03:45 PM</h2>
        <h2>Maghrib - 06:50 PM</h2>
        <h2>Isha - 08:15 PM</h2>
      </div>
    </div>
  );
}
