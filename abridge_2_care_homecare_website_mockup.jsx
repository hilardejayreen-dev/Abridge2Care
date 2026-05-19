export default function Abridge2CareWebsite() {
  return (
    <div className="min-h-screen bg-[#f7f7f7] text-gray-800 font-sans">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <div className="border border-gray-300 px-4 py-2 rounded-md bg-white">
              <h1 className="text-xl font-bold tracking-wide text-gray-900 leading-none">
                ABRIDGE2CARE
              </h1>
              <p className="text-[11px] tracking-[3px] text-gray-600 text-center">
                HOME CARE
              </p>
            </div>
          </div>

          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <a href="#home" className="text-green-700 border-b-2 border-green-700 pb-1">
              Home
            </a>
            <a href="#about" className="hover:text-green-700">About Us</a>
            <a href="#services" className="hover:text-green-700">Our Services</a>
            <a href="#special" className="hover:text-green-700">Special Services</a>
            <a href="#why" className="hover:text-green-700">Why Choose Us</a>
            <a href="#contact" className="hover:text-green-700">Contact Us</a>
          </nav>

          <div className="bg-blue-600 text-white px-5 py-3 rounded-lg font-semibold shadow-md text-sm">
            +64 220105959
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="max-w-7xl mx-auto mt-6 bg-white rounded-3xl overflow-hidden shadow-lg"
      >
        <div className="grid lg:grid-cols-2 gap-0">
          <div className="p-10 flex flex-col justify-center">
            <h2 className="text-5xl font-bold leading-tight text-[#17335c] mb-6">
              Care with <span className="text-green-700">Compassion.</span>
              <br />
              Live with <span className="text-green-700">Confidence.</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Abridge2Care Home Care provides personalized, faith-based care that
              supports your well-being, independence, and quality of life at home.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8 text-center">
              <div className="bg-green-50 p-4 rounded-2xl shadow-sm">
                <div className="text-3xl mb-2">💚</div>
                <p className="text-sm font-semibold">Compassionate Care</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-2xl shadow-sm">
                <div className="text-3xl mb-2">🛡️</div>
                <p className="text-sm font-semibold">Trusted & Reliable</p>
              </div>

              <div className="bg-green-50 p-4 rounded-2xl shadow-sm">
                <div className="text-3xl mb-2">👨‍👩‍👧</div>
                <p className="text-sm font-semibold">Support That Feels Like Family</p>
              </div>
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 transition text-white px-7 py-4 rounded-xl font-semibold w-fit shadow-md">
              Learn More About Our Services
            </button>
          </div>

          <div className="grid grid-cols-3 h-full min-h-[650px]">
            <img
              src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?q=80&w=1200&auto=format&fit=crop"
              alt="Faith based care"
              className="h-full w-full object-cover"
            />

            <img
              src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=1200&auto=format&fit=crop"
              alt="Healthy elderly couple"
              className="h-full w-full object-cover"
            />

            <img
              src="https://images.unsplash.com/photo-1511497584788-876760111969?q=80&w=1200&auto=format&fit=crop"
              alt="Nature and peace"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Info Cards */}
      <section className="max-w-7xl mx-auto py-8 grid lg:grid-cols-3 gap-6 px-4">
        {/* Philosophy */}
        <div className="bg-[#f7faf4] rounded-3xl p-8 shadow-md border border-green-100">
          <h3 className="text-2xl font-bold text-[#17335c] mb-5">
            Our Care Philosophy
          </h3>

          <p className="text-gray-700 mb-4">
            We follow a healthy lifestyle program inspired by Loma Linda,
            promoting overall wellbeing through:
          </p>

          <ul className="space-y-2 text-gray-700 mb-6">
            <li>✔ Fresh Air</li>
            <li>✔ Clean Water</li>
            <li>✔ Natural Foods</li>
            <li>✔ Sunshine</li>
            <li>✔ Faith & Worship Support</li>
          </ul>

          <p className="italic font-semibold text-green-700 mb-4">
            “Loving others is our goal.”
          </p>

          <p className="text-gray-700 leading-relaxed">
            With over 66 years of nursing experience, we are guided by Christian
            values:
          </p>

          <p className="italic text-[#17335c] font-semibold mt-2">
            “Do unto others as you would have them do unto you.”
          </p>
        </div>

        {/* Principles */}
        <div className="bg-[#f8fbff] rounded-3xl p-8 shadow-md border border-blue-100">
          <h3 className="text-2xl font-bold text-[#17335c] mb-5">
            Our Principles
          </h3>

          <ul className="space-y-4 text-gray-700 mb-6">
            <li>✔ Respect for Cultural Diversity</li>
            <li>✔ Treating Every Client as an Individual</li>
            <li>✔ Upholding the Principles of Te Tiriti o Waitangi</li>
            <li>✔ Privacy & Confidentiality Guaranteed</li>
          </ul>

          <img
            src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=1200&auto=format&fit=crop"
            alt="Happy elderly companionship"
            className="rounded-2xl w-full h-56 object-cover"
          />
        </div>

        {/* Why Choose */}
        <div
          id="why"
          className="bg-[#fffaf1] rounded-3xl p-8 shadow-md border border-yellow-100"
        >
          <h3 className="text-2xl font-bold text-[#17335c] mb-5">
            Why Choose Abridge2Care?
          </h3>

          <p className="text-gray-700 mb-5">
            We are a Christian care team with over 60+ years of combined health
            and social care experience.
          </p>

          <ul className="space-y-4 text-gray-700 mb-6">
            <li>✔ Fully vetted and police-checked staff</li>
            <li>✔ Professionally trained with ongoing development</li>
            <li>✔ Respectful, compassionate, and reliable care</li>
          </ul>

          <p className="text-gray-700 leading-relaxed mb-5">
            We listen to your needs and tailor our services to suit your
            lifestyle.
          </p>

          <p className="italic text-yellow-700 font-semibold text-lg">
            Our goal is to help you maintain independence and quality of life at
            home. 💛
          </p>
        </div>
      </section>

      {/* Bottom Information */}
      <section className="max-w-7xl mx-auto grid lg:grid-cols-4 gap-5 px-4 pb-10">
        <div className="bg-white rounded-2xl p-6 shadow-md border-l-4 border-green-600">
          <h4 className="text-xl font-bold text-green-700 mb-3">Office Hours</h4>
          <p className="text-gray-700">9:00 am – 5:00 pm NZT</p>
          <p className="text-gray-700">Monday to Friday</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-md border-l-4 border-blue-600">
          <h4 className="text-xl font-bold text-blue-700 mb-3">Our Address</h4>
          <p className="text-gray-700">69 Banks St. 6A 1st Floor</p>
          <p className="text-gray-700">Whangārei</p>
          <p className="text-gray-700">New Zealand</p>
        </div>

        <div
          id="contact"
          className="bg-white rounded-2xl p-6 shadow-md border-l-4 border-green-600"
        >
          <h4 className="text-xl font-bold text-green-700 mb-3">Contact Us</h4>
          <p className="text-gray-700">+64 220105959</p>
          <p className="text-gray-700">abridge2care@gmail.com</p>
        </div>

        <div
          id="special"
          className="bg-white rounded-2xl overflow-hidden shadow-md border-l-4 border-purple-500"
        >
          <div className="p-6">
            <h4 className="text-xl font-bold text-purple-700 mb-3">
              Special Services
            </h4>

            <ul className="space-y-2 text-gray-700">
              <li>• Respite Care (24/7)</li>
              <li>• Holiday Support</li>
              <li>• Direct Private Care</li>
              <li>• Flexible, Adaptable Care Plans</li>
            </ul>
          </div>

          <img
            src="https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop"
            alt="Caregiver talking with elderly woman"
            className="h-48 w-full object-cover"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-green-700 text-white py-5 text-center font-medium text-lg shadow-inner">
        Abridge2Care Home Care – Care that truly matters. 💚
      </footer>
    </div>
  );
}
