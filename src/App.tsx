import React, { useState, useEffect } from 'react';
import { 
  Sprout, 
  Cpu, 
  Globe, 
  BarChart3, 
  ShieldCheck, 
  Zap, 
  Users, 
  ArrowRight, 
  CheckCircle2, 
  Leaf, 
  Bot, 
  LineChart,
  Truck,
  ShoppingCart,
  Search,
  Menu,
  X,
  ChevronRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

const AI_EMPLOYEES = [
  {
    id: 'agronomist',
    name: 'The Agronomist',
    goal: 'Maximize Crop Yield',
    desc: 'Predictive disease modeling, nutrient scheduling, and autonomous irrigation triggers.',
    tools: ['YOLOv10 Vision', 'ISRO Bhuvan Satellite', 'WeatherStack'],
    icon: Sprout
  },
  {
    id: 'merchant',
    name: 'The Merchant',
    goal: 'Optimize Retail Supply',
    desc: 'Automated procurement and inventory management for the retail ecosystem.',
    tools: ['Demand Forecasting LSTMs', 'ERP Connectors', 'Shopify API'],
    icon: ShoppingCart
  },
  {
    id: 'dispatcher',
    name: 'The Dispatcher',
    goal: 'Manage Mechanization',
    desc: 'Autonomous scheduling for 10k+ drones and tractors across the fleet.',
    tools: ['Google Maps Fleet API', 'IoT Telemetry', 'Stripe'],
    icon: Cpu
  },
  {
    id: 'auditor',
    name: 'The Auditor',
    goal: 'Carbon Verification',
    desc: 'Quantifying carbon sequestration via satellite temporal analysis and LVMs.',
    tools: ['Sentinel-2 Data', 'Carbon Sequestration Models'],
    icon: ShieldCheck
  },
  {
    id: 'broker',
    name: 'The Broker',
    goal: 'Trade Optimization',
    desc: 'Connecting farmers to global buyers with real-time price hedging.',
    tools: ['Commodity Market APIs', 'WhatsApp Business API'],
    icon: LineChart
  },
  {
    id: 'navigator',
    name: 'The Navigator',
    goal: 'Logistics & Delivery',
    desc: 'Managing mid-mile and last-mile delivery of agricultural inputs.',
    tools: ['ShipRocket API', 'VRP Optimization Algos'],
    icon: Truck
  }
];

const METRICS = [
  { label: 'Valuation', value: '$1B+', sub: 'Unicorn Status' },
  { label: 'Farmers Served', value: '1M+', sub: 'Active Ecosystem' },
  { label: 'Acres Impacted', value: '700k+', sub: 'Verified Coverage' },
  { label: 'Yield Increase', value: '25-35%', sub: 'Avg. Improvement' }
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen font-sans selection:bg-brand-lime selection:text-brand-green">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-lg border-b border-slate-200 py-3' : 'bg-transparent py-5'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-green rounded-xl flex items-center justify-center">
              <Leaf className="text-brand-lime w-6 h-6" />
            </div>
            <span className={`text-2xl font-bold tracking-tight ${scrolled ? 'text-brand-green' : 'text-brand-green'}`}>
              MW.AI <span className="text-brand-lime">Farming</span>
            </span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['Platform', 'AI Workforce', 'Sustainability', 'Enterprise'].map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(' ', '-')}`} className="text-sm font-medium text-slate-600 hover:text-brand-green transition-colors">
                {item}
              </a>
            ))}
            <button className="bg-brand-green text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-brand-green/90 transition-all shadow-lg shadow-brand-green/20">
              Request Demo
            </button>
          </div>

          <button className="md:hidden text-brand-green" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {['Platform', 'AI Workforce', 'Sustainability', 'Enterprise'].map((item) => (
                <a key={item} href="#" className="text-2xl font-bold text-brand-green" onClick={() => setIsMenuOpen(false)}>
                  {item}
                </a>
              ))}
              <button className="bg-brand-green text-white w-full py-4 rounded-2xl text-lg font-bold">
                Request Demo
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden hero-gradient">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="max-w-3xl">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-brand-lime/10 border border-brand-lime/20 text-brand-green px-4 py-1.5 rounded-full text-sm font-bold mb-6"
            >
              <Zap className="w-4 h-4 fill-brand-lime" />
              The World's First AI-Native Agricultural OS
            </motion.div>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl lg:text-7xl font-bold text-brand-green leading-[1.1] mb-8"
            >
              Autonomous Farming <br />
              <span className="text-brand-lime">at Billion-Scale.</span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-slate-600 leading-relaxed mb-10 max-w-2xl"
            >
              MW.AI Farming replaces human-heavy operations with a multi-agent AI workforce. 
              Delivering 35% higher yields and 30% lower input costs for the next generation of agribusiness.
            </motion.p>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <button className="bg-brand-green text-white px-8 py-4 rounded-2xl text-lg font-bold hover:scale-[1.02] transition-transform flex items-center justify-center gap-2 shadow-xl shadow-brand-green/20">
                Deploy AI Workforce <ArrowRight className="w-5 h-5" />
              </button>
              <button className="bg-white text-brand-green border border-slate-200 px-8 py-4 rounded-2xl text-lg font-bold hover:bg-slate-50 transition-colors">
                View Case Studies
              </button>
            </motion.div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path d="M0,50 Q25,0 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-brand-green" />
            <path d="M0,60 Q25,10 50,60 T100,60" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-brand-lime" />
          </svg>
        </div>
      </section>

      {/* Metrics Section */}
      <section className="py-20 bg-brand-green text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {METRICS.map((metric, idx) => (
              <motion.div 
                key={metric.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl lg:text-6xl font-bold text-brand-lime mb-2">{metric.value}</div>
                <div className="text-lg font-semibold mb-1">{metric.label}</div>
                <div className="text-sm text-white/60">{metric.sub}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Workforce Section */}
      <section id="ai-workforce" className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-brand-lime font-bold tracking-widest uppercase text-sm mb-4">The Multi-Agent Workforce</h2>
            <h3 className="text-4xl lg:text-5xl font-bold text-brand-green mb-6">Meet Your Autonomous AI Employees.</h3>
            <p className="text-lg text-slate-600">
              Our agents don't just suggest actions—they execute them. From satellite-driven agronomy to automated commodity trading, 
              MW.AI manages the entire farm-to-fork lifecycle.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {AI_EMPLOYEES.map((agent, idx) => (
              <motion.div 
                key={agent.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="group p-8 rounded-3xl border border-slate-100 hover:border-brand-lime/30 hover:shadow-2xl hover:shadow-brand-lime/10 transition-all bg-slate-50/50"
              >
                <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm mb-6 group-hover:scale-110 transition-transform">
                  <agent.icon className="text-brand-green w-7 h-7" />
                </div>
                <h4 className="text-2xl font-bold text-brand-green mb-2">{agent.name}</h4>
                <div className="text-brand-lime font-bold text-xs uppercase tracking-wider mb-4">Goal: {agent.goal}</div>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  {agent.desc}
                </p>
                <div className="pt-6 border-t border-slate-200">
                  <div className="text-xs font-bold text-slate-400 uppercase mb-3">Core Stack</div>
                  <div className="flex flex-wrap gap-2">
                    {agent.tools.map(tool => (
                      <span key={tool} className="text-[10px] font-bold bg-white border border-slate-200 text-slate-600 px-2 py-1 rounded-md">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator Section */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-brand-green mb-8 leading-tight">
                Enterprise-Grade ROI. <br />
                <span className="text-brand-lime">Guaranteed.</span>
              </h2>
              <p className="text-lg text-slate-600 mb-10">
                We don't sell software; we sell outcomes. Our B2B partners see a 3.5x return on investment within the first 12 months 
                by eliminating human operational leakage and maximizing input efficiency.
              </p>
              <ul className="space-y-4">
                {[
                  '100% reduction in field officer overhead',
                  '30% reduction in input waste (precision AI)',
                  '25% average yield revenue increase',
                  '200% increase in carbon credit verification speed'
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-700 font-medium">
                    <CheckCircle2 className="text-brand-lime w-5 h-5 flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="glass-card rounded-[2rem] overflow-hidden">
              <div className="bg-brand-green p-8 text-white">
                <h4 className="text-xl font-bold">12-Month Impact Analysis</h4>
                <p className="text-white/60 text-sm">Based on 10,000 Acre Deployment</p>
              </div>
              <div className="p-8">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-xs font-bold text-slate-400 uppercase border-b border-slate-100">
                      <th className="pb-4">Category</th>
                      <th className="pb-4">Legacy Ops</th>
                      <th className="pb-4 text-brand-green">MW.AI Ops</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr className="border-b border-slate-50">
                      <td className="py-4 font-medium">Field Salaries</td>
                      <td className="py-4 text-slate-500">$450k</td>
                      <td className="py-4 font-bold text-brand-green">$0</td>
                    </tr>
                    <tr className="border-b border-slate-50">
                      <td className="py-4 font-medium">Input Waste</td>
                      <td className="py-4 text-slate-500">$1.2M</td>
                      <td className="py-4 font-bold text-brand-green">$840k</td>
                    </tr>
                    <tr className="border-b border-slate-50">
                      <td className="py-4 font-medium">Yield Revenue</td>
                      <td className="py-4 text-slate-500">$8.5M</td>
                      <td className="py-4 font-bold text-brand-green">$10.6M</td>
                    </tr>
                    <tr>
                      <td className="py-6 font-bold text-lg">Net Gain</td>
                      <td className="py-6"></td>
                      <td className="py-6 font-bold text-brand-lime text-xl">+$2.6M</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sustainability Section */}
      <section id="sustainability" className="py-32 bg-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="bg-brand-green rounded-[3rem] p-12 lg:p-24 text-white relative overflow-hidden">
            <div className="max-w-2xl relative z-10">
              <div className="flex items-center gap-2 text-brand-lime font-bold mb-6">
                <Globe className="w-6 h-6" />
                <span>Verifiable Carbon Credits</span>
              </div>
              <h2 className="text-4xl lg:text-6xl font-bold mb-8 leading-tight">
                Turning Sustainability <br /> into a <span className="text-brand-lime">Liquid Asset.</span>
              </h2>
              <p className="text-xl text-white/70 mb-12 leading-relaxed">
                Our "Auditor" agent uses temporal satellite analysis to verify regenerative practices with 98% precision. 
                We automate the entire MRV process, tokenizing carbon credits in real-time for global markets.
              </p>
              <button className="bg-brand-lime text-brand-green px-10 py-4 rounded-2xl text-lg font-bold hover:scale-105 transition-transform">
                Explore Carbon Platform
              </button>
            </div>
            
            {/* Abstract Earth Graphic */}
            <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-[600px] h-[600px] bg-brand-lime/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute -bottom-20 -right-20 w-[400px] h-[400px] border border-brand-lime/20 rounded-full pointer-events-none" />
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-32 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h3 className="text-4xl font-bold text-brand-green">Trusted by Global Leaders.</h3>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "MW.AI replaced our 500-person field advisory team with a single agentic cluster. Yields are up 22% and our operational overhead dropped by 60%.",
                author: "Director of Operations",
                org: "Maharashtra Cotton Federation"
              },
              {
                quote: "The precision of their Carbon Auditor is unmatched. We finally have a verifiable way to claim carbon neutrality across our entire supply chain.",
                author: "Chief Sustainability Officer",
                org: "Global Agri-Input Corp"
              }
            ].map((t, idx) => (
              <div key={idx} className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100">
                <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map(i => <Zap key={i} className="w-4 h-4 text-brand-lime fill-brand-lime" />)}
                </div>
                <p className="text-xl text-slate-700 italic mb-8 leading-relaxed">"{t.quote}"</p>
                <div>
                  <div className="font-bold text-brand-green">{t.author}</div>
                  <div className="text-slate-500 text-sm">{t.org}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-brand-green pt-24 pb-12 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-16 mb-20">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-8">
                <Leaf className="text-brand-lime w-8 h-8" />
                <span className="text-3xl font-bold">MW.AI <span className="text-brand-lime">Farming</span></span>
              </div>
              <p className="text-white/60 text-lg max-w-md mb-8 leading-relaxed">
                The world's most advanced multi-agent AI platform for sustainable, autonomous agriculture. 
                HQ: Bengaluru, India.
              </p>
              <div className="flex gap-4">
                {['Twitter', 'LinkedIn', 'GitHub'].map(s => (
                  <a key={s} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-lime hover:text-brand-green transition-all">
                    <span className="sr-only">{s}</span>
                    <Globe className="w-5 h-5" />
                  </a>
                ))}
              </div>
            </div>
            <div>
              <h5 className="font-bold mb-6 text-lg">Platform</h5>
              <ul className="space-y-4 text-white/60">
                <li><a href="#" className="hover:text-brand-lime transition-colors">AI Workforce</a></li>
                <li><a href="#" className="hover:text-brand-lime transition-colors">Carbon MRV</a></li>
                <li><a href="#" className="hover:text-brand-lime transition-colors">Supply Chain</a></li>
                <li><a href="#" className="hover:text-brand-lime transition-colors">Enterprise API</a></li>
              </ul>
            </div>
            <div>
              <h5 className="font-bold mb-6 text-lg">Company</h5>
              <ul className="space-y-4 text-white/60">
                <li><a href="#" className="hover:text-brand-lime transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-brand-lime transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-brand-lime transition-colors">Press Kit</a></li>
                <li><a href="#" className="hover:text-brand-lime transition-colors">Contact</a></li>
              </ul>
            </div>
          </div>
          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-white/40 text-sm">
            <p>© 2026 MW.AI Farming. All rights reserved. DPDP Compliant.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-white transition-colors">Security</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
