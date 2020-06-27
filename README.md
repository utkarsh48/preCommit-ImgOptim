
# preCommit-ImgOptim
#### Introduction
Its a git hook, which resize & compress images according to configuration in `Gulpfile.js`
#### Pre-requisite [Node.Js](https://nodejs.org/), folder named `pre/`(default) with images.
- Save the `pre-commit` file into `.git/hooks` folder of your git repository<br>
Alternatively, using terminal navigate to `.git/hooks` folder of your repository and paste the following:
	
    **curl -L -o "pre-commit" "https://raw.githubusercontent.com/utkarsh48/preCommit-ImgOptim/master/pre-commit"**

- Place the `Gulpfile.js` and `package.json` in main working directory.
- Open terminal in main directory and type following

    **npm i**

Everything now in place!
Now on every commit images in `pre/` directory will be optimized to `post/` directory according to configuration in `Gulpfile.js`

Default image resize size is 1280px wide.
