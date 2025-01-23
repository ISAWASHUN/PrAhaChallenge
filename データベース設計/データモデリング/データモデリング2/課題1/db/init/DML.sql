INSERT INTO users (name, email, created_at, updated_at)
VALUES
    ('Alice', 'alice@example.com', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Bob',   'bob@example.com',   CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('Charlie','charlie@example.com',CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO channels (channel_name, is_public, created_at, updated_at)
VALUES
    ('general', TRUE,  CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    ('random',  FALSE, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO messages (user_id, channel_id, content, created_at, updated_at)
VALUES
    (1, 1, 'Hello, I am Alice!',  CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (2, 1, 'Hi, I am Bob!',       CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (3, 2, 'Hey there, I am Charlie in random!', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);

INSERT INTO messages_threads (message_id, user_id, content, created_at, updated_at)
VALUES
    (1, 2, 'Bob replies to Alice here.',   CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (2, 1, 'Alice replies to Bob here.',   CURRENT_TIMESTAMP, CURRENT_TIMESTAMP),
    (3, 1, 'Alice starts a thread in random.', CURRENT_TIMESTAMP, CURRENT_TIMESTAMP);
