# Contributing Guide


Contributions are welcome, and they are greatly appreciated! Every little bit
helps, and credit will always be given.

You can contribute in many ways:

## Types of Contributions

### Report Bugs

Report bugs at [The Book of Games issues page][thebookofgames-issues].

If you are reporting a bug, please include:

* Your operating system name and version.
* Any details about your local setup that might be helpful in troubleshooting.
* Detailed steps to reproduce the bug.

### Fix Bugs

Look through the GitHub issues for bugs. Anything tagged with "bug" and "help
wanted" is open to whoever wants to implement it.

### Implement Features

Look through the GitHub issues for features. Anything tagged with "enhancement"
and "help wanted" is open to whoever wants to implement it.

### Write Documentation

`thebooksofgames` could always use more documentation, whether as part of the
official thebooksofgames docs, in docstrings, or even on the web in blog posts,
articles, and such.

### Write Articles

Consider to write a game review article! All the game reviews are stored at
`/docs/game-reviews`. Feel free to use any of the articles as a reference or
start a new one from one template stored at `/docs/templates`.

Check the section {doc}`/about/criteria` for more information about article criteria.

### Submit Feedback

The best way to send feedback is to file an issue at [The Book of Games issues page][thebookofgames-issues].

If you are proposing a feature:

* Explain in detail how it would work.
* Keep the scope as narrow as possible, to make it easier to implement.
* Remember that this is a volunteer-driven project, and that contributions
  are welcome :)

### Get Started!

Ready to contribute? Here's how to set up `thebooksofgames` for local development.

* Fork the `thebooksofgames` repo on GitHub.
* Clone your fork locally:
```{sourceCode} console
    $ git clone git@github.com:your_name_here/thebooksofgames.git
```
* Install your local copy into a virtual environment. Assuming want to use conda environment, this is how you set up your fork for local development:
```{sourceCode} console
    $ conda env create -n thebooksofgames-dev
    $ conda activate thebooksofgames-dev
    $ pip install -r requirements_dev.txt
```
* For running the documentation build locally, run (ensure you have the environment activated):
```{sourceCode} console
    $ make book
```
* Create a branch for local development:
```{sourceCode} console
    $ git checkout -b name-of-your-bugfix-or-feature
```
* Commit your changes and push your branch to GitHub. When you commit a change, as it uses git pre-commit, it will run flake8, mypy, black and isort before commit any change:
```{sourceCode} console
    $ git add .
    $ git commit -m "Your detailed description of your changes."
    $ git push origin name-of-your-bugfix-or-feature
```
* Submit a pull request through the GitHub website.

Pull Request Guidelines
-----------------------

Before start a new article, ensure you are starting from an existent article
or from the template.

### Deploying

The deployment is done automatically by the CI infrastructure after the pull request is merged.

### Code of Conduct

thebooksofgames is governed by the
[NumFOCUS code of conduct][numfocus-coc],
which in a short version is:

- Be kind to others. Do not insult or put down others. Behave professionally. Remember that harassment and sexist, racist, or exclusionary jokes are not appropriate for NumFOCUS.
- All communication should be appropriate for a professional audience including people of many different backgrounds. Sexual language and imagery is not appropriate.
- NumFOCUS is dedicated to providing a harassment-free community for everyone, regardless of gender, sexual orientation, gender identity and expression, disability, physical appearance, body size, race, or religion. We do not tolerate harassment of community members in any form.
- Thank you for helping make this a welcoming, friendly community for all.


[thebookofgames-issues]: https://github.com/xmnlab/thebooksofgames/issues "The Book of Games Issues Page"
[numfocus-coc]: https://numfocus.org/code-of-conduct "NumFocus Code of Conduct"
