<center>

<p align="center">

<img align="center" height="100px" alt="logo" src="./dist/VALARIUM.45a3c626.png">


We help people of all ages get into tech with ease.

</p>

</center>
<hr/>

This repo contains the source code for the official website of [Valarium](valarium.netlify.com).

## Contributing
Contributions of all types are welcome, as long as they're not opinionated or based on nonsense. Some sass would be allowed, though. It's preferrable that you open issues before pull-requests, this is to prevent changes that won't be taken into account nor approved, and to prevent you and I from wasting each other's time.

## Stack
I used Pug for templating and Sass(indented syntax) for the ease of use and to prevent myself from wasting too much time. I've also gone with Parcel to try it out, and it turned out just perfect for this kinda project. Source code can be found in the `src` folder.

There are a few things to note:
- `Components`: Reuseable piece of code. Mainly Pug. To avoid copying the same meta in every single page, you can instead import them.
- `Variables`: Sass variables that are used in multiple Sass files, mainly `styles`.
- Naming: Each Pug page imports the `styles.sass` file which enforces consistent styling across the website. And also could import a specific `<pagename>.sass` file that is specific to only that page.

I also used Netlify's forms to avoid using any JS in this code. *wink*


## Guidelines for commits
Commits follow a schema that's defined as `[<type>] <commit_message>`, where `<type>` is one of:
- `Bug`: Bug fixes and commits related to them
- `Feature`: Feature updates and incremental additions
- `Docs`: Documentation updates
- `Config`: Configuration changes
- `Amend`: Fixing older commits and/or rebasing them
- `Refactor`: Self-explanatory

## License
This codebase is licensed under the Mozilla Public License Version 2.0 which grants the following:
- Commercial use
- Distribution
- Modification
- Patent use
- Private use

Under the following conditions:
- Disclose source
- License and copyright notice
- Same license (file)

With the following limitations:
- Liability
- Trademark use
- Warranty

For the full copy of the lisence see the `LICENSE` file in the root directory of this repo.
