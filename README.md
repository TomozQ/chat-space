# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## usersテーブル
|column|Type|Options|
|------|----|-------|
|name|string|null: faulse|
|email|string|null: faulse|
|password|string|null: faulse|

### Association
has_many: groups, through: :groups_users
has_many: messages, through: :groups_messages


## groupsテーブル
|column|Type|Options|
|------|----|-------|
|name|string|null: faulse|

### Association
has_many: users, through: groups_users
has_many: messages, through: groups_messages


## groups_usersテーブル
|column|Type|Options|
|------|----|-------|
|group_id|integer|null: faulse, foreign_key: true|
|user_id|integer|null: faulse, foreign_key: true|

### Association
belongs_to: user
belongs_to: group


## messagesテーブル
|column|Type|Options|
|------|----|-------|
|text|text|null: faulse|
|user_id|integer|null: faulse, foreign_key: true|
|group_id|integer|null: faulse, foreign_key: true|

### Association
belongs_to :user
belongs_to :groups

