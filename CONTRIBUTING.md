# Contributing guidelines & steps

If you know how to manipulate pages using javascript functions to click something, change the innerHTML of a paragraph or div, and can do this with using the classes, names, or id that the scratch developers give it, then feel free to make a pull request adding a new bookmarklet.

## Filing Issues:

When making the issue try to use one of the templates there and fill all of it out. If not, empty one and make a new issue from that. Any spam issues will be closed/deleted.

## Making pull requests:

If you are fixing a bug that is not labeled `in-progress` then fork the repository and make a new branch and fix the bug on that branc. make the pull request and it will get reviewed as soon as it can.
<br>If it is for making a new bookmarklet, make a new branch on your fork that follows the steps for a new bookmarklet.

## Steps for a new bookmarklet:

Each pull request with a new bookmarklet should change/add a few things.

- Make a new directory in the `/bookmarklets` directory. Name the new directory something short like `goto-user`.
- Edit the file `/bookmarklets/bookmarklets.json` and add another row containing the name of the new directory. If you do not add it here the files for the bookmarklet will exist but will not display on the website at [bookmarklets.html](https://scratch-bookmarklets.github.io/bookmarklets.html).
- In the directory create the file `bookmarklet.js` and add the bookmarklet code into the file here. Do not add the `javascript:` before the code, our system does that automatically.
- Also in the new directory create the file `manifest.json`. The file should be formatted like this:
  `{ "name": "<bookmarklet name here>", "authors": [ { "name": "<what you want your name to display as>", "url": "https://<what website you want your name to link to (scratch, github, etc.)>" } ] }` you should also separate the lines.
- Now make a pull request and wait for it to get reviewed.
