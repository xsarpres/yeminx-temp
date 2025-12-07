create table restaurants (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  slug text unique not null,
  phone text,
  email text,
  address text,
  hours jsonb,
  delivery_fee int default 0,
  min_order int default 0,
  created_at timestamptz default now()
);

create table categories (
  id uuid primary key default gen_random_uuid(),
  restaurant_id uuid references restaurants(id) on delete cascade,
  name text not null,
  sort int default 0
);

create table products (
  id uuid primary key default gen_random_uuid(),
  category_id uuid references categories(id) on delete cascade,
  name text not null,
  description text,
  price int not null, -- kuruş
  image_url text,
  available boolean default true,
  sort int default 0
);

create table variants (
  id uuid primary key default gen_random_uuid(),
  product_id uuid references products(id) on delete cascade,
  name text not null, -- örn "Hamur"
  options jsonb not null -- [{"label":"İnce","price":0}, ...]
);