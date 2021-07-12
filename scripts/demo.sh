#!/bin/bash

# stage all changes
git add .
echo "Staged all files"

# add commit
git commit -m "Updating"
echo "Added the commit with message: Updating"

# get current branch and push
current_branch=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')
git push origin "$current_branch"
echo "Push changes to '$current_branch' branch"
{"mode":"full","isActive":false}