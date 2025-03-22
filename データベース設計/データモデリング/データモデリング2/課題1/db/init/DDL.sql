CREATE TABLE users (
    user_id    SERIAL      PRIMARY KEY,
    name       VARCHAR(255) NOT NULL,
    email      VARCHAR(255) NOT NULL,
    created_at TIMESTAMP   NOT NULL,
    updated_at TIMESTAMP   NOT NULL
);

CREATE TABLE channels (
    channel_id   SERIAL       PRIMARY KEY,
    channel_name VARCHAR(255) NOT NULL,
    is_public    BOOLEAN       NOT NULL DEFAULT TRUE,
    created_at   TIMESTAMP    NOT NULL,
    updated_at   TIMESTAMP    NOT NULL
);

CREATE TABLE messages (
    message_id    SERIAL      PRIMARY KEY,
    user_id       INT         NOT NULL,
    channel_id    INT         NOT NULL,
    content       VARCHAR(255) NOT NULL,
    created_at    TIMESTAMP   NOT NULL,
    updated_at    TIMESTAMP   NOT NULL,
    CONSTRAINT fk_messages_user_id
        FOREIGN KEY (user_id)
        REFERENCES users(user_id),
    CONSTRAINT fk_messages_channel_id
        FOREIGN KEY (channel_id)
        REFERENCES channels(channel_id)
);

CREATE TABLE messages_threads (
    message_thread_id SERIAL      PRIMARY KEY,
    message_id        INT         NOT NULL,
    content           VARCHAR(255) NOT NULL,
    created_at        TIMESTAMP   NOT NULL,
    updated_at        TIMESTAMP   NOT NULL,
    CONSTRAINT fk_messages_threads_message_id
        FOREIGN KEY (message_id)
        REFERENCES messages(message_id)
);

CREATE TABLE workspaces (
    workspace_id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL
);

CREATE TABLE workspace_users (
    workspace_user_id SERIAL PRIMARY KEY,
    workspace_id INT NOT NULL,
    user_id INT NOT NULL,
    created_at TIMESTAMP NOT NULL,
    updated_at TIMESTAMP NOT NULL,
    CONSTRAINT fk_workspace_users_workspace_id
        FOREIGN KEY (workspace_id)
        REFERENCES workspaces(workspace_id),
    CONSTRAINT fk_workspace_users_user_id
        FOREIGN KEY (user_id)
        REFERENCES users(user_id)
);
