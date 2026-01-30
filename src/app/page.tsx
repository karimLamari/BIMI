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
  Menu,
  X,
  ShoppingBag,
  Zap,
  Shield,
  HeartHandshake,
  Smartphone,
  FileText,
  Timer,
  AlertTriangle,
  TrendingUp,
  Printer,
  Mail,
  MapPin,
  Utensils,
  CalendarClock,
  UserCheck,
  ClipboardCheck,
  Droplets,
  Package,
  RotateCcw,
  PieChart,
  Users2,
  Wallet,
  Send,
  Lock,
  Wifi,
} from "lucide-react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <div className="bg-[#0a0a0a] text-white min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0a]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-400 to-orange-600 rounded-xl flex items-center justify-center font-bold text-black text-lg">
              B
            </div>
            <span className="font-bold text-2xl tracking-tight">BIMI</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#commandes" className="text-sm text-white/60 hover:text-white transition">Commandes</a>
            <a href="#planning" className="text-sm text-white/60 hover:text-white transition">Planning</a>
            <a href="#haccp" className="text-sm text-white/60 hover:text-white transition">HACCP</a>
            <a href="#analytics" className="text-sm text-white/60 hover:text-white transition">Analytics</a>
            <a href="#contact" className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-orange-600 text-black rounded-full text-sm font-semibold hover:opacity-90 transition">
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
            <a href="#commandes" className="text-white/60 hover:text-white">Commandes</a>
            <a href="#planning" className="text-white/60 hover:text-white">Planning</a>
            <a href="#haccp" className="text-white/60 hover:text-white">HACCP</a>
            <a href="#analytics" className="text-white/60 hover:text-white">Analytics</a>
            <a href="#contact" className="px-5 py-2.5 bg-gradient-to-r from-amber-500 to-orange-600 text-black rounded-full text-sm font-semibold text-center">
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
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-amber-500/20 via-orange-500/5 to-transparent" />

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-5xl relative z-10"
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-red-500 bg-clip-text text-transparent">
              BIMI
            </span>
          </h1>

          <p className="text-2xl md:text-4xl text-white font-medium mb-4">
            Arrêtez de gérer votre restaurant.
            <br />
            <span className="text-white/50">Pilotez-le.</span>
          </p>

          <p className="text-lg text-white/40 max-w-2xl mx-auto mb-12">
            33 modules. Un seul système. Zéro papier.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="#contact"
              className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-black rounded-full font-semibold text-lg hover:opacity-90 transition shadow-lg shadow-amber-500/25"
            >
              Voir la démo
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Quick stats */}
          <div className="flex flex-wrap justify-center gap-8 text-sm text-white/40">
            <div className="flex items-center gap-2">
              <Wifi className="w-4 h-4 text-green-400" />
              <span>Temps réel Socket.IO</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-blue-400" />
              <span>HACCP conforme</span>
            </div>
            <div className="flex items-center gap-2">
              <Printer className="w-4 h-4 text-purple-400" />
              <span>Impression intégrée</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mt-16 w-full max-w-6xl"
        >
          <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-amber-500/10">
            <Image
              src="/screenshots/13-analytics-full.png"
              alt="Dashboard BIMI"
              width={1920}
              height={1080}
              className="w-full"
              priority
            />
          </div>
        </motion.div>
      </motion.section>

      {/* Pain Points */}
      <section className="py-24 px-6 border-y border-white/5">
        <div className="max-w-5xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl text-white/60 leading-relaxed"
          >
            Vous jonglez entre <span className="text-red-400">Excel pour le planning</span>, <span className="text-red-400">un cahier pour les températures</span>, <span className="text-red-400">WhatsApp pour les échanges de shift</span>, et <span className="text-red-400">une calculette pour le CA</span> ?
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold mt-8"
          >
            C&apos;est fini.
          </motion.p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* COMMANDES */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section id="commandes" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/30 flex items-center justify-center">
                <ShoppingBag className="w-6 h-6 text-green-400" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">Commandes</h2>
            </div>
            <p className="text-xl text-white/50">Temps réel. Multi-canaux. Zéro commande perdue.</p>
          </motion.div>

          {/* Bento Grid */}
          <div className="grid grid-cols-12 gap-4">
            {/* Main - Types de commandes */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-12 md:col-span-8 bg-gradient-to-br from-green-500/10 to-green-500/5 rounded-3xl p-8 border border-green-500/20"
            >
              <h3 className="text-2xl font-bold mb-6">3 modes de commande unifiés</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="w-10 h-10 rounded-lg bg-green-500/20 flex items-center justify-center mb-3">
                    <Utensils className="w-5 h-5 text-green-400" />
                  </div>
                  <p className="font-medium">Sur place immédiat</p>
                  <p className="text-sm text-white/40 mt-1">Le client s&apos;installe et commande depuis sa table</p>
                </div>
                <div>
                  <div className="w-10 h-10 rounded-lg bg-amber-500/20 flex items-center justify-center mb-3">
                    <Package className="w-5 h-5 text-amber-400" />
                  </div>
                  <p className="font-medium">À emporter</p>
                  <p className="text-sm text-white/40 mt-1">Commande en ligne, récupération au comptoir</p>
                </div>
                <div>
                  <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center mb-3">
                    <CalendarClock className="w-5 h-5 text-blue-400" />
                  </div>
                  <p className="font-medium">Pré-commande</p>
                  <p className="text-sm text-white/40 mt-1">Réservation + commande à l&apos;avance</p>
                </div>
              </div>
            </motion.div>

            {/* Socket.IO */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="col-span-12 md:col-span-4 bg-white/[0.03] rounded-3xl p-8 border border-white/10"
            >
              <Wifi className="w-10 h-10 text-green-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Socket.IO</h3>
              <p className="text-white/50 text-sm">
                Notification instantanée. Le client voit son statut en temps réel. Vous ne manquez jamais une commande.
              </p>
            </motion.div>

            {/* Workflow */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="col-span-12 md:col-span-6 bg-white/[0.03] rounded-3xl p-8 border border-white/10"
            >
              <h3 className="text-xl font-bold mb-4">Workflow automatisé</h3>
              <div className="flex items-center gap-2 text-sm flex-wrap">
                <span className="px-3 py-1.5 rounded-full bg-yellow-500/20 text-yellow-400">EN ATTENTE</span>
                <ArrowRight className="w-4 h-4 text-white/30" />
                <span className="px-3 py-1.5 rounded-full bg-blue-500/20 text-blue-400">ACCEPTÉE</span>
                <ArrowRight className="w-4 h-4 text-white/30" />
                <span className="px-3 py-1.5 rounded-full bg-orange-500/20 text-orange-400">EN PRÉPA</span>
                <ArrowRight className="w-4 h-4 text-white/30" />
                <span className="px-3 py-1.5 rounded-full bg-purple-500/20 text-purple-400">PRÊTE</span>
                <ArrowRight className="w-4 h-4 text-white/30" />
                <span className="px-3 py-1.5 rounded-full bg-green-500/20 text-green-400">TERMINÉE</span>
              </div>
              <p className="text-white/40 text-sm mt-4">Changement de statut en un clic. Le client est notifié automatiquement.</p>
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="col-span-12 md:col-span-6 bg-white/[0.03] rounded-3xl p-8 border border-white/10"
            >
              <h3 className="text-xl font-bold mb-4">Inclus</h3>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {[
                  "Variantes produits",
                  "Personnalisation (extras)",
                  "Allergènes affichés",
                  "Commande invité (sans compte)",
                  "Impression ticket auto",
                  "Délai de préparation",
                  "Historique complet",
                  "Recherche par n° commande",
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-green-400 flex-shrink-0" />
                    <span className="text-white/70">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Screenshot */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="col-span-12 rounded-2xl overflow-hidden border border-white/10"
            >
              <Image src="/screenshots/01-sidebar.png" alt="Commandes" width={1200} height={600} className="w-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* RÉSERVATIONS */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="py-32 px-6 bg-gradient-to-b from-blue-500/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center">
                <CalendarDays className="w-6 h-6 text-blue-400" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">Réservations</h2>
            </div>
            <p className="text-xl text-white/50">Plan de salle interactif. Occupation en temps réel.</p>
          </motion.div>

          <div className="grid grid-cols-12 gap-4">
            {/* Screenshot principal */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-12 md:col-span-7 rounded-2xl overflow-hidden border border-blue-500/20"
            >
              <Image src="/screenshots/02-reservations.png" alt="Réservations" width={800} height={600} className="w-full" />
            </motion.div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="col-span-12 md:col-span-5 space-y-4"
            >
              <div className="bg-white/[0.03] rounded-3xl p-6 border border-white/10">
                <MapPin className="w-8 h-8 text-blue-400 mb-3" />
                <h3 className="font-bold mb-2">Plan de salle visuel</h3>
                <p className="text-sm text-white/50">Voyez en un coup d&apos;œil quelles tables sont libres, réservées ou occupées. Organisation par zones.</p>
              </div>
              <div className="bg-white/[0.03] rounded-3xl p-6 border border-white/10">
                <Timer className="w-8 h-8 text-blue-400 mb-3" />
                <h3 className="font-bold mb-2">Libération automatique</h3>
                <p className="text-sm text-white/50">Durée configurable par réservation. La table se libère automatiquement après le temps imparti.</p>
              </div>
              <div className="bg-white/[0.03] rounded-3xl p-6 border border-white/10">
                <UserCheck className="w-8 h-8 text-blue-400 mb-3" />
                <h3 className="font-bold mb-2">Workflow complet</h3>
                <p className="text-sm text-white/50">En attente → Confirmée → Installée → Terminée. Suivi des no-shows.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* PLANNING & RH */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section id="planning" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/30 flex items-center justify-center">
                <Users className="w-6 h-6 text-purple-400" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">Planning & RH</h2>
            </div>
            <p className="text-xl text-white/50">Fini Excel. Fini les SMS. Fini le chaos.</p>
          </motion.div>

          <div className="grid grid-cols-12 gap-4">
            {/* Planning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-12 md:col-span-8 bg-gradient-to-br from-purple-500/10 to-purple-500/5 rounded-3xl p-8 border border-purple-500/20"
            >
              <h3 className="text-2xl font-bold mb-6">Planning hebdomadaire</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <CalendarDays className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="font-medium">Vue semaine/mois</p>
                    <p className="text-sm text-white/40">Assignez les shifts par poste. Dupliquez une semaine vers une autre en un clic.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <AlertTriangle className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div>
                    <p className="font-medium">Détection de conflits</p>
                    <p className="text-sm text-white/40">Impossible de planifier quelqu&apos;un qui est en congé. Le système vous alerte.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <Send className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <p className="font-medium">Publication</p>
                    <p className="text-sm text-white/40">Publiez le planning quand il est prêt. Les employés sont notifiés et voient leurs horaires.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Shift Swap */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="col-span-12 md:col-span-4 bg-white/[0.03] rounded-3xl p-8 border border-white/10"
            >
              <RotateCcw className="w-10 h-10 text-orange-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Échanges de shift</h3>
              <p className="text-white/50 text-sm mb-4">
                Un employé veut échanger ? Il fait sa demande dans l&apos;app. Un collègue accepte. Vous validez. Terminé.
              </p>
              <p className="text-xs text-white/30">Fini WhatsApp pour les échanges.</p>
            </motion.div>

            {/* Pointage */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="col-span-12 md:col-span-6 bg-gradient-to-br from-orange-500/10 to-orange-500/5 rounded-3xl p-8 border border-orange-500/20"
            >
              <Clock className="w-10 h-10 text-orange-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Pointage par PIN</h3>
              <p className="text-white/50 mb-4">
                Chaque employé a un code PIN. Il pointe son arrivée, ses pauses, son départ. Mode kiosk parfait pour une tablette au comptoir.
              </p>
              <div className="grid grid-cols-2 gap-3 text-sm">
                {["Arrivée/Départ", "Pauses trackées", "Alertes retard", "Export pour la paie"].map((item, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-orange-400" />
                    <span className="text-white/70">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Comparaison */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="col-span-12 md:col-span-6 bg-white/[0.03] rounded-3xl p-8 border border-white/10"
            >
              <TrendingUp className="w-10 h-10 text-pink-400 mb-4" />
              <h3 className="text-2xl font-bold mb-2">Planifié vs Réalisé</h3>
              <p className="text-white/50 mb-4">
                Comparez les heures prévues aux heures pointées. Score de ponctualité par employé. Identifiez les retards récurrents.
              </p>
              <p className="text-sm text-white/30">Fiche RH complète avec documents, historique des absences, congés.</p>
            </motion.div>

            {/* Screenshots */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="col-span-12 md:col-span-6 rounded-2xl overflow-hidden border border-white/10"
            >
              <Image src="/screenshots/04-clock-in.png" alt="Pointage" width={800} height={500} className="w-full" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="col-span-12 md:col-span-6 rounded-2xl overflow-hidden border border-white/10"
            >
              <Image src="/screenshots/03-employee-stats.png" alt="Stats employés" width={800} height={500} className="w-full" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* HACCP */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section id="haccp" className="py-32 px-6 bg-gradient-to-b from-teal-500/5 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/30 flex items-center justify-center">
                <Shield className="w-6 h-6 text-teal-400" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">HACCP</h2>
            </div>
            <p className="text-xl text-white/50">Conformité totale. Zéro papier. Preuves photos.</p>
          </motion.div>

          <div className="grid grid-cols-12 gap-4">
            {/* Températures */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-12 md:col-span-6 lg:col-span-3 bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 rounded-3xl p-6 border border-cyan-500/20"
            >
              <Thermometer className="w-10 h-10 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Températures</h3>
              <p className="text-sm text-white/50 mb-3">Relevés frigo/congélo avec photo. Alertes si hors normes. Historique complet.</p>
              <p className="text-xs text-cyan-400">Configurable par appareil</p>
            </motion.div>

            {/* DLC */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="col-span-12 md:col-span-6 lg:col-span-3 bg-gradient-to-br from-yellow-500/10 to-yellow-500/5 rounded-3xl p-6 border border-yellow-500/20"
            >
              <Package className="w-10 h-10 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">DLC / Péremption</h3>
              <p className="text-sm text-white/50 mb-3">Suivi des dates avec photos. Alertes produits expirants. Stats de gaspillage.</p>
              <p className="text-xs text-yellow-400">Consommé / Jeté tracé</p>
            </motion.div>

            {/* Huiles */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="col-span-12 md:col-span-6 lg:col-span-3 bg-gradient-to-br from-amber-500/10 to-amber-500/5 rounded-3xl p-6 border border-amber-500/20"
            >
              <Droplets className="w-10 h-10 text-amber-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Changements d&apos;huile</h3>
              <p className="text-sm text-white/50 mb-3">Suivi par friteuse avec photos. Historique des changements. Rappels automatiques.</p>
              <p className="text-xs text-amber-400">Stats par équipement</p>
            </motion.div>

            {/* Livraisons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="col-span-12 md:col-span-6 lg:col-span-3 bg-gradient-to-br from-slate-500/10 to-slate-500/5 rounded-3xl p-6 border border-slate-500/20"
            >
              <Truck className="w-10 h-10 text-slate-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Réceptions</h3>
              <p className="text-sm text-white/50 mb-3">Contrôle à réception avec photos. Non-conformités documentées. Stats fournisseur.</p>
              <p className="text-xs text-slate-400">Traçabilité complète</p>
            </motion.div>

            {/* Screenshot */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="col-span-12 md:col-span-6 rounded-2xl overflow-hidden border border-white/10"
            >
              <Image src="/screenshots/05-temperature.png" alt="Températures" width={800} height={500} className="w-full" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="col-span-12 md:col-span-6 rounded-2xl overflow-hidden border border-white/10"
            >
              <Image src="/screenshots/11-delivery-control.png" alt="Livraisons" width={800} height={500} className="w-full" />
            </motion.div>

            {/* Export */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="col-span-12 bg-white/[0.03] rounded-3xl p-8 border border-white/10 text-center"
            >
              <FileText className="w-12 h-12 text-teal-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-2">Export PDF pour contrôles</h3>
              <p className="text-white/50 max-w-2xl mx-auto">
                Un inspecteur débarque ? Générez votre dossier HACCP en 2 clics. Toutes les preuves sont là, avec photos et horodatage.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* ANALYTICS */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section id="analytics" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-emerald-400" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold">Analytics</h2>
            </div>
            <p className="text-xl text-white/50">Décisions data-driven. Pas au feeling.</p>
          </motion.div>

          <div className="grid grid-cols-12 gap-4">
            {/* KPIs */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-12 bg-gradient-to-br from-emerald-500/10 to-emerald-500/5 rounded-3xl p-8 border border-emerald-500/20"
            >
              <h3 className="text-2xl font-bold mb-6">Tout ce que vous devez savoir</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[
                  { icon: Wallet, label: "CA jour/semaine/mois", color: "emerald" },
                  { icon: ShoppingBag, label: "Commandes par créneau", color: "blue" },
                  { icon: ChefHat, label: "Top produits vendus", color: "amber" },
                  { icon: Users2, label: "Clients fidèles vs nouveaux", color: "pink" },
                  { icon: TrendingUp, label: "Évolution par période", color: "purple" },
                  { icon: PieChart, label: "Répartition par type", color: "cyan" },
                  { icon: Clock, label: "Temps de préparation moyen", color: "orange" },
                  { icon: HeartHandshake, label: "Taux de fidélisation", color: "red" },
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <item.icon className={`w-5 h-5 text-${item.color}-400`} />
                    <span className="text-sm text-white/70">{item.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Screenshot */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="col-span-12 rounded-2xl overflow-hidden border border-emerald-500/20"
            >
              <Image src="/screenshots/13-analytics-full.png" alt="Analytics" width={1200} height={600} className="w-full" />
            </motion.div>

            {/* Heatmap */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="col-span-12 md:col-span-6 bg-white/[0.03] rounded-3xl p-8 border border-white/10"
            >
              <h3 className="text-xl font-bold mb-4">Heatmap des commandes</h3>
              <p className="text-white/50">Visualisez vos pics d&apos;activité par heure et jour de la semaine. Optimisez votre staffing en conséquence.</p>
            </motion.div>

            {/* Produits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="col-span-12 md:col-span-6 bg-white/[0.03] rounded-3xl p-8 border border-white/10"
            >
              <h3 className="text-xl font-bold mb-4">Analyse produits</h3>
              <p className="text-white/50">Top ventes, flops, produits souvent achetés ensemble. Identifiez ce qui marche et ce qui doit changer.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* AUTRES MODULES */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="py-32 px-6 bg-gradient-to-b from-white/[0.02] to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Et aussi...</h2>
            <p className="text-xl text-white/50">Tout ce qu&apos;il faut pour être complet.</p>
          </motion.div>

          <div className="grid grid-cols-12 gap-4">
            {/* Fidélité */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="col-span-12 md:col-span-4 bg-gradient-to-br from-pink-500/10 to-pink-500/5 rounded-3xl p-6 border border-pink-500/20"
            >
              <HeartHandshake className="w-10 h-10 text-pink-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Programme fidélité</h3>
              <p className="text-sm text-white/50">Points par commande, récompenses configurables, taux de conversion paramétrable.</p>
            </motion.div>

            {/* Promos */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="col-span-12 md:col-span-4 bg-gradient-to-br from-violet-500/10 to-violet-500/5 rounded-3xl p-6 border border-violet-500/20"
            >
              <BadgePercent className="w-10 h-10 text-violet-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Codes promo</h3>
              <p className="text-sm text-white/50">% ou montant fixe, limite d&apos;usage, date d&apos;expiration, restrictions produits. Stats d&apos;utilisation.</p>
            </motion.div>

            {/* Notifications */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="col-span-12 md:col-span-4 bg-gradient-to-br from-cyan-500/10 to-cyan-500/5 rounded-3xl p-6 border border-cyan-500/20"
            >
              <Bell className="w-10 h-10 text-cyan-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Broadcast</h3>
              <p className="text-sm text-white/50">Email, push, in-app. Envoyez des promos à tous vos clients en un clic. Ciblage par segment.</p>
            </motion.div>

            {/* Produits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="col-span-12 md:col-span-6 rounded-2xl overflow-hidden border border-white/10"
            >
              <Image src="/screenshots/09-products.png" alt="Produits" width={800} height={500} className="w-full" />
            </motion.div>

            {/* Clients */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="col-span-12 md:col-span-6 rounded-2xl overflow-hidden border border-white/10"
            >
              <Image src="/screenshots/06-clients.png" alt="Clients" width={800} height={500} className="w-full" />
            </motion.div>

            {/* BimiPrint */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="col-span-12 bg-gradient-to-br from-purple-500/10 to-purple-500/5 rounded-3xl p-8 border border-purple-500/20"
            >
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex-1">
                  <Printer className="w-12 h-12 text-purple-400 mb-4" />
                  <h3 className="text-2xl font-bold mb-2">BimiPrint</h3>
                  <p className="text-white/50 mb-4">
                    Imprimante ticket intégrée via Raspberry Pi. Impression automatique des commandes en cuisine. File d&apos;attente en temps réel.
                  </p>
                  <p className="text-sm text-purple-400">WebSocket direct avec vos imprimantes</p>
                </div>
                <div className="w-32 h-32 rounded-2xl bg-purple-500/20 flex items-center justify-center">
                  <Printer className="w-16 h-16 text-purple-400/50" />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* STATS */}
      {/* ═══════════════════════════════════════════════════════════════ */}
      <section className="py-20 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-white/40 text-sm uppercase tracking-wider">En production avec BIMI SUSHI</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "51 484€", label: "de CA traité" },
              { value: "1 673", label: "commandes" },
              { value: "434+", label: "clients" },
              { value: "33", label: "modules" },
            ].map((stat, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-white/40 mt-2">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════════════════════════════════════════════════════════ */}
      {/* CTA */}
      {/* ═══════════════════════════════════════════════════════════════ */}
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
                Votre restaurant mérite
                <br />
                <span className="bg-gradient-to-r from-amber-400 to-orange-500 bg-clip-text text-transparent">mieux qu&apos;Excel.</span>
              </h2>
              <p className="text-xl text-white/60 mb-8 max-w-xl mx-auto">
                Demandez une démo. Je vous montre tout en 30 minutes.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-6 py-4 bg-white/10 border border-white/20 rounded-full text-white placeholder:text-white/40 focus:outline-none focus:border-amber-500/50"
                />
                <button
                  type="submit"
                  className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-black rounded-full font-semibold hover:opacity-90 transition whitespace-nowrap"
                >
                  Demander une démo
                </button>
              </form>
              <p className="text-white/40 text-sm mt-6">
                <a href="mailto:Mirakiramal@gmail.com" className="text-amber-400 hover:underline">Mirakiramal@gmail.com</a>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-amber-400 to-orange-600 rounded-lg flex items-center justify-center font-bold text-black">
              B
            </div>
            <span className="font-bold text-xl">BIMI</span>
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
