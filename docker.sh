# Stop and remove container only if it exists
docker stop iltentacolo-sullo-co 2>/dev/null || true
docker rm iltentacolo-sullo-co 2>/dev/null || true

docker run --name iltentacolo-sullo-co \
  --restart unless-stopped \
  -e VIRTUAL_HOST=iltentacolo.sullo.co \
  -e LETSENCRYPT_HOST=iltentacolo.sullo.co \
  -e LETSENCRYPT_EMAIL=iltentacolo@sullo.co \
  -v $(pwd)/dist:/usr/share/nginx/html:ro \
  -v $(pwd)/nginx.conf:/etc/nginx/conf.d/default.conf:ro \
  -d nginx
