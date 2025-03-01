CREATE TABLE articles (
    article_id INT NOT NULL AUTO_INCREMENT,
    title VARCHAR(20) NOT NULL,
    description TEXT NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (article_id)
) ENGINE=InnoDB;

CREATE TABLE article_histories (
    article_histories_id INT NOT NULL AUTO_INCREMENT,
    article_id INT NOT NULL,
    version INT NOT NULL,
    title VARCHAR(20) NOT NULL,
    description TEXT NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (article_histories_id),
    CONSTRAINT fk_article
      FOREIGN KEY (article_id)
      REFERENCES articles(article_id)
      ON DELETE CASCADE
) ENGINE=InnoDB;
