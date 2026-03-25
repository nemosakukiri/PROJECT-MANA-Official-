/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col selection:bg-secondary/20 selection:text-secondary">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-md px-6 md:px-12 py-6 flex justify-between items-center border-b border-primary/5">
        <div className="font-headline font-black text-xl tracking-tighter uppercase text-primary">
          PROJECT MANA
        </div>
        <a
          href="#"
          className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase hover:text-secondary transition-colors flex items-center gap-2"
        >
          BACK TO PORTAL <ArrowRight size={14} />
        </a>
      </nav>

      <main className="flex-grow manifesto-container max-w-[900px] mx-auto px-6 md:px-10 pt-32 pb-20">
        {/* Status Badge */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 flex flex-wrap items-center gap-4"
        >
          <span className="bg-secondary text-white px-4 py-1 text-[10px] font-black uppercase tracking-[0.3em]">
            Status: Under Investigation
          </span>
          <span className="text-[10px] font-bold text-primary/40 uppercase tracking-widest">
            Case ID: KYOTO-2026-001
          </span>
        </motion.div>

        {/* Header */}
        <header className="mb-24">
          <motion.h1 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-headline font-black leading-tight tracking-tighter text-primary"
          >
            京都市による組織的人権侵害
            <br />
            <span className="text-secondary">「経済的虐待」</span>の認定に関する申立
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="mt-8 text-lg md:text-xl text-primary/60 font-light italic text-justify leading-relaxed"
          >
            本記録は、京都地方法務局人権擁護課へ提出された申立書のデジタル・アーカイブである。
          </motion.p>
        </header>

        {/* 01. 申立の目的 */}
        <section className="section-border">
          <h2 className="text-[10px] font-bold text-secondary tracking-[0.4em] uppercase mb-6">
            01. 申立の目的
          </h2>
          <p className="text-xl md:text-2xl font-headline font-bold text-primary leading-relaxed text-justify">
            右京区役所福祉部および京都市保健福祉局による組織的な「不作為」を、利用者の生存権を脅かす
            <span className="border-b-4 border-secondary inline-block">経済的虐待</span>
            として公的に認定することを求める。
          </p>
        </section>

        {/* 02. 経済的虐待の構造 */}
        <section className="section-border">
          <h2 className="text-[10px] font-bold text-secondary tracking-[0.4em] uppercase mb-6">
            02. 経済的虐待の構造
          </h2>
          <div className="space-y-10">
            <div>
              <h3 className="font-bold text-lg mb-3 text-primary">行政官（石川CW）による支配的アプローチ</h3>
              <p className="text-primary/70 text-justify leading-relaxed">
                担当ケースワーカー（石川CW）による「事業所が撤退するかもしれない」という事実に反する示唆は、2025年指針が禁じる「本人の意向を無視した強要」に該当し、不安を煽り特定の行動を強いる支配的対応である。
              </p>
            </div>
            <div>
              <h3 className="font-bold text-lg mb-3 text-primary">組織的虚偽と不作為による経済的搾取</h3>
              <p className="text-primary/70 text-justify leading-relaxed">
                現場責任者（係長）が指導義務を放棄し、行政責任を転嫁する目的で申立人の意向を捏造したことは、重大な職務放棄である。この組織的空白を理由に給付金を差し止める行為は、行政の故意による経済的実害を生んでいる。
              </p>
            </div>
          </div>
        </section>

        {/* 03. 行政組織の隠蔽・捏造の証明 */}
        <section className="alert-box">
          <h2 className="text-[10px] font-bold text-secondary tracking-[0.4em] uppercase mb-6">
            03. 行政組織の隠蔽・捏造の証明
          </h2>
          <div className="space-y-6">
            <p className="font-headline text-xl md:text-2xl font-bold text-primary">
              法令遵守の要求に対する、意図的な拒絶。
            </p>
            <ul className="text-sm md:text-base space-y-3 font-medium text-primary/80">
              <li className="flex gap-3">
                <span className="text-secondary">●</span>
                <span>2025年指針による行政責務の提示を無視した石川CWの強硬姿勢</span>
              </li>
              <li className="flex gap-3">
                <span className="text-secondary">●</span>
                <span>係長による「利用者側の拒絶」という事実に反する記録の作成</span>
              </li>
              <li className="flex gap-3">
                <span className="text-secondary">●</span>
                <span>京都市本庁による、現場の法令違反を是認する調査放棄</span>
              </li>
              <li className="flex gap-3">
                <span className="text-secondary">●</span>
                <span>指導権限を有する行政機関としての「責任放棄」の組織的宣言</span>
              </li>
            </ul>
            <p className="text-[10px] mt-8 opacity-50 italic">
              ※これは過失ではなく、法令違反を認識した上での「故意」による組織的人権侵害である。
            </p>
          </div>
        </section>

        {/* 4. 権利の返還 */}
        <section className="py-32 text-center">
          <motion.blockquote 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-4xl font-headline font-black italic mb-16 leading-tight text-primary"
          >
            「受給権は本人の法的財産であり、
            <br className="hidden md:block" />
            行政にそれを留め置く権利はない。」
          </motion.blockquote>
          <div className="flex flex-col items-center">
            <div className="w-px h-20 bg-primary/20 mb-8"></div>
            <p className="text-[10px] font-bold tracking-[0.6em] uppercase text-secondary">
              RECLAIM OF SOVEREIGN RIGHTS
            </p>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white/30 py-24 px-12 text-center">
        <div className="font-headline italic text-2xl text-white mb-6 tracking-tight">
          PROJECT MANA
        </div>
        <p className="text-[10px] tracking-[0.3em] uppercase font-bold">
          © 2026 PROJECT MANA ARCHIVE | PRECISE SOCIAL INFRASTRUCTURE
        </p>
      </footer>
    </div>
  );
}
