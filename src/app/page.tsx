import InfoClient from "@/app/components/Infoclient"

export default function HomePage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Welcome to Mini Blog App</h1>

      <section className="mb-6 p-6 bg-white rounded shadow">
        <h2 className="text-xl font-semibold mb-2">App Info</h2>
        <InfoClient />
      </section>

      <section className="p-6 bg-white rounded shadow">
        <h2 className="text-xl font-semibold mb-2">Last Updated Time (IST)</h2>
        <p className="text-sm text-gray-700">
          {new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" })}
        </p>
      </section>
    </div>
  );
}
