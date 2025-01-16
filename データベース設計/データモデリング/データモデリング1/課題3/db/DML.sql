-- customers
INSERT INTO customers (name, phone_number) VALUES
  ('山田太郎', '090-1234-5678'),
  ('鈴木花子', '080-9999-8888');

-- menu_categories
INSERT INTO menu_categories (category_name) VALUES
  ('にぎり'),
  ('盛り込み'),
  ('セット');

-- menu_items (単品アイテム)
INSERT INTO menu_items (category_id, item_name, base_price, is_set_menu, description) VALUES
  (1, 'まぐろ', 120.00, FALSE, '定番にぎり'),     -- category_id=1 → 'にぎり'
  (1, 'はまち', 100.00, FALSE, '人気にぎり'),
  (1, 'サーモン', 100.00, FALSE, '脂がのったサーモン'),
  (2, '上盛り合わせ', 1000.00, TRUE, '色々入った盛り合わせ'),
  (3, 'はなセット', 1500.00, TRUE, '人気のセットメニュー');

-- menu_item_components (セットメニューの内訳)
-- 例: はなセット(menu_item_id=5)に、まぐろ2貫( menu_item_id=1 )・はまち1貫( menu_item_id=2 ) が入っているetc
INSERT INTO menu_item_components (parent_item_id, child_item_id, child_quantity) VALUES
  (5, 1, 2),   -- はなセットに まぐろ 2貫
  (5, 2, 1);   -- はなセットに はまち 1貫

-- orders
INSERT INTO orders (customer_id, payment_status, order_date, note) VALUES
  (1, 'unpaid', '2025-01-03 12:00:00', 'テイクアウト'), 
  (2, 'unpaid', '2025-01-03 13:00:00', '電話予約');

-- order_items (今回は簡単に2件ずつ入れる)
INSERT INTO order_items (order_id, menu_item_id, quantity, wasabi_nuki, unit_price, subtotal) VALUES
  -- 1件目の注文( order_id=1 ): はなセットx1, まぐろx2
  (1, 5, 1, FALSE, 1500.00, 1500.00),   -- はなセット
  (1, 1, 2, TRUE, 120.00, 240.00),     -- まぐろ2貫(わさび抜き)
  -- 2件目の注文( order_id=2 ): 上盛り合わせx1, サーモンx3
  (2, 4, 1, FALSE, 1000.00, 1000.00),  -- 上盛り合わせ
  (2, 3, 3, FALSE, 100.00, 300.00);    -- サーモン3貫
