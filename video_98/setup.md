## How to set up the tailwind css

Step 1: Run the following commands
Install Tailwind CSS
Install tailwindcss and @tailwindcss/cli via npm.

```npm install tailwindcss @tailwindcss/cli```
step2 : Import Tailwind in your CSS
Add the @import "tailwindcss"; import to your main CSS file.

@import "tailwindcss";


step 3: Start the Tailwind CLI build process
Run the CLI tool to scan your source files for classes and build your CSS.

``` npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch```

step 4: Start using Tailwind in your HTML
Add your compiled CSS file to the <head> and start using Tailwind’s utility classes to style your content.

<!doctype html>
<html>
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link href="./output.css" rel="stylesheet">
</head>
<body>
  <h1 class="text-3xl font-bold underline">
    Hello world!
  </h1>
</body>
</html>
