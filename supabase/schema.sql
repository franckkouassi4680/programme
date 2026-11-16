-- Franck Personal Hub : schéma de départ Supabase
create extension if not exists "pgcrypto";

create table if not exists public.tasks (
  id uuid primary key default gen_random_uuid(), user_id uuid references auth.users(id) on delete cascade not null,
  title text not null, category text default 'Personnel', priority text default 'Moyenne', due_date date,
  notes text, status text default 'À faire', created_at timestamptz default now(), updated_at timestamptz default now()
);
create table if not exists public.habits (
  id uuid primary key default gen_random_uuid(), user_id uuid references auth.users(id) on delete cascade not null,
  title text not null, color text default 'violet', created_at timestamptz default now()
);
create table if not exists public.habit_logs (
  id uuid primary key default gen_random_uuid(), habit_id uuid references public.habits(id) on delete cascade not null,
  user_id uuid references auth.users(id) on delete cascade not null, log_date date not null, completed boolean default true,
  unique(habit_id, log_date)
);
create table if not exists public.goals (
  id uuid primary key default gen_random_uuid(), user_id uuid references auth.users(id) on delete cascade not null,
  title text not null, description text, period text default 'Mensuel', due_date date, priority text default 'Moyenne', progress integer default 0 check(progress between 0 and 100)
);
create table if not exists public.transactions (
  id uuid primary key default gen_random_uuid(), user_id uuid references auth.users(id) on delete cascade not null,
  kind text not null check(kind in ('revenu', 'depense', 'epargne')), amount numeric not null, category text, transaction_date date default current_date, note text
);

alter table public.tasks enable row level security; alter table public.habits enable row level security; alter table public.habit_logs enable row level security; alter table public.goals enable row level security; alter table public.transactions enable row level security;
create policy "own tasks" on public.tasks for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "own habits" on public.habits for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "own habit logs" on public.habit_logs for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "own goals" on public.goals for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "own transactions" on public.transactions for all using (auth.uid() = user_id) with check (auth.uid() = user_id);
