#!/bin/bash
set -e

echo "==== Starting init.sh: executing DDL.sql and DML.sql ===="

# 1) DDL.sql を実行 (テーブルやインデックスを作成)
psql -v ON_ERROR_STOP=1 \
     --username "$POSTGRES_USER" \
     --dbname   "$POSTGRES_DB" \
     -f /docker-entrypoint-initdb.d/DDL.sql

# 2) DML.sql を実行 (初期データINSERTなど)
psql -v ON_ERROR_STOP=1 \
     --username "$POSTGRES_USER" \
     --dbname   "$POSTGRES_DB" \
     -f /docker-entrypoint-initdb.d/DML.sql

echo "==== Finished init.sh ===="
