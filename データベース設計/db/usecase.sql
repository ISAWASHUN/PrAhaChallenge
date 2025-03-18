-- AliceがBobに1日おきにリマインダーを作成する場合

INSERT INTO reminders (creator_id, frequency_type_id, message, next_send_at)
VALUES (1, 2, 'test', '2025-03-01 10:00:00');

INSERT INTO reminder_frequency_xday (reminder_id, interval_days)
VALUES (5, 1);

INSERT INTO reminder_recipients (reminder_id, recipient_id)
VALUES (5, 2);
