FROM node:18

WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy the package.json and pnpm-lock.yaml files
COPY package.json pnpm-lock.yaml ./

# Install dependencies
RUN pnpm install

# Copy the rest
COPY . .

# Set port environment variable
ENV PORT=3000

# Expose the port so our computer can access it
EXPOSE 3000

# Run the app
CMD [ "pnpm", "start" ]