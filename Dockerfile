FROM nginx:stable-bullseye

RUN apt-get update \
  && apt-get install -y --no-install-recommends \
  curl \
  wget \
  gnupg \
  ca-certificates \
  locales \
  gcc \
  build-essential \
  git \
  vim \
  openssh-client \
  && apt-get clean \
  && rm -rf /var/lib/apt/lists/*

# ロケール設定
ENV LANG ja_JP.UTF-8 
RUN sed -i -e 's/# \(ja_JP.UTF-8\)/\1/' /etc/locale.gen \
  && locale-gen

# node, npm, npxを使えるようにする
RUN wget https://nodejs.org/dist/v20.11.0/node-v20.11.0-linux-x64.tar.xz \
    && tar xfv node-v20.11.0-linux-x64.tar.xz \
    && mv node-v20.11.0-linux-x64/bin/node /usr/local/bin/node \
    && ln -s /node-v20.11.0-linux-x64/lib/node_modules/npm/bin/npm-cli.js /usr/local/bin/npm \
    && ln -s /node-v20.11.0-linux-x64/lib/node_modules/npm/bin/npx-cli.js /usr/local/bin/npx

# 開発用ユーザー設定
ARG userid=1000
RUN useradd -s /bin/bash -u ${userid} node
WORKDIR /home/node/frontend
COPY . /home/node/frontend
RUN chown -R ${userid}:${userid} /home/node/
USER node
# 開発用コマンドラインの見た目綺麗にする
RUN bash -c "$(curl -fsSL https://raw.githubusercontent.com/ohmybash/oh-my-bash/master/tools/install.sh)"
COPY dev/.bashrc /home/node/.bashrc


# reactアプリケーションをビルドしてnginxのドキュメントルートに配置
USER root
COPY ./frontend /home/node/frontend
RUN rm -rf /usr/share/nginx/html/* \
  cd /home/node/frontend \
  npm ci \
  npm run build \
  mv /home/node/frontend/dist /usr/share/nginx/html \
  chown -R nginx:nginx /usr/share/nginx/html

# 非ルートユーザーで起動
COPY ./nginx/nginx.conf /etc/nginx/nginx.conf
COPY ./nginx/conf.d/default.conf /etc/nginx/conf.d/default.conf
USER nginx
CMD ["/usr/sbin/nginx", "-g", "daemon off;"]
