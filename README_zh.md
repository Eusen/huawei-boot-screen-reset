# 华为笔记本开机画面替换

[English Doc](https://github.com/Eusen/huawei_boot_screen_upgrade/blob/master/README.md)

### 背景

由于 Huawei Magic Book 电脑管家可以自定义开机画面，但是有些图片已经有新的替代品却没有被替换。研究后发现替换指定图片就可以达到修改的目的，所以就写了一个脚本，批量进行替换。

### 适用机型

- Huawei Magic Book

我目前只有华为一款型号的机器，所以只做了这一个机型的适配，其他机型如果想替换的话，可以提issues。

### 使用方式

1. 下载并安装nodejs

2. 克隆此仓库

3. 在仓库根目录开启命令行，执行以下代码

```
node ./src/rename_logos.js
// 如果你想恢复原来的样子 可以在后面加上参数 backup
node ./src/rename_logos.js backup
```
