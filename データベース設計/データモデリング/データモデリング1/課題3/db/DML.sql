INSERT INTO customers (name, phone_number)
VALUES
    ('山田太郎', '080-1234-5678'),
    ('鈴木花子', '080-9876-5432');

INSERT INTO menu_categories (category_name)
VALUES
    ('盛り込み'),
    ('お好みすし');

INSERT INTO menu_items (category_id, item_name, description, price)
VALUES
    (1, 'はな', '盛り込みセット「はな」', 1500),
    (2, 'あなご一本すし', 'あなごを一本まるごと使用したすし', 200),
    (2, 'うに', '新鮮なウニを使用した贅沢な一貫', 300);

INSERT INTO orders (customer_id, total_amount, payment_status, order_date)
VALUES
    (1, 3000, 'pending', CURRENT_TIMESTAMP),
    (2, 900, 'paid', CURRENT_TIMESTAMP);

INSERT INTO order_items (order_id, menu_item_id, quantity, unit_price)
VALUES
    (1, 1, 2, 1500),
    (2, 2, 3, 200),
    (2, 3, 1, 300);

INSERT INTO set_compositions (menu_item_id, item_id, item_quantity)
VALUES
    (1, 2, 2),
    (1, 3, 1);
