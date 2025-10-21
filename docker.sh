# Stop and remove container only if it exists
docker stop iltentacolo-sullo-co 2>/dev/null || true
docker rm iltentacolo-sullo-co 2>/dev/null || true

# Debug: Print the current working directory and verify dist folder exists
echo "Current working directory: $(pwd)"
echo "Dist folder path: $(pwd)/dist"
echo "Dist folder contents:"
ls -la $(pwd)/dist/
echo "---"

docker run --name iltentacolo-sullo-co \
  --restart unless-stopped \
  -e VIRTUAL_HOST=iltentacolo.sullo.co \
  -e LETSENCRYPT_HOST=iltentacolo.sullo.co \
  -e LETSENCRYPT_EMAIL=iltentacolo@sullo.co \
  -v $(pwd)/dist:/usr/share/nginx/html:ro -d nginx
