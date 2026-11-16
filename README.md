# Franck Personal Hub

Dashboard personnel Next.js + TypeScript + Tailwind. La version actuelle est une première tranche fonctionnelle : dashboard responsive, données de démonstration, ajout et validation de tâches, suivi d’habitudes, graphique de productivité, mode sombre et persistance locale.

## Démarrer

```bash
npm install
npm run dev
```

Ouvrir http://localhost:3000.

## Données et Supabase

La démo fonctionne sans compte Supabase. Les tâches et habitudes sont conservées localement, et une base IndexedDB `franck-hub` est initialisée pour préparer le mode hors connexion. Pour brancher le compte personnel, copier `.env.example` vers `.env.local`, renseigner uniquement l’URL Supabase et la clé `anon` publique, puis appliquer [supabase/schema.sql](./supabase/schema.sql) dans l’éditeur SQL Supabase. Ne jamais mettre une clé `service_role` dans le navigateur.

Les données affichées au démarrage sont des données de démonstration et peuvent être remplacées progressivement par les modules Agenda, Objectifs, Formation IA, Projets, Budget, Santé et Rapports.
