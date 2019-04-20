first write the commands-
git config --global user.email "youremail@gmail.com"
git config --global user.name "yourname"

1) git clone (url of the project)
->It is used to clone the project in our system on the current directort.
ex - git clone https://github.com/ShivamParihar/ShivamParihar.github.io.git 

Now open the project folder (see master)

2)git status
->It tells us that we have untracked files(files which are at system but are not upladed to online github account).

3)git add <filename>
->It uploads the given file to the online github account.
use git add . (to add all the untracked files)
ex- git add style.css
    git add index.html

4)git commit
->It commit the changes we did on the project. (Also we can pass message which will we shown on the github)
ex- git commit -m "uploading new files"

5)git push
->After commiting the changes we atlast the tell the github about the changes and the files has now been pushed to the repository.

6)gir pull
->It is used to download and replace the latest files from the project(if someone else has made any changes) onto the same folder.

7)git branch
->List branches (the asterisk denotes the current branch)

8)git branch [branch name]
->Create a new branch

9)git branch -d [branch name]
->Delete a branch

10)git checkout [branch name]
->Switch to a branch

11)git checkout -b [branch name]
->Create a new branch and switch to it.

12)git checkout -
->Switch to the branch last checked out.

13)git merge [branch name]	
->Merge a branch into the active branch.

14)git merge [source branch] [target branch]
->Merge a branch into a target branch

for more details check...
<a href=“https://github.com/joshnh/Git-Commands”>for more details check...</a>.
