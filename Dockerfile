# Use the official Playwright image with version 1.32.0 based on Ubuntu focal
FROM mcr.microsoft.com/playwright:v1.32.0-focal

# Set the working directory inside the container to /tests
WORKDIR /tests

# Copy the contents of the current directory to /tests in the container
COPY . /tests

# Run npm install to install the necessary Node.js dependencies
# Then, use npx to install Playwright dependencies
RUN npm install && npx playwright install

# Define the default command to run when the container starts
# Run Playwright tests using the "list" reporter
CMD ["npx", "playwright", "test", "--reporter=list"]
