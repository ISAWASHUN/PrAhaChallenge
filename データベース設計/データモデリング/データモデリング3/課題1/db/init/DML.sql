INSERT INTO users (name, email)
VALUES ('Alice', 'alice@example.com'),
       ('Bob', 'bob@example.com'),
       ('Charlie', 'charlie@example.com');

INSERT INTO directories (name)
VALUES ('Root');

INSERT INTO directory_ancestors (ancestor_directory_id, descendant_directory_id, depth)
VALUES (1, 1, 0);

INSERT INTO directories (name)
VALUES ('Projects');


INSERT INTO directory_ancestors (ancestor_directory_id, descendant_directory_id, depth)
SELECT ancestor_directory_id, 2, depth + 1
FROM directory_ancestors
WHERE descendant_directory_id = 1;

INSERT INTO directory_ancestors (ancestor_directory_id, descendant_directory_id, depth)
VALUES (2, 2, 0);

INSERT INTO documents (directory_id, title, content)
VALUES (2, 'Project Plan', 'This is the content of the project plan document.');

INSERT INTO document_edits (document_id, user_id, content)
VALUES (1, 2, 'Added a new section on timelines.');

INSERT INTO roles (role_name, description)
VALUES ('viewer', 'Can view documents'),
       ('editor', 'Can edit documents'),
       ('admin', 'Full administrative rights');
INSERT INTO document_permissions (user_id, document_id, role_id)
VALUES (2, 1, 2);
