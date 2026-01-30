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
  UserCheck,
  ClipboardList,
  Zap,
  Shield,
  HeartHandshake,
} from "lucide-react";

const features = [
  {
    id: "site-client",
    title: "Site Client Complet",
    subtitle: "Votre vitrine en ligne",
    description: "Un site web moderne aux couleurs de votre restaurant. Vos clients consultent le menu, passent commande et réservent une table — 24h/24.",
    points: [
      "Menu interactif avec photos et descriptions",
      "Commande en ligne avec paiement sécurisé",
      "Réservation de table en temps réel",
      "Suivi de commande pour le client",
      "Responsive mobile-first",
      "Votre propre nom de domaine",
    ],
    icon: Globe,
    color: "amber",
    screenshot: null,
  },
  {
    id: "commandes",
    title: "Gestion des Commandes",
    subtitle: "Temps réel avec Socket.IO",
    description: "Recevez les commandes instantanément. Notification sonore, mise à jour automatique du statut, et historique complet.",
    points: [
      "Notification instantanée nouvelle commande",
      "Changement de statut en un clic",
      "Vue kanban ou liste",
      "Historique et recherche",
      "Impression ticket automatique",
    ],
    icon: ShoppingBag,
    color: "green",
    screenshot: "/screenshots/01-sidebar.png",
  },
  {
    id: "produits",
    title: "Gestion des Produits",
    subtitle: "Menu digital complet",
    description: "Gérez votre carte en temps réel. Ajoutez, modifiez, activez ou désactivez des produits instantanément.",
    points: [
      "Catégories personnalisables",
      "Photos, descriptions, allergènes",
      "Gestion des prix et promotions",
      "Rupture de stock en un clic",
      "Produits populaires mis en avant",
    ],
    icon: ChefHat,
    color: "purple",
    screenshot: "/screenshots/09-products.png",
  },
  {
    id: "reservations",
    title: "Réservations & Plan de Salle",
    subtitle: "Visualisation interactive",
    description: "Plan de salle visuel avec gestion des réservations. Voyez en un coup d'œil la disponibilité de vos tables.",
    points: [
      "Plan de salle interactif",
      "Réservations en ligne 24/7",
      "Confirmation automatique par email",
      "Gestion des créneaux horaires",
      "Historique client",
    ],
    icon: CalendarDays,
    color: "blue",
    screenshot: "/screenshots/02-reservations.png",
  },
  {
    id: "planning",
    title: "Planning Employés",
    subtitle: "Organisation simplifiée",
    description: "Créez les plannings de votre équipe facilement. Vue semaine, assignation par poste, gestion des congés.",
    points: [
      "Vue calendrier semaine/mois",
      "Assignation par poste",
      "Gestion des congés et absences",
      "Notification aux employés",
      "Export PDF",
    ],
    icon: ClipboardList,
    color: "indigo",
    screenshot: "/screenshots/03-employee-stats.png",
  },
  {
    id: "pointage",
    title: "Pointage & Suivi",
    subtitle: "Précision au temps réel",
    description: "Système de pointage digital. Vos employés pointent leur arrivée, pause et départ. Suivi précis des heures.",
    points: [
      "Pointage arrivée/pause/départ",
      "Géolocalisation optionnelle",
      "Calcul automatique des heures",
      "Alertes retard",
      "Export pour la paie",
    ],
    icon: Clock,
    color: "orange",
    screenshot: "/screenshots/04-clock-in.png",
  },
  {
    id: "rh",
    title: "Gestion RH",
    subtitle: "Chaque employé en détail",
    description: "Fiche complète de chaque employé. Comparaison planifié vs réalisé, performance, documents, historique.",
    points: [
      "Fiche employé complète",
      "Comparaison planifié / pointé",
      "Score de ponctualité",
      "Gestion des documents",
      "Historique des absences",
    ],
    icon: Users,
    color: "pink",
    screenshot: "/screenshots/10-team-performance.png",
  },
  {
    id: "clients",
    title: "Base Clients & Fidélité",
    subtitle: "Connaissez vos clients",
    description: "Base de données clients avec historique de commandes, programme de fidélité et analytics.",
    points: [
      "Historique de commandes",
      "Programme de points fidélité",
      "Segmentation clients",
      "Panier moyen par client",
      "Clients VIP identifiés",
    ],
    icon: HeartHandshake,
    color: "red",
    screenshot: "/screenshots/06-clients.png",
  },
  {
    id: "broadcast",
    title: "Notifications Broadcast",
    subtitle: "Email & Push",
    description: "Communiquez avec tous vos clients en un clic. Promotions, nouveautés, événements — touchez votre audience.",
    points: [
      "Email marketing intégré",
      "Notifications push mobile",
      "Templates personnalisables",
      "Ciblage par segment",
      "Statistiques d'ouverture",
    ],
    icon: Bell,
    color: "cyan",
    screenshot: "/screenshots/08-notifications.png",
  },
  {
    id: "analytics",
    title: "Analytics & Tableau de Bord",
    subtitle: "Pilotez votre activité",
    description: "Dashboard complet avec chiffre d'affaires, commandes par heure, produits les plus vendus, et bien plus.",
    points: [
      "CA journalier/mensuel/annuel",
      "Commandes par créneau horaire",
      "Top produits vendus",
      "Taux de fidélisation",
      "Comparaison période",
    ],
    icon: BarChart3,
    color: "emerald",
    screenshot: "/screenshots/13-analytics-full.png",
  },
  {
    id: "haccp",
    title: "Conformité HACCP",
    subtitle: "Relevés automatisés",
    description: "Relevés de température digitaux. Fini les papiers, tout est enregistré et exportable pour les contrôles.",
    points: [
      "Relevés température frigo/congélateur",
      "Alertes si hors normes",
      "Historique complet",
      "Export PDF pour contrôles",
      "Rappels automatiques",
    ],
    icon: Thermometer,
    color: "teal",
    screenshot: "/screenshots/05-temperature.png",
  },
  {
    id: "livraisons",
    title: "Contrôle Livraisons",
    subtitle: "Suivi fournisseurs",
    description: "Contrôlez vos réceptions de marchandises. Conformité, température, traçabilité — tout est documenté.",
    points: [
      "Réception marchandises",
      "Contrôle température",
      "Photos de conformité",
      "Historique par fournisseur",
      "Alertes non-conformité",
    ],
    icon: Truck,
    color: "slate",
    screenshot: "/screenshots/11-delivery-control.png",
  },
  {
    id: "promos",
    title: "Codes Promo",
    subtitle: "Boostez vos ventes",
    description: "Créez des codes de réduction facilement. Pourcentage, montant fixe, livraison gratuite — vous décidez.",
    points: [
      "Codes pourcentage ou montant",
      "Durée de validité",
      "Limite d'utilisation",
      "Statistiques d'usage",
      "Codes uniques ou publics",
    ],
    icon: BadgePercent,
    color: "violet",
    screenshot: "/screenshots/12-promo-codes.png",
  },
];

const colorClasses: Record<string, { bg: string; border: string; text: string; gradient: string }> = {
  amber: { bg: "bg-amber-500/10", border: "border-amber-500/30", text: "text-amber-400", gradient: "from-amber-500/20" },
  green: { bg: "bg-green-500/10", border: "border-green-500/30", text: "text-green-400", gradient: "from-green-500/20" },
  purple: { bg: "bg-purple-500/10", border: "border-purple-500/30", text: "text-purple-400", gradient: "from-purple-500/20" },
  blue: { bg: "bg-blue-500/10", border: "border-blue-500/30", text: "text-blue-400", gradient: "from-blue-500/20" },
  indigo: { bg: "bg-indigo-500/10", border: "border-indigo-500/30", text: "text-indigo-400", gradient: "from-indigo-500/20" },
  orange: { bg: "bg-orange-500/10", border: "border-orange-500/30", text: "text-orange-400", gradient: "from-orange-500/20" },
  pink: { bg: "bg-pink-500/10", border: "border-pink-500/30", text: "text-pink-400", gradient: "from-pink-500/20" },
  red: { bg: "bg-red-500/10", border: "border-red-500/30", text: "text-red-400", gradient: "from-red-500/20" },
  cyan: { bg: "bg-cyan-500/10", border: "border-cyan-500/30", text: "text-cyan-400", gradient: "from-cyan-500/20" },
  emerald: { bg: "bg-emerald-500/10", border: "border-emerald-500/30", text: "text-emerald-400", gradient: "from-emerald-500/20" },
  teal: { bg: "bg-teal-500/10", border: "border-teal-500/30", text: "text-teal-400", gradient: "from-teal-500/20" },
  slate: { bg: "bg-slate-500/10", border: "border-slate-500/30", text: "text-slate-400", gradient: "from-slate-500/20" },
  violet: { bg: "bg-violet-500/10", border: "border-violet-500/30", text: "text-violet-400", gradient: "from-violet-500/20" },
};

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const heroOpacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);

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
            <a href="#fonctionnalites" className="text-sm text-white/60 hover:text-white transition">Fonctionnalités</a>
            <a href="#screenshots" className="text-sm text-white/60 hover:text-white transition">Aperçu</a>
            <a href="#tarifs" className="text-sm text-white/60 hover:text-white transition">Tarifs</a>
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
            <a href="#fonctionnalites" className="text-white/60 hover:text-white">Fonctionnalités</a>
            <a href="#screenshots" className="text-white/60 hover:text-white">Aperçu</a>
            <a href="#tarifs" className="text-white/60 hover:text-white">Tarifs</a>
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
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-amber-500/10 to-orange-500/10 rounded-full border border-amber-500/20 mb-8">
            <Zap className="w-4 h-4 text-amber-400" />
            <span className="text-sm text-amber-200">Solution complète pour restaurants</span>
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6">
            <span className="bg-gradient-to-r from-amber-300 via-orange-400 to-red-500 bg-clip-text text-transparent">
              BIMI
            </span>
          </h1>

          <p className="text-2xl md:text-3xl text-white/80 font-medium mb-4">
            La plateforme tout-en-un pour gérer votre restaurant
          </p>

          <p className="text-lg md:text-xl text-white/50 max-w-3xl mx-auto mb-12 leading-relaxed">
            Site client • Commandes en ligne • Dashboard admin • Planning • Pointage • RH • HACCP • Analytics
            <br />
            <span className="text-white/30">Tout ce dont vous avez besoin, dans une seule solution.</span>
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href="#contact"
              className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-black rounded-full font-semibold text-lg hover:opacity-90 transition shadow-lg shadow-amber-500/25"
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
              Exemple en production
            </a>
          </div>

          <p className="text-white/40 text-sm">
            Déjà utilisé par <span className="text-amber-400 font-medium">BIMI SUSHI</span> à Toulouse — 51k€ de CA, 1600+ commandes
          </p>
        </motion.div>
      </motion.section>

      {/* Features Overview */}
      <section className="py-20 px-6 border-y border-white/5 bg-gradient-to-b from-white/[0.02] to-transparent">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
            {[
              { icon: Globe, label: "Site Client", color: "amber" },
              { icon: ShoppingBag, label: "Commandes", color: "green" },
              { icon: CalendarDays, label: "Réservations", color: "blue" },
              { icon: Clock, label: "Pointage", color: "orange" },
              { icon: Users, label: "RH & Planning", color: "pink" },
              { icon: BarChart3, label: "Analytics", color: "emerald" },
              { icon: Shield, label: "HACCP", color: "teal" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col items-center gap-3 p-4"
              >
                <div className={`w-12 h-12 rounded-xl ${colorClasses[item.color].bg} ${colorClasses[item.color].border} border flex items-center justify-center`}>
                  <item.icon className={`w-6 h-6 ${colorClasses[item.color].text}`} />
                </div>
                <span className="text-sm text-white/60 text-center">{item.label}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Features with Screenshots */}
      <section id="fonctionnalites" className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Toutes les fonctionnalités
            </h2>
            <p className="text-xl text-white/50 max-w-2xl mx-auto">
              Une solution complète pensée pour la restauration. Chaque fonctionnalité répond à un besoin réel.
            </p>
          </motion.div>

          <div className="space-y-32">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              const colors = colorClasses[feature.color];
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={feature.id}
                  id={feature.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  className={`grid md:grid-cols-2 gap-12 items-center ${!isEven ? "md:grid-flow-dense" : ""}`}
                >
                  {/* Content */}
                  <div className={!isEven ? "md:col-start-2" : ""}>
                    <div className={`inline-flex items-center gap-2 px-4 py-2 ${colors.bg} rounded-full ${colors.border} border mb-6`}>
                      <Icon className={`w-4 h-4 ${colors.text}`} />
                      <span className={`text-sm ${colors.text}`}>{feature.subtitle}</span>
                    </div>

                    <h3 className="text-3xl md:text-4xl font-bold mb-4">{feature.title}</h3>
                    <p className="text-lg text-white/60 mb-8">{feature.description}</p>

                    <ul className="space-y-3">
                      {feature.points.map((point, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <div className={`w-5 h-5 rounded-full ${colors.bg} flex items-center justify-center mt-0.5 flex-shrink-0`}>
                            <Check className={`w-3 h-3 ${colors.text}`} />
                          </div>
                          <span className="text-white/70">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Screenshot */}
                  <div className={!isEven ? "md:col-start-1 md:row-start-1" : ""}>
                    {feature.screenshot ? (
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        transition={{ duration: 0.3 }}
                        className={`relative rounded-2xl overflow-hidden border ${colors.border} bg-gradient-to-br ${colors.gradient} to-transparent p-1`}
                      >
                        <div className="rounded-xl overflow-hidden bg-[#0a0a0a]">
                          <Image
                            src={feature.screenshot}
                            alt={feature.title}
                            width={800}
                            height={500}
                            className="w-full"
                          />
                        </div>
                      </motion.div>
                    ) : (
                      <div className={`relative rounded-2xl overflow-hidden border ${colors.border} bg-gradient-to-br ${colors.gradient} to-transparent p-8 min-h-[300px] flex items-center justify-center`}>
                        <div className="text-center">
                          <div className={`w-20 h-20 mx-auto mb-4 rounded-2xl ${colors.bg} flex items-center justify-center`}>
                            <Icon className={`w-10 h-10 ${colors.text}`} />
                          </div>
                          <p className="text-white/40">Interface personnalisée selon votre restaurant</p>
                        </div>
                      </div>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Screenshots Gallery */}
      <section id="screenshots" className="py-32 px-6 bg-gradient-to-b from-white/[0.02] to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Aperçu du Dashboard
            </h2>
            <p className="text-xl text-white/50">
              Interface moderne et intuitive, optimisée pour le quotidien en restaurant
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { src: "/screenshots/13-analytics-full.png", title: "Analytics & CA" },
              { src: "/screenshots/02-reservations.png", title: "Plan de salle" },
              { src: "/screenshots/09-products.png", title: "Gestion produits" },
              { src: "/screenshots/04-clock-in.png", title: "Pointage" },
              { src: "/screenshots/06-clients.png", title: "Base clients" },
              { src: "/screenshots/03-employee-stats.png", title: "Stats employés" },
              { src: "/screenshots/05-temperature.png", title: "HACCP" },
              { src: "/screenshots/08-notifications.png", title: "Notifications" },
              { src: "/screenshots/11-delivery-control.png", title: "Livraisons" },
              { src: "/screenshots/10-team-performance.png", title: "Performance équipe" },
              { src: "/screenshots/12-promo-codes.png", title: "Codes promo" },
              { src: "/screenshots/07-analytics.png", title: "Statistiques" },
            ].map((img, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="group relative rounded-xl overflow-hidden border border-white/10 hover:border-amber-500/30 transition-colors"
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  width={600}
                  height={400}
                  className="w-full transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <span className="text-white font-medium">{img.title}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why BIMI */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Pourquoi choisir BIMI ?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Zap,
                title: "Tout-en-un",
                description: "Plus besoin de jongler entre 10 outils différents. BIMI centralise tout : commandes, réservations, RH, analytics.",
              },
              {
                icon: Shield,
                title: "Adapté à la restauration",
                description: "Conçu par un développeur qui connaît le terrain. Chaque fonctionnalité répond à un besoin réel des restaurateurs.",
              },
              {
                icon: HeartHandshake,
                title: "Support dédié",
                description: "Accompagnement personnalisé pour la mise en place. Formation de votre équipe et support réactif.",
              },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-2xl bg-white/[0.03] border border-white/10"
              >
                <div className="w-14 h-14 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-white/60">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 px-6 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-white/40 text-sm uppercase tracking-wider mb-2">Résultats avec BIMI SUSHI</p>
            <p className="text-white/60">Premier restaurant équipé de BIMI</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "51 484€", label: "Chiffre d'affaires" },
              { value: "1 673", label: "Commandes traitées" },
              { value: "434+", label: "Clients fidélisés" },
              { value: "44%", label: "Taux de fidélité" },
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

      {/* Pricing */}
      <section id="tarifs" className="py-32 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Tarification simple
            </h2>
            <p className="text-xl text-white/50">
              Un tarif unique, toutes les fonctionnalités incluses
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-transparent border border-amber-500/20"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <p className="text-amber-400 font-medium mb-2">Licence BIMI</p>
                <p className="text-4xl md:text-5xl font-bold mb-4">Sur devis</p>
                <p className="text-white/60">Adapté à la taille de votre établissement</p>
              </div>
              <div className="flex-1 max-w-md">
                <ul className="space-y-3">
                  {[
                    "Site client personnalisé",
                    "Dashboard admin complet",
                    "Formation de l'équipe",
                    "Support prioritaire",
                    "Mises à jour incluses",
                    "Hébergement inclus",
                  ].map((item, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-green-400" />
                      <span className="text-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
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
                Demandez une démo gratuite et découvrez comment BIMI
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
                  className="px-8 py-4 bg-gradient-to-r from-amber-500 to-orange-600 text-black rounded-full font-semibold hover:opacity-90 transition whitespace-nowrap"
                >
                  Demander une démo
                </button>
              </form>
              <p className="text-white/40 text-sm mt-6">
                Ou contactez-moi directement : <a href="mailto:Mirakiramal@gmail.com" className="text-amber-400 hover:underline">Mirakiramal@gmail.com</a>
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
