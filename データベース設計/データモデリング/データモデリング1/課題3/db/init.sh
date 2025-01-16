#!/bin/bash

#--------------------------------------
# 環境設定（環境に合わせて書き換えてください）
#--------------------------------------
HOST="localhost"       # MySQLホスト名 (Dockerの場合: コンテナ名やサービス名)
USER="root"            # MySQLユーザー
PASS="root"            # MySQLパスワード
DB="mysql"          # 作成するデータベース名
DDL_FILE="DDL.sql"     # DDLファイル名
DML_FILE="DML.sql"     # DMLファイル名

#--------------------------------------
# 1. DB作成
# すでに存在しない場合だけ作成します
#--------------------------------------
echo ">>> Creating database if not exists: $DB"
mysql -h"$HOST" -u"$USER" -p"$PASS" -e "CREATE DATABASE IF NOT EXISTS \`$DB\` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;"

#--------------------------------------
# 2. DDL実行（テーブル作成）
#--------------------------------------
echo ">>> Running DDL: $DDL_FILE"
mysql -h"$HOST" -u"$USER" -p"$PASS" "$DB" < "$DDL_FILE"

#--------------------------------------
# 3. DML実行（サンプルデータ投入）
#--------------------------------------
echo ">>> Running DML: $DML_FILE"
mysql -h"$HOST" -u"$USER" -p"$PASS" "$DB" < "$DML_FILE"

#--------------------------------------
# 完了メッセージ
#--------------------------------------
echo ">>> Done! Database [$DB] initialized."
