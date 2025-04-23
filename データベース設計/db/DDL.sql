CREATE TABLE users (
    user_id    INT PRIMARY KEY AUTO_INCREMENT,
    slack_id   VARCHAR(50) NOT NULL UNIQUE,
    name       VARCHAR(255) NOT NULL,
    email      VARCHAR(255),
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE reminders (
    reminder_id        INT PRIMARY KEY AUTO_INCREMENT,
    creator_id         INT NOT NULL,
    message            TEXT NOT NULL,
    frequency_type_id  INT NOT NULL,
    next_send_at       DATETIME NOT NULL,
    created_at         DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at         DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    CONSTRAINT fk_reminder_creator FOREIGN KEY (creator_id)
        REFERENCES users(user_id) ON DELETE CASCADE,
    CONSTRAINT fk_reminder_frequency FOREIGN KEY (frequency_type_id)
        REFERENCES reminder_frequency_types(frequency_type_id) ON DELETE RESTRICT
);

CREATE INDEX idx_reminders_next_send_at ON reminders(next_send_at);

CREATE TABLE reminder_frequency_types (
    frequency_type_id INT PRIMARY KEY AUTO_INCREMENT,
    term              VARCHAR(20) NOT NULL UNIQUE,
);

CREATE TABLE reminder_frequency_daily (
    reminder_id INT PRIMARY KEY,
    send_time   TIME NOT NULL,
    CONSTRAINT fk_daily_reminder FOREIGN KEY (reminder_id)
        REFERENCES reminders(reminder_id) ON DELETE CASCADE
);

CREATE TABLE reminder_frequency_xday (
    reminder_id  INT PRIMARY KEY,
    interval_days INT NOT NULL,
    CONSTRAINT fk_xday_reminder FOREIGN KEY (reminder_id)
        REFERENCES reminders(reminder_id) ON DELETE CASCADE
);

CREATE TABLE reminder_frequency_weekly (
    reminder_id INT PRIMARY KEY,
    weekday     TINYINT NOT NULL,
    CONSTRAINT fk_weekly_reminder FOREIGN KEY (reminder_id)
        REFERENCES reminders(reminder_id) ON DELETE CASCADE
);

CREATE TABLE reminder_frequency_monthly (
    reminder_id INT PRIMARY KEY,
    day_of_month TINYINT NOT NULL,
    CONSTRAINT fk_monthly_reminder FOREIGN KEY (reminder_id)
        REFERENCES reminders(reminder_id) ON DELETE CASCADE
);

CREATE TABLE reminder_recipients (
    reminder_id INT NOT NULL,
    recipient_id INT NOT NULL,
    PRIMARY KEY (reminder_id, recipient_id),
    CONSTRAINT fk_rr_reminder FOREIGN KEY (reminder_id)
        REFERENCES reminders(reminder_id) ON DELETE CASCADE,
    CONSTRAINT fk_rr_recipient FOREIGN KEY (recipient_id)
        REFERENCES users(user_id) ON DELETE CASCADE
);
