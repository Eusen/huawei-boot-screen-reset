# Huawei Notebook Boot Screen Replacement



### Background

Because Huawei Magic Book computer housekeepers can customize the boot screen, some pictures have new alternatives but have not been replaced. After researching, we found that replacing the designated pictures can achieve the purpose of modification, so we wrote a script to replace them in batches.



### Applicable model

- Huawei Magic Book

At present, I only have this model machine, so I have only adapted this model. If other models want to be replaced, you can create an issues.



### Usage

1. Download and install nodejs

2. Clone this repo.

3. Open the command line in the repo's root directory and execute the following code

```
node ./src/rename_logos.js
// If you want to restore, you can append the parameter 'backup'.
node ./src/rename_logos.js backup
```