FROM mysql:8.0

COPY my.cnf /etc/mysql/conf.d/my.cnf

RUN apt-get update && apt-get install -y locales  
RUN sed -i -E 's/# (ja\_JP.UTF-8)/\\1/' /etc/locale.gen && locale-gen  
ENV LANG ja\_JP.UTF-8

ENV LC_ALL ja_JP.UTF-8

ENV TZ Asia/Tokyo
ENV LANG=ja_JP.UTF-8

CMD ["mysqld"]

EXPOSE 3306
