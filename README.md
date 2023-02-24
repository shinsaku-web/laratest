# Laravel を AWS で動かしてみる

## 題材

-   商品管理システム

## 仕様

-   CRUD 機能

## DB

### 商品テーブル(Item)

-   id
-   category_id
-   name
-   price
-   created_at
-   updated_at

### 商品カテゴリ(Category)

-   id
-   name
-   created_at
-   updated_at

## ページ構成

### 商品

-   一覧
-   登録
-   更新 & 削除

### カテゴリー

-   一覧のみ、CRUD 全てここで対応
