SELECT 
  parent.item_name AS set_menu_name,
  child.item_name  AS included_item,
  mic.child_quantity
FROM menu_item_components mic
JOIN menu_items parent ON mic.parent_item_id = parent.menu_item_id
JOIN menu_items child  ON mic.child_item_id = child.menu_item_id
WHERE parent.menu_item_id = 5;
