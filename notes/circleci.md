---
title: Circle CI - for Front End developers
published: false
description:
tags:
---

This post's intention is to create a basic implementation of Circle CI. It won't fill all needs and it very likely that it needs to be improved to fill your specific needs! My intention is also to improve it whenever I learn something new

# START

At this point, you must have already created your repo and set it into Circle CI. (https://circleci.com/docs/2.0/getting-started/)

## Pipeline

Circle CI calls 'Pipeline', the group actions that I want wanna run. Each time it runs my 'pipeline' it also gives a number to it and informs me if it ran successfully or if it failed.

## Your code

Now let's start to configure a pipeline:

### Circle CI schema

The syntax I'll use in my file (a .yml) needs to be read by Circle CI, right?. So I must type the correct syntax, the correct and keywords, the numbers of tabs for each line of code, the colons, etc so Circle CI can understand.
Circle CI creates schemas for that. And give to each schema a version. Each version may accepts a different set of syntax, keywords.. so there's no other way to learn those schemas rather than going to the Documentation site and see if I'm typing the correct things!

```yml
version: 2.1
```

### Jobs

Jobs are the actions I wanna set. E.g. test my app, run the build process, copy some file, etc.

To create a job name 'build':

```yml
version: 2.1

jobs:
  build:
```

Inside a job I need to specify the steps that will be run inside the job. They prop is `jobs:`. Which will accept a list of jobs, name by name. Let's say I need three jobs: one to build my application, one for test my application and one for deploy my application. Giving their names as 'build','test','deploy', I will have:

```yml
version: 2.1

jobs:
  build: |
    ... some actions for 'build' job ...
  test: |
    ... some actions for 'test' job ...
  deploy: |
    ... some actions for 'deploy' job ...
```

### Setting a job

Every job must run in an environment, like it's running in your machine. Circle CI will 'give' a machine to run my things. Also, it's gonna give access to this machine via Terminal. I'm gonna be able to type commands in it, like I can type `yarn start` or `ls` in my machine.

Addionatitly, this given machine can already have some installed feature, like a Node JS. Cicle CI gives me some built-in features.

### Working Directory

working_directory

.....

### Built-in features

Toc use these built-in features that Circle CI offers I need to keep going to Circle CI's documentation to be up-to-date. There're a lot of them and Circle CI can keep adding new ones.

One of those fetures are Docker images. To use those, I need to type the `docker` prop, pass the `image` prop, saying which Docker image I wanna use. The example above will use a machine with a version of Node (version 10) already installed.

```yml
version: 2.1

jobs:
  build:
    docker:
      - image: circleci/node:10
      - image: circleci/postgres:9.4.12-alpine
```

It is possible to use multiple images

```yml
version: 2.1

jobs:
  build:
    docker:
      - image: circleci/node:10
```

### Steps

Now I need to say: "Running in a machine, with node installed... I wanna do this, this and this". I can type the `steps` prop to program the order that those things will happend. This prop accepts a list of:

- Normal Terminal commands
- Special Circle CI commands

#### Normal Terminal commands

When I'm inside the `steps` prop, I can assume that I have control of a Terminal and I'm inside a specific folder of the virtual machine. To assure that I can run the `echo $PWD` command. Which is gonna show me the current directory I am.

I can type the `- run:` prop. I can give a name, a label to the command I'm about to run `name:` prop (with quotes). Then, using the `command` prop I can pass the actual command. (without quotes).

```yml
version: 2.1

jobs:
  build:
    docker:
      - image: circleci/node:10
    steps:
      - run:
          name: "Checking my current directory"
          command: echo $PWD
```

The path where I stand is `/home/circleci/project`

#Picture 01

> There're other syntaxes to run commands. Check the Documentation.

This directory is empty:

```yml
version: 2.1

jobs:
  build:
    docker:
      - image: circleci/node:10
    steps:
      - run:
          name: "Checking my current directory"
          command: echo $PWD
      - run:
          name: "Checking the content of my current directory"
          command: ls
```

#Picture 02

#### Special Circle CI commands

One example is the `checkout` command. I can just type:

```yml
version: 2.1

jobs:
  build:
    docker:
      - image: circleci/node:10
    steps:
      - checkout
```

`- checkout` will get the files of my configured repo and copy all of them into my current directory.

```yml
version: 2.1

jobs:
  build:
    docker:
      - image: circleci/node:10
    steps:
      - run:
          name: "Checking my current directory"
          command: echo $PWD
      - run:
          name: "Checking the content of my current directory"
          command: ls
      - checkout
      - run:
          name: "After a copying my repo files...Checking the content of my current directory"
          command: ls
```

My current directory was empty. After the `checkout` command it contains my repo file:

#Picture 03

### Multiple Jobs

I can run more than one job at the time. Each job must have its executor: a Docker image, etc. But, just adding new jobs is not enough.

```yml
version: 2.1

jobs:
  test:
    docker:
      - image: circleci/node:10
    steps:
      - run:
          name: "Test my Application"
          command: yarn test
  build:
    docker:
      - image: circleci/node:10
    steps:
      - run:
          name: "Checking my current directory"
          command: echo $PWD
      - run:
          name: "Checking the content of my current directory"
          command: ls
      - checkout
      - run:
          name: "After a copying my repo files...Checking the content of my current directory"
          command: ls
```

### Workflows

A workflow define the list and the order of my jobs. And also if they run concurrently or sequentially.

```yml
workflows:
  version: 2
```

> Version is defined by Circle CI. I need to check on the Documentation which syntaxes the `workflow` prop acepts in that specific version.

```yml
workflows:
  build_and_test:
    jobs:
      - build
      - test
```

1. This configuration does not guarantee that the `build`job will run and then the `test`job will run. Here it ran before the `build` job.

#picture 4

To solve this I can use the `requires` prop. I will say "The 'test' job requires that the 'build' get rans first. Only after that...runs 'test'". Inside a `job` I pass `requires:` and then the job to wait for:

```yml
version: 2.1

workflows:
  build_and_test:
    jobs:
      - build
      - test:
          requires:
            - build
jobs:
  test:
    docker:
      - image: circleci/node:10
    steps:
      - run:
          name: "Test my Application"
          command: yarn test
  build:
    docker:
      - image: circleci/node:10
    steps:
      - run:
          name: "Checking my current directory"
          command: echo $PWD
      - run:
          name: "Checking the content of my current directory"
          command: ls
      - checkout
      - run:
          name: "After a copying my repo files...Checking the content of my current directory"
          command: ls
```

#picture 5

The order is right!

2. But the `test`job will fail.

#picture 6

The error says that there's no package.json. If I also set a `ls` command on `test` job, I do not have the any file of my repo. My current folder is empty again.

```yml
version: 2.1

workflows:
  build_and_test:
    jobs:
      - build
      - test:
          requires:
            - build
jobs:
  test:
    docker:
      - image: circleci/node:10
    steps:
      - run:
        name: "Checking my current directory"
        command: echo $PWD
    - run:
        name: "Checking the content of my current directory"
        command: ls
      - run:
          name: "Test my Application"
          command: yarn test
  build:
    docker:
      - image: circleci/node:10
    steps:
      - run:
          name: "Checking my current directory"
          command: echo $PWD
      - run:
          name: "Checking the content of my current directory"
          command: ls
      - checkout
      - run:
          name: "After a copying my repo files...Checking the content of my current directory"
          command: ls
```

#picture 6

When a new job starts, everything that was created or made in the previous jobs gets lost...by default. But I can override this behaviour and store the results of a previous job.

### Persisting to Workspace

This props gives me the ability to:

- Run the `my_job`
- Store the results on `my_job` and pass it to my next job: `my_job_2`
- Store the results on `my_job_2` and pass it to my next job: `my_job_3`
- and so on...

`- persist_to_workspace:`

`root:` is the main directory of the files you wanna persist. In my case, all my project files are inside the /src directory.

`path:` is a list of files or directories that are inside the `root`, and which I want to persist.

I can list them one by one:

```yml
paths:
  - components
  - index.html
```

Or I can say "Store everything inside my `root`", using Globbing pattern:

```yml
paths: "*"
```

```yml
version: 2.1

workflows:
  build_and_test:
    jobs:
      - build
      - test:
          requires:
            - build
jobs:
  test:
    docker:
      - image: circleci/node:10
    steps:
      - run:
          name: "Checking my current directory"
          command: echo $PWD
      - run:
          name: "Checking the content of my current directory"
          command: ls
      - run:
          name: "Test my Application"
          command: yarn test
  build:
    docker:
      - image: circleci/node:10
    steps:
      - run:
          name: "Checking my current directory"
          command: echo $PWD
      - run:
          name: "Checking the content of my current directory"
          command: ls
      - checkout
      - run:
          name: "After a copying my repo files...Checking the content of my current directory"
          command: ls
      - persist_to_workspace:
          root: ~/
          paths: "*"
```
