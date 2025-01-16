-- customers テーブル
CREATE TABLE customers (
  customer_id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  phone_number VARCHAR(50),
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- orders テーブル
CREATE TABLE orders (
  order_id INT AUTO_INCREMENT PRIMARY KEY,
  customer_id INT NOT NULL,
  payment_status VARCHAR(20) NOT NULL DEFAULT 'unpaid',
  order_date DATETIME NOT NULL,
  note TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_orders_customer 
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

-- menu_categories テーブル
CREATE TABLE menu_categories (
  category_id INT AUTO_INCREMENT PRIMARY KEY,
  category_name VARCHAR(100) NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

-- menu_items テーブル
CREATE TABLE menu_items (
  menu_item_id INT AUTO_INCREMENT PRIMARY KEY,
  category_id INT NOT NULL,
  item_name VARCHAR(100) NOT NULL,
  base_price DECIMAL(10,2) NOT NULL,
  is_set_menu BOOLEAN NOT NULL DEFAULT FALSE,
  description TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_menu_items_category 
    FOREIGN KEY (category_id) REFERENCES menu_categories(category_id)
);

-- menu_item_components テーブル(セットメニュー内の構成)
CREATE TABLE menu_item_components (
  menu_item_component_id INT AUTO_INCREMENT PRIMARY KEY,
  parent_item_id INT NOT NULL,
  child_item_id INT NOT NULL,
  child_quantity INT NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_parent_menu_item 
    FOREIGN KEY (parent_item_id) REFERENCES menu_items(menu_item_id),
  CONSTRAINT fk_child_menu_item 
    FOREIGN KEY (child_item_id) REFERENCES menu_items(menu_item_id)
);

-- order_items テーブル (旧: order_details)
CREATE TABLE order_items (
  order_item_id INT AUTO_INCREMENT PRIMARY KEY,
  order_id INT NOT NULL,
  menu_item_id INT NOT NULL,
  quantity INT NOT NULL,
  wasabi_nuki BOOLEAN NOT NULL DEFAULT FALSE,
  unit_price DECIMAL(10,2) NOT NULL,
  subtotal DECIMAL(10,2) NOT NULL,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  CONSTRAINT fk_order_items_order 
    FOREIGN KEY (order_id) REFERENCES orders(order_id),
  CONSTRAINT fk_order_items_menu 
    FOREIGN KEY (menu_item_id) REFERENCES menu_items(menu_item_id)
);
