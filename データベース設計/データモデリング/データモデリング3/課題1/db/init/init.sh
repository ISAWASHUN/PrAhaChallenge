#!/bin/bash
set -e

echo "==== Starting init.sh: executing DDL.sql and DML.sql ===="

psql -v ON_ERROR_STOP=1 \
     --username "$POSTGRES_USER" \
     --dbname   "$POSTGRES_DB" \
     -f /docker-entrypoint-initdb.d/DDL.sql

psql -v ON_ERROR_STOP=1 \
     --username "$POSTGRES_USER" \
     --dbname   "$POSTGRES_DB" \
     -f /docker-entrypoint-initdb.d/DML.sql

echo "==== Finished init.sh ===="
