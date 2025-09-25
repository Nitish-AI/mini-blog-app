export default function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-4 text-center">
        © {new Date().getFullYear()} Mini Blog App. All rights reserved.
      </div>
    </footer>
  );
}
