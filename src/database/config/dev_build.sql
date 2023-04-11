BEGIN;
DROP TABLE IF EXISTS category,
flavor,
candy,
users cascade;
CREATE TABLE category(
    id SERIAL PRIMARY key,
    name VARCHAR(50) not null,
    img_url VARCHAR(255) not null
);
CREATE TABLE flavor(
    id SERIAL PRIMARY key,
    name VARCHAR(50) not null,
    img_url VARCHAR(255) not null
);
CREATE TABLE candy (
    id SERIAL PRIMARY key,
    name VARCHAR(50) not null,
    quantity INTEGER DEFAULT(10),
    img_url VARCHAR(255) not null,
    price INTEGER DEFAULT(10),
    category_id INTEGER REFERENCES category(id),
    flavor_id INTEGER REFERENCES flavor(id)
);
CREATE TABLE users (
    id SERIAL PRIMARY key,
    username VARCHAR(30) UNIQUE not null,
    email VARCHAR(255) UNIQUE not null,
    password VARCHAR(255) not null,
    role VARCHAR(6) not null
);
-- INSERT INTO user (username, email,password,role) values('haitham','haitham@gmail.com','','admin');
INSERT INTO category (name, img_url)
values (
        'Gummy candies',
        'https://cdn.shopify.com/s/files/1/0614/8309/0107/collections/Gummy-Candy-CandyStore-com-652_360x.jpg?v=1677188146'
    ),
    (
        'Chocolate bars',
        'https://cdn.shopify.com/s/files/1/0614/8309/0107/collections/Candy-Bars-CandyStore-com-693_360x.jpg?v=1677187765'
    ),
    (
        'Hard candies',
        'https://cdn.shopify.com/s/files/1/0614/8309/0107/collections/Hard-Candy-CandyStore-com-830_360x.jpg?v=1677188338'
    ),
    (
        'Sour candies',
        'https://cdn.shopify.com/s/files/1/0614/8309/0107/collections/Sour-Candy-CandyStore-com-768_360x.jpg?v=1677188622'
    ),
    (
        'Jelly beans',
        'https://cdn.shopify.com/s/files/1/0614/8309/0107/collections/Jelly-Beans-CandyStore-com-605_360x.jpg?v=1677188344'
    ),
    (
        'Licorice',
        'https://cdn.shopify.com/s/files/1/0614/8309/0107/collections/Gummy-Candy-CandyStore-com-652_360x.jpg?v=1677188146'
    ),
    (
        'Caramels',
        'https://cdn.shopify.com/s/files/1/0614/8309/0107/collections/Gummy-Candy-CandyStore-com-652_360x.jpg?v=1677188146'
    ),
    (
        'Lollipops',
        'https://cdn.shopify.com/s/files/1/0614/8309/0107/collections/Lollipops-Suckers-CandyStore-com-40_360x.jpg?v=1677188441'
    ),
    (
        'Bubble gum',
        'https://cdn.shopify.com/s/files/1/0614/8309/0107/collections/Gummy-Candy-CandyStore-com-652_360x.jpg?v=1677188146'
    ),
    (
        'Taffy',
        'https://cdn.shopify.com/s/files/1/0614/8309/0107/collections/Gummy-Candy-CandyStore-com-652_360x.jpg?v=1677188146'
    );
INSERT INTO flavor (name, img_url)
values (
        'Chocolate',
        'https://cdn.shopify.com/s/files/1/0614/8309/0107/collections/Gummy-Candy-CandyStore-com-652_360x.jpg?v=1677188146'
    ),
    (
        'Fruit flavors',
        'https://cdn.shopify.com/s/files/1/0614/8309/0107/collections/Gummy-Candy-CandyStore-com-652_360x.jpg?v=1677188146'
    ),
    (
        'Mint',
        'https://cdn.shopify.com/s/files/1/0614/8309/0107/collections/Gummy-Candy-CandyStore-com-652_360x.jpg?v=1677188146'
    ),
    (
        'Caramel',
        'https://cdn.shopify.com/s/files/1/0614/8309/0107/collections/Gummy-Candy-CandyStore-com-652_360x.jpg?v=1677188146'
    ),
    (
        'Vanilla',
        'https://cdn.shopify.com/s/files/1/0614/8309/0107/collections/Gummy-Candy-CandyStore-com-652_360x.jpg?v=1677188146'
    ),
    (
        'Sour flavors',
        'https://cdn.shopify.com/s/files/1/0614/8309/0107/collections/Gummy-Candy-CandyStore-com-652_360x.jpg?v=1677188146'
    ),
    (
        'Licorice',
        'https://cdn.shopify.com/s/files/1/0614/8309/0107/collections/Gummy-Candy-CandyStore-com-652_360x.jpg?v=1677188146'
    ),
    (
        'Bubble gum',
        'https://cdn.shopify.com/s/files/1/0614/8309/0107/collections/Gummy-Candy-CandyStore-com-652_360x.jpg?v=1677188146'
    ),
    (
        'Peanut butter',
        'https://cdn.shopify.com/s/files/1/0614/8309/0107/collections/Gummy-Candy-CandyStore-com-652_360x.jpg?v=1677188146'
    ),
    (
        'Coconut',
        'https://cdn.shopify.com/s/files/1/0614/8309/0107/collections/Gummy-Candy-CandyStore-com-652_360x.jpg?v=1677188146'
    );
COMMIT;