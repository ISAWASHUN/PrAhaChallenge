-- 特定のversionの記事を取得する
-- @param article_id 記事ID
-- @param version バージョン

SELECT *
FROM article_history
WHERE article_id = :article_id
  AND version = :version;
