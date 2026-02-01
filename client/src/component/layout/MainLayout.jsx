import Navbar from "./Navbar";

const MainLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-gray-900 via-indigo-900 to-purple-900">
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 p-6">{children}</main>

      {/* Footer */}
      <footer className="backdrop-blur-lg bg-white/10 border-t border-white/20 text-white">
        <div className="max-w-6xl mx-auto px-6 py-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Name Section */}
          <div>
            <h3 className="text-lg font-semibold">Anurag Pandey</h3>
            <p className="text-gray-300 text-sm mt-1">
              Full Stack Developer | UI/UX Enthusiast
            </p>
          </div>

          {/* Portfolio Section */}
          <div>
            
            <a
              href="https://my-portfolio-wheat-zeta-89.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline text-sm"
            >
              <h3 className="text-lg font-semibold">Portfolio</h3>
            </a>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-semibold">Contact</h3>
            <p className="text-gray-300 text-sm">📧 anurag.application799@gmail.com</p>
            <p className="text-gray-300 text-sm">📞 +91 7991845638</p>
          </div>
        </div>

        <div className="text-center text-gray-400 text-sm pb-4">
          © {new Date().getFullYear()} Your Name. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default MainLayout;
