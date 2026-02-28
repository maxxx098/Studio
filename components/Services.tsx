import React, { useState } from 'react';
import { SERVICES } from '../constants';
import { Star, Target, Zap } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// ─── Animated Card Visuals ────────────────────────────────────────────────────

const DiscoveryVisual = ({ tall }: { tall?: boolean }) => (
  <div className={`bg-[#1a1a1a] rounded-xl border border-white/5 ${tall ? 'h-full' : 'h-48'} relative overflow-hidden flex flex-col`}>
    <div className="h-8 border-b border-white/5 flex items-center px-3 gap-1.5 bg-[#151515] shrink-0">
      <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
      <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
      <span className="ml-auto text-[9px] text-neutral-600 font-mono">analytics.exe</span>
    </div>
    <div className="flex-1 p-3 flex flex-col gap-3 overflow-hidden">
      <div className="flex gap-3 h-28 shrink-0">
        <div className="flex-1 bg-[#222] rounded-lg p-2 flex flex-col gap-1">
          <span className="text-[8px] text-neutral-600 font-mono uppercase">Performance</span>
          <div className="flex-1 flex items-end gap-1 justify-around">
            {[
              { delay: 0, heights: ["40%", "70%", "40%"], opacity: 20 },
              { delay: 0.3, heights: ["60%", "30%", "60%"], opacity: 40 },
              { delay: 0.6, heights: ["30%", "80%", "30%"], opacity: 100 },
              { delay: 0.9, heights: ["70%", "40%", "70%"], opacity: 60 },
              { delay: 0.5, heights: ["50%", "90%", "50%"], opacity: 30 },
            ].map((bar, i) => (
              <motion.div
                key={i}
                className="w-3 rounded-t-sm"
                style={{ height: bar.heights[0], backgroundColor: `rgba(255,0,0,${bar.opacity / 100})` }}
                animate={{ height: bar.heights }}
                transition={{ duration: 2 + i * 0.5, repeat: Infinity, delay: bar.delay }}
              />
            ))}
          </div>
        </div>
        <div className="w-24 bg-[#222] rounded-lg flex items-center justify-center relative">
          <Target size={40} className="text-[#333]" />
          <Target size={40} className="text-[#ff0000] absolute opacity-50 blur-[20px]" />
          <Target size={40} className="text-[#ff0000] absolute" />
          <span className="absolute bottom-2 text-[8px] text-neutral-600 font-mono">target</span>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 shrink-0">
        {[
          { label: 'Reach', val: '2.4M', up: true },
          { label: 'Conv.', val: '18%', up: true },
          { label: 'Bounce', val: '32%', up: false },
        ].map(({ label, val, up }) => (
          <div key={label} className="bg-[#222] rounded-lg p-2 border border-white/5">
            <div className="text-[8px] text-neutral-600 font-mono">{label}</div>
            <div className="text-xs font-black text-white">{val}</div>
            <div className={`text-[8px] font-mono ${up ? 'text-green-400' : 'text-[#ff0000]'}`}>{up ? '▲' : '▼'} trend</div>
          </div>
        ))}
      </div>
      <div className="flex-1 bg-[#222] rounded-lg p-3 flex flex-col gap-2">
        <span className="text-[8px] text-neutral-600 font-mono uppercase mb-1">Key Insights</span>
        {['Mobile traffic up 43%', 'Top source: organic search', 'Peak hours: 9am – 12pm', 'Avg. session: 4m 32s'].map((txt) => (
          <div key={txt} className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-[#ff0000] shrink-0" />
            <span className="text-[9px] text-neutral-400 font-mono">{txt}</span>
          </div>
        ))}
      </div>
    </div>
  </div>
);

const DevelopmentVisual = ({ tall }: { tall?: boolean }) => (
  <div className={`bg-[#1a1a1a] rounded-xl border border-white/5 ${tall ? 'h-full' : 'h-48'} relative overflow-hidden flex flex-col`}>
    {/* Tab bar */}
    <div className="h-8 border-b border-white/5 flex items-center px-3 gap-3 bg-[#151515] shrink-0">
      <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
      <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
      <div className="ml-2 flex gap-1">
        <span className="text-[9px] bg-[#222] border border-white/10 px-2 py-0.5 text-neutral-400 font-mono">epic.py</span>
        <span className="text-[9px] text-neutral-600 px-2 py-0.5 font-mono">utils.py</span>
      </div>
      <span className="ml-auto text-[9px] text-neutral-600 font-mono">Ln 24, Col 8</span>
    </div>

    {/* Line numbers + code */}
    <div className="flex-1 flex overflow-hidden">
      {/* Line numbers */}
      <div className="w-8 bg-[#151515] border-r border-white/5 flex flex-col items-end pr-2 pt-3 gap-[5px] shrink-0">
        {Array.from({ length: 18 }).map((_, i) => (
          <span key={i} className="text-[9px] text-neutral-700 font-mono leading-none">{i + 1}</span>
        ))}
      </div>

      {/* Code content */}
      <div className="flex-1 p-3 font-mono text-[10px] leading-[1.7] overflow-hidden">
        <div><span className="text-neutral-600"># Epic Design System v2.0</span></div>
        <div className="h-[5px]" />
        <div><span className="text-blue-400">import</span> <span className="text-white">design, motion, code</span></div>
        <div><span className="text-blue-400">from</span> <span className="text-yellow-200">epic</span> <span className="text-blue-400">import</span> <span className="text-white">*</span></div>
        <div className="h-[5px]" />
        <div><span className="text-blue-400">class</span> <span className="text-yellow-200">EpicDesign</span><span className="text-white">(layers.Layer):</span></div>
        <div><span className="text-neutral-600 pl-4 italic"># craft world-class UI/UX</span></div>
        <div className="h-[5px]" />
        <div><span className="text-blue-400 pl-4">def</span> <span className="text-yellow-200">__init__</span><span className="text-white">(self):</span></div>
        <div><span className="text-white pl-8">self</span><span className="text-neutral-400">.quality =</span> <span className="text-orange-400">"elite"</span></div>
        <div><span className="text-white pl-8">self</span><span className="text-neutral-400">.clients =</span> <span className="text-orange-400">120</span></div>
        <div className="h-[5px]" />
        <div><span className="text-blue-400 pl-4">def</span> <span className="text-yellow-200">build</span><span className="text-white">(self, inputs):</span></div>
        <div><span className="text-neutral-400 pl-8">design, ship = inputs</span></div>
        <div><span className="text-blue-400 pl-8">if</span> <span className="text-white">design</span> <span className="text-blue-400">is</span> <span className="text-orange-400">None</span><span className="text-white">:</span></div>
        <div><span className="text-blue-400 pl-12">raise</span> <span className="text-red-400">ValueError</span><span className="text-white">(</span><span className="text-orange-400">"needs vision"</span><span className="text-white">)</span></div>
        <div><span className="text-blue-400 pl-8">return</span> <span className="text-[#ff0000]">excellence</span>
          <motion.span
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.8, repeat: Infinity }}
            className="w-1.5 h-3 bg-[#ff0000] inline-block align-middle ml-0.5"
          />
        </div>
        <div className="h-[5px]" />
        <div className="text-green-400/70 text-[9px]">✓ Build successful · 0 errors · 0 warnings</div>
      </div>
    </div>

    {/* Status bar */}
    <div className="h-5 bg-[#ff0000]/10 border-t border-[#ff0000]/20 flex items-center px-3 gap-3 shrink-0">
      <span className="text-[8px] text-[#ff0000] font-mono">● Python 3.11</span>
      <span className="text-[8px] text-neutral-600 font-mono">UTF-8</span>
      <span className="text-[8px] text-neutral-600 font-mono ml-auto">epic-env</span>
    </div>
  </div>
);

const PrototypingVisual = ({ tall }: { tall?: boolean }) => {
  const [active, setActive] = useState(0);
  const frames = ['Frame v1', 'Frame v2', 'Frame v3'];
  return (
    <div className={`bg-[#1a1a1a] rounded-xl border border-white/5 ${tall ? 'h-full' : 'h-48'} relative overflow-hidden flex flex-col`}>
      <div className="h-8 border-b border-white/5 flex items-center px-3 gap-1.5 bg-[#151515] justify-between shrink-0">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
        </div>
        <div className="flex gap-1">
          {frames.map((f, i) => (
            <button
              key={i}
              onClick={() => setActive(i)}
              className={`text-[9px] px-2 py-0.5 rounded font-mono transition-colors ${active === i ? 'bg-[#ff0000] text-black' : 'text-neutral-500 hover:text-white'}`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="flex-1 flex gap-0 overflow-hidden">
        {/* Left layers panel */}
        <div className="w-20 border-r border-white/5 p-2 flex flex-col gap-1 shrink-0">
          <span className="text-[8px] text-neutral-600 font-mono uppercase mb-1">Layers</span>
          {['Header', 'Hero', 'Cards', 'Footer', 'Nav', 'Modal'].map((layer, i) => (
            <div key={layer} className={`flex items-center gap-1.5 px-1.5 py-1 rounded text-[9px] font-mono cursor-pointer transition-colors ${i === active + 1 ? 'bg-[#ff0000]/20 text-[#ff0000]' : 'text-neutral-600 hover:text-neutral-400'}`}>
              <div className={`w-1.5 h-1.5 rounded-sm ${i === active + 1 ? 'bg-[#ff0000]' : 'bg-neutral-700'}`} />
              {layer}
            </div>
          ))}
        </div>

        {/* Center canvas */}
        <div className="flex-1 flex flex-col p-3 gap-2">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, scale: 0.95, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -8 }}
              transition={{ duration: 0.25 }}
              className="flex-1 bg-[#222] rounded-lg border border-white/5 flex flex-col gap-2 p-3"
            >
              <div className={`h-3 rounded ${active === 0 ? 'bg-[#ff0000]/40 w-2/3' : active === 1 ? 'bg-[#ff0000]/60 w-1/2' : 'bg-[#ff0000] w-3/4'}`} />
              <div className="flex gap-2 flex-1">
                <div className={`rounded flex-1 ${active === 0 ? 'bg-white/5' : active === 1 ? 'bg-white/[0.08]' : 'bg-white/10'}`} />
                <div className={`rounded w-1/3 ${active === 2 ? 'bg-[#ff0000]/20' : 'bg-white/5'}`} />
              </div>
              <div className="flex gap-2">
                <div className={`h-2 rounded flex-1 ${active === 1 ? 'bg-[#ff0000]/30' : 'bg-white/5'}`} />
                <div className="h-2 rounded w-1/4 bg-white/5" />
              </div>
              <div className={`h-2.5 rounded w-1/3 ${active === 2 ? 'bg-[#ff0000] ml-auto' : 'bg-white/10'}`} />
            </motion.div>
          </AnimatePresence>

          {/* Iteration counter */}
          <div className="flex items-center justify-between shrink-0">
            <span className="text-[8px] text-neutral-600 font-mono">iteration {active + 1}/3</span>
            <div className="flex gap-1">
              {frames.map((_, i) => (
                <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === active ? 'bg-[#ff0000]' : 'bg-neutral-700'}`} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom status */}
      <div className="h-5 bg-[#151515] border-t border-white/5 flex items-center px-3 gap-3 shrink-0">
        <span className="text-[8px] text-neutral-600 font-mono">● Figma sync active</span>
        <span className="text-[8px] text-green-400/60 font-mono ml-auto">Auto-saved</span>
      </div>
    </div>
  );
};

const StrategyVisual = ({ tall }: { tall?: boolean }) => (
  <div className={`bg-[#1a1a1a] rounded-xl border border-white/5 ${tall ? 'h-full' : 'h-48'} relative overflow-hidden flex flex-col`}>
    <div className="h-8 border-b border-white/5 flex items-center px-3 gap-1.5 bg-[#151515] justify-between shrink-0">
      <div className="flex gap-1.5">
        <div className="w-2.5 h-2.5 rounded-full bg-red-500/50" />
        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/50" />
        <div className="w-2.5 h-2.5 rounded-full bg-green-500/50" />
      </div>
      <div className="text-[9px] text-neutral-500 font-mono">strategy.map</div>
    </div>

    <div className="flex-1 flex overflow-hidden">
      {/* Left: checklist */}
      <div className="w-2/5 border-r border-white/5 p-3 flex flex-col gap-1.5 overflow-hidden">
        <span className="text-[8px] text-neutral-600 font-mono uppercase mb-1">Roadmap</span>
        {[
          { label: 'Research', done: true },
          { label: 'Ideation', done: true },
          { label: 'Execution', active: true },
          { label: 'Testing', done: false },
          { label: 'Launch', done: false },
          { label: 'Growth', done: false },
        ].map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.1, duration: 0.4 }}
            className={`flex items-center gap-2 text-[9px] px-2 py-1 rounded font-mono transition-colors
              ${item.active ? 'text-black bg-[#ff0000]' : item.done ? 'text-green-400/70' : 'text-neutral-600'}`}
          >
            <span>{item.done && !item.active ? '✓' : item.active ? '▶' : '○'}</span>
            {item.label}
          </motion.div>
        ))}
      </div>

      {/* Right: stats + spinner */}
      <div className="flex-1 flex flex-col p-3 gap-3">
        {/* Spinner + status */}
        <div className="flex items-center gap-3 bg-[#222] rounded-lg p-3">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            className="shrink-0"
          >
            <Zap size={20} className="text-[#ff0000]" />
          </motion.div>
          <div className="flex-1 flex flex-col gap-1">
            <span className="text-[9px] text-white font-mono">Executing phase 3</span>
            <div className="w-full bg-neutral-800 h-1 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-[#ff0000]"
                animate={{ width: ['20%', '80%', '20%'] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              />
            </div>
          </div>
        </div>

        {/* KPI cards */}
        <div className="grid grid-cols-2 gap-2">
          {[
            { label: 'On Track', val: '94%', color: 'text-green-400' },
            { label: 'Velocity', val: '↑ 2.3x', color: 'text-[#ff0000]' },
            { label: 'Sprints', val: '12/14', color: 'text-white' },
            { label: 'Risk', val: 'Low', color: 'text-green-400' },
          ].map(({ label, val, color }) => (
            <div key={label} className="bg-[#222] rounded-lg p-2 border border-white/5">
              <div className="text-[8px] text-neutral-600 font-mono">{label}</div>
              <div className={`text-[11px] font-black ${color}`}>{val}</div>
            </div>
          ))}
        </div>

        {/* Timeline bar */}
        <div className="bg-[#222] rounded-lg p-2 flex flex-col gap-1.5">
          <div className="flex justify-between">
            <span className="text-[8px] text-neutral-600 font-mono">Timeline</span>
            <span className="text-[8px] text-[#ff0000] font-mono">Q2 2025</span>
          </div>
          <div className="w-full bg-neutral-800 h-2 rounded-full overflow-hidden">
            <motion.div
              className="h-full bg-gradient-to-r from-[#ff0000] to-[#ff0000]/50 rounded-full"
              initial={{ width: '0%' }}
              animate={{ width: '68%' }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            />
          </div>
          <span className="text-[8px] text-neutral-600 font-mono">68% complete</span>
        </div>
      </div>
    </div>
  </div>
);

// ─── Map service id to animated visual ───────────────────────────────────────
const SERVICE_VISUALS: Record<string, React.FC<{ tall?: boolean }>> = {
  '01': DiscoveryVisual,
  '02': DevelopmentVisual,
  '03': PrototypingVisual,
  '04': StrategyVisual,
};

// ─── Main Component ───────────────────────────────────────────────────────────
const Services: React.FC = () => {
  const [activeService, setActiveService] = useState(SERVICES[0]);

  return (
    <section className="bg-[#0a0a0a] pb-32 relative overflow-hidden">
      <div className="mx-auto px-6 md:px-12 relative z-10">
        <div className="mt-48">
          <h2 className="text-[8vw] leading-[0.9] font-black uppercase tracking-tight text-white mb-12">
            Our <br /> Services
            <span className="block w-32 h-4 text-[#ff0000]">
              <svg viewBox="0 0 100 10" fill="none" stroke="currentColor" strokeWidth="3">
                <path d="M0 5 Q 10 0, 20 5 T 40 5 T 60 5 T 80 5 T 100 5" />
              </svg>
            </span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
            {/* Animated Cards - Sticky Portrait */}
            <div className="lg:col-span-5 hidden lg:block">
              <div className="sticky top-32 aspect-[4/5]">
                {/* Corner accents */}
                <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#ff0000] z-10" />
                <div className="absolute -bottom-2 -left-2 w-4 h-4 bg-[#ff0000] z-10" />

                <AnimatePresence mode="wait">
                  {SERVICES.map((service) => {
                    if (service.id !== activeService.id) return null;
                    const Visual = SERVICE_VISUALS[service.id];
                    return (
                      <motion.div
                        key={service.id}
                        initial={{ opacity: 0, y: 16, filter: 'blur(6px)' }}
                        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                        exit={{ opacity: 0, y: -16, filter: 'blur(6px)' }}
                        transition={{ duration: 0.35 }}
                        className="absolute inset-0 bg-[#0f0f0f] border border-white/10 p-6 flex flex-col"
                      >
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 border border-[#ff0000] px-3 py-1 mb-5 self-start">
                          <span className="text-[#ff0000] text-xs font-black uppercase tracking-widest">Epic Exclusive</span>
                        </div>

                        {/* Visual takes up the bulk of the portrait space */}
                        <div className="flex-[1.2] min-h-0 mb-4">
                          {Visual && <Visual tall />}
                        </div>

                        {/* Bottom content — fills the remaining portrait space */}
                        <div className="flex flex-col gap-3">
                          {/* Title + description */}
                          <div>
                            <h3 className="text-lg font-black uppercase tracking-tight text-white leading-tight mb-1">
                              {service.title}
                            </h3>
                            <p className="text-neutral-500 text-[11px] leading-relaxed">{service.description}</p>
                          </div>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-1.5">
                            {['UI/UX', 'Branding', 'Strategy', 'Dev'].map((tag) => (
                              <span key={tag} className="text-[9px] font-mono uppercase tracking-wider border border-white/10 text-neutral-500 px-2 py-0.5 hover:border-[#ff0000]/50 hover:text-[#ff0000] transition-colors cursor-default">
                                {tag}
                              </span>
                            ))}
                          </div>

                          {/* Divider */}
                          <div className="border-t border-white/5" />

                          {/* Stats row */}
                          <div className="grid grid-cols-3 gap-2 text-center">
                            {[
                              { val: '120+', label: 'Projects' },
                              { val: '98%', label: 'Satisfied' },
                              { val: '5★', label: 'Rating' },
                            ].map(({ val, label }) => (
                              <div key={label} className="bg-[#1a1a1a] py-2 px-1 border border-white/5">
                                <div className="text-sm font-black text-white">{val}</div>
                                <div className="text-[9px] text-neutral-600 font-mono uppercase">{label}</div>
                              </div>
                            ))}
                          </div>

                          {/* CTA row */}
                          <div className="flex gap-2">
                            <button className="flex-1 bg-[#ff0000] text-black text-[10px] font-black uppercase py-2.5 tracking-widest hover:bg-white transition-colors">
                              GET STARTED
                            </button>
                            <button className="border border-white/10 text-white text-[10px] font-black uppercase px-4 py-2.5 tracking-widest hover:border-[#ff0000] hover:text-[#ff0000] transition-colors">
                              VIEW WORK
                            </button>
                          </div>

                          {/* Stars */}
                          <div className="flex items-center gap-1">
                            {[...Array(5)].map((_, i) => (
                              <Star key={i} size={10} className="fill-[#ff0000] text-[#ff0000]" />
                            ))}
                            <span className="text-[9px] ml-1.5 text-neutral-600 font-mono">1.45k+ PEOPLE RATED</span>
                          </div>
                        </div>
                      </motion.div>
                    );
                  })}
                </AnimatePresence>
              </div>
            </div>

            {/* Services List */}
            <div className="lg:col-span-7 flex flex-col justify-center">
              <div className="text-right mb-8 text-xs font-mono text-neutral-500 uppercase max-w-xs ml-auto">
                At Epic, we offer a wide range of creative services designed to elevate ensuring that every project we undertake is crafted with precision and creativity.
              </div>

              {SERVICES.map((service) => (
                <div
                  key={service.id}
                  onMouseEnter={() => setActiveService(service)}
                  className={`group border-t border-white/10 py-10 cursor-pointer transition-all duration-300 hover:pl-4 ${activeService.id === service.id ? 'border-[#ff0000]' : ''}`}
                >
                  <div className="flex items-start gap-6">
                    <div className="mt-1 w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-xs font-mono group-hover:bg-[#ff0000] group-hover:text-black group-hover:border-[#ff0000] transition-colors">
                      {service.id}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-4xl font-black uppercase tracking-tight mb-2 group-hover:text-[#ff0000] transition-colors">
                        {service.title}
                      </h3>
                      <div className={`grid transition-all duration-300 ${activeService.id === service.id ? 'grid-rows-[1fr] opacity-100 mt-4' : 'grid-rows-[0fr] opacity-0'}`}>
                        <div className="overflow-hidden">
                          <div className="bg-neutral-900/50 p-6 border-l-2 border-[#ff0000]">
                            <p className="text-neutral-300 text-sm mb-4">{service.description}</p>
                            <div className="flex items-center justify-between">
                              <button className="bg-[#ff0000] text-black text-[10px] font-black uppercase px-4 py-2 tracking-widest hover:bg-white transition-colors">
                                CALL NOW
                              </button>
                              <div className="flex gap-1">
                                {[...Array(5)].map((_, i) => (
                                  <Star key={i} size={12} className="fill-[#ff0000] text-[#ff0000]" />
                                ))}
                                <span className="text-[10px] ml-2 text-neutral-500">1.45k+ PEOPLE RATED</span>
                              </div>
                            </div>
                            <ul className="mt-4 space-y-2 text-[10px] uppercase tracking-wider text-neutral-500 font-mono">
                              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#ff0000] rounded-full" /> Custom UI/UX Solutions</li>
                              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#ff0000] rounded-full" /> Prototyping & Testing</li>
                              <li className="flex items-center gap-2"><div className="w-1 h-1 bg-[#ff0000] rounded-full" /> User-Centered Design</li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="border-t border-white/10" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;