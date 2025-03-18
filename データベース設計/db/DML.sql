INSERT INTO users (slack_id, name, email)
VALUES 
  ('U001', 'Alice', 'alice@example.com'),
  ('U002', 'Bob', 'bob@example.com'),
  ('U003', 'Charlie', 'charlie@example.com');

INSERT INTO reminder_frequency_types (term)
VALUES 'daily','xday','weekly','monthly';

INSERT INTO reminders (creator_id, frequency_type_id, message, next_send_at)
VALUES (1, 1, 'Daily reminder: Check your tasks', '2025-03-01 09:00:00');

INSERT INTO reminder_frequency_daily (reminder_id, send_time)
VALUES (1, '09:00:00');

INSERT INTO reminders (creator_id, frequency_type_id, message, next_send_at)
VALUES (2, 2, 'Xday reminder: Submit your report', '2025-03-01 10:00:00');

INSERT INTO reminder_frequency_xday (reminder_id, interval_days)
VALUES (2, 3);

INSERT INTO reminders (creator_id, frequency_type_id, message, next_send_at)
VALUES (1, 3, 'Weekly reminder: Team meeting', '2025-03-02 09:00:00');

INSERT INTO reminder_frequency_weekly (reminder_id, weekday)
VALUES (3, 1);

INSERT INTO reminders (creator_id, frequency_type_id, message, next_send_at)
VALUES (3, 4, 'Monthly reminder: Submit expense report', '2025-03-15 09:00:00');

INSERT INTO reminder_frequency_monthly (reminder_id, day_of_month)
VALUES (4, 15);

INSERT INTO reminder_recipients (reminder_id, recipient_id)
VALUES (1, 2), (1, 3);
