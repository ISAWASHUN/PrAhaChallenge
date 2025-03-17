#  「Root」以下のすべてのディレクトリに属するドキュメントの一覧を取得
SELECT d.*
FROM directory_ancestors da
JOIN documents d ON da.descendant_directory_id = d.directory_id
WHERE da.ancestor_directory_id = 1
  AND da.depth >= 1;
