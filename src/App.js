import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Camera, 
  SunMedium, 
  PenTool, 
  Type, 
  BookOpen, 
  Palette, 
  CheckCircle2, 
  Calendar,
  CreditCard,
  Layout,
  MousePointer2,
  Sparkles,
  FileText,
  Shapes
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
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => { if (ref.current) observer.unobserve(ref.current); };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-1000 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
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

const FileBox = ({ files }) => (
  <div className="mt-4 flex flex-wrap gap-2">
    {files.map((file, i) => (
      <span key={i} className="px-2 py-1 bg-white/30 border border-white/20 rounded text-[10px] font-bold tracking-wider uppercase">
        {file}
      </span>
    ))}
  </div>
);

// --- Aplicação Principal ---

export default function App() {
  // Paleta: #eea8ce (Rosa), #606c5a (Verde), #fdfaf9 (Off-white)

  const handleApprove = (e) => {
    e.preventDefault();
    const email = "geral@kollestudio.com";
    const subject = encodeURIComponent("Aprovação de Proposta - Soft Morning Studio");
    const body = encodeURIComponent("Olá Nicole,\n\nAceito a proposta para a identidade visual do Soft Morning Studio. Vamos começar!\n\nFico a aguardar o questionário de marca e a fatura para darmos o próximo passo.");
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  };

  return (
    <div className="bg-[#fdfaf9] min-h-screen text-[#606c5a] font-sans selection:bg-[#eea8ce] selection:text-white">
      
      {/* Navegação */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#fdfaf9]/90 backdrop-blur-md border-b border-[#eea8ce]/20">
        <div className="max-w-7xl mx-auto px-6 py-5 flex justify-between items-center">
          <span className="text-[10px] font-bold tracking-[0.3em] text-[#a7ad9b] uppercase">KOLLE STUDIO</span>
          <div className="flex items-center gap-6">
            <div className="hidden md:flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#eea8ce]"></div>
              <span className="text-[10px] text-[#a7ad9b] font-bold tracking-[0.3em] uppercase">SOFT MORNING STUDIO</span>
            </div>
            <a 
              href="#" 
              onClick={handleApprove}
              className="bg-[#eea8ce] text-white px-5 py-2 rounded-full text-[10px] font-bold tracking-widest uppercase hover:opacity-90 transition-opacity"
            >
              Approve
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-20 md:pt-52 md:pb-32 px-6 flex flex-col items-center justify-center text-center min-h-[85vh] relative overflow-hidden">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-[#eea8ce]/10 rounded-full blur-[120px]"></div>
        <div className="absolute -bottom-10 -left-20 w-80 h-80 bg-[#8a917a]/10 rounded-full blur-[100px]"></div>
        
        <RevealOnScroll>
          <span className="text-[10px] font-bold tracking-[0.4em] text-[#eea8ce] uppercase mb-8 block text-center">
            Visual Identity Proposal
          </span>
        </RevealOnScroll>
        <RevealOnScroll delay={100}>
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-light tracking-tighter leading-[1.05] mb-10 text-[#606c5a]">
            Soft Morning <br />
            <span className="italic font-serif text-[#eea8ce]">Studio.</span>
          </h1>
        </RevealOnScroll>
        <RevealOnScroll delay={200}>
          <p className="text-lg md:text-xl text-[#8a917a] max-w-xl mx-auto mb-14 font-light leading-relaxed">
            Crafting a visual narrative that perfectly frames the moments you capture.
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={300}>
          <a href="#overview" className="inline-flex items-center gap-3 bg-[#606c5a] text-[#fdfaf9] px-10 py-5 rounded-full text-sm font-medium hover:bg-[#eea8ce] transition-all duration-500 shadow-sm">
            View the Proposal <ArrowRight size={16} />
          </a>
        </RevealOnScroll>
      </section>

      {/* Meet the Designer */}
      <div id="designer" className="bg-white rounded-t-[4rem] shadow-[0_-10px_40px_rgba(0,0,0,0.02)] relative z-10 border-t border-[#eea8ce]/10">
        <Section>
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div className="order-2 md:order-1">
              <RevealOnScroll>
                <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-8 text-[#606c5a]">Meet Your Designer.</h2>
              </RevealOnScroll>
              <RevealOnScroll delay={100}>
                <div className="space-y-6 text-lg text-[#8a917a] font-light leading-relaxed text-left">
                  <p>
                    Hi! It is so good to hear from you again. I absolutely loved working with you. Since you already know me (and how things work around here), let’s skip the formalities and get straight to business!
                  </p>
                  <p className="text-[#606c5a] font-normal italic">
                    I am beyond honored that you thought of me for your personal brand, and I’m incredibly excited to help bring Soft Morning Studio to life.
                  </p>
                </div>
              </RevealOnScroll>
            </div>

            <RevealOnScroll className="order-1 md:order-2" delay={200}>
              <div className="aspect-[4/5] bg-[#fdfaf9] rounded-3xl overflow-hidden relative shadow-sm border border-[#eea8ce]/20 group">
                <img 
                  src="https://www.dropbox.com/scl/fi/8wsqqn0mjmr2nfyyn7i5c/IMG_3671-2.JPG?rlkey=f78nohjgnh1ajrp30ktvkezqq&st=ljq1mtde&raw=1" 
                  alt="Nicole" 
                  className="w-full h-full object-cover filter contrast-[0.98] group-hover:scale-105 transition-transform duration-1000"
                />
                <div className="absolute inset-0 bg-[#8a917a]/5 mix-blend-multiply"></div>
              </div>
            </RevealOnScroll>
          </div>
        </Section>
      </div>

      {/* Project Overview - Impactful Update */}
      <div id="overview" className="bg-[#fdfaf9]">
        <Section>
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <RevealOnScroll>
              <h2 className="text-4xl md:text-6xl font-light tracking-tighter text-[#606c5a] mb-6">
                Project <br /><span className="italic font-serif text-[#eea8ce]">Overview.</span>
              </h2>
              <div className="h-1 w-20 bg-[#eea8ce] mb-8"></div>
              <p className="text-xl text-[#8a917a] font-light leading-relaxed text-left">
                Soft Morning Studio evokes such a beautiful and special mood, and your photography deserves a visual identity that matches that exact aesthetic.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={200} className="bg-white p-10 md:p-14 rounded-[3rem] border border-[#eea8ce]/10 shadow-sm relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#eea8ce]/5 rounded-full blur-3xl"></div>
              <div className="relative z-10 space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="bg-[#eea8ce]/10 p-4 rounded-2xl text-[#eea8ce]">
                    <SunMedium size={32} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#606c5a] mb-2">The Aesthetic</h4>
                    <p className="text-[#8a917a] text-sm leading-relaxed">Capturing the warm, airy, and intentional light that defines your work.</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <div className="bg-[#606c5a]/5 p-4 rounded-2xl text-[#606c5a]">
                    <Camera size={32} />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-[#606c5a] mb-2">The Goal</h4>
                    <p className="text-[#8a917a] text-sm leading-relaxed text-left">Building a professional and cohesive visual identity that perfectly frames the moments you capture.</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </Section>
      </div>

      {/* What's Included */}
      <div className="bg-[#606c5a] text-[#fdfaf9] rounded-[4rem]">
        <Section>
          <RevealOnScroll className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-light tracking-tight">What’s Included.</h2>
            <p className="text-[#dfe3d5]/70 mt-6 font-light">The complete Brand Foundation Pack to give Soft Morning Studio a premium feel.</p>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Logo Suite - Now its own primary card */}
            <RevealOnScroll delay={100} className="lg:col-span-2 bg-[#737a67] rounded-[2.5rem] p-12 border border-[#89917d] relative overflow-hidden group flex flex-col justify-between h-full">
              <div>
                <span className="text-[10px] font-bold tracking-[0.3em] text-[#eea8ce] uppercase mb-6 block">Foundation</span>
                <h3 className="text-3xl font-light mb-6 flex items-center gap-4">
                  <Shapes className="text-[#eea8ce]" /> Logo Suite
                </h3>
                <p className="text-[#dfe3d5] text-lg max-w-lg leading-relaxed font-light mb-8">
                  Designing a beautiful, balanced primary logo that captures the "Soft Morning" vibe, alongside versatile secondary marks and/or submarks.
                </p>
              </div>
              <div>
                <h5 className="text-[10px] font-bold text-[#eea8ce] uppercase tracking-widest mb-3">Files Delivered:</h5>
                <FileBox files={["AI (Vector)", "SVG", "PNG (Transparent)"]} />
              </div>
            </RevealOnScroll>

            {/* Color Palette */}
            <RevealOnScroll delay={200} className="bg-[#737a67] rounded-[2.5rem] p-10 border border-[#89917d] flex flex-col justify-between h-full">
              <div>
                <Palette size={32} className="text-[#eea8ce] mb-8" strokeWidth={1.5} />
                <h3 className="text-2xl font-light mb-4">Color Palette</h3>
                <p className="text-[#dfe3d5] font-light leading-relaxed mb-8">
                  A unified color scheme specifically chosen to complement your photography style without overpowering your images.
                </p>
              </div>
              <div>
                <h5 className="text-[10px] font-bold text-[#eea8ce] uppercase tracking-widest mb-3">Files Delivered:</h5>
                <FileBox files={["HEX (Web)", "RGB", "CMYK"]} />
              </div>
            </RevealOnScroll>

            {/* Typography */}
            <RevealOnScroll delay={300} className="bg-[#737a67] rounded-[2.5rem] p-10 border border-[#89917d] flex flex-col justify-between h-full">
              <div>
                <Type size={32} className="text-[#eea8ce] mb-8" strokeWidth={1.5} />
                <h3 className="text-2xl font-light mb-4 text-left">Typography System</h3>
                <p className="text-[#dfe3d5] font-light leading-relaxed mb-8 text-left">
                  A strategic selection of primary and secondary fonts that perfectly complement your brand's aesthetic.
                </p>
              </div>
              <div>
                <h5 className="text-[10px] font-bold text-[#eea8ce] uppercase tracking-widest mb-3">Files Delivered:</h5>
                <FileBox files={[".OTF", ".TTF", "Web Links"]} />
              </div>
            </RevealOnScroll>

            {/* Brand Guidelines */}
            <RevealOnScroll delay={400} className="bg-[#737a67] rounded-[2.5rem] p-10 border border-[#89917d] flex flex-col justify-between h-full">
              <div>
                <BookOpen size={32} className="text-[#eea8ce] mb-8" strokeWidth={1.5} />
                <h3 className="text-2xl font-light mb-4">Brand Guidelines</h3>
                <p className="text-[#dfe3d5] font-light leading-relaxed mb-8">
                  A clear document outlining how to use your new logos, colors and fonts to ensure visual consistency.
                </p>
              </div>
              <div>
                <h5 className="text-[10px] font-bold text-[#eea8ce] uppercase tracking-widest mb-3 text-left">Format:</h5>
                <FileBox files={["Interactive PDF"]} />
              </div>
            </RevealOnScroll>

            {/* Production Ready Files */}
            <RevealOnScroll delay={500} className="bg-[#737a67] rounded-[2.5rem] p-10 border border-[#89917d] flex flex-col justify-between h-full">
              <div>
                <FileText size={32} className="text-[#eea8ce] mb-8" strokeWidth={1.5} />
                <h3 className="text-2xl font-light mb-4 text-left">Production-Ready Files</h3>
                <p className="text-[#dfe3d5] font-light leading-relaxed mb-8 text-left">
                  High-quality, scalable files ready for any touchpoint, from social media to high-end print materials.
                </p>
              </div>
              <div>
                <h5 className="text-[10px] font-bold text-[#eea8ce] uppercase tracking-widest mb-3">Files Delivered:</h5>
                <FileBox files={["AI", "PDF", "PNG", "SVG"]} />
              </div>
            </RevealOnScroll>

          </div>
        </Section>
      </div>

      {/* Process & Timeline */}
      <div className="bg-[#fdfaf9]">
        <Section>
          <div className="grid lg:grid-cols-2 gap-20">
            <RevealOnScroll>
              <div className="sticky top-32">
                <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-8 text-[#606c5a]">Process & <br /><span className="italic font-serif text-[#eea8ce]">Timeline.</span></h2>
                <p className="text-lg text-[#8a917a] font-light leading-relaxed mb-10 text-left">
                  Since we already have a great working rhythm, we can keep this workflow dynamic while making sure we get everything exactly right.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-[#eea8ce]/10 shadow-sm">
                    <Calendar className="text-[#eea8ce]" size={24} />
                    <div>
                      <p className="text-xs text-[#a7ad9b] font-bold uppercase tracking-widest">Estimates Completion</p>
                      <p className="font-medium text-[#606c5a]">3-4 weeks</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 bg-white p-6 rounded-2xl border border-[#eea8ce]/10 shadow-sm">
                    <MousePointer2 className="text-[#eea8ce]" size={24} />
                    <div>
                      <p className="text-xs text-[#a7ad9b] font-bold uppercase tracking-widest">Next Availability</p>
                      <p className="font-medium text-[#606c5a]">Upon proposal approval</p>
                    </div>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <div className="space-y-4">
              {[
                { step: "01", title: "Brand Discovery", desc: "You’ll start by filling out a brand questionnaire to share all your thoughts on the vibe, style, and dream audience." },
                { step: "02", title: "Strategic Creative Kickoff", desc: "I’ll research and we’ll align on a visual direction that feels just right." },
                { step: "03", title: "The Identity Draft", desc: "I’ll bring it all together and present the logos, colors, and typography as one cohesive brand concept." },
                { step: "04", title: "Refinement", desc: "Tweak what you need. Includes up to 2 rounds of revisions based on your feedback." },
                { step: "05", title: "Final Delivery", desc: "Once approved, I organize and send you the brand guidelines and all the final files." }
              ].map((item, idx) => (
                <RevealOnScroll key={idx} delay={idx * 100} className="bg-white p-8 rounded-3xl border border-[#eea8ce]/5 shadow-sm">
                  <div className="flex gap-6 items-start">
                    <span className="text-2xl font-serif italic text-[#eea8ce]">{item.step}</span>
                    <div className="text-left">
                      <h4 className="text-xl font-bold text-[#606c5a] mb-2">{item.title}</h4>
                      <p className="text-[#8a917a] font-light leading-relaxed text-sm">{item.desc}</p>
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </Section>
      </div>

      {/* Investment Section */}
      <div className="bg-white border-t border-[#eea8ce]/10">
        <Section>
          <RevealOnScroll className="text-center mb-16">
            <h2 className="text-4xl font-light tracking-tight mb-4 text-[#606c5a]">Investment</h2>
            <p className="text-[#8a917a] font-light italic">For a complete visual identity kit.</p>
          </RevealOnScroll>

          <div className="max-w-4xl mx-auto">
            <RevealOnScroll>
              <div className="bg-[#fdfaf9] rounded-[3.5rem] p-12 md:p-20 border border-[#eea8ce]/30 relative overflow-hidden text-center md:text-left">
                <div className="absolute top-0 left-0 w-full h-2 bg-[#eea8ce]"></div>
                
                <div className="flex flex-col md:flex-row justify-between items-center gap-16">
                  <div className="space-y-6 flex-1 text-left">
                    <h4 className="text-[10px] font-bold tracking-[0.3em] text-[#eea8ce] uppercase mb-4">Total Investment</h4>
                    <div className="text-7xl font-light tracking-tighter text-[#606c5a] mb-8">450€</div>
                    
                    <div className="space-y-4 pt-4 border-t border-[#eea8ce]/20">
                      <div className="flex items-center gap-4 text-[#8a917a] font-light">
                        <CreditCard size={18} className="text-[#eea8ce]" />
                        <span><strong>50% deposit</strong> to start</span>
                      </div>
                      <div className="flex items-center gap-4 text-[#8a917a] font-light text-left">
                        <CreditCard size={18} className="text-[#eea8ce]" />
                        <span><strong>50% remaining</strong> upon final delivery</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-8 rounded-[2.5rem] border border-[#eea8ce]/20 shadow-sm w-full md:w-72">
                    <h5 className="text-sm font-bold mb-4 text-[#606c5a] text-left">Includes</h5>
                    <ul className="space-y-3 text-xs text-[#8a917a] font-medium uppercase tracking-wider text-left">
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#eea8ce]"></div> Logo Suite</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#eea8ce]"></div> Color Palette</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#eea8ce]"></div> Typography</li>
                      <li className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#eea8ce]"></div> Guidelines</li>
                    </ul>
                  </div>
                </div>
              </div>
            </RevealOnScroll>
          </div>
        </Section>
      </div>

      {/* Thank You Section */}
      <footer className="bg-[#606c5a] text-[#fdfaf9] py-32 px-6 text-center relative overflow-hidden">
        <RevealOnScroll>
          <div className="max-w-2xl mx-auto relative z-10">
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-10 leading-tight">Thank you!</h2>
            <div className="space-y-8 text-[#dfe3d5] font-light leading-relaxed mb-14 text-lg">
              <p>Thank you so much for taking the time to review this proposal!</p>
              <p>
                If this vision feels aligned with your and you're ready to move forward, the next step is simple: 
                give me the green light, and I will send over the invoice and the brand questionnaire to officially kick off the creative process.
              </p>
              <p className="italic font-serif text-[#eea8ce] text-xl">
                I can't wait to see your photography framed by this visual identity.
              </p>
            </div>
            
            <button 
              onClick={handleApprove}
              className="bg-[#fdfaf9] text-[#606c5a] px-12 py-5 rounded-full font-bold text-sm tracking-widest uppercase hover:bg-[#eea8ce] hover:text-white transition-all duration-300 shadow-xl"
            >
              Approve Proposal
            </button>
            
            <div className="mt-24 text-[10px] tracking-[0.4em] text-[#a7ad9b] uppercase">
              KOLLE STUDIO × SOFT MORNING STUDIO
            </div>
          </div>
        </RevealOnScroll>
      </footer>
    </div>
  );
}
