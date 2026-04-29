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
  MousePointer2
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

// --- Aplicação Principal ---

export default function App() {
  // Paleta Atualizada: 
  // Rosa Cliente: #eea8ce
  // Verde Musgo Leve (Texto/Destaque): #606c5a
  // Verde Musgo Suave (Secundário): #8a917a
  // Fundo: #fdfaf9 (Creamy Off-white)

  // Função para abrir o email de aprovação
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
          <span className="text-[10px] font-bold tracking-[0.4em] text-[#eea8ce] uppercase mb-8 block">
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
          <a href="#designer" className="inline-flex items-center gap-3 bg-[#606c5a] text-[#fdfaf9] px-10 py-5 rounded-full text-sm font-medium hover:bg-[#eea8ce] transition-all duration-500 shadow-sm">
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
                <div className="space-y-6 text-lg text-[#8a917a] font-light leading-relaxed">
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

      {/* Project Overview */}
      <div className="bg-[#fdfaf9]">
        <Section>
          <RevealOnScroll className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-8 text-[#606c5a]">Project Overview</h2>
            <p className="text-xl text-[#8a917a] leading-relaxed font-light">
              Soft Morning Studio evokes such a beautiful and special mood, and your photography deserves a visual identity that matches that exact aesthetic. The goal of this project is building a professional and cohesive visual identity that perfectly frames the moments you capture.
            </p>
          </RevealOnScroll>
        </Section>
      </div>

      {/* What's Included - Bento Box Style */}
      <div className="bg-[#606c5a] text-[#fdfaf9] rounded-[4rem]">
        <Section>
          <RevealOnScroll className="text-center mb-24">
            <h2 className="text-4xl md:text-6xl font-light tracking-tight">What’s Included.</h2>
          </RevealOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <RevealOnScroll delay={100} className="md:col-span-2 bg-[#737a67] rounded-[2.5rem] p-12 border border-[#89917d] relative overflow-hidden group">
              <div className="relative z-10">
                <span className="text-[10px] font-bold tracking-[0.3em] text-[#eea8ce] uppercase mb-6 block">Premium Kit</span>
                <h3 className="text-3xl font-light mb-6">The Brand Foundation Pack</h3>
                <p className="text-[#dfe3d5] text-lg max-w-md leading-relaxed font-light mb-10">
                  To give Soft Morning Studio a cohesive and premium feel, I will design a complete brand kit that you can use across your social media, client materials, and beyond.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <h4 className="font-bold text-[#eea8ce]">Logo Suite</h4>
                    <p className="text-sm text-[#dfe3d5]/80">Designing a primary logo that captures the vibe, alongside secondary marks. Delivered in AI, SVG and PNG.</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="font-bold text-[#eea8ce]">Production Files</h4>
                    <p className="text-sm text-[#dfe3d5]/80">High-quality, scalable files (AI / PDF / PNG / SVG).</p>
                  </div>
                </div>
              </div>
            </RevealOnScroll>

            <RevealOnScroll delay={200} className="bg-[#737a67] rounded-[2.5rem] p-10 border border-[#89917d] flex flex-col justify-center">
              <Palette size={32} className="text-[#eea8ce] mb-8" strokeWidth={1.5} />
              <h3 className="text-2xl font-light mb-4">Color Palette</h3>
              <p className="text-[#dfe3d5] font-light leading-relaxed">
                A unified color scheme chosen to complement your style. Delivered in HEX, RGB and CMYK codes.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={300} className="bg-[#737a67] rounded-[2.5rem] p-10 border border-[#89917d] flex flex-col justify-center">
              <Type size={32} className="text-[#eea8ce] mb-8" strokeWidth={1.5} />
              <h3 className="text-2xl font-light mb-4">Typography System</h3>
              <p className="text-[#dfe3d5] font-light leading-relaxed">
                Strategic selection of fonts. Delivered in .otf/.ttf files or direct licensing links.
              </p>
            </RevealOnScroll>

            <RevealOnScroll delay={400} className="md:col-span-2 bg-[#737a67] rounded-[2.5rem] p-12 border border-[#89917d] flex items-center justify-between gap-8">
              <div className="max-w-md">
                <h3 className="text-2xl font-light mb-4">Brand Guidelines</h3>
                <p className="text-[#dfe3d5] font-light">
                  A clear document outlining how to use your new logos, colors and fonts to ensure visual consistency across all touchpoints.
                </p>
              </div>
              <BookOpen size={48} className="text-[#eea8ce] opacity-30 shrink-0" strokeWidth={1} />
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
                <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-8 text-[#606c5a]">Process & <br /><span className="italic font-serif">Timeline.</span></h2>
                <p className="text-lg text-[#8a917a] font-light leading-relaxed mb-10">
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
                    <div>
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
                  <div className="space-y-6 flex-1">
                    <h4 className="text-[10px] font-bold tracking-[0.3em] text-[#eea8ce] uppercase mb-4">Total Investment</h4>
                    <div className="text-7xl font-light tracking-tighter text-[#606c5a] mb-8">450€</div>
                    
                    <div className="space-y-4 pt-4 border-t border-[#eea8ce]/20">
                      <div className="flex items-center gap-4 text-[#8a917a] font-light">
                        <CreditCard size={18} className="text-[#eea8ce]" />
                        <span><strong>50% deposit</strong> to start</span>
                      </div>
                      <div className="flex items-center gap-4 text-[#8a917a] font-light">
                        <CreditCard size={18} className="text-[#eea8ce]" />
                        <span><strong>50% remaining</strong> upon final delivery</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white p-8 rounded-[2.5rem] border border-[#eea8ce]/20 shadow-sm w-full md:w-72">
                    <h5 className="text-sm font-bold mb-4 text-[#606c5a]">Includes</h5>
                    <ul className="space-y-3 text-xs text-[#8a917a] font-medium uppercase tracking-wider">
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
