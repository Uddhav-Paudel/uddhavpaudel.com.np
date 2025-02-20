# Use the official Nginx image from the Docker Hub
FROM nginx:alpine

# Copy custom configuration file from the current directory
# to the Nginx configuration directory
COPY default.conf /etc/nginx/nginx.conf

# Copy website static files to the Nginx web root directory
COPY html /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80 443

# Start Nginx when the container launches
CMD ["nginx", "-g", "daemon off;"]