FROM node:22

RUN apt-get update && \
    apt-get install -y \
    ffmpeg \
    python3 \
    python3-pip \
    python-is-python3

RUN pip3 install yt-dlp --break-system-packages

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN mkdir -p /app/downloads

EXPOSE 5003

CMD ["npm", "start"]