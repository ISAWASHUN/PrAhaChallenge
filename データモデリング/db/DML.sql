INSERT INTO articles (title, description, created_at, updated_at)
VALUES ('サンプル記事', 'これはサンプルの本文です。', NOW(), NOW());

INSERT INTO article_history (article_id, version, title, description, created_at, updated_at)
VALUES (1, 1, 'サンプル記事', 'これはサンプルの本文です。', NOW(), NOW());

INSERT INTO article_history (article_id, version, title, description, created_at, updated_at)
VALUES (1, 2, '更新後タイトル', '更新後の本文です。', NOW(), NOW());

UPDATE articles
SET title = '更新後タイトル',
    description = '更新後の本文です。',
    updated_at = NOW()
WHERE article_id = 1;
