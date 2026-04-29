import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight,
  Camera, 
  SunMedium, 
  Type, 
  BookOpen, 
  Palette, 
  CheckCircle2, 
  Calendar,
  CreditCard,
  PenTool
} from 'lucide-react';

// --- Componentes Utilitários ---

const RevealOnScroll = ({ children, className = '', delay = 0 }) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const Section = ({ id, className = '', children }) => (
  <section id={id} className={`py-24 md:py-32 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto ${className}`}>
    {children}
  </section>
);

// --- Aplicação Principal ---

export default function App() {
  return (
    <div className="bg-[#F2ECE4] min-h-screen text-[#2F2B29] font-sans selection:bg-[#D4C8BA]">
      {/* Navegação */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#F2ECE4]/80 backdrop-blur-md border-b border-[#DED5C9]/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <span className="text-sm font-semibold tracking-wide">KOLLE STUDIO</span>
          <span className="text-sm text-[#99938B] font-medium tracking-wide">SOFT MORNING STUDIO</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 md:pt-52 md:pb-32 px-6 flex flex-col items-center justify-center text-center min-h-[90vh]">
        <RevealOnScroll>
          <span className="text-xs md:text-sm font-bold tracking-[0.2em] text-[#99938B] uppercase mb-6 block">
            Visual Identity Proposal
          </span>
        </RevealOnScroll>
        <RevealOnScroll delay={100}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter leading-[1.05] mb-8 text-[#2F2B29]">
            A new identity for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#7A8B73] to-[#9BAA93]">
              Soft Morning Studio.
            </span>
          </h1>
        </RevealOnScroll>
        <RevealOnScroll delay={200}>
          <p className="text-xl md:text-2xl text-[#66625D] max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
            A professional and cohesive visual identity that perfectly frames the moments you capture.
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={300}>
          <a href="#designer" className="inline-flex items-center gap-2 bg-[#2F2B29] text-[#F2ECE4] px-8 py-4 rounded-full font-medium hover:scale-105 transition-transform duration-300">
            View the Proposal <ArrowRight size={18} />
          </a>
        </RevealOnScroll>
      </section>

      {/* Meet the Designer */}
      <div id="designer" className="bg-white rounded-t-[3rem] md:rounded-t-[4rem] shadow-sm relative z-10">
        <Section>
          {/* Grelha Principal: Texto e Imagem Centrados Verticalmente */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* Coluna de Texto */}
            <div className="order-2 md:order-1">
              <RevealOnScroll>
                <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Meet your designer.</h2>
              </RevealOnScroll>
              <RevealOnScroll delay={100}>
                <p className="text-lg text-[#66625D] mb-6 leading-relaxed">
                  Hi! It is so good to hear from you again. I absolutely loved working with you. Since you already know me (and how things work around here), let’s skip the formalities and get straight to business!
                </p>
                <p className="text-lg text-[#2F2B29] mb-0 leading-relaxed font-medium">
                  I am beyond honored that you thought of me for your personal brand, and I’m incredibly excited to help bring Soft Morning Studio to life.
                </p>
              </RevealOnScroll>
            </div>

            {/* Coluna da Fotografia */}
            <RevealOnScroll className="order-1 md:order-2" delay={200}>
              <div className="aspect-[4/5] md:aspect-square bg-[#E4DACC] rounded-3xl overflow-hidden relative group shadow-sm max-w-md mx-auto">
                <img 
                  src="https://www.dropbox.com/scl/fi/8wsqqn0mjmr2nfyyn7i5c/IMG_3671-2.JPG?rlkey=f78nohjgnh1ajrp30ktvkezqq&st=ljq1mtde&raw=1" 
                  alt="Nicole - Designer" 
                  className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-700 opacity-90 group-hover:opacity-100 mix-blend-multiply"
                />
              </div>
            </RevealOnScroll>
          </div>
        </Section>
      </div>

      {/* Overview Section */}
      <div className="bg-[#F2ECE4]">
        <Section>
          <RevealOnScroll>
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Project Overview</h2>
            </div>
          </RevealOnScroll>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <RevealOnScroll delay={100} className="bg-white p-12 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#E4DACC] text-[#7A8B73] rounded-2xl flex items-center justify-center mb-6">
                <SunMedium size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">The Vibe</h3>
              <p className="text-[#66625D] leading-relaxed text-lg">
                Soft Morning Studio evokes such a beautiful and special mood, and your photography deserves a visual identity that matches that exact aesthetic.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={200} className="bg-white p-12 rounded-3xl shadow-sm hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-[#fff2e5] text-[#e0a97b] rounded-2xl flex items-center justify-center mb-6">
                <Camera size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">The Goal</h3>
              <p className="text-[#66625D] leading-relaxed text-lg">
                The goal of this project is building a professional and cohesive visual identity that perfectly frames the moments you capture.
              </p>
            </RevealOnScroll>
          </div>
        </Section>
      </div>

      {/* Deliverables Bento Box */}
      <div className="bg-[#2F2B29] text-[#F2ECE4] rounded-[3rem] md:rounded-[4rem] py-12 md:py-0">
        <Section>
          <RevealOnScroll>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-16 text-center">What's Included.</h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[minmax(250px,auto)]">
            
            {/* Item Principal */}
            <RevealOnScroll delay={100} className="md:col-span-2 md:row-span-2 bg-[#4A5445] border border-[#5F6B58] rounded-3xl p-10 md:p-12 flex flex-col justify-between overflow-hidden relative">
              <div className="relative z-10">
                <h3 className="text-3xl font-bold mb-4">The Brand Foundation Pack</h3>
                <p className="text-[#DDE0D8] text-lg max-w-md mb-12">
                  To give Soft Morning Studio a cohesive and premium feel, I will design a complete brand kit that you can use across your social media, client materials, and beyond.
                </p>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="bg-[#5F6B58] p-3 rounded-xl"><PenTool size={24} className="text-[#DDE0D8]"/></div>
                    <div>
                      <h4 className="font-semibold text-lg">Logo Suite</h4>
                      <p className="text-[#DDE0D8]">A beautiful, balanced primary logo that captures the vibe, alongside versatile secondary marks and/or submarks. (Delivered in AI, SVG, PNG).</p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            {/* Sub Item 1 */}
            <RevealOnScroll delay={200} className="bg-[#4A5445] border border-[#5F6B58] rounded-3xl p-8 flex flex-col">
              <div className="bg-[#9BAA93]/20 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Palette size={24} className="text-[#9BAA93]" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Color Palette</h3>
              <p className="text-[#DDE0D8]">A unified color scheme specifically chosen to complement your photography style without overpowering your beautiful images.</p>
            </RevealOnScroll>

            {/* Sub Item 2 */}
            <RevealOnScroll delay={300} className="bg-[#4A5445] border border-[#5F6B58] rounded-3xl p-8 flex flex-col">
              <div className="bg-[#99938B]/20 w-12 h-12 rounded-full flex items-center justify-center mb-6">
                <Type size={24} className="text-[#A2B09A]" />
              </div>
              <h3 className="text-2xl font-bold mb-3">Typography System</h3>
              <p className="text-[#DDE0D8]">A strategic selection of primary and secondary fonts that perfectly complement your brand's aesthetic.</p>
            </RevealOnScroll>

            {/* Sub Item 3 */}
            <RevealOnScroll delay={400} className="md:col-span-3 bg-gradient-to-r from-[#4A5445] to-[#5F6B58] border border-[#7A8572] rounded-3xl p-8 md:p-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="max-w-xl">
                <h3 className="text-2xl font-bold mb-3">Brand Guidelines & Final Files</h3>
                <p className="text-[#DDE0D8]">A clear document outlining how to use your new logos, colors and fonts to ensure visual consistency, plus high-quality, scalable production-ready files (AI/PDF/PNG/SVG).</p>
              </div>
              <div className="bg-[#DED5C9]/20 w-16 h-16 rounded-full flex items-center justify-center shrink-0">
                <BookOpen size={32} className="text-[#DED5C9]" />
              </div>
            </RevealOnScroll>

          </div>
        </Section>
      </div>

      {/* Process & Timeline */}
      <div className="bg-[#F2ECE4]">
        <Section>
          <div className="grid lg:grid-cols-2 gap-16">
            <RevealOnScroll>
              <div className="sticky top-32">
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Process & Timeline</h2>
                <p className="text-xl text-[#66625D] leading-relaxed mb-8">
                  Since we already have a great working rhythm, we can keep this workflow dynamic while making sure we get everything exactly right.
                </p>
                <div className="inline-flex items-center gap-4 bg-white px-8 py-5 rounded-2xl shadow-sm border border-[#DED5C9]">
                  <Calendar className="text-[#7A8B73]" size={28} />
                  <div>
                    <p className="text-sm text-[#66625D] font-medium uppercase tracking-wider">Estimated Completion</p>
                    <p className="font-bold text-xl text-[#2F2B29]">3-4 Weeks</p>
                  </div>
                </div>
                <p className="text-sm text-[#99938B] mt-6 max-w-md">
                  * Next Availability: Upon proposal approval.
                </p>
              </div>
            </RevealOnScroll>

            <div className="space-y-6">
              {[
                { step: "01", title: "Brand Discovery", desc: "You’ll start by filling out a brand questionnaire. This is where you’ll pour out all your thoughts on the Soft Morning Studio vibe, your photography style, and your dream audience." },
                { step: "02", title: "Strategic Creative Kickoff", desc: "Once I review your answers, I’ll dive into the research and we’ll align on a visual direction that feels just right." },
                { step: "03", title: "The Identity Draft", desc: "I’ll bring it all together (logos, colors, and typography), and present them to you as one cohesive brand concept." },
                { step: "04", title: "Refinement", desc: "You tell me what you love and what you want to tweak. I will refine the designs based on your feedback (up to 2 rounds of revisions)." },
                { step: "05", title: "Final Delivery", desc: "Once approved, I organize and send you the brand guidelines and all the final files." }
              ].map((item, idx) => (
                <RevealOnScroll key={item.step} delay={idx * 100}>
                  <div className="bg-white p-8 rounded-3xl shadow-sm flex gap-6 hover:-translate-y-1 transition-transform duration-300 border border-transparent hover:border-[#D4C8BA]">
                    <span className="text-3xl font-bold text-[#DED5C9]">{item.step}</span>
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-[#2F2B29]">{item.title}</h4>
                      <p className="text-[#66625D] leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </Section>
      </div>

      {/* Investment Section */}
      <div className="bg-white border-t border-[#DED5C9]/50">
        <Section>
          <RevealOnScroll>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Investment</h2>
              <p className="text-xl text-[#66625D]">For a complete visual identity kit.</p>
            </div>
          </RevealOnScroll>

          <div className="max-w-4xl mx-auto">
            <RevealOnScroll delay={100}>
              <div className="bg-[#F2ECE4] rounded-[3rem] p-8 md:p-12 flex flex-col lg:flex-row gap-12 items-center border border-[#DED5C9]/50">
                
                {/* Features List */}
                <div className="flex-1 space-y-8 w-full">
                  <h3 className="text-lg font-semibold text-[#99938B] uppercase tracking-widest mb-4">What's Included</h3>
                  
                  <div className="flex gap-4">
                    <CheckCircle2 className="text-[#7A8B73] shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-1 text-[#2F2B29]">The Brand Foundation Pack</h4>
                      <p className="text-[#66625D] text-sm">Primary & Secondary Logos, Brand Colors, and Typography System.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <CheckCircle2 className="text-[#7A8B73] shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-1 text-[#2F2B29]">Strategy & Design Process</h4>
                      <p className="text-[#66625D] text-sm">In-depth discovery, creative research, and presentation.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <CheckCircle2 className="text-[#7A8B73] shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-1 text-[#2F2B29]">Revisions</h4>
                      <p className="text-[#66625D] text-sm">Up to 2 rounds of refinement to ensure everything is perfect.</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <CheckCircle2 className="text-[#7A8B73] shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold text-lg mb-1 text-[#2F2B29]">Guidelines & Files</h4>
                      <p className="text-[#66625D] text-sm">Clear usage guidelines and high-quality files (AI/PDF/PNG/SVG).</p>
                    </div>
                  </div>
                </div>

                {/* Price Tag */}
                <div className="bg-white w-full lg:w-[400px] rounded-3xl p-10 shadow-lg text-center shrink-0 relative overflow-hidden border border-[#DED5C9]/30">
                  <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#9BAA93] to-[#7A8B73]" />
                  <p className="text-[#99938B] font-medium mb-2 uppercase tracking-wide text-sm">Total Investment</p>
                  <div className="text-7xl font-bold tracking-tighter mb-8 text-[#2F2B29]">450€</div>
                  
                  <div className="space-y-4 text-left border-t border-[#DED5C9] pt-8">
                    <div className="flex items-center gap-3 text-sm text-[#66625D]">
                      <CreditCard size={18} className="text-[#99938B]" />
                      <span><strong>50% deposit</strong> to start</span>
                    </div>
                    <div className="flex items-center gap-3 text-sm text-[#66625D]">
                      <CreditCard size={18} className="text-[#99938B]" />
                      <span><strong>50% remaining</strong> upon final delivery</span>
                    </div>
                  </div>
                </div>

              </div>
            </RevealOnScroll>
          </div>
        </Section>
      </div>

      {/* Footer / Outro */}
      <footer className="bg-[#2F2B29] text-[#F2ECE4] py-24 px-6 md:px-12 text-center">
        <RevealOnScroll>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">Thank you!</h2>
            <p className="text-xl text-[#DDE0D8] mb-8 leading-relaxed">
              Thank you so much for taking the time to review this proposal!
            </p>
            <p className="text-lg text-[#DDE0D8] mb-12">
              If this vision feels aligned with you and you're ready to move forward, the next step is simple: give me the green light, and I will send over the invoice and the brand questionnaire to officially kick off the creative process.
              <br /><br />
              <span className="italic text-[#9BAA93]">I can't wait to see your photography framed by this visual identity.</span>
            </p>
            <button className="bg-[#F2ECE4] text-[#2F2B29] px-8 py-4 rounded-full font-bold hover:scale-105 transition-transform duration-300">
              Approve Proposal
            </button>
            
            <div className="mt-24 pt-8 border-t border-[#5F6B58] flex flex-col md:flex-row justify-between items-center gap-4 text-[#DDE0D8] text-sm font-medium">
              <span>Kolle Studio © {new Date().getFullYear()}</span>
              <span>Prepared for Soft Morning Studio</span>
            </div>
          </div>
        </RevealOnScroll>
      </footer>
    </div>
  );
}
