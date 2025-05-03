INSERT INTO users (name, email)
VALUES
    ('Alice', 'alice@example.com'),
    ('Bob',   'bob@example.com'),
    ('Charlie','charlie@example.c);

INSERT INTO channels (channel_name, is_public)
VALUES
    ('general', TRUE),
    ('random',  FALSE);

INSERT INTO messages (user_id, channel_id, content)
VALUES
    (1, 1, 'Hello, I am Alice!),
    (2, 1, 'Hi, I am Bob!',),
    (3, 2, 'Hey there, I am Charlie in random!');

INSERT INTO messages_threads (message_id, user_id, content)
VALUES
    (1, 2, 'Bob replies to Alice here.'),
    (2, 1, 'Alice replies to Bob here.'),
    (3, 1, 'Alice starts a thread in random.');

INSERT INTO workspace (user_id, name)
VALUES
    (1, 'Alice''workspace1'),
    (2, 'Bob''workspace2'),
    (3, 'Charlie''s workspace3');
