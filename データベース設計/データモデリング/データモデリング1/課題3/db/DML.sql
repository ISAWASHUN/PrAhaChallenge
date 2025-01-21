INSERT INTO customers (name, phone_number, created_at, updated_at)
VALUES
    ('山田太郎', '080-1234-5678', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('鈴木花子', '080-9876-5432', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO menu_categories (category_name, created_at, updated_at)
VALUES
    ('盛り込み', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('お好みすし', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO menu_items (category_id, item_name, description, price, created_at, updated_at)
VALUES
    (1, 'はな', '盛り込みセット「はな」', 1500, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (2, 'あなご一本すし', 'あなごを一本まるごと使用したすし', 200, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (2, 'うに', '新鮮なウニを使用した贅沢な一貫', 300, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO orders (customer_id, total_amount, payment_status, order_date, created_at, updated_at)
VALUES
    (1, 3000, 'pending', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (2, 900, 'paid', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO order_items (order_id, menu_item_id, quantity, unit_price, created_at, updated_at)
VALUES
    (1, 1, 2, 1500, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (2, 2, 3, 200, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (2, 3, 1, 300, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO set_compositions (menu_item_id, item_id, item_quantity, created_at, updated_at)
VALUES
    (1, 2, 2, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (1, 3, 1, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
