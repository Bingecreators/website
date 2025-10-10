import React from "react";

function App() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="App bg-white text-purple-700 font-sans overflow-x-hidden">

      {/* ---------- NAVBAR ---------- */}
      <header className="fixed top-0 left-0 w-full bg-white/30 backdrop-blur-lg shadow-md z-50">
        <div className="max-w-7xl mx-auto flex justify-between items-center py-3 px-6">
          <div className="flex items-center gap-3">
            <img src="/BC Logo Vector.png" alt="Binge Creators Logo" className="h-12 w-auto" />
            <h1 className="font-['Anton',Arial,sans-serif] text-2xl font-black tracking-wide text-purple-700">
              BINGE CREATORS
            </h1>
          </div>
          <nav className="hidden md:flex items-center gap-3 text-base font-semibold">
            <button
              onClick={() => scrollToSection('home')}
              className="relative px-6 py-2.5 rounded-full border-2 border-gray-500 text-white bg-gray-500 overflow-hidden group transition-all duration-500"
            >
              <span className="relative z-10 group-hover:text-black transition-colors duration-500">Home</span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-2xl bg-white transition-opacity duration-500"></span>
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="relative px-6 py-2.5 rounded-full border-2 border-gray-500 text-white bg-gray-500 overflow-hidden group transition-all duration-500"
            >
              <span className="relative z-10 group-hover:text-black transition-colors duration-500">Services</span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-2xl bg-white transition-opacity duration-500"></span>
            </button>
            <button
              onClick={() => scrollToSection('our-works')}
              className="relative px-6 py-2.5 rounded-full border-2 border-gray-500 text-white bg-gray-500 overflow-hidden group transition-all duration-500"
            >
              <span className="relative z-10 group-hover:text-black transition-colors duration-500">Our works</span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-2xl bg-white transition-opacity duration-500"></span>
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="relative px-6 py-2.5 rounded-full border-2 border-gray-500 text-white bg-gray-500 overflow-hidden group transition-all duration-500"
            >
              <span className="relative z-10 group-hover:text-black transition-colors duration-500">Testimonials</span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-2xl bg-white transition-opacity duration-500"></span>
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="relative px-6 py-2.5 rounded-full border-2 border-purple-600 text-white bg-purple-600 overflow-hidden group transition-all duration-500"
            >
              <span className="relative z-10 group-hover:text-black transition-colors duration-500">GET IN TOUCH</span>
              <span className="absolute inset-0 bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-3xl bg-white transition-opacity duration-500"></span>
            </button>
          </nav>
        </div>
      </header>

      {/* ---------- HERO SECTION ---------- */}
      <section
        id="home"
        className="min-h-screen flex items-center bg-cover bg-center bg-fixed relative"
        style={{ backgroundImage: "url('/2366f93e44b3106742402a27e8c86d30[1].jpg')" }}
      >
        <div className="absolute inset-0 bg-white/70" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <h1 className="font-['Anton',Arial,sans-serif] text-8xl font-black text-purple-700 mb-6 tracking-wide text-left">
            CUT-ENGAGE-
             <h1 className="font-['Anton',Arial,sans-serif] text-8xl font-black text-purple-700 mb-6 tracking-wide text-left">
            CONVERT-REPEAT !
          </h1>
            </h1>
          <p className="font-['Plus_Jakarta_Sans',system-ui,sans-serif] text-2xl font-medium text-purple-600 max-w-4xl leading-relaxed text-left">
            Your ultimate Post-Production Agency flipping 'meh' videos into epic "wahh" masterpieces with rock solid consistency in every frame
          </p>
          <a
            href="https://calendly.com/your-link"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 px-8 py-4 bg-purple-600 text-white font-['Plus_Jakarta_Sans',system-ui,sans-serif] text-lg font-bold rounded-full hover:bg-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            WITNESS OUR MAGIC!
          </a>
        </div>
      </section>

      {/* ---------- SERVICES SECTION ---------- */}
      <section
        id="services"
        className="min-h-screen bg-cover bg-center bg-fixed relative py-28 px-6"
        style={{ backgroundImage: "url('/2366f93e44b3106742402a27e8c86d30[1].jpg')" }}
      >
        <div className="absolute inset-0 bg-white/70" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h2 className="font-['Anton',Arial,sans-serif] text-7xl font-black text-purple-700 mb-6 tracking-wide">
            Our Services
          </h2>
          <p className="font-['Plus_Jakarta_Sans',system-ui,sans-serif] text-xl font-medium text-purple-600 mb-20 leading-relaxed max-w-3xl mx-auto">
            From raw footage to cinematic perfection — every project gets our signature precision, mood, and artistry.
          </p>

          <div className="grid md:grid-cols-3 gap-16">
            <div className="service-box bg-white/80 backdrop-blur-sm rounded-3xl p-10 hover:bg-purple-600 hover:text-white transition-all duration-500 cursor-pointer shadow-xl">
              <h3 className="font-['Anton',Arial,sans-serif] text-3xl font-black mb-4">VIDEO EDITING</h3>
              <p className="text-lg font-medium leading-relaxed">Cut, pace, and polish your story with cinematic rhythm and style.</p>
            </div>
            <div className="service-box bg-white/80 backdrop-blur-sm rounded-3xl p-10 hover:bg-purple-600 hover:text-white transition-all duration-500 cursor-pointer shadow-xl">
              <h3 className="font-['Anton',Arial,sans-serif] text-3xl font-black mb-4">SOUND DESIGN</h3>
              <p className="text-lg font-medium leading-relaxed">Every frame deserves audio that breathes emotion into visuals.</p>
            </div>
            <div className="service-box bg-white/80 backdrop-blur-sm rounded-3xl p-10 hover:bg-purple-600 hover:text-white transition-all duration-500 cursor-pointer shadow-xl">
              <h3 className="font-['Anton',Arial,sans-serif] text-3xl font-black mb-4">COLOR GRADING</h3>
              <p className="text-lg font-medium leading-relaxed">Frame-by-frame cinematic hues that define your visual identity.</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- OUR WORKS SECTION ---------- */}
      <section
        id="our-works"
        className="min-h-screen bg-cover bg-center bg-fixed relative py-28 px-6"
        style={{ backgroundImage: "url('/2366f93e44b3106742402a27e8c86d30[1].jpg')" }}
      >
        <div className="absolute inset-0 bg-white/80" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h2 className="font-['Anton',Arial,sans-serif] text-7xl font-black text-purple-700 mb-6 tracking-wide">
            Our Works
          </h2>
          <p className="font-['Plus_Jakarta_Sans',system-ui,sans-serif] text-xl font-medium text-purple-600 mb-16 leading-relaxed max-w-3xl mx-auto">
            Every project is a story. Here are a few we've brought to life with cinematic flair.
          </p>

          <div className="grid grid-cols-4 gap-6">
            <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-purple-600 hover:scale-105 transition-all duration-300 bg-black aspect-[9/16]">
              <iframe
                src="https://player.cloudinary.com/embed/?cloud_name=dkfiefxwt&public_id=Web_1_rx74en&profile=cld-default"
                width="100%"
                height="100%"
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
                frameBorder="0"
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-purple-600 hover:scale-105 transition-all duration-300 bg-black aspect-[9/16]">
              <iframe
                src="https://player.cloudinary.com/embed/?cloud_name=dkfiefxwt&public_id=Aunty_Final_bxjjb1&profile=cld-default"
                width="100%"
                height="100%"
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
                frameBorder="0"
                className="w-full h-full"
              ></iframe>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-purple-600 hover:scale-105 transition-all duration-300 bg-black aspect-[9/16]">
              <video
                src="https://res.cloudinary.com/dkfiefxwt/video/upload/v1760068650/Sep_23_Final_x67whq.mp4"
                controls
                className="w-full h-full object-cover"
              ></video>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-purple-600 hover:scale-105 transition-all duration-300 bg-black aspect-[9/16]">
              <iframe
                src="https://player.cloudinary.com/embed/?cloud_name=dkfiefxwt&public_id=Dining_room_wqjdf7&profile=cld-default"
                width="100%"
                height="100%"
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                allowFullScreen
                frameBorder="0"
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- TESTIMONIALS SECTION ---------- */}
      <section
        id="testimonials"
        className="min-h-screen bg-cover bg-center bg-fixed relative py-28 px-6"
        style={{ backgroundImage: "url('/2366f93e44b3106742402a27e8c86d30[1].jpg')" }}
      >
        <div className="absolute inset-0 bg-white/70" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <h2 className="font-['Anton',Arial,sans-serif] text-7xl font-black text-purple-700 mb-6 tracking-wide">
            Testimonials
          </h2>
          <p className="font-['Plus_Jakarta_Sans',system-ui,sans-serif] text-xl font-medium text-purple-600 mb-20 leading-relaxed max-w-3xl mx-auto">
            What creators and brands say about working with Binge Creators.
          </p>

          <div className="grid md:grid-cols-2 gap-16 max-w-5xl mx-auto">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 hover:bg-purple-600 hover:text-white transition-all duration-500 shadow-xl">
              <div className="flex justify-center mb-6">
                <img
                  src="https://res.cloudinary.com/dvgupjjr3/image/upload/v1759923992/WhatsApp_Image_2025-10-08_at_15.36.25_aada8041_ls4rsn.jpg"
                  alt="Anuhya Rao"
                  className="w-20 h-20 rounded-full object-cover border-4 border-purple-600"
                />
              </div>
              <p className="text-lg leading-relaxed mb-6">
                "Binge Creators transformed our raw footage into something truly spectacular. Their post-production expertise is unmatched — from the precise editing to the stunning color grading, every frame looks cinematic. The turnaround was incredibly fast, and the quality exceeded our expectations. They've become our go-to post-production partner."
              </p>
              <h4 className="font-['Anton',Arial,sans-serif] text-2xl font-black">– Anuhya Rao</h4>
              <p className="text-sm font-medium mt-2">CEO and Founder @cozihouz</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-10 hover:bg-purple-600 hover:text-white transition-all duration-500 shadow-xl">
              <div className="flex justify-center mb-6">
                <img
                  src="https://res.cloudinary.com/dkfiefxwt/image/upload/v1760087209/Sid_DP_mbnxbl.jpg"
                  alt="Siddarth"
                  className="w-20 h-20 rounded-full object-cover border-4 border-purple-600"
                />
              </div>
              <p className="text-lg leading-relaxed mb-6">
                "The creative flair you bring to the table is absolutely next level—it's like magic for our content! You guys take the worst recorded videos and transform them into solid 10/10 masterpieces that captivate our audience. From seamless edits to punchy visuals, every project feels polished and professional. Thoroughly enjoyed working with you guys. Your team is doing tremendous job!"
              </p>
              <h4 className="font-['Anton',Arial,sans-serif] text-2xl font-black">– Siddarth</h4>
              <p className="text-sm font-medium mt-2">Founder of ThreeLeafAcademy</p>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- CONTACT SECTION ---------- */}
      <section
        id="contact"
        className="min-h-screen bg-cover bg-center bg-fixed relative pt-20 px-5 pb-20"
        style={{ backgroundImage: "url('/2366f93e44b3106742402a27e8c86d30[1].jpg')" }}
      >
        <div className="absolute inset-0 bg-white/70 pointer-events-none" />
        <div className="max-w-7xl mx-auto relative z-10 py-16 px-5">
          <h2 className="font-['Anton',Arial,sans-serif] text-7xl font-black text-purple-700 mb-6 tracking-wide text-center">
            Get In Touch
          </h2>
          <p className="font-['Plus_Jakarta_Sans',system-ui,sans-serif] text-xl font-medium text-purple-600 mb-20 text-center max-w-4xl mx-auto leading-relaxed">
            Ready to transform your footage into cinematic magic? Let's create something extraordinary together.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h3 className="font-['Anton',Arial,sans-serif] text-5xl font-black text-purple-700 mb-12">
                Contact Information
              </h3>

              <div className="space-y-8">
                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-['Anton',Arial,sans-serif] text-2xl font-black text-purple-700 mb-1">
                      Email
                    </h4>
                    <a
                      href="mailto:bingecreators@gmail.com"
                      className="text-purple-600 text-lg hover:text-purple-800 transition-colors duration-300"
                    >
                      bingecreators@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-['Anton',Arial,sans-serif] text-2xl font-black text-purple-700 mb-1">
                      Phone
                    </h4>
                    <a
                      href="tel:+918247812091"
                      className="text-purple-600 text-lg hover:text-purple-800 transition-colors duration-300"
                    >
                      +91 8247812091
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="w-14 h-14 rounded-full bg-purple-600 flex items-center justify-center flex-shrink-0">
                    <svg className="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-['Anton',Arial,sans-serif] text-2xl font-black text-purple-700 mb-1">
                      Location
                    </h4>
                    <p className="text-purple-600 text-lg">
                      Hyderabad, India
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:pl-12">
              <h3 className="font-['Anton',Arial,sans-serif] text-5xl font-black text-purple-700 mb-6 leading-tight">
                Ready to Transform Your Content?
              </h3>
              <p className="text-purple-600 text-lg mb-8 leading-relaxed">
                Schedule a discovery call to discuss your post-production needs and see how we can elevate your content.
              </p>
              <button
                onClick={() => window.open('https://cal.com/binge-creators-mhzzyh/discovery-call', '_blank')}
                className="px-10 py-5 bg-purple-600 text-white text-lg font-bold rounded-full cursor-pointer transition-all duration-300 shadow-lg hover:bg-purple-700 hover:-translate-y-1 hover:scale-105 hover:shadow-2xl active:translate-y-0 active:scale-100"
              >
                Schedule Discovery Call
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- FOOTER ---------- */}
      <footer className="bg-cover bg-center bg-fixed text-purple-700 relative py-16" style={{ backgroundImage: "url('/2366f93e44b3106742402a27e8c86d30[1].jpg')" }}>
        <div className="absolute inset-0 bg-white/70 pointer-events-none" />
        <div className="max-w-7xl mx-auto px-5 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-8">
            <div>
              <h3 className="font-['Anton',Arial,sans-serif] text-2xl font-black text-purple-700 mb-4">
                BINGE CREATORS
              </h3>
              <p className="text-purple-600 leading-relaxed mb-6">
                Post-production powerhouse transforming your footage into cinematic masterpieces with professional polish and creative excellence.
              </p>
            </div>

            <div>
              <h4 className="font-['Anton',Arial,sans-serif] text-xl font-bold text-purple-700 mb-4">CONTACT</h4>
              <ul className="space-y-3 text-purple-600">
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <a href="mailto:bingecreators@gmail.com" className="hover:text-purple-800 transition-colors duration-300">
                    bingecreators@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  <a href="tel:+918247812091" className="hover:text-purple-800 transition-colors duration-300">
                    +91 8247812091
                  </a>
                </li>
                <li className="flex items-start gap-2">
                  <svg className="w-5 h-5 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  <span>Hyderabad, India</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-['Anton',Arial,sans-serif] text-xl font-bold text-purple-700 mb-4">QUICK LINKS</h4>
              <ul className="space-y-2 text-purple-600">
                <li>
                  <button onClick={() => scrollToSection('home')} className="hover:text-purple-800 transition-colors duration-300">
                    About Us
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('services')} className="hover:text-purple-800 transition-colors duration-300">
                    Services
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('our-works')} className="hover:text-purple-800 transition-colors duration-300">
                    Our Work
                  </button>
                </li>
                <li>
                  <button onClick={() => scrollToSection('testimonials')} className="hover:text-purple-800 transition-colors duration-300">
                    Testimonials
                  </button>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="font-['Anton',Arial,sans-serif] text-xl font-bold text-purple-700 mb-4">LET'S CONNECT</h4>
              <p className="text-purple-600 mb-4 leading-relaxed">
                Ready to transform your footage? Schedule a consultation to discuss your post-production needs.
              </p>
              <button
                onClick={() => window.open('https://cal.com/binge-creators-mhzzyh/discovery-call', '_blank')}
                className="px-6 py-3 bg-purple-600 text-white text-sm font-bold rounded-full cursor-pointer transition-all duration-300 hover:bg-purple-700 hover:-translate-y-1 hover:scale-105"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
