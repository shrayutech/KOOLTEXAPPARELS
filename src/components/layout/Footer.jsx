import React from 'react';
import Link from 'next/link';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUpRight 
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-dark text-white pt-32 pb-12 relative overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-20 mb-24">
          {/* Corporate Branding */}
          <div className="space-y-10">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="w-14 h-14 bg-primary flex items-center justify-center rounded-2xl shadow-2xl transition-transform group-hover:rotate-12">
                <span className="text-white font-black text-2xl">K</span>
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-3xl tracking-tighter uppercase text-white">Kooltex</span>
                <span className="text-[12px] font-black tracking-[0.4em] leading-none text-primary uppercase">Apparels</span>
              </div>
            </Link>
            <p className="text-body text-lg leading-relaxed font-medium">
              India's premier enterprise-scale apparel manufacturer. Delivering precision-engineered uniform solutions to 500+ organizations across India.
            </p>
            <div className="flex gap-4">
              {[
                { icon: Facebook, link: "#" },
                { icon: Instagram, link: "https://www.instagram.com/kooltexapparels/" },
                { icon: Twitter, link: "#" },
                { icon: Linkedin, link: "#" }
              ].map((social, i) => (
                <a
                  key={i}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-white/40 hover:bg-primary hover:text-white transition-all duration-300 shadow-xl"
                >
                  <social.icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-12">Core Navigation</h3>
            <ul className="space-y-6">
              {[
                { name: 'Home', path: '/' },
                { name: 'Explore Products', path: '/explore' },
                { name: 'Corporate Services', path: '/services' },
                { name: 'Our Heritage', path: '/about' },
                { name: 'Contact Hub', path: '/contact' }
              ].map((link) => (
                <li key={link.name}>
                  <Link 
                    href={link.path} 
                    className="text-white/60 hover:text-white transition-all duration-300 flex items-center justify-between group"
                  >
                    <span className="font-bold uppercase tracking-widest text-[11px]">{link.name}</span>
                    <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-12">Manufacturing Units</h3>
            <ul className="space-y-6">
              {[
                'Corporate Apparel', 
                'Educational Uniforms', 
                'Industrial Safety Wear', 
                'Promotional T-Shirts', 
                'Performance Tracksuits', 
                'Technical Aprons'
              ].map((item) => (
                <li key={item}>
                  <Link 
                    href={`/explore/${item.toLowerCase().replace(/\s+/g, '-')}`} 
                    className="text-white/60 hover:text-white transition-all duration-300 flex items-center justify-between group"
                  >
                    <span className="font-bold uppercase tracking-widest text-[11px]">{item}</span>
                    <div className="w-1.5 h-1.5 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-xs font-black uppercase tracking-[0.3em] text-primary mb-12">HQ Contact</h3>
            <ul className="space-y-10">
              <li className="flex gap-5">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary shrink-0">
                  <MapPin size={22} />
                </div>
                <span className="text-white/60 text-sm leading-relaxed font-medium">
                  Gat No. 97, Bidkin-Shendra Road,<br /> 
                  Bidkin – 431105 Dist. Chh. Sambhajinagar,<br />
                  Maharashtra, India
                </span>
              </li>
              <li className="flex gap-5">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary shrink-0">
                  <Phone size={22} />
                </div>
                <div className="flex flex-col text-white/60 text-sm font-medium">
                  <span className="font-black text-white text-xl tracking-tighter">+91 86984 67777</span>
                  <span>+91 78750 01777</span>
                </div>
              </li>
              <li className="flex gap-5">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primary shrink-0">
                  <Mail size={22} />
                </div>
                <span className="text-white/60 text-sm font-medium pt-3">kooltexapparels@gmail.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Global Footer Bottom */}
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-10">
          <p className="text-white/20 text-[10px] font-black uppercase tracking-[0.3em]">
            © {currentYear} KOOLTEX APPARELS. Strategic Enterprise Manufacturing.
          </p>
          <div className="flex gap-10 text-white/20 text-[10px] font-black uppercase tracking-[0.3em]">
            <Link href="#" className="hover:text-white transition-colors">Privacy Shield</Link>
            <Link href="#" className="hover:text-white transition-colors">Strategic Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
