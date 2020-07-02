create table buyers (
  id serial primary key,
  username varchar NOT NULL,
  game varchar NOT NULL,
  tickets integer,
  price integer NOT NULL,
  section varchar
);

create table sellers (
  id serial primary key,
  username varchar NOT NULL,
  game varchar NOT NULL,
  tickets integer,
  price integer NOT NULL,
  section varchar
);

create table users (
  id serial primary key,
  first varchar NOT NULL,
  last varchar NOT NULL,
  email varchar NOT NULL,
  username varchar NOT NULL,
  password varchar NOT NULL,
  venmo varchar,
  confirmed boolean
);

create table tickets (
  id serial primary key,
  type varchar NOT NULL,
  username varchar NOT NULL,
  game varchar NOT NULL,
  tickets integer,
  price integer NOT NULL,
  section varchar
);
