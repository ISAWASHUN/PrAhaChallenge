CREATE TABLE customers (
    customer_id  SERIAL        PRIMARY KEY,
    name         VARCHAR(100),
    phone_number VARCHAR(20),
    created_at   TIMESTAMP     NOT NULL,
    updated_at   TIMESTAMP     NOT NULL
);

CREATE TABLE menu_categories (
    category_id   SERIAL        PRIMARY KEY,
    category_name VARCHAR(100)  NOT NULL,
    created_at    TIMESTAMP     NOT NULL,
    updated_at    TIMESTAMP     NOT NULL
);

CREATE TABLE menu_items (
    menu_item_id SERIAL        PRIMARY KEY,
    category_id  INT           NOT NULL,
    item_name    VARCHAR(100)  NOT NULL,
    description  TEXT,
    price        INT           NOT NULL,
    created_at   TIMESTAMP     NOT NULL,
    updated_at   TIMESTAMP     NOT NULL,
    FOREIGN KEY (category_id)
        REFERENCES menu_categories (category_id)
);

CREATE TABLE orders (
    order_id       SERIAL       PRIMARY KEY,
    customer_id    INT          NOT NULL,
    total_amount   INT          NOT NULL,
    payment_status VARCHAR(50)  NOT NULL,
    order_date     TIMESTAMP    NOT NULL,
    created_at     TIMESTAMP    NOT NULL,
    updated_at     TIMESTAMP    NOT NULL,
    FOREIGN KEY (customer_id)
        REFERENCES customers (customer_id)
);

CREATE TABLE order_items (
    order_item_id SERIAL        PRIMARY KEY,
    order_id      INT           NOT NULL,
    menu_item_id  INT           NOT NULL,
    quantity      INT           NOT NULL,
    unit_price    INT           NOT NULL,
    created_at    TIMESTAMP     NOT NULL,
    updated_at    TIMESTAMP     NOT NULL,
    FOREIGN KEY (order_id)
        REFERENCES orders (order_id),
    FOREIGN KEY (menu_item_id)
        REFERENCES menu_items (menu_item_id)
);

CREATE TABLE set_compositions (
    composition_id SERIAL     PRIMARY KEY,
    menu_item_id   INT        NOT NULL,
    item_id        INT        NOT NULL,
    item_quantity  INT        NOT NULL,
    created_at     TIMESTAMP  NOT NULL,
    updated_at     TIMESTAMP  NOT NULL,
    FOREIGN KEY (menu_item_id)
        REFERENCES menu_items (menu_item_id),
    FOREIGN KEY (item_id)
        REFERENCES menu_items (menu_item_id)
);
