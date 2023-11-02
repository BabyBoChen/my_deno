FROM denoland/deno:latest
COPY . .
EXPOSE 8080
CMD ["deno", "run", "--allow-all", "app.js"]