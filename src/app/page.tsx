"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import {
  ChefHat,
  Clock,
  Users,
  BarChart3,
  CalendarDays,
  Thermometer,
  Truck,
  Bell,
  BadgePercent,
  Globe,
  ArrowRight,
  Check,
  Star,
  Menu,
  X,
} from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
              <ChefHat className="w-5 h-5 text-black" />
            </div>
            <span className="font-bold text-xl">RestoManager</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#fonctionnalites" className="text-sm text-white/60 hover:text-white transition">Fonctionnalités</a>
            <a href="#site-client" className="text-sm text-white/60 hover:text-white transition">Site Client</a>
            <a href="#temoignage" className="text-sm text-white/60 hover:text-white transition">Témoignage</a>
            <a href="#contact" className="px-4 py-2 bg-white text-black rounded-full text-sm font-medium hover:bg-white/90 transition">
              Demander une démo
            </a>
          </div>
          <button className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-[#0a0a0a] border-t border-white/5 px-6 py-4 flex flex-col gap-4"
          >
            <a href="#fonctionnalites" className="text-white/60 hover:text-white">Fonctionnalités</a>
            <a href="#site-client" className="text-white/60 hover:text-white">Site Client</a>
            <a href="#temoignage" className="text-white/60 hover:text-white">Témoignage</a>
            <a href="#contact" className="px-4 py-2 bg-white text-black rounded-full text-sm font-medium text-center">
              Demander une démo
            </a>
          </motion.div>
        )}
      </nav>

      {/* Hero */}
      <motion.section
        ref={heroRef}
        style={{ opacity: heroOpacity, scale: heroScale }}
        className="min-h-screen flex flex-col items-center justify-center px-6 pt-20 relative"
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/10 via-transparent to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-5xl relative z-10"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/5 rounded-full border border-white/10 mb-8">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
            <span className="text-sm text-white/60">Déjà utilisé par des restaurants en France</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            Gérez votre resto
            <br />
            <span className="bg-gradient-to-r from-amber-400 via-orange-400 to-red-500 bg-clip-text text-transparent">
              comme un pro
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed">
            Commandes en ligne, réservations, gestion d&apos;équipe, analytics —
            tout ce dont vous avez besoin dans une seule plateforme.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#contact"
              className="group flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full font-medium text-lg hover:bg-white/90 transition"
            >
              Demander une démo gratuite
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <a
              href="https://bimisushi31.com"
              target="_blank"
              className="flex items-center gap-2 px-8 py-4 border border-white/20 rounded-full font-medium text-lg hover:bg-white/5 transition"
            >
              <Globe className="w-5 h-5" />
              Voir un exemple live
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="mt-20 w-full max-w-6xl relative"
        >
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent z-10 pointer-events-none" />
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-amber-500/10">
            <Image
              src="/screenshots/13-analytics-full.png"
              alt="Dashboard RestoManager"
              width={1920}
              height={1080}
              className="w-full"
              priority
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Stats */}
      <section className="py-24 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4">
          {[
            { value: "51k€+", label: "CA généré" },
            { value: "1,673", label: "Commandes traitées" },
            { value: "434+", label: "Clients fidélisés" },
            { value: "99.7%", label: "Disponibilité" },
          ].map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                {stat.value}
              </div>
              <div className="text-white/40 mt-2">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Bento Grid Features */}
      <section id="fonctionnalites" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Tout ce qu&apos;il vous faut.
              <br />
              <span className="text-white/40">Rien de superflu.</span>
            </h2>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Large - Analytics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="md:col-span-2 bg-gradient-to-br from-white/5 to-white/[0.02] rounded-3xl p-8 border border-white/10 overflow-hidden relative group"
            >
              <div className="relative z-10">
                <BarChart3 className="w-10 h-10 text-amber-400 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Analytics en temps réel</h3>
                <p className="text-white/50 max-w-md">
                  Suivez votre chiffre d&apos;affaires, vos commandes par heure, et identifiez vos meilleures ventes.
                </p>
              </div>
              <div className="absolute bottom-0 right-0 w-2/3 translate-y-8 translate-x-8 opacity-60 group-hover:opacity-80 group-hover:translate-y-4 transition-all duration-500">
                <Image src="/screenshots/13-analytics-full.png" alt="Analytics" width={800} height={500} className="rounded-tl-xl" />
              </div>
            </motion.div>

            {/* Small - Commandes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-gradient-to-br from-amber-500/10 to-orange-500/5 rounded-3xl p-8 border border-amber-500/20"
            >
              <Bell className="w-10 h-10 text-amber-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Commandes instantanées</h3>
              <p className="text-white/50">
                Notification immédiate. Aucune commande manquée grâce à Socket.IO.
              </p>
            </motion.div>

            {/* Small - Réservations */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/[0.03] rounded-3xl p-8 border border-white/10 overflow-hidden relative group"
            >
              <CalendarDays className="w-10 h-10 text-blue-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Plan de salle</h3>
              <p className="text-white/50">
                Visualisez vos tables et gérez les réservations en un coup d&apos;œil.
              </p>
              <div className="absolute -bottom-20 -right-20 w-48 h-48 opacity-30 group-hover:opacity-50 transition">
                <Image src="/screenshots/02-reservations.png" alt="Réservations" fill className="object-cover rounded-xl" />
              </div>
            </motion.div>

            {/* Medium - Équipe */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="md:col-span-2 bg-white/[0.03] rounded-3xl p-8 border border-white/10 overflow-hidden relative group"
            >
              <div className="relative z-10">
                <Users className="w-10 h-10 text-green-400 mb-4" />
                <h3 className="text-2xl font-bold mb-2">Gestion d&apos;équipe complète</h3>
                <p className="text-white/50 max-w-md">
                  Pointage, planning, congés, performance — tout le RH simplifié pour la restauration.
                </p>
              </div>
              <div className="absolute bottom-0 right-0 w-1/2 translate-y-12 opacity-40 group-hover:opacity-60 group-hover:translate-y-6 transition-all duration-500">
                <Image src="/screenshots/04-clock-in.png" alt="Équipe" width={600} height={400} className="rounded-tl-xl" />
              </div>
            </motion.div>

            {/* Small - Produits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white/[0.03] rounded-3xl p-8 border border-white/10"
            >
              <ChefHat className="w-10 h-10 text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Menu digital</h3>
              <p className="text-white/50">
                Gérez vos produits, catégories, prix et ruptures de stock facilement.
              </p>
            </motion.div>

            {/* Small - HACCP */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="bg-white/[0.03] rounded-3xl p-8 border border-white/10"
            >
              <Thermometer className="w-10 h-10 text-cyan-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Conformité HACCP</h3>
              <p className="text-white/50">
                Relevés de température automatisés. Fini les papiers.
              </p>
            </motion.div>

            {/* Small - Fournisseurs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="bg-white/[0.03] rounded-3xl p-8 border border-white/10"
            >
              <Truck className="w-10 h-10 text-orange-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Livraisons</h3>
              <p className="text-white/50">
                Contrôlez vos réceptions fournisseurs et leur conformité.
              </p>
            </motion.div>

            {/* Small - Fidélité */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="bg-gradient-to-br from-purple-500/10 to-pink-500/5 rounded-3xl p-8 border border-purple-500/20"
            >
              <BadgePercent className="w-10 h-10 text-pink-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Fidélité & Promos</h3>
              <p className="text-white/50">
                Programme de points et codes promo pour fidéliser vos clients.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Site Client Section */}
      <section id="site-client" className="py-32 px-6 bg-gradient-to-b from-transparent via-amber-500/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-amber-500/10 rounded-full border border-amber-500/20 mb-6">
                <Globe className="w-4 h-4 text-amber-400" />
                <span className="text-sm text-amber-400">Inclus dans l&apos;offre</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Un site vitrine
                <br />
                <span className="text-white/40">pour vos clients</span>
              </h2>
              <p className="text-xl text-white/50 mb-8 leading-relaxed">
                Vos clients commandent en ligne, réservent une table, et consultent votre menu —
                le tout sur votre propre site aux couleurs de votre restaurant.
              </p>
              <ul className="space-y-4">
                {[
                  "Menu en ligne avec photos",
                  "Commande et paiement sécurisé",
                  "Réservation de table",
                  "Suivi de commande en temps réel",
                  "Responsive mobile",
                  "Votre nom de domaine",
                ].map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                      <Check className="w-4 h-4 text-green-400" />
                    </div>
                    <span className="text-white/70">{item}</span>
                  </motion.li>
                ))}
              </ul>
              <a
                href="https://bimisushi31.com"
                target="_blank"
                className="inline-flex items-center gap-2 mt-8 text-amber-400 hover:text-amber-300 transition"
              >
                Voir l&apos;exemple de BIMI SUSHI
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/20 to-orange-500/20 blur-3xl -z-10" />
              <div className="bg-[#1a1a1a] rounded-3xl p-4 border border-white/10">
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                  <div className="flex-1 bg-white/5 rounded-full py-1 px-4 text-xs text-white/40 ml-4">
                    bimisushi31.com
                  </div>
                </div>
                <div className="rounded-2xl overflow-hidden">
                  <Image
                    src="/screenshots/09-products.png"
                    alt="Site client"
                    width={800}
                    height={600}
                    className="w-full"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Témoignage */}
      <section id="temoignage" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="flex justify-center gap-1 mb-8">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <blockquote className="text-3xl md:text-4xl font-medium leading-relaxed mb-8">
              &ldquo;Depuis qu&apos;on utilise RestoManager, on a divisé par deux le temps passé
              sur l&apos;administratif. L&apos;équipe peut enfin se concentrer sur ce qui compte :
              <span className="text-amber-400"> nos clients.</span>&rdquo;
            </blockquote>
            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center font-bold text-black">
                BS
              </div>
              <div className="text-left">
                <div className="font-medium">BIMI SUSHI</div>
                <div className="text-white/40 text-sm">Restaurant à Toulouse • Client depuis 2024</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA */}
      <section id="contact" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-amber-500/20 via-orange-500/10 to-red-500/20 rounded-3xl p-12 md:p-16 border border-amber-500/20 text-center relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-20" />
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Prêt à moderniser
                <br />
                votre restaurant ?
              </h2>
              <p className="text-xl text-white/60 mb-8 max-w-xl mx-auto">
                Demandez une démo gratuite et découvrez comment RestoManager
                peut transformer votre gestion quotidienne.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder:text-white/40 focus:outline-none focus:border-amber-500/50"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-white/90 transition whitespace-nowrap"
                >
                  Demander une démo
                </button>
              </form>
              <p className="text-white/40 text-sm mt-4">
                Ou contactez-moi directement : <a href="mailto:Mirakiramal@gmail.com" className="text-amber-400 hover:underline">Mirakiramal@gmail.com</a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center">
              <ChefHat className="w-4 h-4 text-black" />
            </div>
            <span className="font-bold">RestoManager</span>
          </div>
          <div className="text-white/40 text-sm">
            Développé par <a href="https://karimlamari.quxly.fr" className="text-white hover:text-amber-400 transition">Karim Lamari</a>
          </div>
          <div className="flex items-center gap-6">
            <a href="https://github.com/karimLamari" className="text-white/40 hover:text-white transition text-sm">GitHub</a>
            <a href="https://linkedin.com/in/karim-lamari-0944a32b6" className="text-white/40 hover:text-white transition text-sm">LinkedIn</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
